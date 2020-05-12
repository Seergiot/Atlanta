import PacketEncoding from './PacketEncoding';
export default class ServerMessage
{
    _bytes:any = null;
    _pointer: number = 0;
    _header: number = 0;
    static create(header: number):ServerMessage{
        return new ServerMessage(header);
    }

    constructor(header:number) {
        this._bytes = [];
        this._header = header;
        this.writeShort(header);
    }

    remainingBytes(): number {
        return this._bytes.length - this._pointer;
    }

    getBytes(): ArrayBuffer {
        var arr = new Uint8Array(this._bytes);
        return arr.buffer;
    }

    writeBytes(bytes:any) {
        for(var i = 0; i < bytes.length; i++)
        {
            this._bytes.push(bytes[i]);
        }
    }

    writeByte(byt)
    {
        this._bytes.push(byt);
    }

    writeInt(i){
        this.writeInteger(i);
    }

    writeInteger(i) {
        i = PacketEncoding.encodeInt32(i);
        this.writeBytes(i);
    }

    writeShort(i) {
        i = PacketEncoding.encodeInt16(i);
        this.writeBytes(i);
    }

    writeString(str) {
        this.writeShort(str.length);
        this.writeBytes(PacketEncoding.stringToBytes(str));
    }

    writeBoolean(flag) {
        this.writeByte(PacketEncoding.encodeBool(flag));
    }
}
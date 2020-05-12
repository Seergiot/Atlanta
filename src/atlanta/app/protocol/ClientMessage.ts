import PacketEncoding from './PacketEncoding';
export default class ClientMessage
{
    _bytes:any = null;
    _pointer: number = 0;
    id: number = 0;
    constructor(bytes: Uint8Array) {
        this._bytes = new Uint8Array(bytes);
        this._pointer = 0;
        this.readInt();
        this.id = this.readShort();
    }

    remainingBytes(): number {
        return this._bytes.length - this._pointer;
    }

    plainReadBytes(count: number): any {
        if(count > this.remainingBytes())
            return null;

        var bytes = new Uint8Array(count);

        for (var x = 0, y = this._pointer; x < count; x++, y++)
        {
            bytes[x] = this._bytes[y];
        }

        return bytes;
    }

    readInt(): number{
        if(this.remainingBytes() < 4)
            return -1;

        var i = PacketEncoding.decodeInt32(this.plainReadBytes(4));
        if(isNaN(i))
            i = -1;
        this._pointer += 4;
        return i;
    }

    readShort():number {
        if(this.remainingBytes() < 2)
            return -1;

        var i = PacketEncoding.decodeInt16(this.plainReadBytes(2));
        if(isNaN(i))
            i = -2;
        this._pointer += 2;
        return i;
    }

    readBoolean():boolean {
        var b = PacketEncoding.decodeBool(this.plainReadBytes(1));
        this._pointer += 1;
        return b;
    }

    readString():string {
        var length = this.readShort();
        if(length < 1)
            return "";

        var bytes = this.plainReadBytes(length);
        if(bytes === null)
            return "";

        this._pointer += bytes.length;

        return PacketEncoding.bytesToString(bytes);

    }
}
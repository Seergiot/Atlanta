export default class PacketEncoding{
    static decodeInt32(bytes: any) {
        if(bytes.length < 4)
            return -1;
        if(bytes[0] < 0 || bytes[1] < 0 || bytes[2] < 0 || bytes[3] < 0)
            return -2;
        return (bytes[0]*16777216) + (bytes[1]*65536) + (bytes[2]*256) + (bytes[3]);
    }

    static encodeInt32(i: any) {
        var bytes: any[] = [];

        if(i < 0)
            return [0, 0, 0, 0];

        bytes[0] = Math.floor(i / 16777216);
        i = i % 16777216;
        bytes[1] = Math.floor(i / 65536);
        i = i % 65536;
        bytes[2] = Math.floor(i / 256);
        i = i % 256;
        bytes[3] = i;
        return bytes;
    }

    static encodeInt16(i: any) {
        var bytes: any[] = [];

        if(i < 0)
            return [0, 0];

        bytes[0] = Math.floor(i / 256);
        i = i % 256;
        bytes[1] = i;
        return bytes;
    }

    static decodeInt16(bytes: any) {
        if(bytes.length < 2)
            return -1;
        if(bytes[0] < 0 || bytes[1] < 0)
            return -2;
        return (bytes[0]*256) + (bytes[1]);
    }

    static decodeBool(bytes: any) {
        if(bytes.length !== 1)
            return false;

        return parseInt(bytes[0]) === 1;
    }

    static encodeBool(flag: any) {
        return flag ? 1 : 0;
    }

    static stringToBytes(str: any) {
        var bytes: any = [];

        for (var i = 0; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            bytes = bytes.concat([code]);
        }

        return bytes;
    }

    static bytesToString(bytes: any) {
        var s = "";
        if(bytes.length === 0)
            return s;
        for(var i = 0; i < bytes.length; i++)
        {
            s += String.fromCharCode(bytes[i]);
        }
        return s;
    }
}
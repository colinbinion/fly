// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum
 */
export enum Any{
  NONE= 0,
  TimerStart= 1,
  TimerReady= 2,
  TimerClear= 3,
  HttpRequest= 4,
  HttpResponse= 5,
  StreamChunk= 6,
  HttpRequestStart= 7,
  FetchHttpResponse= 8,
  CacheGet= 9,
  CacheGetReady= 10,
  CacheSet= 11,
  CacheSetReady= 12,
  CryptoDigest= 13,
  CryptoDigestReady= 14
};

/**
 * @enum
 */
export enum ErrorKind{
  NoError= 0,
  NotFound= 1,
  PermissionDenied= 2,
  ConnectionRefused= 3,
  ConnectionReset= 4,
  ConnectionAborted= 5,
  NotConnected= 6,
  AddrInUse= 7,
  AddrNotAvailable= 8,
  BrokenPipe= 9,
  AlreadyExists= 10,
  WouldBlock= 11,
  InvalidInput= 12,
  InvalidData= 13,
  TimedOut= 14,
  Interrupted= 15,
  WriteZero= 16,
  Other= 17,
  UnexpectedEof= 18,
  EmptyHost= 19,
  IdnaError= 20,
  InvalidPort= 21,
  InvalidIpv4Address= 22,
  InvalidIpv6Address= 23,
  InvalidDomainCharacter= 24,
  RelativeUrlWithoutBase= 25,
  RelativeUrlWithCannotBeABaseBase= 26,
  SetHostOnCannotBeABaseUrl= 27,
  Overflow= 28,
  HttpUser= 29,
  HttpClosed= 30,
  HttpCanceled= 31,
  HttpParse= 32,
  HttpOther= 33
};

/**
 * @enum
 */
export enum HttpMethod{
  Get= 0,
  Head= 1,
  Post= 2,
  Put= 3,
  Patch= 4,
  Delete= 5,
  Connect= 6,
  Options= 7,
  Trace= 8
};

/**
 * @constructor
 */
export class Base {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Base
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Base {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Base= obj
 * @returns Base
 */
static getRootAsBase(bb:flatbuffers.ByteBuffer, obj?:Base):Base {
  return (obj || new Base).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
cmdId():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_cmd_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns boolean
 */
sync():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_sync(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @returns ErrorKind
 */
errorKind():ErrorKind {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : ErrorKind.NoError;
};

/**
 * @param ErrorKind value
 * @returns boolean
 */
mutate_error_kind(value:ErrorKind):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 8);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
error():string|null
error(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
error(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns Any
 */
msgType():Any {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? /**  */ (this.bb!.readUint8(this.bb_pos + offset)) : Any.NONE;
};

/**
 * @param Any value
 * @returns boolean
 */
mutate_msg_type(value:Any):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 12);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Table obj
 * @returns ?flatbuffers.Table
 */
msg<T extends flatbuffers.Table>(obj:T):T|null {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startBase(builder:flatbuffers.Builder) {
  builder.startObject(6);
};

/**
 * @param flatbuffers.Builder builder
 * @param number cmdId
 */
static addCmdId(builder:flatbuffers.Builder, cmdId:number) {
  builder.addFieldInt32(0, cmdId, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean sync
 */
static addSync(builder:flatbuffers.Builder, sync:boolean) {
  builder.addFieldInt8(1, +sync, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @param ErrorKind errorKind
 */
static addErrorKind(builder:flatbuffers.Builder, errorKind:ErrorKind) {
  builder.addFieldInt8(2, errorKind, ErrorKind.NoError);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset errorOffset
 */
static addError(builder:flatbuffers.Builder, errorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, errorOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Any msgType
 */
static addMsgType(builder:flatbuffers.Builder, msgType:Any) {
  builder.addFieldInt8(4, msgType, Any.NONE);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset msgOffset
 */
static addMsg(builder:flatbuffers.Builder, msgOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, msgOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endBase(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishBaseBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
};

}
/**
 * @constructor
 */
export class TimerStart {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns TimerStart
 */
__init(i:number, bb:flatbuffers.ByteBuffer):TimerStart {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TimerStart= obj
 * @returns TimerStart
 */
static getRootAsTimerStart(bb:flatbuffers.ByteBuffer, obj?:TimerStart):TimerStart {
  return (obj || new TimerStart).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns number
 */
delay():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_delay(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startTimerStart(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number delay
 */
static addDelay(builder:flatbuffers.Builder, delay:number) {
  builder.addFieldInt32(1, delay, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endTimerStart(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class TimerReady {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns TimerReady
 */
__init(i:number, bb:flatbuffers.ByteBuffer):TimerReady {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TimerReady= obj
 * @returns TimerReady
 */
static getRootAsTimerReady(bb:flatbuffers.ByteBuffer, obj?:TimerReady):TimerReady {
  return (obj || new TimerReady).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns boolean
 */
canceled():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_canceled(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startTimerReady(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean canceled
 */
static addCanceled(builder:flatbuffers.Builder, canceled:boolean) {
  builder.addFieldInt8(1, +canceled, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endTimerReady(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class TimerClear {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns TimerClear
 */
__init(i:number, bb:flatbuffers.ByteBuffer):TimerClear {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TimerClear= obj
 * @returns TimerClear
 */
static getRootAsTimerClear(bb:flatbuffers.ByteBuffer, obj?:TimerClear):TimerClear {
  return (obj || new TimerClear).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startTimerClear(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endTimerClear(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class HttpHeader {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns HttpHeader
 */
__init(i:number, bb:flatbuffers.ByteBuffer):HttpHeader {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param HttpHeader= obj
 * @returns HttpHeader
 */
static getRootAsHttpHeader(bb:flatbuffers.ByteBuffer, obj?:HttpHeader):HttpHeader {
  return (obj || new HttpHeader).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
key():string|null
key(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
key(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
value():string|null
value(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
value(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startHttpHeader(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset keyOffset
 */
static addKey(builder:flatbuffers.Builder, keyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, keyOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset valueOffset
 */
static addValue(builder:flatbuffers.Builder, valueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, valueOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endHttpHeader(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class StreamChunk {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns StreamChunk
 */
__init(i:number, bb:flatbuffers.ByteBuffer):StreamChunk {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param StreamChunk= obj
 * @returns StreamChunk
 */
static getRootAsStreamChunk(bb:flatbuffers.ByteBuffer, obj?:StreamChunk):StreamChunk {
  return (obj || new StreamChunk).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns boolean
 */
done():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_done(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startStreamChunk(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean done
 */
static addDone(builder:flatbuffers.Builder, done:boolean) {
  builder.addFieldInt8(1, +done, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endStreamChunk(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class HttpRequest {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns HttpRequest
 */
__init(i:number, bb:flatbuffers.ByteBuffer):HttpRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param HttpRequest= obj
 * @returns HttpRequest
 */
static getRootAsHttpRequest(bb:flatbuffers.ByteBuffer, obj?:HttpRequest):HttpRequest {
  return (obj || new HttpRequest).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns HttpMethod
 */
method():HttpMethod {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : HttpMethod.Get;
};

/**
 * @param HttpMethod value
 * @returns boolean
 */
mutate_method(value:HttpMethod):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
url():string|null
url(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
url(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param number index
 * @param HttpHeader= obj
 * @returns HttpHeader
 */
headers(index: number, obj?:HttpHeader):HttpHeader|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new HttpHeader).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
headersLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns boolean
 */
body():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_body(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 12);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startHttpRequest(builder:flatbuffers.Builder) {
  builder.startObject(5);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param HttpMethod method
 */
static addMethod(builder:flatbuffers.Builder, method:HttpMethod) {
  builder.addFieldInt8(1, method, HttpMethod.Get);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset urlOffset
 */
static addUrl(builder:flatbuffers.Builder, urlOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, urlOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset headersOffset
 */
static addHeaders(builder:flatbuffers.Builder, headersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, headersOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createHeadersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startHeadersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean body
 */
static addBody(builder:flatbuffers.Builder, body:boolean) {
  builder.addFieldInt8(4, +body, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endHttpRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class HttpResponse {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns HttpResponse
 */
__init(i:number, bb:flatbuffers.ByteBuffer):HttpResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param HttpResponse= obj
 * @returns HttpResponse
 */
static getRootAsHttpResponse(bb:flatbuffers.ByteBuffer, obj?:HttpResponse):HttpResponse {
  return (obj || new HttpResponse).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param number index
 * @param HttpHeader= obj
 * @returns HttpHeader
 */
headers(index: number, obj?:HttpHeader):HttpHeader|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new HttpHeader).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
headersLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns boolean
 */
body():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_body(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 8);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startHttpResponse(builder:flatbuffers.Builder) {
  builder.startObject(3);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset headersOffset
 */
static addHeaders(builder:flatbuffers.Builder, headersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, headersOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createHeadersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startHeadersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean body
 */
static addBody(builder:flatbuffers.Builder, body:boolean) {
  builder.addFieldInt8(2, +body, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endHttpResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class HttpRequestStart {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns HttpRequestStart
 */
__init(i:number, bb:flatbuffers.ByteBuffer):HttpRequestStart {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param HttpRequestStart= obj
 * @returns HttpRequestStart
 */
static getRootAsHttpRequestStart(bb:flatbuffers.ByteBuffer, obj?:HttpRequestStart):HttpRequestStart {
  return (obj || new HttpRequestStart).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startHttpRequestStart(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endHttpRequestStart(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class FetchHttpResponse {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns FetchHttpResponse
 */
__init(i:number, bb:flatbuffers.ByteBuffer):FetchHttpResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param FetchHttpResponse= obj
 * @returns FetchHttpResponse
 */
static getRootAsFetchHttpResponse(bb:flatbuffers.ByteBuffer, obj?:FetchHttpResponse):FetchHttpResponse {
  return (obj || new FetchHttpResponse).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param number index
 * @param HttpHeader= obj
 * @returns HttpHeader
 */
headers(index: number, obj?:HttpHeader):HttpHeader|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new HttpHeader).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
headersLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns boolean
 */
body():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_body(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 8);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startFetchHttpResponse(builder:flatbuffers.Builder) {
  builder.startObject(3);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset headersOffset
 */
static addHeaders(builder:flatbuffers.Builder, headersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, headersOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createHeadersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startHeadersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean body
 */
static addBody(builder:flatbuffers.Builder, body:boolean) {
  builder.addFieldInt8(2, +body, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endFetchHttpResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class CacheGet {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns CacheGet
 */
__init(i:number, bb:flatbuffers.ByteBuffer):CacheGet {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param CacheGet= obj
 * @returns CacheGet
 */
static getRootAsCacheGet(bb:flatbuffers.ByteBuffer, obj?:CacheGet):CacheGet {
  return (obj || new CacheGet).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
key():string|null
key(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
key(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startCacheGet(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset keyOffset
 */
static addKey(builder:flatbuffers.Builder, keyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, keyOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endCacheGet(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class CacheGetReady {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns CacheGetReady
 */
__init(i:number, bb:flatbuffers.ByteBuffer):CacheGetReady {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param CacheGetReady= obj
 * @returns CacheGetReady
 */
static getRootAsCacheGetReady(bb:flatbuffers.ByteBuffer, obj?:CacheGetReady):CacheGetReady {
  return (obj || new CacheGetReady).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns boolean
 */
stream():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_stream(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startCacheGetReady(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean stream
 */
static addStream(builder:flatbuffers.Builder, stream:boolean) {
  builder.addFieldInt8(1, +stream, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endCacheGetReady(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class CacheSet {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns CacheSet
 */
__init(i:number, bb:flatbuffers.ByteBuffer):CacheSet {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param CacheSet= obj
 * @returns CacheSet
 */
static getRootAsCacheSet(bb:flatbuffers.ByteBuffer, obj?:CacheSet):CacheSet {
  return (obj || new CacheSet).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
key():string|null
key(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
key(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startCacheSet(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset keyOffset
 */
static addKey(builder:flatbuffers.Builder, keyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, keyOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endCacheSet(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class CacheSetReady {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns CacheSetReady
 */
__init(i:number, bb:flatbuffers.ByteBuffer):CacheSetReady {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param CacheSetReady= obj
 * @returns CacheSetReady
 */
static getRootAsCacheSetReady(bb:flatbuffers.ByteBuffer, obj?:CacheSetReady):CacheSetReady {
  return (obj || new CacheSetReady).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startCacheSetReady(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endCacheSetReady(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class CryptoDigest {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns CryptoDigest
 */
__init(i:number, bb:flatbuffers.ByteBuffer):CryptoDigest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param CryptoDigest= obj
 * @returns CryptoDigest
 */
static getRootAsCryptoDigest(bb:flatbuffers.ByteBuffer, obj?:CryptoDigest):CryptoDigest {
  return (obj || new CryptoDigest).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
algo():string|null
algo(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
algo(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startCryptoDigest(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset algoOffset
 */
static addAlgo(builder:flatbuffers.Builder, algoOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, algoOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endCryptoDigest(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class CryptoDigestReady {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns CryptoDigestReady
 */
__init(i:number, bb:flatbuffers.ByteBuffer):CryptoDigestReady {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param CryptoDigestReady= obj
 * @returns CryptoDigestReady
 */
static getRootAsCryptoDigestReady(bb:flatbuffers.ByteBuffer, obj?:CryptoDigestReady):CryptoDigestReady {
  return (obj || new CryptoDigestReady).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param number index
 * @returns number
 */
buffer(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns number
 */
bufferLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Uint8Array
 */
bufferArray():Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startCryptoDigestReady(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset bufferOffset
 */
static addBuffer(builder:flatbuffers.Builder, bufferOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, bufferOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createBufferVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startBufferVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endCryptoDigestReady(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}

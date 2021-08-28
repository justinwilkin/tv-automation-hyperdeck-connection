export type ResponseCode = ErrorCode | SynchronousCode | AsynchronousCode

export enum ErrorCode {
	SyntaxError = 100,
	UnsupportedParameter = 101,
	InvalidValue = 102,
	Unsupported = 103,
	DiskFull = 104,
	NoDisk = 105,
	DiskError = 106,
	TimelineEmpty = 107,
	InternalError = 108,
	OutOfRange = 109,
	NoInput = 110,
	RemoteControlDisabled = 111,
	ClipNotFound = 112,
	ConnectionRejected = 120,
	InvalidState = 150,
	InvalidCodec = 151,
	InvalidFormat = 160,
	InvalidToken = 161,
	FormatNotPrepared = 162,
	ParamSingleLineCommandNotSupported = 163,
}

export enum SynchronousCode {
	OK = 200,
	SlotInfo = 202,
	DeviceInfo = 204,
	ClipInfo = 205,
	DiskList = 206,
	TransportInfo = 208,
	Notify = 209,
	FormatReady = 216,
}

export enum AsynchronousCode {
	ConnectionInfo = 500,
	SlotInfo = 502,
	TransportInfo = 508,
}

export enum ResponseCodeType {
	UNKNOWN,
	ERROR,
	SYNCHRONOUS,
	ASYNCHRONOUS,
}

export function GetResponseCodeType(val: ResponseCode): ResponseCodeType {
	if (val >= 100 && val <= 199) return ResponseCodeType.ERROR
	if (val >= 200 && val <= 299) return ResponseCodeType.SYNCHRONOUS
	if (val >= 500 && val <= 599) return ResponseCodeType.ASYNCHRONOUS

	return ResponseCodeType.UNKNOWN
}

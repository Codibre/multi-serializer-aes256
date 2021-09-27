import { SerializerMode } from 'multi-serializer';
export type Key = string | Buffer;

export enum AesType {
	AES128 = 'aes-128-gcm',
	AES192 = 'aes-192-gcm',
	AES256 = 'aes-256-gcm',
}

export interface AesOptions {
	key: Key;
	keyType: AesType;
	iv?: BinaryType;
	mode?: SerializerMode;
}

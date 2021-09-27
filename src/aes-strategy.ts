import {
	ChainSerializerStrategy,
	Serialized,
	concatStream,
	resolver,
	SerializerMode,
	promiseFactory,
} from 'multi-serializer';
import { Stream } from 'stream';
import { AesOptions } from './types';
import { createCipheriv, createHash } from 'crypto';

export class AesStrategy
	implements ChainSerializerStrategy<Stream | Serialized> {
	serialize: (content: Serialized | Stream) => Serialized | Promise<Serialized>;
	deserialize: (
		content: Serialized | Stream,
	) => Serialized | Stream | Promise<Serialized | Stream>;

	constructor(options: AesOptions) {
		const { key, keyType, iv } = options;
		const defaultIv = createHash('sha256').update(key).digest('base64');
		this.serialize = (content) =>
			resolver(concatStream(content), (x) => {
				const cipher = createCipheriv(keyType, key, iv || defaultIv);
				const encrypted = cipher.update(x as BinaryType);
				return Buffer.concat([encrypted, cipher.final()]);
			});
		if (options?.mode !== SerializerMode.SYNC) {
			this.serialize = promiseFactory(
				this.serialize,
			) as typeof AesStrategy.prototype.serialize;
		}
		this.deserialize = this.serialize;
	}
}

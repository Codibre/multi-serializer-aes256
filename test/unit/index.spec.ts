import { SerializerMode, Serialized } from 'multi-serializer';
import { AesStrategy, AesType } from '../../src';

const key = 'F)J@NcRfUjXn2r5u8x/A?D(G-KaPdSgV';

describe('index.ts', () => {
	it('should serialize and deserialize', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new AesStrategy({
			key,
			keyType: AesType.AES256,
		});

		const encrypted = await serializer.serialize(req);
		const original = await serializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize and deserialize in sync mode', () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new AesStrategy({
			key,
			keyType: AesType.AES256,
			mode: SerializerMode.SYNC,
		});

		const encrypted = serializer.serialize(req) as Serialized;
		const original = serializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize and deserialize, serializing sync mode ad deserializing async mode', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new AesStrategy({
			key,
			keyType: AesType.AES256,
			mode: SerializerMode.SYNC,
		});
		const encrypted = serializer.serialize(req) as Serialized;
		const original = await serializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});

	it('should serialize with public and deserialize with private, serializing async mode ad deserializing sync mode', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new AesStrategy({
			key,
			keyType: AesType.AES256,
		});

		const encrypted = await serializer.serialize(req);
		const original = await serializer.deserialize(encrypted);

		expect(original.toString()).toEqual(req);
	});
});

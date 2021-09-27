[![Actions Status](https://github.com/Codibre/multi-serializer-aes256/workflows/build/badge.svg)](https://github.com/Codibre/multi-serializer-aes256/actions)
[![Actions Status](https://github.com/Codibre/multi-serializer-aes256/workflows/test/badge.svg)](https://github.com/Codibre/multi-serializer-aes256/actions)
[![Actions Status](https://github.com/Codibre/multi-serializer-aes256/workflows/lint/badge.svg)](https://github.com/Codibre/multi-serializer-aes256/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/multi-serializer-aes256/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/multi-serializer-aes256/maintainability)
[![Packages](https://david-dm.org/Codibre/multi-serializer-aes256.svg)](https://david-dm.org/Codibre/@multi-serializer/aes)
[![npm version](https://badge.fury.io/js/%40codibre%2Fmulti-serializer-aes256.svg)](https://badge.fury.io/js/%40codibre%2Fmulti-serializer-aes256)

This library delivers a AES serializer and deserializer, fit to be used with [multi-serializer](https://www.npmjs.com/package/multi-serializer);

## How to Install

```
npm i @multi-serializer/aes
```

## How to use

By itself:

```
const aes = new AesStrategy({ key, keyType: AesType.AES256 });
const serialized = await aes.serialize(info); // this result is buffer

const origin = await aes.deserialize(incomingMessage); // this result is also a buffer
```

Or adding it in the strategy chain of [multi-serializer](https://www.npmjs.com/package/multi-serializer):

```
const serializer = new Serializer(
    new JsonStrategy(),
    new GzipStrategy(),
    new AesStrategy({ key, keyType: AesType.AES256 }),
    new Base64Strategy(),
);

const serialized = await serializer.serialize(info);

const origin = await serializer.deserialize(incomingMessage);
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).

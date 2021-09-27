[fluent-iterable - v0.0.1](../README.md) / AesStrategy

# Class: AesStrategy

## Implements

* *ChainSerializerStrategy*<Stream \| Serialized\>

## Table of contents

### Constructors

- [constructor](aesstrategy.md#constructor)

### Properties

- [deserialize](aesstrategy.md#deserialize)
- [serialize](aesstrategy.md#serialize)

## Constructors

### constructor

\+ **new AesStrategy**(`options`: [*AesOptions*](../interfaces/aesoptions.md)): [*AesStrategy*](aesstrategy.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*AesOptions*](../interfaces/aesoptions.md) |

**Returns:** [*AesStrategy*](aesstrategy.md)

## Properties

### deserialize

• **deserialize**: (`content`: *Stream* \| Serialized) => *Stream* \| Serialized \| *Promise*<Stream \| Serialized\>

#### Type declaration:

▸ (`content`: *Stream* \| Serialized): *Stream* \| Serialized \| *Promise*<Stream \| Serialized\>

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *Stream* \| Serialized |

**Returns:** *Stream* \| Serialized \| *Promise*<Stream \| Serialized\>

Implementation of: void

___

### serialize

• **serialize**: (`content`: *Stream* \| Serialized) => Serialized \| *Promise*<Serialized\>

#### Type declaration:

▸ (`content`: *Stream* \| Serialized): Serialized \| *Promise*<Serialized\>

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *Stream* \| Serialized |

**Returns:** Serialized \| *Promise*<Serialized\>

Implementation of: void

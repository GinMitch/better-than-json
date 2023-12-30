# Exploring Alternatives: Are There Better Options Than JSON?

This repository is part of the article posted on
[Medium](https://medium.com/@gin_mitch/exploring-alternatives-are-there-better-options-than-json-acd4905ac980)
and [DEV Community](https://dev.to/gin_mitch/exploring-alternatives-are-there-better-options-than-json-3mc5).

## JSON

The JSON response doesn't need any compilation, conversion, or whatever.
You might want to create a Swagger spec for it, but this repo doesn't have it, sorry.

## Msgpack

Just like JSON, MessagePack doesn't seem to need any external specification, and may be used to produce a Swagger spec. 

## Protobuf

Unlike JSON and Messagepack, Protocol Buffers need prepared descriptions.
To compile these files into usable classes, download the appropriate version of the [compiler](https://github.com/protocolbuffers/protobuf/releases/tag/v25.1)
(this repo uses 3.25.1), unzip it, and run the appropriate command (check the `genproto.sh` files in directories).

## License

MIT, [full license text](LICENSE).
Read more about it on [TLDRLegal](https://www.tldrlegal.com/license/mit-license).

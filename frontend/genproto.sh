#!/bin/sh

./path/to/protoc \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --js_out="import_style=commonjs,binary:." \
    --ts_out="service=grpc-web:." \
    ./src/app/models/protobuf/descriptors.proto

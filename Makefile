protos:
	protoc -I=../userservice-proto user.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.


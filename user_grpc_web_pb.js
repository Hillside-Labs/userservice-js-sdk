/**
 * @fileoverview gRPC-Web generated client stub for userapi
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.2
// source: user.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.userapi = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.userapi.UsersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.userapi.UsersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.NewUser,
 *   !proto.userapi.UserResponse>}
 */
const methodDescriptor_Users_Create = new grpc.web.MethodDescriptor(
  '/userapi.Users/Create',
  grpc.web.MethodType.UNARY,
  proto.userapi.NewUser,
  proto.userapi.UserResponse,
  /**
   * @param {!proto.userapi.NewUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.UserResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.NewUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/Create',
      request,
      metadata || {},
      methodDescriptor_Users_Create,
      callback);
};


/**
 * @param {!proto.userapi.NewUser} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.UserResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/Create',
      request,
      metadata || {},
      methodDescriptor_Users_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.UserRequest,
 *   !proto.userapi.UserResponse>}
 */
const methodDescriptor_Users_Get = new grpc.web.MethodDescriptor(
  '/userapi.Users/Get',
  grpc.web.MethodType.UNARY,
  proto.userapi.UserRequest,
  proto.userapi.UserResponse,
  /**
   * @param {!proto.userapi.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.UserResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/Get',
      request,
      metadata || {},
      methodDescriptor_Users_Get,
      callback);
};


/**
 * @param {!proto.userapi.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.UserResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/Get',
      request,
      metadata || {},
      methodDescriptor_Users_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.UserRequest,
 *   !proto.userapi.UserResponse>}
 */
const methodDescriptor_Users_Update = new grpc.web.MethodDescriptor(
  '/userapi.Users/Update',
  grpc.web.MethodType.UNARY,
  proto.userapi.UserRequest,
  proto.userapi.UserResponse,
  /**
   * @param {!proto.userapi.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.UserResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/Update',
      request,
      metadata || {},
      methodDescriptor_Users_Update,
      callback);
};


/**
 * @param {!proto.userapi.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.UserResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/Update',
      request,
      metadata || {},
      methodDescriptor_Users_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.UserQuery,
 *   !proto.userapi.UserListResponse>}
 */
const methodDescriptor_Users_Find = new grpc.web.MethodDescriptor(
  '/userapi.Users/Find',
  grpc.web.MethodType.UNARY,
  proto.userapi.UserQuery,
  proto.userapi.UserListResponse,
  /**
   * @param {!proto.userapi.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.UserListResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.UserListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.UserListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/Find',
      request,
      metadata || {},
      methodDescriptor_Users_Find,
      callback);
};


/**
 * @param {!proto.userapi.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.UserListResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/Find',
      request,
      metadata || {},
      methodDescriptor_Users_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.UserRequest,
 *   !proto.userapi.UserResponse>}
 */
const methodDescriptor_Users_Delete = new grpc.web.MethodDescriptor(
  '/userapi.Users/Delete',
  grpc.web.MethodType.UNARY,
  proto.userapi.UserRequest,
  proto.userapi.UserResponse,
  /**
   * @param {!proto.userapi.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.UserResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/Delete',
      request,
      metadata || {},
      methodDescriptor_Users_Delete,
      callback);
};


/**
 * @param {!proto.userapi.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.UserResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/Delete',
      request,
      metadata || {},
      methodDescriptor_Users_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.EventRequest,
 *   !proto.userapi.EventResponse>}
 */
const methodDescriptor_Users_LogEvent = new grpc.web.MethodDescriptor(
  '/userapi.Users/LogEvent',
  grpc.web.MethodType.UNARY,
  proto.userapi.EventRequest,
  proto.userapi.EventResponse,
  /**
   * @param {!proto.userapi.EventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.EventResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.EventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.EventResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.EventResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.logEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/LogEvent',
      request,
      metadata || {},
      methodDescriptor_Users_LogEvent,
      callback);
};


/**
 * @param {!proto.userapi.EventRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.EventResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.logEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/LogEvent',
      request,
      metadata || {},
      methodDescriptor_Users_LogEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.SearchUserTraitsRequest,
 *   !proto.userapi.SearchUserTraitsResponse>}
 */
const methodDescriptor_Users_SearchUserTraits = new grpc.web.MethodDescriptor(
  '/userapi.Users/SearchUserTraits',
  grpc.web.MethodType.UNARY,
  proto.userapi.SearchUserTraitsRequest,
  proto.userapi.SearchUserTraitsResponse,
  /**
   * @param {!proto.userapi.SearchUserTraitsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.SearchUserTraitsResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.SearchUserTraitsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.SearchUserTraitsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.SearchUserTraitsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.searchUserTraits =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/SearchUserTraits',
      request,
      metadata || {},
      methodDescriptor_Users_SearchUserTraits,
      callback);
};


/**
 * @param {!proto.userapi.SearchUserTraitsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.SearchUserTraitsResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.searchUserTraits =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/SearchUserTraits',
      request,
      metadata || {},
      methodDescriptor_Users_SearchUserTraits);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.SearchUserTraitsRequest,
 *   !proto.userapi.UserListResponse>}
 */
const methodDescriptor_Users_GetUsersByTraits = new grpc.web.MethodDescriptor(
  '/userapi.Users/GetUsersByTraits',
  grpc.web.MethodType.UNARY,
  proto.userapi.SearchUserTraitsRequest,
  proto.userapi.UserListResponse,
  /**
   * @param {!proto.userapi.SearchUserTraitsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.UserListResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.SearchUserTraitsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.UserListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.UserListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.getUsersByTraits =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/GetUsersByTraits',
      request,
      metadata || {},
      methodDescriptor_Users_GetUsersByTraits,
      callback);
};


/**
 * @param {!proto.userapi.SearchUserTraitsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.UserListResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.getUsersByTraits =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/GetUsersByTraits',
      request,
      metadata || {},
      methodDescriptor_Users_GetUsersByTraits);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.GetUsersByAggregatedTraitsRequest,
 *   !proto.userapi.UserListResponse>}
 */
const methodDescriptor_Users_GetUsersByAggregatedTraits = new grpc.web.MethodDescriptor(
  '/userapi.Users/GetUsersByAggregatedTraits',
  grpc.web.MethodType.UNARY,
  proto.userapi.GetUsersByAggregatedTraitsRequest,
  proto.userapi.UserListResponse,
  /**
   * @param {!proto.userapi.GetUsersByAggregatedTraitsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.UserListResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.GetUsersByAggregatedTraitsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.UserListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.UserListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.getUsersByAggregatedTraits =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/GetUsersByAggregatedTraits',
      request,
      metadata || {},
      methodDescriptor_Users_GetUsersByAggregatedTraits,
      callback);
};


/**
 * @param {!proto.userapi.GetUsersByAggregatedTraitsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.UserListResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.getUsersByAggregatedTraits =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/GetUsersByAggregatedTraits',
      request,
      metadata || {},
      methodDescriptor_Users_GetUsersByAggregatedTraits);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.GetAggregateForUsersRequest,
 *   !proto.userapi.AggregateResponse>}
 */
const methodDescriptor_Users_GetAggregateForUsers = new grpc.web.MethodDescriptor(
  '/userapi.Users/GetAggregateForUsers',
  grpc.web.MethodType.UNARY,
  proto.userapi.GetAggregateForUsersRequest,
  proto.userapi.AggregateResponse,
  /**
   * @param {!proto.userapi.GetAggregateForUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.AggregateResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.GetAggregateForUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.AggregateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.AggregateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.getAggregateForUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/GetAggregateForUsers',
      request,
      metadata || {},
      methodDescriptor_Users_GetAggregateForUsers,
      callback);
};


/**
 * @param {!proto.userapi.GetAggregateForUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.AggregateResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.getAggregateForUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/GetAggregateForUsers',
      request,
      metadata || {},
      methodDescriptor_Users_GetAggregateForUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.SearchUserEventsRequest,
 *   !proto.userapi.UserListResponse>}
 */
const methodDescriptor_Users_GetUsersByEvents = new grpc.web.MethodDescriptor(
  '/userapi.Users/GetUsersByEvents',
  grpc.web.MethodType.UNARY,
  proto.userapi.SearchUserEventsRequest,
  proto.userapi.UserListResponse,
  /**
   * @param {!proto.userapi.SearchUserEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.UserListResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.SearchUserEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.UserListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.UserListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.getUsersByEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/GetUsersByEvents',
      request,
      metadata || {},
      methodDescriptor_Users_GetUsersByEvents,
      callback);
};


/**
 * @param {!proto.userapi.SearchUserEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.UserListResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.getUsersByEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/GetUsersByEvents',
      request,
      metadata || {},
      methodDescriptor_Users_GetUsersByEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.SearchEventsRequest,
 *   !proto.userapi.SearchEventsResponse>}
 */
const methodDescriptor_Users_SearchEvents = new grpc.web.MethodDescriptor(
  '/userapi.Users/SearchEvents',
  grpc.web.MethodType.UNARY,
  proto.userapi.SearchEventsRequest,
  proto.userapi.SearchEventsResponse,
  /**
   * @param {!proto.userapi.SearchEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.SearchEventsResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.SearchEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.SearchEventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.SearchEventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.searchEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/SearchEvents',
      request,
      metadata || {},
      methodDescriptor_Users_SearchEvents,
      callback);
};


/**
 * @param {!proto.userapi.SearchEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.SearchEventsResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.searchEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/SearchEvents',
      request,
      metadata || {},
      methodDescriptor_Users_SearchEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.NaturalBreaksRequest,
 *   !proto.userapi.NaturalBreaksResponse>}
 */
const methodDescriptor_Users_NaturalBreaks = new grpc.web.MethodDescriptor(
  '/userapi.Users/NaturalBreaks',
  grpc.web.MethodType.UNARY,
  proto.userapi.NaturalBreaksRequest,
  proto.userapi.NaturalBreaksResponse,
  /**
   * @param {!proto.userapi.NaturalBreaksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.NaturalBreaksResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.NaturalBreaksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.NaturalBreaksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.NaturalBreaksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.naturalBreaks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/NaturalBreaks',
      request,
      metadata || {},
      methodDescriptor_Users_NaturalBreaks,
      callback);
};


/**
 * @param {!proto.userapi.NaturalBreaksRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.NaturalBreaksResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.naturalBreaks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/NaturalBreaks',
      request,
      metadata || {},
      methodDescriptor_Users_NaturalBreaks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userapi.NaturalBreaksQueryRequest,
 *   !proto.userapi.NaturalBreaksResponse>}
 */
const methodDescriptor_Users_NaturalBreaksQueried = new grpc.web.MethodDescriptor(
  '/userapi.Users/NaturalBreaksQueried',
  grpc.web.MethodType.UNARY,
  proto.userapi.NaturalBreaksQueryRequest,
  proto.userapi.NaturalBreaksResponse,
  /**
   * @param {!proto.userapi.NaturalBreaksQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userapi.NaturalBreaksResponse.deserializeBinary
);


/**
 * @param {!proto.userapi.NaturalBreaksQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.userapi.NaturalBreaksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userapi.NaturalBreaksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userapi.UsersClient.prototype.naturalBreaksQueried =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userapi.Users/NaturalBreaksQueried',
      request,
      metadata || {},
      methodDescriptor_Users_NaturalBreaksQueried,
      callback);
};


/**
 * @param {!proto.userapi.NaturalBreaksQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userapi.NaturalBreaksResponse>}
 *     Promise that resolves to the response
 */
proto.userapi.UsersPromiseClient.prototype.naturalBreaksQueried =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userapi.Users/NaturalBreaksQueried',
      request,
      metadata || {},
      methodDescriptor_Users_NaturalBreaksQueried);
};


module.exports = proto.userapi;


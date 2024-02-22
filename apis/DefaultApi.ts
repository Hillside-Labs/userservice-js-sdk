/* tslint:disable */
/* eslint-disable */
/**
 * User Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  User,
  UsersIdDelete200Response,
} from '../models/index';
import {
    UserFromJSON,
    UserToJSON,
    UsersIdDelete200ResponseFromJSON,
    UsersIdDelete200ResponseToJSON,
} from '../models/index';

export interface UsersIdAttributesGetRequest {
    id: number;
}

export interface UsersIdAttributesNameDeleteRequest {
    id: number;
    name: string;
}

export interface UsersIdAttributesNameGetRequest {
    id: number;
    name: string;
}

export interface UsersIdAttributesNamePutRequest {
    id: number;
    name: string;
}

export interface UsersIdAttributesPostRequest {
    id: number;
    requestBody: { [key: string]: any; };
}

export interface UsersIdDeleteRequest {
    id: number;
}

export interface UsersIdGetRequest {
    id: number;
}

export interface UsersIdPutRequest {
    id: number;
}

export interface UsersIdTraitsGetRequest {
    id: number;
}

export interface UsersIdTraitsNameDeleteRequest {
    id: number;
    name: string;
}

export interface UsersIdTraitsNameGetRequest {
    id: number;
    name: string;
}

export interface UsersIdTraitsNamePutRequest {
    id: number;
    name: string;
    requestBody?: { [key: string]: any; };
}

export interface UsersIdTraitsPostRequest {
    id: number;
    requestBody?: { [key: string]: any; };
}

export interface UsersPostRequest {
    user: User;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Get all users
     */
    async usersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * Get all users
     */
    async usersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.usersGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get all attributes of a user
     */
    async usersIdAttributesGetRaw(requestParameters: UsersIdAttributesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<{ [key: string]: any; }>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdAttributesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/attributes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get all attributes of a user
     */
    async usersIdAttributesGet(requestParameters: UsersIdAttributesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<{ [key: string]: any; }>> {
        const response = await this.usersIdAttributesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an attribute of a user by name
     */
    async usersIdAttributesNameDeleteRaw(requestParameters: UsersIdAttributesNameDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersIdDelete200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdAttributesNameDelete.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling usersIdAttributesNameDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/attributes/{name}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersIdDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete an attribute of a user by name
     */
    async usersIdAttributesNameDelete(requestParameters: UsersIdAttributesNameDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersIdDelete200Response> {
        const response = await this.usersIdAttributesNameDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get an attribute of a user by name
     */
    async usersIdAttributesNameGetRaw(requestParameters: UsersIdAttributesNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdAttributesNameGet.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling usersIdAttributesNameGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/attributes/{name}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get an attribute of a user by name
     */
    async usersIdAttributesNameGet(requestParameters: UsersIdAttributesNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.usersIdAttributesNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an attribute of a user by name
     */
    async usersIdAttributesNamePutRaw(requestParameters: UsersIdAttributesNamePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdAttributesNamePut.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling usersIdAttributesNamePut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/attributes/{name}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update an attribute of a user by name
     */
    async usersIdAttributesNamePut(requestParameters: UsersIdAttributesNamePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.usersIdAttributesNamePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create new attributes for a user
     */
    async usersIdAttributesPostRaw(requestParameters: UsersIdAttributesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdAttributesPost.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling usersIdAttributesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}/attributes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create new attributes for a user
     */
    async usersIdAttributesPost(requestParameters: UsersIdAttributesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.usersIdAttributesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a user by ID
     */
    async usersIdDeleteRaw(requestParameters: UsersIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersIdDelete200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersIdDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete a user by ID
     */
    async usersIdDelete(requestParameters: UsersIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersIdDelete200Response> {
        const response = await this.usersIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a user by ID
     */
    async usersIdGetRaw(requestParameters: UsersIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Get a user by ID
     */
    async usersIdGet(requestParameters: UsersIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.usersIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user by ID
     */
    async usersIdPutRaw(requestParameters: UsersIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Update a user by ID
     */
    async usersIdPut(requestParameters: UsersIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.usersIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all traits of a user
     */
    async usersIdTraitsGetRaw(requestParameters: UsersIdTraitsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<{ [key: string]: any; }>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdTraitsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/traits`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get all traits of a user
     */
    async usersIdTraitsGet(requestParameters: UsersIdTraitsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<{ [key: string]: any; }>> {
        const response = await this.usersIdTraitsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a trait of a user by name
     */
    async usersIdTraitsNameDeleteRaw(requestParameters: UsersIdTraitsNameDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersIdDelete200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdTraitsNameDelete.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling usersIdTraitsNameDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/traits/{name}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersIdDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete a trait of a user by name
     */
    async usersIdTraitsNameDelete(requestParameters: UsersIdTraitsNameDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersIdDelete200Response> {
        const response = await this.usersIdTraitsNameDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a trait of a user by name
     */
    async usersIdTraitsNameGetRaw(requestParameters: UsersIdTraitsNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdTraitsNameGet.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling usersIdTraitsNameGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/traits/{name}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get a trait of a user by name
     */
    async usersIdTraitsNameGet(requestParameters: UsersIdTraitsNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.usersIdTraitsNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a trait of a user by name
     */
    async usersIdTraitsNamePutRaw(requestParameters: UsersIdTraitsNamePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdTraitsNamePut.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling usersIdTraitsNamePut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}/traits/{name}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update a trait of a user by name
     */
    async usersIdTraitsNamePut(requestParameters: UsersIdTraitsNamePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.usersIdTraitsNamePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create new traits for a user
     */
    async usersIdTraitsPostRaw(requestParameters: UsersIdTraitsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdTraitsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}/traits`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create new traits for a user
     */
    async usersIdTraitsPost(requestParameters: UsersIdTraitsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.usersIdTraitsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new user
     */
    async usersPostRaw(requestParameters: UsersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling usersPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Create a new user
     */
    async usersPost(requestParameters: UsersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.usersPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export class Metadata {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete an item from an existing list.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async deleteCompanyNamedListsListNameItemId(
        req: operations.DeleteCompanyNamedListsListNameItemIdRequest,
        security: operations.DeleteCompanyNamedListsListNameItemIdSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteCompanyNamedListsListNameItemIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteCompanyNamedListsListNameItemIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/company/named-lists/{listName}/{itemId}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteCompanyNamedListsListNameItemIdSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteCompanyNamedListsListNameItemIdResponse =
            new operations.DeleteCompanyNamedListsListNameItemIdResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [200, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Delete an existing field.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async deleteCompanyPeopleFieldsFieldId(
        req: operations.DeleteCompanyPeopleFieldsFieldIdRequest,
        security: operations.DeleteCompanyPeopleFieldsFieldIdSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteCompanyPeopleFieldsFieldIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteCompanyPeopleFieldsFieldIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/company/people/fields/{fieldId}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteCompanyPeopleFieldsFieldIdSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteCompanyPeopleFieldsFieldIdResponse =
            new operations.DeleteCompanyPeopleFieldsFieldIdResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [200, 400, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Get all company lists
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getCompanyNamedLists(
        req: operations.GetCompanyNamedListsRequest,
        security: operations.GetCompanyNamedListsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCompanyNamedListsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCompanyNamedListsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/company/named-lists";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetCompanyNamedListsSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCompanyNamedListsResponse =
            new operations.GetCompanyNamedListsResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.lists = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.lists = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.List,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a specific company list by name.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getCompanyNamedListsListName(
        req: operations.GetCompanyNamedListsListNameRequest,
        security: operations.GetCompanyNamedListsListNameSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCompanyNamedListsListNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCompanyNamedListsListNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/company/named-lists/{listName}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetCompanyNamedListsListNameSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCompanyNamedListsListNameResponse =
            new operations.GetCompanyNamedListsListNameResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.list = utils.objectToClass(JSON.parse(decodedRes), shared.List);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * Get all company fields.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getCompanyPeopleFields(
        security: operations.GetCompanyPeopleFieldsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCompanyPeopleFieldsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/company/people/fields";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetCompanyPeopleFieldsSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCompanyPeopleFieldsResponse =
            new operations.GetCompanyPeopleFieldsResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.fields = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fields = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Field,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get all positions fields
     *
     * @remarks
     * Returns a list of all fields of object type position.<br/><b>Supported user types:</b> Service.
     */
    async getMetadataObjectsPosition(
        security: operations.GetMetadataObjectsPositionSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetMetadataObjectsPositionResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/metadata/objects/position";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetMetadataObjectsPositionSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetMetadataObjectsPositionResponse =
            new operations.GetMetadataObjectsPositionResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.objectsMetadata = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ObjectsMetadata
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Read metadata of custom tables defined
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getPeopleCustomTablesMetadata(
        security: operations.GetPeopleCustomTablesMetadataSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetPeopleCustomTablesMetadataResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/people/custom-tables/metadata";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetPeopleCustomTablesMetadataSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetPeopleCustomTablesMetadataResponse =
            new operations.GetPeopleCustomTablesMetadataResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.customTableMetadataList = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CustomTableMetadataList
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Read metadata for specific custom table
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async getPeopleCustomTablesMetadataCustomTableId(
        req: operations.GetPeopleCustomTablesMetadataCustomTableIdRequest,
        security: operations.GetPeopleCustomTablesMetadataCustomTableIdSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetPeopleCustomTablesMetadataCustomTableIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPeopleCustomTablesMetadataCustomTableIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/people/custom-tables/metadata/{custom_table_id}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetPeopleCustomTablesMetadataCustomTableIdSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetPeopleCustomTablesMetadataCustomTableIdResponse =
            new operations.GetPeopleCustomTablesMetadataCustomTableIdResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.customTableMetadata = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CustomTableMetadata
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Add a new item to an existing list.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async postCompanyNamedListsListName(
        req: operations.PostCompanyNamedListsListNameRequest,
        security: operations.PostCompanyNamedListsListNameSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PostCompanyNamedListsListNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostCompanyNamedListsListNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/company/named-lists/{listName}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "newListItem", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostCompanyNamedListsListNameSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        if (reqBody == null) throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostCompanyNamedListsListNameResponse =
            new operations.PostCompanyNamedListsListNameResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.flatListItemId = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.FlatListItemId
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [404, 409].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Create a new field.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async postCompanyPeopleFields(
        req: shared.CreateFieldRequest,
        security: operations.PostCompanyPeopleFieldsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PostCompanyPeopleFieldsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.CreateFieldRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/company/people/fields";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostCompanyPeopleFieldsSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        if (reqBody == null) throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostCompanyPeopleFieldsResponse =
            new operations.PostCompanyPeopleFieldsResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.fieldId = utils.objectToClass(JSON.parse(decodedRes), shared.FieldId);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [400, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Update an existing item from a list.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async putCompanyNamedListsListNameItemId(
        req: operations.PutCompanyNamedListsListNameItemIdRequest,
        security: operations.PutCompanyNamedListsListNameItemIdSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PutCompanyNamedListsListNameItemIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutCompanyNamedListsListNameItemIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/company/named-lists/{listName}/{itemId}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "updateListItemRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PutCompanyNamedListsListNameItemIdSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        if (reqBody == null) throw new Error("request body is required");
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutCompanyNamedListsListNameItemIdResponse =
            new operations.PutCompanyNamedListsListNameItemIdResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [200, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Update an existing field
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async putCompanyPeopleFieldsFieldId(
        req: operations.PutCompanyPeopleFieldsFieldIdRequest,
        security: operations.PutCompanyPeopleFieldsFieldIdSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PutCompanyPeopleFieldsFieldIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutCompanyPeopleFieldsFieldIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/company/people/fields/{fieldId}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "updateFieldRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PutCompanyPeopleFieldsFieldIdSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        if (reqBody == null) throw new Error("request body is required");
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutCompanyPeopleFieldsFieldIdResponse =
            new operations.PutCompanyPeopleFieldsFieldIdResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [200, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }
}

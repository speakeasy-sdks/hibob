/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Documents {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete a specific document from the employee's confidential folder.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async deleteDocsPeopleIdConfidentialDocId(
        req: operations.DeleteDocsPeopleIdConfidentialDocIdRequest,
        security: operations.DeleteDocsPeopleIdConfidentialDocIdSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteDocsPeopleIdConfidentialDocIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteDocsPeopleIdConfidentialDocIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/docs/people/{id}/confidential/{docId}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteDocsPeopleIdConfidentialDocIdSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteDocsPeopleIdConfidentialDocIdResponse =
            new operations.DeleteDocsPeopleIdConfidentialDocIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
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
     * Delete specific document from the employee's shared folder.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async deleteDocsPeopleIdSharedDocId(
        req: operations.DeleteDocsPeopleIdSharedDocIdRequest,
        security: operations.DeleteDocsPeopleIdSharedDocIdSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteDocsPeopleIdSharedDocIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteDocsPeopleIdSharedDocIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/docs/people/{id}/shared/{docId}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteDocsPeopleIdSharedDocIdSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteDocsPeopleIdSharedDocIdResponse =
            new operations.DeleteDocsPeopleIdSharedDocIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
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
     * Download employee's documents
     *
     * @remarks
     * Returns a list of documents and download links.<br /><b>Supported user types:</b> Employee.
     */
    async getDocsPeopleId(
        req: operations.GetDocsPeopleIdRequest,
        security: operations.GetDocsPeopleIdSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDocsPeopleIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDocsPeopleIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/docs/people/{id}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetDocsPeopleIdSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetDocsPeopleIdResponse = new operations.GetDocsPeopleIdResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeeDocumentResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeeDocumentResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
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
     * Upload a document to the employee's confidential folder
     *
     * @remarks
     * <b>Supported user types:</b> Employee.
     */
    async postDocsPeopleIdConfidential(
        req: operations.PostDocsPeopleIdConfidentialRequest,
        security: operations.PostDocsPeopleIdConfidentialSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PostDocsPeopleIdConfidentialResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostDocsPeopleIdConfidentialRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/docs/people/{id}/confidential", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "addDocument", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostDocsPeopleIdConfidentialSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostDocsPeopleIdConfidentialResponse =
            new operations.PostDocsPeopleIdConfidentialResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
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
     * Upload a file to the employee's confidential folder.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async postDocsPeopleIdConfidentialUpload(
        req: operations.PostDocsPeopleIdConfidentialUploadRequest,
        security: operations.PostDocsPeopleIdConfidentialUploadSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PostDocsPeopleIdConfidentialUploadResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostDocsPeopleIdConfidentialUploadRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/docs/people/{id}/confidential/upload",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "multipart");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostDocsPeopleIdConfidentialUploadSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostDocsPeopleIdConfidentialUploadResponse =
            new operations.PostDocsPeopleIdConfidentialUploadResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
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
     * Upload a document to the employee's shared folder
     *
     * @remarks
     * <b>Supported user types:</b> Employee.
     */
    async postDocsPeopleIdShared(
        req: operations.PostDocsPeopleIdSharedRequest,
        security: operations.PostDocsPeopleIdSharedSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PostDocsPeopleIdSharedResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostDocsPeopleIdSharedRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/docs/people/{id}/shared", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "addDocument", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostDocsPeopleIdSharedSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostDocsPeopleIdSharedResponse =
            new operations.PostDocsPeopleIdSharedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
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
     * Upload a file to the employee's shared folder.
     *
     * @remarks
     * <b>Supported user types:</b> Employee, Service.
     */
    async postDocsPeopleIdSharedUpload(
        req: operations.PostDocsPeopleIdSharedUploadRequest,
        security: operations.PostDocsPeopleIdSharedUploadSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PostDocsPeopleIdSharedUploadResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostDocsPeopleIdSharedUploadRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/docs/people/{id}/shared/upload", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "multipart");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostDocsPeopleIdSharedUploadSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostDocsPeopleIdSharedUploadResponse =
            new operations.PostDocsPeopleIdSharedUploadResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
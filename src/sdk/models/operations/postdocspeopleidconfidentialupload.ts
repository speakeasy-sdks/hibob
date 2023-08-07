/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostDocsPeopleIdConfidentialUploadSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer: string;
}

export class PostDocsPeopleIdConfidentialUploadRequestBodyFile extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=file" })
    file: string;
}

export class PostDocsPeopleIdConfidentialUploadRequestBody extends SpeakeasyBase {
    /**
     * The file to upload.
     */
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    file: PostDocsPeopleIdConfidentialUploadRequestBodyFile;
}

export class PostDocsPeopleIdConfidentialUploadRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
    requestBody: PostDocsPeopleIdConfidentialUploadRequestBody;

    /**
     * employee id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class PostDocsPeopleIdConfidentialUploadResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Unexpected error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

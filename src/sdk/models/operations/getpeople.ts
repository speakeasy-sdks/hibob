/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetPeopleSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class GetPeopleRequest extends SpeakeasyBase {
    /**
     * Whether to supply humanReadable values in JSON instead of machine-readable format (default).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=humanReadable" })
    humanReadable?: boolean;

    /**
     * Whether to include the additional "humanReadable" JSON node in the response.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHumanReadable" })
    includeHumanReadable?: boolean;

    /**
     * Should include inactive employees.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showInactive" })
    showInactive?: boolean;
}

export class GetPeopleResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * All employees.
     */
    @SpeakeasyMetadata()
    employees?: shared.Employees;

    /**
     * Unexpected error.
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTimeoffWhosoutSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class GetTimeoffWhosoutRequest extends SpeakeasyBase {
    /**
     * Start period date
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
    from: RFCDate;

    /**
     * Include Hourly Requests
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHourly" })
    includeHourly?: boolean;

    /**
     * Show the policy type's name instead of the policy's custom public name if the user has permission to view it, and the policy's custom public name exists.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePrivate" })
    includePrivate?: boolean;

    /**
     * End period date
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
    to: RFCDate;
}

export class GetTimeoffWhosoutResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Unexpected error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * Time off requests as seen by the logged in user for a given date range.
     */
    @SpeakeasyMetadata()
    requests?: shared.Requests;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
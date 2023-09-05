/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTimeoffOuttodaySecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class GetTimeoffOuttodayRequest extends SpeakeasyBase {
    /**
     * Include Hourly Requests
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHourly" })
    includeHourly?: boolean;

    /**
     * Date to report out of the office. If not specified, the date at UTC at the time of the request is used.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=today" })
    today?: RFCDate;
}

export class GetTimeoffOuttodayResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Unexpected error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * The list of people who have taken time off, as seen by the logged in user.
     */
    @SpeakeasyMetadata()
    outTodays?: shared.OutTodays;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

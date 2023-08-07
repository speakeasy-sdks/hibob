/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostEmployeesIdentifierTerminateSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class PostEmployeesIdentifierTerminateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    employeeTermination: shared.EmployeeTermination;

    /**
     * Employee ID.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
    identifier: string;
}

export class PostEmployeesIdentifierTerminateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

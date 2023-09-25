/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostPeopleCustomTablesEmployeeIdCustomTableIdSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class PostPeopleCustomTablesEmployeeIdCustomTableIdRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "RAW_BODY" })
    rawBody?: string;
}

export class PostPeopleCustomTablesEmployeeIdCustomTableIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: PostPeopleCustomTablesEmployeeIdCustomTableIdRequestBody;

    /**
     * The ID of custom table.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_table_id" })
    customTableId: string;

    /**
     * Employee ID.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
    employeeId: string;
}

export class PostPeopleCustomTablesEmployeeIdCustomTableIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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

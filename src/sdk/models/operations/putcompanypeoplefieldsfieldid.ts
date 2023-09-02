/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PutCompanyPeopleFieldsFieldIdSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class PutCompanyPeopleFieldsFieldIdRequest extends SpeakeasyBase {
    /**
     * The new name and/or description of the updated field.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateFieldRequest: shared.UpdateFieldRequest;

    /**
     * The ID of the field.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fieldId" })
    fieldId: string;
}

export class PutCompanyPeopleFieldsFieldIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostCompanyPeopleFieldsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class PostCompanyPeopleFieldsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The new field was successfully created. The ID of the field is returned.
     */
    @SpeakeasyMetadata()
    fieldId?: shared.FieldId;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

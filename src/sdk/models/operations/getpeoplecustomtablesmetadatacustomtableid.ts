/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetPeopleCustomTablesMetadataCustomTableIdSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class GetPeopleCustomTablesMetadataCustomTableIdRequest extends SpeakeasyBase {
    /**
     * The ID of custom table.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_table_id" })
    customTableId: string;
}

export class GetPeopleCustomTablesMetadataCustomTableIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful response
     */
    @SpeakeasyMetadata()
    customTableMetadata?: shared.CustomTableMetadata;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
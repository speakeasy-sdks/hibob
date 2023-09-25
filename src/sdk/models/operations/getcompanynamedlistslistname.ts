/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetCompanyNamedListsListNameSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class GetCompanyNamedListsListNameRequest extends SpeakeasyBase {
    /**
     * Whether to include archived items in the response.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeArchived" })
    includeArchived?: boolean;

    /**
     * The internal name of the list.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listName" })
    listName: string;
}

export class GetCompanyNamedListsListNameResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful response. Please note that the item ID may be textual or numeric depending on the list type.
     */
    @SpeakeasyMetadata()
    list?: shared.List;

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

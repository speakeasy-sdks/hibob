/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTimeoffPoliciesNamesSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=password" })
    password: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=username" })
    username: string;
}

export class GetTimeoffPoliciesNamesRequest extends SpeakeasyBase {
    /**
     * Policy type name.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=policyTypeName" })
    policyTypeName: string;
}

export class GetTimeoffPoliciesNamesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A list of policy names.
     */
    @SpeakeasyMetadata()
    policyNames?: shared.PolicyNames;

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

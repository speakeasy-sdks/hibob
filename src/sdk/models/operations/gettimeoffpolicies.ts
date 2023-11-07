/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetTimeoffPoliciesSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=password" })
    password: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=username" })
    username: string;
}

export class GetTimeoffPoliciesRequest extends SpeakeasyBase {
    /**
     * Policy name.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=policyName" })
    policyName: string;
}

export class GetTimeoffPoliciesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Policy
     */
    @SpeakeasyMetadata()
    policy?: shared.Policy;

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

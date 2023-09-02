/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTimeoffPolicyTypesPolicyTypeSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=password" })
    password: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=username" })
    username: string;
}

export class GetTimeoffPolicyTypesPolicyTypeRequest extends SpeakeasyBase {
    /**
     * Policy Type name
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policyType" })
    policyType: string;
}

export class GetTimeoffPolicyTypesPolicyTypeResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Policy type
     */
    @SpeakeasyMetadata()
    policyType?: shared.PolicyType;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
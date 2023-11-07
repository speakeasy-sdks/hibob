/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { RFCDate } from "../../../sdk/types";
import { AxiosResponse } from "axios";

export class GetTimeoffEmployeesIdBalanceSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=password" })
    password: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=username" })
    username: string;
}

export class GetTimeoffEmployeesIdBalanceRequest extends SpeakeasyBase {
    /**
     * Point in time.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
    date: RFCDate;

    /**
     * Employee ID.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Policy type name.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=policyType" })
    policyType: string;
}

export class GetTimeoffEmployeesIdBalanceResponse extends SpeakeasyBase {
    /**
     * Balance result.
     */
    @SpeakeasyMetadata()
    balanceResult?: shared.BalanceResult;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Unexpected error.
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

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

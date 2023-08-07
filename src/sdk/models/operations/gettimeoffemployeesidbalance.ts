/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import * as shared from "../shared";
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

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Unexpected error.
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

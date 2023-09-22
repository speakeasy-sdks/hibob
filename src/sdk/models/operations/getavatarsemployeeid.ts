/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetAvatarsEmployeeIdRequest extends SpeakeasyBase {
    /**
     * employee id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
    employeeId: string;
}

export class GetAvatarsEmployeeIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

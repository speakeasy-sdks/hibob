/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostTasksTaskIdCompleteSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: shared.SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    bearer?: string;
}

export class PostTasksTaskIdCompleteRequest extends SpeakeasyBase {
    /**
     * task id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
    taskId: string;
}

export class PostTasksTaskIdCompleteResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Unexpected error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Marks a task as complete.
     */
    @SpeakeasyMetadata()
    tasks?: shared.Tasks;
}

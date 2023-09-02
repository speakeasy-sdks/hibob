/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EmployeeDocumentWithDownloadLink extends SpeakeasyBase {
    /**
     * The name of the document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "documentName" })
    documentName?: string;

    /**
     * The name of the document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "downloadLink" })
    downloadLink?: string;
}
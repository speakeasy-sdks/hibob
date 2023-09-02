/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class InvitationByWizard extends SpeakeasyBase {
    /**
     * The Welcome wizard ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "welcomeWizardId" })
    welcomeWizardId: number;
}
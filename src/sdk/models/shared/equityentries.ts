/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EquityEntry } from "./equityentry";
import { Expose, Type } from "class-transformer";

export class EquityEntries extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: EquityEntry })
    @Expose({ name: "values" })
    @Type(() => EquityEntry)
    values?: EquityEntry[];
}

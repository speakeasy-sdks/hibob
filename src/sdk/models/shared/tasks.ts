/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Task } from "./task";
import { Expose, Type } from "class-transformer";

/**
 * The logged-in user's tasks.
 */
export class Tasks extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Task })
    @Expose({ name: "tasks" })
    @Type(() => Task)
    tasks?: Task[];
}

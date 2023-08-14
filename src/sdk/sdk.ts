/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Attendance } from "./attendance";
import { CustomTables } from "./customtables";
import { Documents } from "./documents";
import { Metadata } from "./metadata";
import { Objects } from "./objects";
import { Onboarding } from "./onboarding";
import { Payroll } from "./payroll";
import { People } from "./people";
import { Reports } from "./reports";
import { Tables } from "./tables";
import { Tasks } from "./tasks";
import { TimeOff } from "./timeoff";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.hibob.com/v1",
    /**
     * Sandbox
     */
    "https://api.sandbox.hibob.com/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "1.0.1";
    genVersion = "2.83.3";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Bob API: Access your employees data with the Bob API
 */
export class Hibob {
    public attendance: Attendance;
    public customTables: CustomTables;
    public documents: Documents;
    public metadata: Metadata;
    public objects: Objects;
    public onboarding: Onboarding;
    public payroll: Payroll;
    public people: People;
    public reports: Reports;
    public tables: Tables;
    public tasks: Tasks;
    public timeOff: TimeOff;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.attendance = new Attendance(this.sdkConfiguration);
        this.customTables = new CustomTables(this.sdkConfiguration);
        this.documents = new Documents(this.sdkConfiguration);
        this.metadata = new Metadata(this.sdkConfiguration);
        this.objects = new Objects(this.sdkConfiguration);
        this.onboarding = new Onboarding(this.sdkConfiguration);
        this.payroll = new Payroll(this.sdkConfiguration);
        this.people = new People(this.sdkConfiguration);
        this.reports = new Reports(this.sdkConfiguration);
        this.tables = new Tables(this.sdkConfiguration);
        this.tasks = new Tasks(this.sdkConfiguration);
        this.timeOff = new TimeOff(this.sdkConfiguration);
    }
}

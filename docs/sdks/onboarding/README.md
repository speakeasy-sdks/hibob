# Onboarding

### Available Operations

* [getOnboardingWizards](#getonboardingwizards) - Get a summary of all onboarding wizards.

## getOnboardingWizards

Wizard info includes Wizard ID, name and description.<br /><b>Supported user types:</b> Employee, Service.

### Example Usage

```typescript
import { Hibob } from "hibob";
import { GetOnboardingWizardsResponse } from "hibob/dist/sdk/models/operations";

const sdk = new Hibob({
  security: {
    bearer: "",
  },
});

sdk.onboarding.getOnboardingWizards().then((res: GetOnboardingWizardsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetOnboardingWizardsResponse](../../models/operations/getonboardingwizardsresponse.md)>**


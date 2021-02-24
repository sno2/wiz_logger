import type {
  WizPlugin,
  WizRequest,
  WizResponse,
} from "https://deno.land/x/wiz@v0.0.1-alpha3/src/types.ts";

import { WizPluginEvent } from "https://deno.land/x/wiz@v0.0.1-alpha3/src/constants.ts";

export class Logger implements WizPlugin {
  on(event: WizPluginEvent, req: WizRequest, res: WizResponse) {
    switch (event) {
      case WizPluginEvent.Response: {
        console.info(`${req.method} ${res.url} ${res.status}`);
      }
    }
  }
}

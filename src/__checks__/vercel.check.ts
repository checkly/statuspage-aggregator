import * as path from "path";
import { MultiStepCheck } from "checkly/constructs";
import { smsChannel, emailChannel } from "../alert-channels";

const alertChannels = [smsChannel, emailChannel];

// We can define multiple checks in a single *.check.ts file.
new MultiStepCheck("vercel-multistep-check", {
  name: "Vercel Status",
  runtimeId: "2023.09",
  alertChannels,

  code: {
    entrypoint: path.join(__dirname, "vercel.spec.ts"),
  },
});

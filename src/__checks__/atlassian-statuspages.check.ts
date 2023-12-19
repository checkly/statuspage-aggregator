import * as path from "path";
import * as fs from "fs";
import { MultiStepCheck } from "checkly/constructs";
import { smsChannel, emailChannel } from "../alert-channels";

const alertChannels = [smsChannel, emailChannel];
import { statusBoard } from "../dashboards";
statusBoard.checksPerPage;
const domainPlaceholder = "DOMAIN";
const protocolPlaceholder = "PROTOCOL";
const serviceName = "SERVICE_NAME";
const checkFileTemplate = fs
  .readFileSync(path.join(__dirname, "atlassian-statuspages.template.ts"))
  .toString();

type Vendor = {
  name: string;
  domain: string;
  extraTags?: Array<string>;
};

const atlassianVendors = [
  { name: "Autotrader", domain: "status.autotrader.co.uk" },
  { name: "Grafana", domain: "status.grafana.com" },
  { name: "Vercel", domain: "www.vercel-status.com", extraTags: ["critical"] },
  { name: "Stripe", domain: "www.stripestatus.com" },
  { name: "Segment", domain: "status.segment.com" },
  {
    name: "Github",
    domain: "www.githubstatus.com",
    extraTags: ["non-critical"],
  },
];
const customVendors = [
  { name: "Auth0", domain: "status.auth0.com" },
  { name: "Heroku", domain: "status.heroku.com" },
];

setUpAtlassianPages(atlassianVendors);
function setUpAtlassianPages(vendors: Array<Vendor>) {
  for (const v of vendors) {
    let tags = ["statuspage"];
    if (v.extraTags) {
      tags = [...tags, ...v.extraTags];
    }

    // We can define multiple checks in a single *.check.ts file.
    new MultiStepCheck(`${v.name}-multistep-check`, {
      name: `${v.name} status`,
      runtimeId: "2023.09",
      alertChannels,
      code: {
        content: loadCheckCode(v),
      },
      tags: tags,
    });
  }
}

function loadCheckCode(v: Vendor) {
  return checkFileTemplate
    .replace(domainPlaceholder, v.domain)
    .replace(serviceName, v.name)
    .replace(protocolPlaceholder, "https");
}

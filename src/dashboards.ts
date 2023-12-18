import * as path from "path";
import { randomUUID } from "crypto";
import { Dashboard } from "checkly/constructs";
export const statusBoard = new Dashboard("status-dashboard-1", {
  header: "Status Page Aggregator",
  description: "Checking different statuspages",
  tags: ["statuspage"],
  logo: "https://assets.acme.com/images/acme-logo.png",
  customUrl: `status-page-3399c3ac-c5cc-40f2-be83-5a2997a41489`,
});

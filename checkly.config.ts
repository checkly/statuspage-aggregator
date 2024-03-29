import { defineConfig } from "checkly";
import { RetryStrategyBuilder } from "checkly/constructs";

const onlyCheck = {
  checkMatch: "**/__checks__/atlassian-statuspages.check.ts",
  testMatch: "**/__checks__/vercel.spec.ts",
};

const onlyCheckMatch = () => {
  if (process.env.NODE_ENV === "test") {
    return onlyCheck.checkMatch;
  }
  return "**/__checks__/**/*.check.ts";
};
const onlyTestMatch = () => {
  if (process.env.NODE_ENV === "test") {
    return onlyCheck.testMatch;
  }
  return "**/__checks__/**/*.spec.ts";
};
/**
 * See https://www.checklyhq.com/docs/cli/project-structure/
 */
const config = defineConfig({
  /* A human friendly name for your project */
  projectName: "Status Page Aggregator",
  /** A logical ID that needs to be unique across your Checkly account,
   * See https://www.checklyhq.com/docs/cli/constructs/ to learn more about logical IDs.
   */
  logicalId: "status-page-aggregator-project",
  /* An optional URL to your Git repo to be shown in your test sessions and resource activity log */
  /* repoUrl: 'https://github.com/checkly/checkly-cli', */
  /* Sets default values for Checks */
  checks: {
    /* A default for how often your Check should run in minutes */
    frequency: 10,
    /* Checkly data centers to run your Checks as monitors */
    locations: ["us-east-1", "eu-west-1"],
    /* An optional array of tags to organize your Checks */
    tags: [],
    /** The Checkly Runtime identifier, determining npm packages and the Node.js version available at runtime.
     * See https://www.checklyhq.com/docs/cli/npm-packages/
     */
    runtimeId: "2023.09",
    /* Failed check runs will be retried before triggering alerts */
    retryStrategy: RetryStrategyBuilder.fixedStrategy({
      baseBackoffSeconds: 10,
      maxRetries: 2,
      sameRegion: true,
    }),
    /* A glob pattern that matches the Checks inside your repo, see https://www.checklyhq.com/docs/cli/using-check-test-match/ */
    checkMatch: onlyCheckMatch(),
    browserChecks: {
      /* A glob pattern matches any Playwright .spec.ts files and automagically creates a Browser Check. This way, you
       * can just write native Playwright code. See https://www.checklyhq.com/docs/cli/using-check-test-match/
       * */
      testMatch: onlyTestMatch(),
    },
  },
  cli: {
    /* The default datacenter location to use when running npx checkly test */
    runLocation: "eu-west-1",
    /* An array of default reporters to use when a reporter is not specified with the "--reporter" flag */
    reporters: ["list"],
  },
});

export default config;

import { test, expect } from "@playwright/test";
const domain = "DOMAIN";
const protocol = "PROTOCOL";
const apiPath = "api/v2/";
const serviceName = "SERVICE_NAME";
const baseUrl = `${protocol}://${domain}/${apiPath}`;

const allSystemsOperational = "All Systems Operational";
test(`check ${serviceName} statuspage`, async ({ request }) => {
  await test.step(`check global status of ${serviceName}`, async () => {
    const response = await request.get(`${baseUrl}${"status.json"}`);
    expect(response).toBeOK();

    const data = await response.json();
    expect(data.status.description).toBe(allSystemsOperational);

    return data;
  });

  await test.step(`check ${serviceName} incidents`, async () => {
    const response = await request.get(`${baseUrl}${"incidents.json"}`);
    expect(response).toBeOK();

    const data = await response.json();
    for (const i of data.incidents) {
      if (i.status !== "resolved") {
        console.log(`unresolved incident: ${i}`);
        throw Error(`unresolved incident at ${serviceName}: ${i.shortlink}`);
      }
    }
    return data;
  });

  await test.step(`check ${serviceName} components`, async () => {
    const response = await request.get(`${baseUrl}${"components.json"}`);
    expect(response).toBeOK();

    const data = await response.json();
    for (const c of data.components) {
      console.log(`${c.name}:${c.status}`);
      if (c.status !== "operational") {
        console.log(c);
        throw Error(`non operational component for ${serviceName}: ${c.name}`);
      }
    }
    return data;
  });
});

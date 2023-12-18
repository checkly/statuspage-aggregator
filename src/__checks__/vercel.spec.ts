import { test, expect } from "@playwright/test";

const baseUrl = "https://www.vercel-status.com/api/v2/";
//status.json
//incidents.json
//components.json

const allSystemsOperational = "All Systems Operational";
test("check vercel statuspage", async ({ request }) => {
  /**
   * Get all SpaceX Dragon Capsules
   */
  await test.step("check global status", async () => {
    const response = await request.get(`${baseUrl}${"status.json"}`);
    expect(response).toBeOK();

    const data = await response.json();
    expect(data.status.description).toBe(allSystemsOperational);

    return data;
  });

  await test.step("check incidents", async () => {
    const response = await request.get(`${baseUrl}${"incidents.json"}`);
    expect(response).toBeOK();

    const data = await response.json();
    for (const i of data.incidents) {
      if (i.status !== "resolved") {
        console.log(`unresolved incident: ${i}`);
        throw Error(`unresolved incident at Vercel ${i.shortlink}`);
      }
    }
    return data;
  });

  await test.step("check components", async () => {
    const response = await request.get(`${baseUrl}${"components.json"}`);
    expect(response).toBeOK();

    const data = await response.json();
    for (const c of data.components) {
      console.log(`${c.name}:${c.status}`);
      if (c.status !== "operational") {
        console.log(c);
        throw Error(`non operational component: ${c.name}`);
      }
    }
    return data;
  });
});

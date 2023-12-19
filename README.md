# Project Title

This project is designed to aggregate status pages into a single Checkly public dashboard. It leverages the concept of Monitoring as Code (MaC) to deploy the created checks with a 'statuspage' tag, ensuring they appear on the automatically created dashboard.

## Features

- Aggregates multiple status pages into one Checkly public dashboard.
- Uses Monitoring as Code (MaC) for deploying checks.
- Automatically tags checks with 'statuspage' for easy identification and organization.
- Includes convenient npm run commands for deployment and testing.

## Configuration

A notable feature of this project is the "only" tweak in `checky.config.ts`. This allows you to run a single test when you execute `npm test`, which can be particularly useful during development or debugging.

## Available Scripts

In the project directory, you can run:

### `npm run deploy`

Deploys the checks to the Checkly dashboard.

### `npm test`

Launches the test runner. If the "only" tweak in `checky.config.ts` is used, only one test will be executed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

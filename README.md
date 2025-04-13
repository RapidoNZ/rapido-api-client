# rapido-api-client

rapido-api-client is a comprehensive TypeScript/JavaScript client library for interacting with the Accredo Web Service. This client is auto-generated using the OpenAPI Generator (version 5.0.11.125) and provides a full set of API interfaces covering areas such as Accounts Payable (AP), Accounts Receivable (AR), Banking (CB), Inventory (IC), and many more. It is designed to simplify calling the Accredo Web Service endpoints from your application.

> **Note:** Most of the code in this repository is auto-generated. Manual changes are only recommended for custom additions (e.g. the execute-script and execute-sql endpoints).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Configuration](#configuration)
  - [Calling an API Endpoint](#calling-an-api-endpoint)
- [API Documentation](#api-documentation)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Auto-generated client based on the Accredo Web Service OpenAPI specification (v5.0.11.125).
- Supports a wide range of API endpoints:
  - Accounts Payable (AP) endpoints
  - Accounts Receivable (AR) endpoints
  - Banking, Inventory, Sales, and many others
- Custom endpoints such as execute-script and execute-sql for special use cases.
- Configurable authentication with API keys, basic auth, or OAuth2.
- Designed for use in both Node.js and browser environments.

## Installation

You can install the client library via npm. If the package is published to npm, you can run:

```bash
npm install rapido-api-client
```

Alternatively, if you have cloned the repository, install any dependencies with:

```bash
npm install
```

## Usage

### Configuration

Before calling any endpoints, you need to configure the client. The configuration options include API keys, username/password, access tokens, base path and more. For example:

```typescript
import { Configuration } from 'rapido-api-client';

const config = new Configuration({
  // Provide your API key if required
  apiKey: 'YOUR_API_KEY',
  // For basic authentication
  username: 'your_username',
  password: 'your_password',
  // Alternatively, for OAuth2 flows
  accessToken: 'YOUR_ACCESS_TOKEN',
  // Base path of the API server
  basePath: 'https://api.accredo.com',
  // Optionally override the OAuth path
  oauthPath: 'https://api.accredo.com/oauth',
  // Your client id (if required for OAuth)
  clientId: 'YOUR_CLIENT_ID'
});
```

### Calling an API Endpoint

Once configured, you can import and use any of the available API classes. For example, to use one of the Accounts Payable endpoints:

```typescript
import { ApInvoiceApi } from 'rapido-api-client'; // replace with the exact API needed

const apInvoiceApi = new ApInvoiceApi(config);

apInvoiceApi.getInvoice({ invoiceId: '12345' })
  .then(response => {
    console.log('Invoice details:', response);
  })
  .catch(error => {
    console.error('Error fetching invoice:', error);
  });
```

The main entry point of the library is provided by `src/api.ts`, which re-exports all the available endpoints.

### Custom Endpoints

In addition to the auto-generated endpoints, there are custom, manually added endpoints:

- `execute-script`
- `execute-sql`

These can be used similarly by importing them from the `apis` folder:

```typescript
import { executeScript, executeSql } from 'rapido-api-client';

// Usage example for execute-script:
executeScript({ script: 'your script here' })
  .then(result => console.log(result))
  .catch(err => console.error(err));

// Usage example for execute-sql:
executeSql({ query: 'SELECT * FROM table' })
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

## API Documentation

The client library mirrors the Accredo Web Service API. Documentation for each endpoint is auto-generated directly from the OpenAPI specification. You can find inline documentation in the source code, and for further details refer to the [OpenAPI Generator documentation](https://openapi-generator.tech) or the official Accredo Web Service documentation if available.

## Dependencies

Key dependencies include:

- [Axios](https://axios-http.com/) (or any underlying HTTP client configured via the `baseOptions` in the configuration)
- TypeScript (as the library is written in TS, though compiled JavaScript is also available)

Make sure to check the `package.json` for a complete list of dependencies.

## Contributing

Since most of the library is auto-generated, contributions should be focused on:

- Improvements in the custom endpoints (e.g. execute-script, execute-sql)
- Documentation updates
- Bug fixes in the manually maintained portions of the library

If you need to adjust the API client behavior or update it to a newer version of the Accredo API, please consider regenerating the client using the [OpenAPI Generator](https://openapi-generator.tech).

Contributions and improvements are welcome. Please open an issue or submit a pull request with your changes.

## License

[MIT License](LICENSE) (if applicable)

---

This README was generated by analyzing the sources in the repository. The client is designed to simplify communication with the Accredo Web Service, allowing developers to easily integrate and use its vast API collection in their applications.

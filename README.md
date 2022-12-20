## rapido-api-client@0.0.27

This is an unofficial SDK written in TypeScript that allows businesses using the Accredo ERP system to interact easily with the Web Service API.

The goal for this SDK is to provide a simple way to interact with the Accredo Web Service API. This SDK is not officially supported by Accredo and is not affiliated with Accredo in any way.

If you find any bugs or have any suggestions please create an issue on the GitHub repo.

Please feel free to add to the project by developing more high level functions.

### Rapido

Rapido is based in New Zealand that provides integration support for the Accredo ERP system. We can help you with the following:

- Integrations to other platforms and systems
  - eCommerce
  - CRM
  - Logistics/3PL
  - SaaS Tools (e.g Airtable, Google Sheets, etc.)
- Custom development based on the Web API
  - Building in house applications
- B2B portal development for your customers
  - Self-service
  - Ordering
  - Invoicing
  - Balances
  - Reporting
  - Document management
  - PDF/Excel order entry
- B2C Shopify integrations
  - Full integration. Orders, products, inventory etc.
- Data collection
  - Web scraping
  - API integrations
- Scheduled tasks
  - Automating processes

If you would like to know more about what we do, please visit our website at [rapido.co.nz](https://rapido.co.nz) or get in touch with [Adam Holt](mailto:mail@adamholt.co.nz).

### Demo

https://user-images.githubusercontent.com/9592417/207971042-91055e05-d49f-4c8c-8418-574dd0120e74.mp4

### Requirements

- NodeJS 16+
- Accredo Web Service API with HTTPS enabled
- Accredo Web Service API User / Password
- Accredo Web Service API Client ID
- A license for the Accredo Web Service API with an available web user

### License

This SDK is licensed under the "Sustainable Use License" as defined in the [LICENSE.md](https://github.com/RapidoNZ/rapido-api-client/blob/main/LICENSE.md) file.

In short, you are free to use this SDK for your own internal business purposes, for non-commercial or personal use. You may distribute the software or provide it to others only if you do so free of charge and by written consent from [Rapido](https://rapido.co.nz). You may not alter, remove, or obscure any licensing, copyright, or other notices of the licensor in the software. Any use of the licensor’s trademarks is subject to applicable law.

### Installation

```bash
npm install @rapidonz/rapido-api-client
```

### Models

All data objects from the base Accredo system are available as models. These models are used to create, update, and delete records in the Accredo system. They also come in very handy for speeding up development time when interacting with the Accredo system as you get code completion and type checking.

If you would like to be able to use your custom fields and tables it's possible. Please get in touch with [Adam Holt](mailto:adam@rapido.co.nz) from [Rapido](https://rapido.co.nz).

### API Services

API Services are used to interact with the Accredo system. They are used to create, update, and delete records in the Accredo system. Services are also used to query the Accredo system for records and perform actions such as printing documents, running reports/scripts, and more.

### Authentication

Authentication is handled by the module. The token is automatically refreshed when it expires and is saved to the local file system.

#### Accredo configuration

To be able to connect to your system you will need a config file in the root of your app called `accredoConfig.json`. If this is not possible, you can pass this information in an environment variable called `ACCREDO_CONFIG` as a `JSON` string.

This file contains the following information:

```json
{
  "basePath": "https://demo.accredo.co.nz:6569/saturn/odata4/v1/Company('demo')",
  "oauthPath": "https://demo.accredo.co.nz:6569/saturn/oauth2/v1/token",
  "clientId": "3v7OstC8Bu6SESqM",
  "username": "demo",
  "password": "demo",
  "baseOptions": {
    "headers": {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br"
    }
  }
}
```

### Usage

The Accredo Web API uses the odata4 standard. You can read more about the standard here [https://www.odata.org/documentation/](https://www.odata.org/documentation/)

#### Useful odata4 parameters

| Options  | Example                             |
| -------- | ----------------------------------- |
| $filter  | `$filter=CustomerCode eq 'RAPIDO'`  |
| $select  | `$select=CustomerCode,CustomerName` |
| $expand  | `$expand=Address,Contact`           |
| $orderby | `$orderby=CustomerCode desc`        |
| $top     | `$top=10`                           |
| $skip    | `$skip=5`                           |

### High level functions

The aim is to provide a high level API that is easy to use and understand. The high level functions are built on top of the underlying odata4 standard services.

Feel free to contribute to the project and add more high level functions.

- **Customer**
  - `find(params)`
  - `get(CustomerCode<string>)`
  - `create(customer<ARCustomer>)`
  - `update(customer<ARCustomer>)`
  - `delete(CustomerCode<string>)`
  - `statementFile(customerCode<string>)`
- **Product**
  - `find(params)`
  - `get(ProductCode<string>)`
  - `create(product<ICProduct>)`
  - `update(customer<ICProduct>)`
  - `delete(ProductCode<string>)`
- **SQL**
  - `execute(query<string>)`
- **Script**
  - `play(scriptName<string>, params<object>)`

#### Customer

By importing the Customer function you are able to easily interact with the Accredo system. To create, update, and delete customers you can use the `create`, `update`, and `delete` functions. To get a customer by code you can use the `get` function. To find customers you can use the `find` function which will return a paginated list of items, more info below on how to handle that.

```javascript
// Import the ARCustomer model and Customer service
import { ARCustomer, Customer } from "@rapidonz/rapido-api-client";

async function createCustomer() {
  // Create the new customer object and give it the ARCustomer type
  const newCustomer: ARCustomer = {
    CustomerCode: "CUST001",
    CustomerName: "Customer 001",
    Address1: "Address 001",
  };
  // Create the new customer via the API
  const created = await Customer.create(newCustomer);
  console.log({ created });
}

async function getCustomer() {
  // Get the customer by code
  const customer = await Customer.get("CUST001");
  console.log({ customer });
}

async function updateCustomer() {
  // Get the customer by code
  const customer = await Customer.get("CUST001");
  // Update the customer
  customer.CustomerName = "Customer 001 Updated";
  // Save the customer
  const updated = await Customer.update(customer);
  console.log({ updated });
}

async function deleteCustomer() {
  // Delete the customer by code
  const customer = await Customer.delete("CUST001");
  console.log({ customer });
}
```

#### Handling Paginated Results

The Accredo Web API comes with a default page size of 100 records. If you have more than 100 records you will need to handle the pagination. The high level functions will handle this for you. If you are using the odata4 services directly you will need to handle the pagination yourself.

Using the example below you can loop through all the customers in the system.

Once you have the first page of results you can check if there are any more pages. If there are more pages you can get the next page of results by passing the `nextPageParameters` to the `find` function.

```javascript
import { Customer } from "@rapidonz/rapido-api-client";

async function run() {
  try {
    let params = {};
    do {
      const { items, nextPageParameters } = await Customer.find({
        $filter: "Inactive eq FALSE",
      });
      params = nextPageParameters;
      for (const customer of items) {
        const cust = {
          name: customer.CustomerName,
          address: customer.Address1,
          code: customer.CustomerCode,
        };
        console.log(cust);
      }
    } while (params !== undefined);
  } catch (error) {
    console.log(error.response.data.error);
  }
  process.exit();
}
run();
```

#### Execute a SQL query

The Accredo Web API has a SQL endpoint that allows you to execute SQL queries. This is a great way to get data from the system that is not available via the odata4 services or if you want to join data from multiple tables.

```javascript
import { SQL } from "@rapidonz/rapido-api-client";

async function runSQL() {
  const query = "SELECT ProductCode FROM ICPROD";
  const result = await SQL.execute(query);
}
```

#### Running an Accredo Script

It's likely you already have lots of Accredo scripts that you use to automate your business. You can run these scripts via the Accredo Web API.

```javascript
import { Script } from "@rapidonz/rapido-api-client";

async function runScript() {
  const scriptName = "HelloWorld.pfs";
  const params = {
    ScriptArgs1: "Hello",
    ScriptArgs2: "World!",
    OutputStyle: "String",
  };
  const result = await Script.play(scriptName, params);
  console.log({ result });
}
```

### Using other odata4 services

For more advanced usage you can use the underlying odata4 services. These services are generated from the Accredo Web API. You can find the services in the `src/apis` folder.

`🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨`

`If you're needing to implement these services directly, please reach out to us as it would be great to add the functionality to the high level functions.`

`🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨`

`Request`

```javascript
import { ARCustomerApi } from "@rapidonz/rapido-api-client";

async function getCustomers() {
  // Create a new instance of the ARCustomerApi service
  const ArCustomerApi = new ARCustomerApi();
  const { data } = await ArCustomerApi.aRCustomerGet({
    // Odata4 parameters are passed as params
    params: {
      $filter: "Category1 eq 'SILVER'",
      $select: "CustomerCode,CustomerName,CreatedDate",
      $expand: "Contact($select=FullName,Role)",
      $orderby: "CustomerCode",
      $top: 5,
    },
  });
}
```

`Result`

```json
[
  {
    "@odata.etag": "9/88",
    "CustomerCode": "ASHENG",
    "CustomerName": "Ash Engineering Ltd",
    "CreatedDate": "2022-08-22",
    "Contact@odata.context": "https://accredo-api.rapido.co.nz/saturn/odata4/v1/Company('demo')/$metadata#ARCustomer('ASHENG')/Contact",
    "Contact": [
      {
        "FullName": "Donna",
        "Role": "Accounts"
      },
      {
        "FullName": "Eric",
        "Role": "Purchasing"
      }
    ]
  },
  {
    "@odata.etag": "2/61",
    "CustomerCode": "BOWEN",
    "CustomerName": "Bowen Paint & Paper Ltd",
    "CreatedDate": "2022-08-22",
    "Contact@odata.context": "https://accredo-api.rapido.co.nz/saturn/odata4/v1/Company('demo')/$metadata#ARCustomer('BOWEN')/Contact",
    "Contact": [
      {
        "FullName": "Peter Bowen",
        "Role": "Financial Controller"
      },
      {
        "FullName": "Mike Bowen",
        "Role": "Sales"
      }
    ]
  }
]
```

#### Create an entity

```javascript
import { ARCustomer, ARCustomerApi } from "@rapidonz/rapido-api-client";

async function createCustomer() {
  const ArCustomerApi = new ARCustomerApi();
  // Create a new customer object using the ARCustomer model
  const customer: ARCustomer = {
    CustomerCode: "RAPIDO",
    CustomerName: "Rapido SDK",
    EmailAddress: "adam@rapido.co.nz",
  };
  // Create the customer in Accredo using the ARCustomerApi service and the ARCustomer model
  const { data } = await ArCustomerApi.aRCustomerPost(customer);
}
```

#### Get and update an entity

```javascript
import { ARCustomerApi } from "@rapidonz/rapido-api-client";

async function updateCustomer() {
  const ArCustomerApi = new ARCustomerApi();
  // Here we are getting the customer by their customer code
  const { data } = await ArCustomerApi.aRCustomerCustomerCodeGet("ASHENG");
  // The etag is used to ensure that the record has not been updated since we last retrieved it
  const etag = data["@odata.etag"];
  // We can now update the customer
  const updateCustomer = await ArCustomerApi.aRCustomerCustomerCodePatch(
    "RAPIDO",
    {
      Address1: "123 Fake Street",
    },
    {
      headers: {
        "If-Match": etag,
      },
    }
  );
}
```

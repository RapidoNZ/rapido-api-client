import { ARCustomerApi } from "../api";
import { getNextParams } from "../helpers";
import { ARCustomer } from "../models";
const ArCustomerAPI = new ARCustomerApi();

async function statementFile(
  customerCode: string,
  format?:
    | "Adobe PDF"
    | "CSV File"
    | "Tab Delimited File"
    | "Quoted CSV File"
    | "Excel XLSX File"
) {
  const statement = await ArCustomerAPI.aRCustomerCustomerCodePrintStatementGet(
    customerCode,
    "Disk File",
    "",
    format,
    "",
    "",
    "attachment",
    {
      responseType: "arraybuffer",
    }
  );
  const { data } = statement;
  return data;
}

async function find(params: any) {
  const customer = await ArCustomerAPI.aRCustomerGet({
    params,
  });
  const { data } = customer;
  const result = {
    items: data.value,
    nextPageParameters: getNextParams(data, params),
  };
  return result;
}

async function get(customerCode: string, params: any = {}) {
  const customer = await ArCustomerAPI.aRCustomerCustomerCodeGet(customerCode, {
    params,
  });
  const { data } = customer;
  return data;
}

async function create(payload: ARCustomer) {
  const customer = await ArCustomerAPI.aRCustomerPost(payload);
  const { data } = customer;
  return data;
}

async function _delete(customerCode: string) {
  const customer = await ArCustomerAPI.aRCustomerCustomerCodeDelete(
    customerCode
  );
  const { data } = customer;
  return data;
}

async function update(customerCode: string, payload: ARCustomer) {
  const getLatestCustomer = await get(customerCode, {
    $select: "CustomerCode",
  });
  const etag = getLatestCustomer["@odata.etag"];
  const { data } = await ArCustomerAPI.aRCustomerCustomerCodePatch(
    customerCode,
    payload,
    {
      headers: {
        "If-Match": etag,
      },
    }
  );
  return data;
}

export class Customer {
  static get = get;
  static update = update;
  static create = create;
  static delete = _delete;
  static find = find;
  static statementFile = statementFile;
}

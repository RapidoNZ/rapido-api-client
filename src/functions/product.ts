import { ICProductApi } from "../api";
import { getNextParams } from "../helpers";
import { ICProduct } from "../models";
const IcProductApi = new ICProductApi();

async function find(params: any) {
  const products = await IcProductApi.iCProductGet({
    params,
  });
  const { data } = products;

  const result = {
    items: data.value,
    nextPageParameters: getNextParams(data, params),
  };
  return result;
}

async function get(productCode: string, params: any = {}) {
  const product = await IcProductApi.iCProductProductCodeGet(productCode, {
    params,
  });
  const { data } = product;
  return data;
}

async function create(payload: ICProduct) {
  const product = await IcProductApi.iCProductPost(payload);
  const { data } = product;
  return data;
}

async function _delete(productCode: string) {
  const product = await IcProductApi.iCProductProductCodeDelete(productCode);
  const { data } = product;
  return data;
}

async function update(productCode: string, payload: ICProduct) {
  const getLatestProduct = await get(productCode, {
    $select: "ProductCode",
  });
  const etag = getLatestProduct["@odata.etag"];
  const { data } = await IcProductApi.iCProductProductCodePatch(
    productCode,
    payload,
    {
      headers: {
        "If-Match": etag,
      },
    }
  );
  return data;
}

export class Product {
  static get = get;
  static delete = _delete;
  static update = update;
  static create = create;
  static find = find;
}

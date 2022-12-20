import { DefaultApi } from "../api";

async function getAbout() {
  const SystemApi = new DefaultApi();
  const { data } = await SystemApi.aboutGet();
  return data;
}

async function getAppName() {
  const SystemApi = new DefaultApi();
  const { data } = await SystemApi.appNameGet();
  return data;
}

export class SystemInfo {
  static getAbout = getAbout;
  static getAppName = getAppName;
}

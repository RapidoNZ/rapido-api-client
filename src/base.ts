/* tslint:disable */
/* eslint-disable */
/**
 * Accredo Web Service
 * Accredo Web Service
 *
 * The version of the OpenAPI document: 5.0.11.125
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from "./configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
import { getAccessToken } from "./auth";
const fs = require("fs");
let addedInterceptorResponse = false;
let addedInterceptorRequest = false;
let loadedConfigurationFirstTime = false;

export const BASE_PATH =
  "https://accredo-api.rapido.co.nz/saturn/odata4/v1/Company('demo')".replace(
    /\/+$/,
    ""
  );

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
  url: string;
  options: AxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  protected configuration: Configuration | undefined;
  constructor(
    protected basePath: string = BASE_PATH,
    protected axios: AxiosInstance = globalAxios
  ) {
    try {
      const configurationFile = fs.readFileSync("./accredoConfig.json", "utf8");
      const configuration = JSON.parse(configurationFile);
      if (!loadedConfigurationFirstTime) {
        console.log("Configuration file found... Loading!");
        console.log({
          url: configuration.basePath,
          username: configuration.username,
        });
      }
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
      loadedConfigurationFirstTime = true;
    } catch (error) {
      if (!loadedConfigurationFirstTime) {
        console.error("No configuration file found..!");
      }
      const accredoConfigEnv = process.env.ACCREDO_CONFIG;
      if (accredoConfigEnv) {
        const configuration = JSON.parse(accredoConfigEnv);
        if (!loadedConfigurationFirstTime) {
          console.log(
            "Configuration file found from enivronment varaible... Loading!"
          );
          console.table([
            { url: configuration.basePath, username: configuration.username },
          ]);
        }
        this.configuration = configuration;
        this.basePath = configuration.basePath || this.basePath;
        loadedConfigurationFirstTime = true;
      } else {
        console.error(
          "No configuration file found from enivronment varaible..!"
        );
        console.log(
          "Please create a configuration file or set the ACCREDO_CONFIG environment variable..!"
        );
        console.error("Exiting..!");
        process.exit();
      }
    }
    if (!addedInterceptorResponse) {
      axios.interceptors.request.use(async (config) => {
        if (config.url.includes("/Print")) {
          config.url = config.url.replace("?(", "(");
        }
        if (!config.url.includes("/oauth2/v1/token")) {
          const accessToken = await getAccessToken(this.configuration, false);
          if (accessToken && accessToken.length > 0) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
        }
        return config;
      });
      addedInterceptorResponse = true;
    }
    if (!addedInterceptorRequest) {
      axios.interceptors.response.use(
        (response) => {
          return response;
        },
        // Here we handle the 401 error and retry the request after getting a new token
        async (error) => {
          if (error?.response?.status === 401) {
            const accessToken = await getAccessToken(this.configuration, true);
            if (accessToken && accessToken.length > 0) {
              console.log("AUTH: 401 error - retrying");
              error.config.headers.Authorization = `Bearer ${accessToken}`;
              return axios.request(error.config);
            }
          }
          throw error;
        }
      );
      addedInterceptorRequest = true;
    }
  }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: "RequiredError" = "RequiredError";
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

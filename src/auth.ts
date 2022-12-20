/* tslint:disable */

import { Configuration } from "./configuration";
const axios = require("axios");
const fs = require("fs");
let token: any = null;
let tokenPathSave = process.env.TOKEN_PATH || "./token.json";

/* eslint-disable */
async function getAccessToken(config: Configuration, fromError = false) {
  if (!fromError) {
    try {
      const tokenFile = fs.readFileSync(tokenPathSave, "utf8");
      token = tokenFile ? JSON.parse(tokenFile) : null;
      // We have a token so lets return it
      if (
        token?.access_token.length > 0 &&
        token.expires_at > new Date().getTime()
      ) {
        // console.log(`AUTH: Token found for ${config.username} and is valid`);
        return token.access_token;
      }
    } catch (error) {
      console.log("AUTH: No token file found");
    }
  }

  // We don't have what we need to generate the token exit and let the user know
  const { oauthPath, username, password, clientId } = config;
  if (!oauthPath || !username || !password || !clientId) {
    console.error("AUTH: Missing configuration for OAuth");
    process.exit();
  }

  // We have a token but it has expired so lets generate a new one
  if (
    token?.access_token.length > 0 &&
    token.expires_at <= new Date().getTime()
  ) {
    console.log(`AUTH: Token has expired for ${username}`);
    token = await refreshToken(config);
    console.log(`AUTH: Refreshed token success for ${username}`);
    return token.access_token;
  }

  // We will generate a new token as we don't have one
  token = await getNewToken(config);
  console.log(`AUTH: New token generated for ${username}`);
  return token.access_token;
}

async function getNewToken(config: Configuration) {
  const { oauthPath, username, password, clientId } = config;
  const response = await axios.post(oauthPath, {
    grant_type: "password",
    client_id: clientId,
    username: username,
    password: password,
  });
  const newToken = response.data;
  newToken.expires_at = new Date().getTime() + newToken.expires_in * 1000;
  try {
    fs.writeFileSync(tokenPathSave, JSON.stringify(newToken));
  } catch (error) {
    console.log("AUTH: Error writing token file");
  }
  return newToken;
}

async function refreshToken(config: Configuration) {
  const { oauthPath, clientId } = config;
  try {
    const response = await axios.post(
      oauthPath,
      {
        client_id: clientId,
        refresh_token: token.refresh_token,
        grant_type: "refresh_token",
      },
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
          "Accept-Encoding": "gzip",
        },
      }
    );
    const newToken = response.data;
    newToken.expires_at = new Date().getTime() + newToken.expires_in * 1000;
    try {
      fs.writeFileSync(tokenPathSave, JSON.stringify(newToken));
    } catch (error) {
      console.log("AUTH: Error writing token file");
    }
    return newToken;
  } catch (error) {
    console.error(
      `AUTH: Error refreshing token:`,
      error?.response?.statusText,
      error?.response?.status,
      error?.response?.data
    );
    console.log("AUTH: Error refreshing token... Will try to get a new token");
    return getNewToken(config);
  }
}

export { getAccessToken };

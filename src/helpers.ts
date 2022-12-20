function getNextParams(data: any, params: any) {
  let skipToken = "";
  // @ts-ignore
  if (data && data["@odata.nextLink"]) {
    // @ts-ignore
    console.log("data", data["@odata.nextLink"]);
    skipToken = decodeURIComponent(
      // @ts-ignore
      data["@odata.nextLink"].split("$skiptoken=")[1]
    );
  } else {
    return undefined;
  }
  const nextPageParameters = {
    ...params,
    $skiptoken: skipToken,
  };
  return nextPageParameters;
}

export { getNextParams };

import { ScriptExecutionApi } from "../api";

async function play(scriptName: string, body: any) {
  const ExecutionApi = new ScriptExecutionApi();
  const payload = {
    ScriptFileName: scriptName,
    ...body,
  };
  const { data } = await ExecutionApi.scriptExecutionApiPost(
    scriptName,
    payload
  );
  return data;
}

export class Script {
  static play = play;
}

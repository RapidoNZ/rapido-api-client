import { SQLExecutionApi } from "../api";

async function execute(query: string) {
  const ExecutionApi = new SQLExecutionApi();
  const { data } = await ExecutionApi.sqlExecutionApiPost(query);
  return data.value;
}

export class SQL {
  static execute = execute;
}

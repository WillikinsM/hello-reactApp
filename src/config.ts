import dotenv, { DotenvParseOutput } from "dotenv";
import _ from "lodash";

const result = dotenv.config();

let envs: DotenvParseOutput;

if (!("error" in result)) {
  envs = result.parsed!;
} else {
  envs = {};
  _.each(process.env, (value: any, key: any) => (envs[key] = value));
}

export { envs };

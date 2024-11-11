import { RunResult } from "better-sqlite3";

export type TImageItemPromise = Promise<string | null>;
export type TImageItem = string | null;

export interface IReturnProductAction {
  ok: boolean;
  error: string | null | object;
  data: RunResult | object;
}

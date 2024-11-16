export type TImageItemPromise = Promise<string | null>;
export type TImageItem = string | null;

export interface IReturnProductAction {
  ok: boolean;
  error: string | null | object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

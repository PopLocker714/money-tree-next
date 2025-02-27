import { TKassa } from "t-kassa-api";

export const tkassa = new TKassa(
  process.env.TK_TERMINAL_KEY || "",
  process.env.TK_PASSWORD || ""
);

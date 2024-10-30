export {};

type TBoolEnv = "true" | "false" | undefined;
type TStringEnv = string | undefined;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: TStringEnv;
      DB_FILE_NAME: TStringEnv;
      ADMIN_EMAIL: TStringEnv;
      ADMIN_PASSWORD: TStringEnv;
      BOT_TOKEN: TStringEnv;
      BOT_CHAT_ID: TStringEnv;
    }
  }
}

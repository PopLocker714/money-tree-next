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
      AUTH_EXP_TIME: TStringEnv;
      PROJECT_SUPABASE_URL: TStringEnv;
      PROJECT_SUPABASE_KEY: TStringEnv;
      PROJECT_SUPABASE_ID: TStringEnv;
      SMTP_HOST: TStringEnv;
      SMTP_PORT: TStringEnv;
      SMTP_USER: TStringEnv;
      SMTP_PASSWORD: TStringEnv;
    }
  }
}

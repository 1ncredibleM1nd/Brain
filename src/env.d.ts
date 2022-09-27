interface ImportMetaEnv {
  VITE_APP_API_URL: string;
  VITE_APP_ACCOUNT_URL: string;
  VITE_APP_AUTH_URL: string;
}

type Unpacked<T> = T extends (infer U)[] ? U : T;

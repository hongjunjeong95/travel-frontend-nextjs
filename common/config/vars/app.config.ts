export const AppConfig = {
  name: process.env.NEXT_PUBLIC_NAME,
  description: process.env.NEXT_PUBLIC_VERSION,
  version: process.env.NEXT_PUBLIC_DESCRIPTION,
  port: parseInt(process.env.PORT || "3000"),
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL,
};

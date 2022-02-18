import { chain, nextSafe, provideHashesOrNonce } from "@next-safe/middleware";
import parser from "ua-parser-js";

const isDev = process.env.NODE_ENV === "development";

const nextSafeWithStrictDynamic = nextSafe((req) => {
  const uaString = req.headers.get("user-agent");

  const ua = uaString ? parser(uaString) : undefined;
  // don't use strict-dynamic on `next dev` and Safari
  // Browser support of strict-dynamic: https://caniuse.com/?search=strict-dynamic
  // https://web.dev/strict-csp/#step-4:-add-fallbacks-to-support-safari-and-older-browsers
  const strictDynamic =
    !isDev && !ua?.browser?.name?.includes("Safari")
      ? {
          "script-src": [`'strict-dynamic'`, "https:", `'unsafe-inline'`],
        }
      : {};
  return {
    isDev,
    contentSecurityPolicy: {
      ...strictDynamic,
      "frame-src": ["pinecast.com"],
      "img-src": ["'self'", "data:"],
    },
    // customize as you need: https://trezy.gitbook.io/next-safe/usage/configuration
  };
});

export default chain(nextSafeWithStrictDynamic, provideHashesOrNonce);

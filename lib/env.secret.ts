import "server-only";

function checkValue(value: string | undefined, name: string, url: string) {
  if (!value) {
    throw new Error(
      `Missing Environment Variable: ${name}\nVisit ${url} to learn how you can generate your own API keys`
    );
  }
  return value;
}

export const token = checkValue(
  process.env.SANITY_ACCESS_TOKEN,
  "SANITY_ACCESS_TOKEN",
  "https://sanity.io"
);

export const hookSecret = process.env.SANITY_HOOK_SECRET

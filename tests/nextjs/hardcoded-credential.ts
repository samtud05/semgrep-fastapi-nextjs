// ruleid: nextjs-hardcoded-credential
const apiKey = "EXAMPLE-not-a-real-key-load-from-env";

// ruleid: nextjs-hardcoded-credential
const password = "hunter2-in-source";

// ok: nextjs-hardcoded-credential
const apiKey2 = process.env.API_KEY;

// ok: nextjs-hardcoded-credential
const label = "just a display string";

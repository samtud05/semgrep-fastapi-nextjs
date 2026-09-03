const ALLOWED = new Set(["api.internal.example.com"]);

export async function proxyBad(req: any) {
  // ruleid: nextjs-ssrf-server-fetch-from-request
  return fetch(req.query.url);
}

export async function proxyBadBody(req: any) {
  // ruleid: nextjs-ssrf-server-fetch-from-request
  return fetch(req.body.target);
}

export async function proxyGood(req: any) {
  const target = new URL(req.query.url);
  if (!ALLOWED.has(target.host)) throw new Error("host not allowed");
  // ok: nextjs-ssrf-server-fetch-from-request
  return fetch(target.toString());
}

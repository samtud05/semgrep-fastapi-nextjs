// ruleid: nextjs-secret-in-next-public-env
const stripeSecret = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;

// ruleid: nextjs-secret-in-next-public-env
const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

// ok: nextjs-secret-in-next-public-env
const publicUrl = process.env.NEXT_PUBLIC_SITE_URL;

// ok: nextjs-secret-in-next-public-env
const serverSecret = process.env.STRIPE_SECRET_KEY;

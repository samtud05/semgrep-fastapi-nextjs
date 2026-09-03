# semgrep-fastapi-nextjs

Custom [Semgrep](https://semgrep.dev) rules for the vulnerability patterns that
actually show up in a **FastAPI + Next.js** codebase — the stack-specific mistakes
the generic rulesets tend to miss. Every rule ships with a test file proving it
fires on the bad case and stays quiet on the fixed one.

Detection-as-code: the rules live in git, run in CI, and fail the build on a new
finding — so a regression in one of these patterns is caught at pull-request time,
not in a pentest six months later.

## Rules

### FastAPI (Python)

| Rule | Catches | Severity | CWE |
|------|---------|----------|-----|
| `fastapi-cors-wildcard-with-credentials` | `allow_origins=["*"]` together with `allow_credentials=True` | ERROR | 942 |
| `fastapi-sqlalchemy-text-fstring` | SQL built with an f-string / concatenation into `text()` or `execute()` | ERROR | 89 |
| `fastapi-jwt-signature-verification-disabled` | `jwt.decode(...)` with signature verification turned off | ERROR | 347 |
| `fastapi-hardcoded-secret-key` | signing/secret keys assigned a string literal | WARNING | 798 |
| `fastapi-debug-true` | `debug=True` on the app or server | WARNING | 489 |

### Next.js (TypeScript / JavaScript / JSX)

| Rule | Catches | Severity | CWE |
|------|---------|----------|-----|
| `nextjs-dangerously-set-inner-html-dynamic` | `dangerouslySetInnerHTML` from a non-literal (XSS) | ERROR | 79 |
| `nextjs-secret-in-next-public-env` | a secret read from a `NEXT_PUBLIC_` var (shipped to the browser) | ERROR | 200 |
| `nextjs-hardcoded-credential` | API keys / tokens / passwords assigned a string literal | WARNING | 798 |
| `nextjs-ssrf-server-fetch-from-request` | server-side `fetch()` on a request-controlled URL (SSRF) | WARNING | 918 |

## Run it

```bash
pip install semgrep

# scan a project with these rules
semgrep --config rules/ path/to/your/app
```

## Verify the rules

Each rule has a paired test file under `tests/`, annotated with Semgrep's
`# ruleid:` (must match) and `# ok:` (must not match) markers. One command checks
every rule against every case:

```bash
semgrep --test --config rules/ tests/
```

A green run is the guarantee that each rule fires where it should and — just as
important — stays silent on the correctly-written code beside it. Low false-positive
rate is the whole game with static analysis; the `# ok:` cases are how that's proven.

## In CI

`.github/workflows/semgrep.yml` runs the ruleset on every push and pull request and
fails on any ERROR-level finding:

```yaml
- run: semgrep --config rules/ --error --severity ERROR .
```

Point `--config` at this repo (or vendor the `rules/` directory into your app) to
gate your own pipeline on the same checks.

## Why these rules

Generic Semgrep registries are broad but shallow on any one framework. These are
narrow and deep: each encodes a mistake that is easy to make specifically in
FastAPI or Next.js and expensive to catch by review. The `NEXT_PUBLIC_` leak and
the missing-`Depends()`-class authorization gaps, in particular, are invisible in a
diff unless you already know to look for them.

## License

MIT

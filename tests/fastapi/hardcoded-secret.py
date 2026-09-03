import os

# ruleid: fastapi-hardcoded-secret-key
SECRET_KEY = "super-secret-do-not-commit"

# ruleid: fastapi-hardcoded-secret-key
JWT_SECRET = "hs256-signing-key"

# ok: fastapi-hardcoded-secret-key
SECRET_KEY = os.environ["SECRET_KEY"]

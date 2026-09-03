import os
import uvicorn
from fastapi import FastAPI

# ruleid: fastapi-debug-true
app = FastAPI(debug=True)

# ok: fastapi-debug-true
app_ok = FastAPI(debug=os.getenv("DEBUG") == "1")

if __name__ == "__main__":
    # ruleid: fastapi-debug-true
    uvicorn.run(app, debug=True)

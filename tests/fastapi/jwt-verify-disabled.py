import jwt


def decode_bad(token, key):
    # ruleid: fastapi-jwt-signature-verification-disabled
    return jwt.decode(token, key, options={"verify_signature": False})


def decode_bad_legacy(token, key):
    # ruleid: fastapi-jwt-signature-verification-disabled
    return jwt.decode(token, key, verify=False)


def decode_good(token, key):
    # ok: fastapi-jwt-signature-verification-disabled
    return jwt.decode(token, key, algorithms=["RS256"])

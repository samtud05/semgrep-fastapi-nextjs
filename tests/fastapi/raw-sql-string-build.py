from sqlalchemy import text


def lookup(conn, user_id):
    # ruleid: fastapi-sqlalchemy-text-fstring
    conn.execute(text(f"SELECT * FROM users WHERE id = {user_id}"))

    # ruleid: fastapi-sqlalchemy-text-fstring
    conn.execute("SELECT * FROM users WHERE id = " + user_id)

    # ok: fastapi-sqlalchemy-text-fstring
    conn.execute(text("SELECT * FROM users WHERE id = :id"), {"id": user_id})

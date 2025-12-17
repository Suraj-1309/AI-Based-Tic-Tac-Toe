from app import app as application

# This module exposes `application` for WSGI servers like gunicorn/waitress.
# Example (Linux): gunicorn -w 2 -b 0.0.0.0:5000 wsgi:application
# Example (Windows): waitress-serve --listen=0.0.0.0:5000 wsgi:application

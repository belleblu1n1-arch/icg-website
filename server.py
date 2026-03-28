"""Threaded HTTP server for local development."""
import http.server
import socketserver
import sys
import os
import functools

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIR = os.path.dirname(os.path.abspath(__file__))

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIR)

class ThreadedServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

print(f"Serving {DIR} on port {PORT} (threaded)")
ThreadedServer(("", PORT), handler).serve_forever()

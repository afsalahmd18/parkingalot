# SRM Parking — Frontend-only demo

This is a client-side, single-page demo of a parking reservation system implemented with only HTML, CSS and JavaScript. It uses localStorage to persist data in your browser and QRCode.js (CDN) to generate QR codes.

Features implemented:
- User register / login (stored locally)
- Multiple parking areas and slot visualization
- Time-based reservations with overlap checks
- QR code generation per reservation
- Simulated entry/exit with automated fine calculation (₹50/hour after 10 minute grace)
- Feedback form

How to run:
1. Open `public/index.html` in a browser (double-click or use a static server).
2. Register and login. Make reservations and use the QR panel to simulate entry and exit.

Notes and limitations:
- This is a front-end only demo (no backend, no real authentication). Do not use for production.
- Data is stored in browser localStorage and is not shared between devices or browsers.
- Security-sensitive features (encryption, JWT, server-side checks, audit logs) are not implemented in this demo.

If you want, I can now: add a backend with Express + MongoDB, implement JWT authentication, and secure QR handling.

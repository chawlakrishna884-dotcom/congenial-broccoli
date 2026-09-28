# PyHub animated landing page

A Python-inspired, responsive landing page built with Flask, HTML, CSS, and JavaScript. Includes animated Python artwork, floating code windows, glowing effects, feature cards, and mobile styling.

## Run locally
```bash
pip install -r requirements.txt
python app.py
```
Open http://localhost:5000

## Deploy on GitHub + Railway
1. Create a new GitHub repository and upload all files in this folder.
2. In Railway, choose **New Project → Deploy from GitHub Repo**.
3. Select your repository and authorize Railway if prompted.
4. Railway detects the Python app and uses `railway.json` / `Procfile` to start it.
5. In Railway, open your service's **Settings → Networking** and generate a domain.

The site is a front-end demo. The sign-in and feature links are illustrative; there is no user database or payment processing included.

# Fix Exposed API Key – Do These Steps Now

You had your Gemini API key in the repo (and possibly in Git history). Follow this order.

---

## Step 1: Revoke the exposed key (do this first)

1. Go to **Google AI Studio**: https://aistudio.google.com/apikey  
2. Find the key(s) you used (you had more than one in the project).  
3. **Delete/revoke** those keys so they stop working.  
4. Click **Create API key** and create a **new** key.  
5. Copy the new key and keep it somewhere safe (e.g. password manager). **Do not put it in the repo.**

Once the old keys are revoked, it doesn’t matter that they were in GitHub history – they’re useless.

---

## Step 2: Remove .env from Git (stop tracking them)

In PowerShell, in your project folder:

```powershell
cd "C:\Users\User\Desktop\test - Copy"
git rm --cached .env
git rm --cached chatbot/.env
```

If you see “fatal: pathspec '.env' did not match any files”, that file was never committed – that’s fine, skip that line.

Then commit and push:

```powershell
git add .
git commit -m "Remove .env from repo and hardcoded API key"
git push origin main
```

From now on, `.env` and `chatbot/.env` are in `.gitignore`, so they won’t be committed again.

---

## Step 3: Put the new key only in Vercel

1. Open **Vercel** → your project → **Settings** → **Environment Variables**.  
2. Edit **GEMINI_API_KEY**: delete the old value and paste your **new** key. Save.  
3. Go to **Deployments** → **⋯** on the latest deployment → **Redeploy**.

Your live site will use the new key; the old one is already revoked.

---

## Step 4: Update your local .env files (optional, for local dev)

- In your project root: open `.env` and replace the value with the **new** key.  
- In `chatbot/.env`: same thing – use the **new** key only.

Never commit these files again (they’re now in `.gitignore`).

---

## Summary

| Step | Action |
|------|--------|
| 1 | Revoke old key(s) in Google AI Studio, create a new key |
| 2 | `git rm --cached .env` and `chatbot/.env`, commit and push |
| 3 | Set new key in Vercel Environment Variables and redeploy |
| 4 | Update local `.env` and `chatbot/.env` with new key (for local dev only) |

After this, the exposed keys are disabled and your project uses only the new key in safe places (Vercel + local env files, not in Git).

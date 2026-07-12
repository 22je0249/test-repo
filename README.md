# 🧪 Sample Target Project for AIOps Copilot Testing

This is a sample Node.js application containing a deliberate bug and a pre-configured GitHub Actions CI workflow. You can use it to test the incident response pipeline of your **AIOps Copilot** platform.

---

## 🐞 Deliberate Defect

The file `src/discount.js` contains a logic bug where a user type check for `"premium"` is misspelled as `"premuim"`:

```javascript
// src/discount.js
if (userType === 'premuim') {
  return price * 0.20;
}
```

Because of this typo, the unit test `tests/discount.test.js` asserting a 20% discount for premium users will fail.

---

## 🛠️ Testing Guide

### Step 1: Create a GitHub Repository
1. Create a new repository on GitHub (e.g., `sample-incident-app`).
2. Do **not** initialize it with a README or license (keep it completely empty).

### Step 3: Push this Project to GitHub
Initialize git and push this folder to your repository:

```bash
git init
git add .
git commit -m "Initial commit with CI workflow and deliberate bug"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/sample-incident-app.git
git push -u origin main
```

### Step 4: Trigger the Workflow Failure
Once you push, the GitHub Actions runner will trigger the `Node.js CI` workflow under `.github/workflows/ci.yml`.
This workflow will install dependencies and run `npm test`, which is guaranteed to fail due to the discount calculation logic error.

### Step 5: Verify AIOps Copilot Incident Response
When the workflow fails:
1. **GitHub Webhook** triggers your API Gateway, sending the event payload to the `WebhookReceiver` Lambda.
2. The `IncidentProcessor` Lambda retrieves the run logs from GitHub/S3.
3. The logs are analyzed using Groq's LLM (`llama-3.3-70b-versatile`) coupled with pgvector context.
4. An automated diagnostic analysis and confidence rating are generated.
5. Depending on the confidence and risk (this is a low-risk logic fix):
   - **Auto PR**: An automated Pull Request will be created in your GitHub repository to correct the typo from `"premuim"` to `"premium"`.
   - **Email Notification**: Amazon SES will send an HTML email to the alert/admin email showing the incident details, Groq diagnosis, and a one-click approve/reject link.

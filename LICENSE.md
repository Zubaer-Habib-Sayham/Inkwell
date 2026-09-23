
This README is deliberately honest about the database situation.

**Don't pretend it's persistent when it isn't.** That's actually better for a portfolio project.

---

# Step 8 — Make one final `package.json` check

Your `package.json` should look approximately like:

```json id="83625"
{
  "name": "inkwell-blog",
  "version": "1.0.0",
  "description": "A minimalist personal publishing platform built with Node.js, Express and EJS.",
  "type": "module",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^5.1.0"
  }
}

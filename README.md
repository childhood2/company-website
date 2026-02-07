# Chamaeleon Software

_September 07, 2020_

This is a commisioned build for a Startup IT Company, Chamaeleon Software, as their companies' website landing page and showcase of their products.

The build is deployed [here](https://chamaeleon.io).

### Deploy on Railway

1. Push your code to GitHub (this repo: `https://github.com/childhood2/company-website`).
2. Go to [railway.com](https://railway.com) and sign in (GitHub login supported).
3. Click **New Project** → **Deploy from GitHub repo** and select `childhood2/company-website`.
4. Railway will detect the Node.js app and use:
   - **Build:** `npm run build`
   - **Start:** `npm start` (serves the production build with SPA routing)
5. After deploy, open **Settings** → **Networking** → **Generate Domain** to get a public URL.

**Local development:** Use `npm run dev` for the React dev server (hot reload). Use `npm start` only after `npm run build` to test the production build locally.

**Note:** The repo is deployed without `package-lock.json` so Railway runs `npm install` (avoids `npm ci` sync errors). For a reproducible lock file locally, run `npm install` and commit `package-lock.json`; Railway will then use `npm ci` on future deploys.

### Technologies used

- ReactJS - Front-end
- Sass - Styling

Here are some Screenshots of the application. [See More](https://www.figma.com/file/zBXeFQDOvzYH2xl839JHRU/Chamaeleon-Website).

<br />
<strong>Expertise Tab</strong>
<img src="./src/assets/readme/1.2.png">
<img src="./src/assets/readme/1.png">

<br />
<strong>Out Craft Tab</strong>
<img src="./src/assets/readme/2.2.png">
<img src="./src/assets/readme/2.png">
<img src="./src/assets/readme/4.png">

<br />
<strong>Contact Us Tab</strong>
<img src="./src/assets/readme/3.png">

<div align="center">
    <p>COPYRIGHT © 2020</p>
    <p>Chamaeleon Software, All Rights Reservered</p>
</div>

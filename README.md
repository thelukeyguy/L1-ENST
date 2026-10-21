# ENST L1 Portal - Student & Resource Hub

An educational mobile-friendly Web Application designed for First Year (L1) Students at **École Nationale Supérieure du Tourisme (ENST)**.

---

## 📁 File Structure

1. **`index.html`** - Primary HTML5 responsive interface (Hero banner, News grid, Search, Module Filter chips, Upload Modal, Preview Modal).
2. **`data.js`** - Data store containing:
   - The 9 exact ENST L1 Modules (*Management, Comptabilité, Droit, English, Monuments Touristiques, Marketing, Informatique, Mathematics, Español*).
   - Seed course/TD resources and self-assessment quiz questions.
   - Initial news announcements.
   - Bilingual (French & English) translations dictionary.
3. **`README.md`** - Setup, customization, and mobile `.APK` build instructions.

---

## 🚀 Features

- **Header Greeting:** Front banner displaying `"Hello ENST Student 👋"`.
- **9 Core ENST L1 Modules:** Clean chip-based module filters with custom icons.
- **News & Announcements Section:** Located on the main page for instant cohort updates.
- **Bilingual Interface:** Switch instantly between French (default) and English.
- **PDF Upload & Quiz Builder:** Interactively upload course summaries and attach self-assessment quizzes.
- **Bookmarks & LocalStorage:** Save favorite courses directly to the device.

---

## 📱 How to Convert into an Android `.APK` File

### Option 1: Fast Web-to-APK Converter (No coding needed)
1. Upload these files to a free host like **GitHub Pages**, **Vercel**, or **Netlify**.
2. Go to **[Median.co](https://median.co/)** or **[Web2App](https://www.web2app.ir/)**.
3. Paste your public web link.
4. Set App Name: `ENST L1 Portal` and upload an icon.
5. Click **Build APK** and download the installable `.apk` file to your Android phone!

### Option 2: Capacitor (Native Build via Android Studio)
1. Initialize project in Node.js:
   ```bash
   npx create-capacitor-app enst-l1-app
   cd enst-l1-app
   ```
2. Copy `index.html` and `data.js` into the `www` or public directory.
3. Add Android platform & compile:
   ```bash
   npm install @capacitor/android
   npx cap add android
   npx cap open android
   ```
4. In Android Studio, click **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
# Prasantha Abeykoon — portfolio

Next.js 14 (App Router) + TypeScript. No UI libraries.

Typography uses Apple's typefaces through system font stacks: SF Pro for text and
New York for headlines. They render natively on iPhone, iPad and Mac, and fall back
to Inter / Georgia elsewhere.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content
All text lives in `lib/data.ts`. The portrait is served responsively from `public/profile-800.jpg`,
`public/profile-1200.jpg` and a 3840px master in `public/profile-4k.jpg`. Replace all three
with the same crop at matching widths if you swap the photo.

## Deploy
Push to GitHub and import into Vercel.

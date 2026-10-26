# Urbandale Lawn Solutions, Inc.: Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.urbandalelawnsolutions.com (Urbandale Lawn Solutions, Inc., Urbandale / Des Moines, Iowa).
Preview: https://uls.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build. Content and layout are in `src/App.jsx` (all text is in constants at the top), styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `urbandale-lawn-solutions` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `uls.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, defaults to 2026-11-30), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the free-estimate form (`api/contact.js`; without them the form answers in demo mode). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Their 2009 logo (the glossy green ball over the "URBANDALE LAWN SOLUTIONS, INC" wordmark) is used as is: the top half in the header and footer, the full logo card (with phone and "Serving Urbandale, Des Moines, and surrounding areas") in the hero. The green ball is the favicon.
- Colors are the original site's black and lime (#a1d64d), deepened with two turf greens and an off-white paper for the light sections.
- Big Shoulders Display (condensed, heavy, uppercase, echoing the logo's lettering) with Figtree for body text.
- Lawn motif: mowing stripes behind the hero, on the eyebrows, offer cards and footer edge; the logo's green ball reappears as the numbered markers on the 5-application "season plan" track and as the round frame around the aeration photo; a line diagram shows the perimeter pest barrier (3 ft up, 4–6 ft out).
- Section order: lime top bar → header with phone → hero ("Your consultant for a beautiful lawn.") → the 5-step season plan → 13 services in 4 groups (with landscape materials) → perimeter pest barrier and the 33 pests it controls → sign-up offers, neighborhood pricing and referral credit → about (since 2000, mission, why hire us, equipment) → "Our fan club" testimonials → mowing rules and FAQ → free estimate (phone, email, area, form, payment terms) → footer.

## What changed from the current site

- The site is a 2012 FrontPage-style table layout ("Last updated 03/07/2012") that doesn't adapt to phones; the navigation is 19 GIF button images, so search engines and screen readers can't read the service names. The concept is responsive and every service is real text.
- Every page repeats the same header, nav and payment boilerplate; the knowledge (5-step program, pest barrier details, aeration and mowing advice, FAQ, offers, neighborhood pricing) is now on one page in short sections.
- The testimonials were hidden on a "Referrals" page and the owner's name only appeared at the bottom of About; both are now on the home page.
- Phone and free-estimate form are in the top bar, header, hero and contact section; email is a working link.
- Typos on the old pages ("ware patterns", "ore or more", "sights that require", "for for") are cleaned up.
- Checked at 1280px and 390px with no sideways scrolling.

## Owner should confirm

- Hours: none are listed on the current site. The concept says "Call anytime" (from the About page: "please feel free to call anytime").
- Service area: the logo says "Urbandale, Des Moines, and surrounding areas". Testimonials mention West Des Moines, Johnston, Clive and Waukee; confirm whether to list towns.
- The four sign-up offers (free treatment, free mowing, third bug treatment free, free design with install), neighborhood pricing and the $20 referral credit are from 2012 pages; confirm they're still offered.
- Products and equipment named on the site: Dimension, Trimec, Talpirid, Permagreen Magnum. Confirm they're still used.
- "Designers have a 5-year degree in Landscape Architecture from Iowa State University" and "state certified applicators": confirm still accurate.
- Payment terms (2% monthly service charge, $5.00 minimum, after 30 days).
- The 5-application vs. 6-application programs: only the 5-step program is described in detail on the site.
- Reviews: the 5 quotes are word for word (including spelling) from the "Our Fan Club" section of their Referrals page and are labeled "From our website". The page links to Google rather than showing a rating.
- The site has no awards or badges to carry over.

## Photos

The logo and photos (aeration cores, mower, landscaped homes, Permagreen spreader) are taken from urbandalelawnsolutions.com. They are small (about 400–535px wide) and most look like stock or manufacturer images, so the owner's own job photos should replace them before launch.

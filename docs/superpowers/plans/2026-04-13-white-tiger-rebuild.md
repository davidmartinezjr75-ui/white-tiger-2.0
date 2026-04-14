# White Tiger Marketing Website Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild all four pages of the White Tiger Marketing site to strip fabricated social proof, retarget copy exclusively to contractors/handyman businesses, and replace fake case studies with honest pilot offer and before/after sections.

**Architecture:** All pages are standalone HTML files (Vite multi-page build). No shared includes — nav and footer are duplicated in each file. Changes are surgical HTML edits. No new files, no CSS changes, no JS changes.

**Tech Stack:** Vite 7, TypeScript (src/main.ts — no changes needed), plain HTML per page. Dev server: `npm run dev` from project root.

---

## File Map

| File | What Changes |
|------|-------------|
| `index.html` | Hero, problem section copy, replace fake metrics/case-studies with Pilot Offer + Before/After + updated Three Pillars + updated Founder section, nav, footer |
| `services.html` | Full body rebuild — three pricing tiers, guarantee section, updated process steps, remove "96% retention" diff card, nav, footer |
| `contact.html` | Remove proof bar, update headline/description/bullets, remove "serious businesses" bullet, nav, footer |
| `case-studies.html` | Replace entirely with "How It Works" placeholder page that redirects to `/#problem` on load |
| `src/main.ts` | Remove `#results` counter observer (that section is gone after index.html edit) |

---

## Task 1: index.html — Full Page Rebuild

**Files:**
- Modify: `index.html`

This is a content-only rewrite. All CSS classes and JS hooks stay identical so animations and interactions continue to work unchanged.

- [ ] **Step 1: Update `<head>` meta tags**

Replace the `<title>` and `<meta name="description">`:
```html
<title>White Tiger Marketing — Performance Marketing for Contractors</title>
<meta name="description"
  content="White Tiger Marketing helps contractors and handyman businesses build a consistent lead pipeline through social media, optimized funnels, and data-driven advertising." />
```

Update OG and Twitter meta to match:
```html
<meta property="og:title" content="White Tiger Marketing — Performance Marketing for Contractors" />
<meta property="og:description" content="White Tiger Marketing helps contractors and handyman businesses build a consistent lead pipeline through social media, optimized funnels, and data-driven advertising." />
<meta name="twitter:title" content="White Tiger Marketing — Performance Marketing for Contractors" />
<meta name="twitter:description" content="White Tiger Marketing helps contractors and handyman businesses build a consistent lead pipeline through social media, optimized funnels, and data-driven advertising." />
```

Update the JSON-LD `"description"` field:
```json
"description": "Performance marketing for contractors and handyman businesses — social media, optimized funnels, and data-driven advertising."
```

- [ ] **Step 2: Update navigation (all 5 nav items)**

Replace the nav `<div class="nav-links" ...>` block:
```html
<div class="nav-links" id="navLinks">
  <a href="/">Home</a>
  <a href="/services.html">Services</a>
  <a href="/case-studies.html">How It Works</a>
  <a href="/contact.html" class="nav-cta">Book a Call</a>
</div>
```

- [ ] **Step 3: Replace Hero section**

Replace the entire `<section class="hero section" ...>` block:
```html
<section class="hero section" style="padding-top:160px; padding-bottom:80px;">
  <div class="container hero-container">
    <span class="label">Performance-Focused SMMA for Contractors</span>
    <h1 class="headline-xl hero-words">
      <span class="word">The</span> <span class="word">Marketing</span> <span class="word">System</span> <span class="word">Built</span> <span class="word">for</span> <span class="word">Contractors</span> <span class="word">Who</span> <span class="word">Are</span> <span class="word">Done</span> <span class="word">Wasting</span> <span class="word">Money</span> <span class="word">on</span> <span class="word">Angi.</span>
    </h1>
    <p class="subheadline">
      We help owner-operated construction and handyman businesses build a consistent lead pipeline — without the hype, without the lock-in, and without running ads before the funnel is ready.
    </p>
    <div class="hero-actions">
      <a href="/contact.html" class="btn btn-primary">Book a Free 15-Minute Call</a>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Update Problem section heading and subhead**

Find and replace the `<div class="section-header fade-in">` inside `<section class="section" id="problem">`:
```html
<div class="section-header fade-in">
  <span class="label">The Problem</span>
  <h2 class="headline-lg">You Don't Have a Marketing Problem. You Have a Visibility Problem.</h2>
  <p class="subheadline">
    Most contractors are invisible online, leaking leads, and burning ad spend with nothing to show for it. Here's what that looks like:
  </p>
</div>
```

- [ ] **Step 5: Replace all six problem cards with contractor-specific copy**

Replace the entire `<div class="grid-3 problem-grid" data-stagger="true">` block:
```html
<div class="grid-3 problem-grid" data-stagger="true">
  <div class="card fade-in">
    <div class="card-icon">
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    </div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">Inconsistent Social Presence</h3>
    <p class="body-text">You post when you remember, with no strategy. Your profiles don't reflect the quality of your actual work.</p>
  </div>
  <div class="card fade-in fade-in-delay-1">
    <div class="card-icon">
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    </div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">No Lead Funnel</h3>
    <p class="body-text">Traffic hits your website and bounces. No landing page, no booking form, no clear path from visitor to scheduled estimate.</p>
  </div>
  <div class="card fade-in fade-in-delay-2">
    <div class="card-icon">
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    </div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">Wasted Ad Spend</h3>
    <p class="body-text">You've tried running ads before — but without a funnel to catch the traffic, every dollar spent is a dollar burned.</p>
  </div>
  <div class="card fade-in">
    <div class="card-icon">
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    </div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">No Retargeting</h3>
    <p class="body-text">Visitors leave and never come back. No pixel, no follow-up ads, no second chance.</p>
  </div>
  <div class="card fade-in fade-in-delay-1">
    <div class="card-icon">
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    </div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">Weak Google Presence</h3>
    <p class="body-text">Your Google Business Profile has 4 reviews and no booking link. Prospects search you and move on to whoever shows up first.</p>
  </div>
  <div class="card fade-in fade-in-delay-2">
    <div class="card-icon">
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    </div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">No Follow-Up System</h3>
    <p class="body-text">Leads come in, you get busy, they go cold. No automated follow-up means money left on the table every week.</p>
  </div>
</div>
```

- [ ] **Step 6: Replace the Three Pillars section body copy**

Inside `<section class="section section-system" id="pillars" ...>`, replace the three pillar cards inside `<div class="grid-3 pillar-grid" data-stagger="true">`:
```html
<div class="grid-3 pillar-grid" data-stagger="true">
  <div class="card pillar-card fade-in">
    <div class="card-accent"></div>
    <div class="pillar-number">01</div>
    <h3 class="headline-md">Social Media Marketing</h3>
    <p class="pillar-purpose">Build trust before they ever call.</p>
    <p class="body-text" style="margin-top:12px;">Your Facebook and Instagram should make prospects feel confident before they ever call. We build a consistent, professional presence using real job photos and captions written in your voice — posted on a consistent schedule so you don't have to think about it.</p>
    <p class="pillar-note">We do not promise virality.</p>
  </div>
  <div class="card pillar-card fade-in fade-in-delay-1">
    <div class="card-accent"></div>
    <div class="pillar-number">02</div>
    <h3 class="headline-md">Sales Funnel Optimization</h3>
    <p class="pillar-purpose">Turn visitors into scheduled estimates.</p>
    <p class="body-text" style="margin-top:12px;">Most contractor websites are lead graveyards — traffic comes in and nothing happens. We build a simple booking funnel connected to your calendar so a prospect can go from seeing your content to booking an estimate in under two minutes.</p>
    <p class="pillar-note">We do not promise specific revenue numbers.</p>
  </div>
  <div class="card pillar-card fade-in fade-in-delay-2">
    <div class="card-accent"></div>
    <div class="pillar-number">03</div>
    <h3 class="headline-md">Online Advertising</h3>
    <p class="pillar-purpose">Scale what already converts.</p>
    <p class="body-text" style="margin-top:12px;">We don't run ads until the funnel is ready. Once the booking page converts and the pixel is set, we launch a test at $5–10/day, read the data, and scale what's working. No wasted spend. No guessing.</p>
    <p class="pillar-note">We do not guarantee ROI.</p>
  </div>
</div>
```

- [ ] **Step 7: Replace the fake metrics/case-studies section with Pilot Offer section**

Delete the entire `<section class="section section-results" id="results" ...>` block (lines 259–311) and replace with:
```html
<!-- ═══════════════ PILOT OFFER SECTION ═══════════════ -->
<div class="separator"></div>
<section class="section" id="pilot" style="background:var(--navy);">
  <div class="container">
    <div class="section-header fade-in">
      <span class="label">Limited Availability</span>
      <h2 class="headline-lg">Start With Zero Risk.</h2>
      <p class="subheadline">
        We're currently offering a free 30-day pilot engagement to a small number of contractors in exchange for honest feedback and case study rights.
      </p>
    </div>
    <div class="card fade-in" style="max-width:720px; margin:0 auto;">
      <div class="card-accent"></div>
      <h3 class="headline-md" style="margin-bottom:24px;">What's Included in the Pilot</h3>
      <ul class="pillar-list" style="margin-bottom:32px;">
        <li>10–12 custom social media posts written and designed for the month</li>
        <li>One paid ad test at $5–10/day — you control the budget, we manage the campaign</li>
        <li>A full audit of your current booking funnel, website, or Google listing</li>
        <li>A GHL-powered booking page so leads can schedule directly with you</li>
        <li>Review request automation to start building your Google reputation</li>
      </ul>
      <p class="body-text" style="opacity:0.7; font-size:0.9rem; margin-bottom:32px;">No retainer. No contract. You own everything we build. If we deliver results, we talk about what month two looks like.</p>
      <a href="/contact.html" class="btn btn-primary">Apply for the Pilot Program</a>
    </div>
  </div>
</section>

<!-- ═══════════════ BEFORE / AFTER SECTION ═══════════════ -->
<div class="separator"></div>
<section class="section" id="what-we-fix" data-spotlight>
  <div class="container">
    <div class="section-header fade-in">
      <span class="label">The Transformation</span>
      <h2 class="headline-lg">What Changes When You Work With Us.</h2>
    </div>
    <div class="grid-2 fade-in" style="gap:var(--gap-xl); max-width:900px; margin:0 auto;">
      <div class="card" style="border-top:3px solid #444;">
        <div class="card-accent"></div>
        <h3 class="headline-sm" style="margin-bottom:20px; opacity:0.6; text-transform:uppercase; letter-spacing:0.1em;">Before</h3>
        <ul class="pillar-list" style="opacity:0.8;">
          <li>Posting randomly with no strategy or consistency</li>
          <li>Website gets traffic but nobody books</li>
          <li>Tried ads, spent $500–$1,000, got nothing</li>
          <li>100% reliant on word of mouth and referrals</li>
          <li>Google listing has 4 reviews and no booking link</li>
          <li>Slow seasons hit with no pipeline to fall back on</li>
          <li>Leads go cold because there's no follow-up system</li>
        </ul>
      </div>
      <div class="card" style="border-top:3px solid var(--blue);">
        <div class="card-accent"></div>
        <h3 class="headline-sm" style="margin-bottom:20px; color:var(--blue); text-transform:uppercase; letter-spacing:0.1em;">After</h3>
        <ul class="pillar-list">
          <li>Consistent content that builds trust before they ever call</li>
          <li>A booking funnel that turns visitors into scheduled estimates</li>
          <li>Ads that only run once the funnel is ready to convert</li>
          <li>A lead pipeline that doesn't depend on word of mouth</li>
          <li>Google Business Profile optimized and working 24/7</li>
          <li>A system that generates leads even in slower months</li>
          <li>Automated follow-up so no lead falls through the cracks</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

Note: The `.grid-2` class may not exist yet in the CSS. If it doesn't, use `style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));"` on the wrapper div instead of `class="grid-2"`.

- [ ] **Step 8: Update Founder section — remove fake stats, update copy**

Replace the entire `<section class="section section-founder" id="founder">` block:
```html
<!-- ═══════════════ FOUNDER SECTION ═══════════════ -->
<div class="separator"></div>
<section class="section section-founder" id="founder">
  <div class="container">
    <div class="founder-layout fade-in">
      <div class="founder-content">
        <span class="label">The Operator</span>
        <h2 class="headline-lg" style="margin:16px 0;">Built by a Practitioner, Not a Guru.</h2>
        <p class="body-text" style="max-width:560px;">
          White Tiger Marketing was built for one niche: contractors and handyman businesses. Not med spas. Not law firms. Not enterprise clients. We focus exclusively on owner-operated trades businesses because that's where we can deliver the most value — and where no real marketing agency is currently paying attention.
        </p>
        <p class="body-text" style="max-width:560px; margin-top:16px;">
          We sell testing, optimization, management, and process — not explosive growth or guaranteed results. Clear scope. Transparent reporting. Operator-grade execution.
        </p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 9: Update Final CTA section**

Replace the h2 and subheadline inside `<section class="section section-cta" id="cta">`:
```html
<section class="section section-cta" id="cta">
  <div class="container cta-container">
    <div class="fade-in">
      <h2 class="headline-xl">Ready to Build a Real Pipeline?</h2>
      <p class="subheadline" style="max-width:520px; margin: 20px auto 0;">
        Book a free 15-minute call. We'll review your current setup, identify the biggest leak, and tell you exactly what we'd do in the first 30 days.
      </p>
      <div style="margin-top:40px;">
        <a href="/contact.html" class="btn btn-primary">Book a Free 15-Minute Call</a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 10: Update footer tagline and nav links**

Replace the `<footer class="footer" id="footer">` block entirely:
```html
<footer class="footer" id="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="/logo-tiger.png" alt="White Tiger Marketing" class="footer-logo-img" width="40" height="45" loading="lazy">
        <p class="footer-desc">Performance marketing for contractors and handyman businesses. No hype. No lock-in. No wasted ad spend.</p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <a href="/">Home</a>
        <a href="/services.html">Services</a>
        <a href="/case-studies.html">How It Works</a>
        <a href="/contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="/services.html">Our Services</a>
        <a href="/contact.html">Book a Call</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms of Service</a>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 White Tiger Marketing LLC. All rights reserved. &middot; <a href="/privacy.html" style="color:inherit; opacity:0.6;">Privacy Policy</a> &middot; <a href="/terms.html" style="color:inherit; opacity:0.6;">Terms of Service</a>
    </div>
  </div>
</footer>
```

- [ ] **Step 11: Check for `.grid-2` CSS class**

Run: `grep -n "grid-2" "src/style.css" "src/pages.css"` 

If not found, in Step 7's Before/After section, change:
```html
<div class="grid-2 fade-in" ...>
```
to:
```html
<div class="fade-in" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:var(--gap-xl); max-width:900px; margin:0 auto;">
```

- [ ] **Step 12: Commit index.html changes**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
git add index.html
git commit -m "rebuild: contractor-focused home page — remove fake stats, add pilot offer and before/after sections"
```

---

## Task 2: src/main.ts — Remove Dead Counter Observer

**Files:**
- Modify: `src/main.ts`

The `#results` section no longer exists after the index.html edit. The counter observer targeting it is now dead code that silently does nothing — remove it to keep the file clean.

- [ ] **Step 1: Remove the #results counter observer block**

Find and delete lines 256–270 in `src/main.ts`:
```typescript
  const resultsSection = document.querySelector('#results');
  if (resultsSection) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('[data-count]').forEach(animateCounter);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    counterObserver.observe(resultsSection);
  }
```

Also remove the `animateCounter` function (lines 136–153) and the `animateCounter` call inside `skipAnimations` if it references `[data-count]` — actually `skipAnimations` doesn't call it, so just remove the `animateCounter` function and the resultsSection block.

- [ ] **Step 2: Commit**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
git add src/main.ts
git commit -m "cleanup: remove dead counter observer and animateCounter after results section removal"
```

---

## Task 3: services.html — Full Page Rebuild

**Files:**
- Modify: `services.html`

Complete overhaul. The single "Elite Package" becomes three priced tiers. The process steps get contractor-specific copy. The "96% client retention" diff card is removed.

- [ ] **Step 1: Update `<head>` meta tags**

Replace title, description, and OG/Twitter tags:
```html
<title>Services — Performance Marketing Packages for Contractors | White Tiger Marketing</title>
<meta name="description"
  content="Three service tiers built exclusively for contractors and handyman businesses. Social media, booking funnels, and ad management with clear deliverables and transparent pricing." />
```
```html
<meta property="og:title" content="Services — Performance Marketing Packages for Contractors | White Tiger Marketing" />
<meta property="og:description" content="Three service tiers built exclusively for contractors and handyman businesses. Social media, booking funnels, and ad management with clear deliverables and transparent pricing." />
<meta name="twitter:title" content="Services — Performance Marketing Packages for Contractors | White Tiger Marketing" />
<meta name="twitter:description" content="Three service tiers built exclusively for contractors and handyman businesses. Social media, booking funnels, and ad management with clear deliverables and transparent pricing." />
```

- [ ] **Step 2: Update navigation**

Same as index.html — replace nav-links block:
```html
<div class="nav-links" id="navLinks">
  <a href="/">Home</a>
  <a href="/services.html">Services</a>
  <a href="/case-studies.html">How It Works</a>
  <a href="/contact.html" class="nav-cta">Book a Call</a>
</div>
```

- [ ] **Step 3: Update Page Header**

Replace the `<section class="page-header section">` block:
```html
<section class="page-header section">
  <div class="container">
    <span class="label anim-fade-up stagger-1">Built for One Niche</span>
    <h1 class="headline-xl anim-fade-up stagger-2">Three Tiers. One Niche. Built for Contractors.</h1>
    <p class="subheadline anim-fade-up stagger-3">
      Every package is built around the same three pillars — social media, funnel, and ads. The difference is scope and depth. Pick where you are right now.
    </p>
  </div>
</section>
```

- [ ] **Step 4: Remove the "Three Pillars Overview" section**

Delete the entire `<section class="section services-overview">` block (the pillar overview). It's not needed — the pricing tiers cover this. Jump straight from the page header to the pricing section.

- [ ] **Step 5: Replace the "Elite Package" section with three pricing tiers**

Replace the entire `<section class="section" style="background:var(--black);">` block that contains the Elite Package with:
```html
<!-- ═══════════════ PRICING TIERS ═══════════════ -->
<div class="separator"></div>
<section class="section" style="background:var(--black);">
  <div class="container">
    <div class="section-header fade-in">
      <span class="label">Pricing</span>
      <h2 class="headline-lg">Choose Your Starting Point.</h2>
      <p class="subheadline">
        Month-to-month after the first 30-day pilot. No lock-in. You own everything we build.
      </p>
    </div>

    <div class="grid-3" data-stagger="true" style="align-items:start;">

      <!-- Tier 1 -->
      <div class="card tier-card fade-in">
        <div class="card-accent"></div>
        <div class="tier-badge">Starter</div>
        <h3 class="headline-md">Essential Boost</h3>
        <p class="tier-focus">Best for contractors who need to get their online presence consistent and professional before running any ads.</p>
        <div style="margin:24px 0; font-size:clamp(1.8rem,4vw,2.4rem); font-family:var(--font-headline); font-weight:800; color:var(--white);">$797<span style="font-size:1rem; font-weight:400; opacity:0.6;">/month</span></div>
        <ul class="tier-list">
          <li>10 custom social media posts per month (real job photo content, written in your voice)</li>
          <li>Google Business Profile optimization (all fields, photos, services, booking link)</li>
          <li>Review request automation (3-step text + email sequence after job completion)</li>
          <li>Monthly performance report</li>
        </ul>
        <p style="font-size:0.85rem; opacity:0.5; margin:16px 0;">Not included: paid ads, funnel build, booking page.</p>
        <a href="/contact.html" class="btn btn-outline" style="width:100%; text-align:center; margin-top:8px;">Book a Call</a>
      </div>

      <!-- Tier 2 — Most Popular -->
      <div class="card tier-card tier-card-elite fade-in fade-in-delay-1" style="border:1px solid var(--blue);">
        <div class="card-accent"></div>
        <div class="tier-badge tier-badge-elite" style="background:var(--blue);">Most Popular</div>
        <h3 class="headline-md">Lead Accelerator</h3>
        <p class="tier-focus">Best for contractors ready to stop relying on word of mouth and build a real, repeatable pipeline.</p>
        <div style="margin:24px 0; font-size:clamp(1.8rem,4vw,2.4rem); font-family:var(--font-headline); font-weight:800; color:var(--white);">$1,497<span style="font-size:1rem; font-weight:400; opacity:0.6;">/month</span></div>
        <ul class="tier-list">
          <li>Everything in Essential Boost, plus:</li>
          <li>12 custom social media posts per month</li>
          <li>Custom GHL booking funnel built in month one (landing page + calendar + confirmation)</li>
          <li>Appointment confirmation and reminder sequences (automated text + email)</li>
          <li>Follow-up automation for unsold estimates (3-step sequence over 7 days)</li>
          <li>Monthly strategy call</li>
        </ul>
        <p style="font-size:0.85rem; opacity:0.5; margin:16px 0;">Not included: paid ad management.</p>
        <a href="/contact.html" class="btn btn-primary" style="width:100%; text-align:center; margin-top:8px;">Book a Call</a>
      </div>

      <!-- Tier 3 -->
      <div class="card tier-card fade-in fade-in-delay-2">
        <div class="card-accent"></div>
        <div class="tier-badge">Full System</div>
        <h3 class="headline-md">White Tiger Performance Suite</h3>
        <p class="tier-focus">Best for contractors already getting leads who want to scale with a full paid ad system.</p>
        <div style="margin:24px 0; font-size:clamp(1.8rem,4vw,2.4rem); font-family:var(--font-headline); font-weight:800; color:var(--white);">$2,497<span style="font-size:1rem; font-weight:400; opacity:0.6;">/month</span></div>
        <p style="font-size:0.85rem; opacity:0.6; margin:-16px 0 16px;">+ $300–500 client ad spend</p>
        <ul class="tier-list">
          <li>Everything in Lead Accelerator, plus:</li>
          <li>Facebook and Instagram ad management</li>
          <li>A/B testing on ad creative and copy</li>
          <li>Bi-weekly strategy calls</li>
          <li>Past client reactivation campaigns</li>
          <li>Full pipeline reporting dashboard</li>
          <li>Retargeting campaigns for website visitors</li>
        </ul>
        <a href="/contact.html" class="btn btn-outline" style="width:100%; text-align:center; margin-top:8px;">Book a Call</a>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 6: Add Guarantee section after pricing**

Insert after the closing `</section>` of the pricing block and before the How We Work separator:
```html
<!-- ═══════════════ GUARANTEE SECTION ═══════════════ -->
<div class="separator"></div>
<section class="section" style="background:var(--navy);">
  <div class="container">
    <div class="section-header fade-in">
      <span class="label">Our Commitment</span>
      <h2 class="headline-lg">How We Protect You.</h2>
    </div>
    <div class="grid-2 fade-in" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:var(--gap-xl); max-width:860px; margin:0 auto;">
      <div class="card">
        <div class="card-accent"></div>
        <h3 class="headline-sm" style="margin-bottom:12px;">30-Day Pilot First</h3>
        <p class="body-text">You see results before committing to any retainer. No guessing.</p>
      </div>
      <div class="card">
        <div class="card-accent"></div>
        <h3 class="headline-sm" style="margin-bottom:12px;">Month-to-Month</h3>
        <p class="body-text">No 6-month or 12-month lock-in contracts. Stay because it's working.</p>
      </div>
      <div class="card">
        <div class="card-accent"></div>
        <h3 class="headline-sm" style="margin-bottom:12px;">You Own Everything</h3>
        <p class="body-text">Your GHL pipeline, ad accounts, contacts, and content. Always yours if you leave.</p>
      </div>
      <div class="card">
        <div class="card-accent"></div>
        <h3 class="headline-sm" style="margin-bottom:12px;">No Platform Lock-In</h3>
        <p class="body-text">If you ever leave, you take it all with you. No hostage situations.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 7: Update How We Work section (contractor-specific copy)**

Replace the timeline items inside the How We Work `<section>`:
```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-week">Step 1</div>
    <h3 class="headline-sm">Discovery</h3>
    <p class="body-text">We review your current setup — Google listing, social profiles, website, and any ads you've run. We identify the gaps honestly, not to upsell you, but to understand where the biggest leaks are.</p>
  </div>
  <div class="timeline-item">
    <div class="timeline-week">Step 2</div>
    <h3 class="headline-sm">Strategy</h3>
    <p class="body-text">Based on what we find, we build a clear 30-day plan. You'll know exactly what we're building, what it's for, and what a realistic result looks like in the first month.</p>
  </div>
  <div class="timeline-item">
    <div class="timeline-week">Step 3</div>
    <h3 class="headline-sm">Execution</h3>
    <p class="body-text">We build and launch — booking funnel, content calendar, ad campaign if applicable. Structured rollout with a Day 5 Loom walkthrough so you can see exactly what's live.</p>
  </div>
  <div class="timeline-item">
    <div class="timeline-week">Ongoing</div>
    <h3 class="headline-sm">Optimization</h3>
    <p class="body-text">Every month we review the data, adjust what isn't working, and report back with plain-English context. No dashboards you have to decode — just clear communication.</p>
  </div>
</div>
```

- [ ] **Step 8: Replace the "What Makes Us Different" diff cards — remove fake "96% retention" card**

Replace the entire `<div class="grid-3 differentiator-grid" data-stagger="true">` block with the same cards **minus** card 06 (Long-Term Partnership — 96% client retention):
```html
<div class="grid-3 differentiator-grid" data-stagger="true">
  <div class="card diff-card fade-in">
    <div class="diff-number">01</div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">Contractor-Only Focus</h3>
    <p class="body-text">We work exclusively with contractors and handyman businesses. Not med spas, not law firms. Deep niche focus means we understand your business better than any generalist agency.</p>
  </div>
  <div class="card diff-card fade-in fade-in-delay-1">
    <div class="diff-number">02</div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">Performance Inputs</h3>
    <p class="body-text">We're accountable for the work — testing, optimization, management, and process. We don't sell promises we can't control.</p>
  </div>
  <div class="card diff-card fade-in fade-in-delay-2">
    <div class="diff-number">03</div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">Testing-First</h3>
    <p class="body-text">Every campaign starts with structured testing. We let data decide what works before scaling anything.</p>
  </div>
  <div class="card diff-card fade-in">
    <div class="diff-number">04</div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">No Fluff</h3>
    <p class="body-text">No guru-speak. No vanity metrics. No "explosive growth" promises. Just clear communication and honest execution.</p>
  </div>
  <div class="card diff-card fade-in fade-in-delay-1">
    <div class="diff-number">05</div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">Transparent Reporting</h3>
    <p class="body-text">You see what we see. Monthly reports with real numbers, clear context, and actionable next steps.</p>
  </div>
  <div class="card diff-card fade-in fade-in-delay-2">
    <div class="diff-number">06</div>
    <div class="card-accent"></div>
    <h3 class="headline-sm">You Own Everything</h3>
    <p class="body-text">Every asset we build — your funnel, your contacts, your ad accounts — belongs to you from day one. No lock-in, no platform dependency.</p>
  </div>
</div>
```

- [ ] **Step 9: Update Services page CTA section**

Replace the CTA h2 and subheadline:
```html
<section class="section section-cta">
  <div class="container cta-container">
    <div class="fade-in">
      <h2 class="headline-xl">Start With the Pilot. Pay Nothing.</h2>
      <p class="subheadline" style="max-width:480px; margin: 20px auto 0;">
        Book a free 15-minute call. We'll tell you exactly which package fits where you are right now — and whether the pilot makes sense first.
      </p>
      <div style="margin-top:40px;">
        <a href="/contact.html" class="btn btn-primary">Book a Free 15-Minute Call</a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 10: Update footer (same as index.html footer)**

Replace footer with same updated content as Task 1 Step 10.

- [ ] **Step 11: Commit**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
git add services.html
git commit -m "rebuild: services page — three contractor pricing tiers, guarantee section, no fake stats"
```

---

## Task 4: contact.html — Targeted Updates

**Files:**
- Modify: `contact.html`

Do NOT touch the Cal.com `<iframe>`. Only update text nodes around it.

- [ ] **Step 1: Update meta tags**

```html
<title>Book a Free 15-Minute Call | White Tiger Marketing</title>
<meta name="description"
  content="Book a free 15-minute call with White Tiger Marketing. We'll audit your current setup, identify the biggest leak in your pipeline, and map out exactly what we'd do in the first 30 days." />
```
Update OG and Twitter tags to match.

- [ ] **Step 2: Update navigation**

Same nav-links change as all other pages (Case Studies → How It Works).

- [ ] **Step 3: Update contact page headline and description**

Replace the left-side content inside `<div class="contact-info">`:
```html
<div class="contact-info">
  <span class="label">Free 15-Minute Call</span>
  <h1 class="headline-xl" style="margin:16px 0;">Book Your Free 15-Minute Call</h1>
  <p class="subheadline" style="max-width:440px;">
    This is a working call for contractors and handyman businesses. We'll review your current setup, identify what's broken, and map out exactly what we'd do in the first 30 days. No pitch. No pressure. Just an honest assessment.
  </p>

  <div class="contact-points">
    <div class="contact-point">
      <div class="contact-point-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
      <div>
        <h3 class="headline-sm">Full Presence Audit</h3>
        <p class="body-text">We audit your current presence — Google, social, website, ads.</p>
      </div>
    </div>
    <div class="contact-point">
      <div class="contact-point-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <div>
        <h3 class="headline-sm">Identify the Biggest Leak</h3>
        <p class="body-text">We identify the biggest leak in your pipeline.</p>
      </div>
    </div>
    <div class="contact-point">
      <div class="contact-point-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <div>
        <h3 class="headline-sm">Clear Next Steps</h3>
        <p class="body-text">You leave with a clear picture of what needs to change — whether you work with us or not.</p>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 4: Remove the fake proof bar above the Cal.com embed**

Delete the entire `<div class="contact-proof-bar">` block:
```html
<div class="contact-proof-bar">
  <span class="contact-proof-stat"><strong>127</strong> leads · 30 days</span>
  <span class="contact-proof-sep">·</span>
  <span class="contact-proof-stat"><strong>312</strong> leads · 90 days</span>
  <span class="contact-proof-sep">·</span>
  <span class="contact-proof-stat"><strong>209%</strong> more bookings</span>
</div>
```

The `<div class="contact-embed contact-embed-cal">` iframe stays **100% untouched**.

- [ ] **Step 5: Update footer (same as other pages)**

Replace footer with the updated content from Task 1 Step 10.

- [ ] **Step 6: Commit**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
git add contact.html
git commit -m "fix: contact page — remove fake stats bar, update headline/bullets to contractor audience"
```

---

## Task 5: case-studies.html — Convert to "How It Works" Placeholder

**Files:**
- Modify: `case-studies.html`

The nav link now says "How It Works" and points to `/case-studies.html`. This file needs to become a simple holding page that doesn't display any fabricated case studies. The simplest approach: replace the entire page body with a clean "Coming Soon" / redirect page that sends visitors to the home page's pilot offer section (`/#pilot`).

- [ ] **Step 1: Replace case-studies.html entirely**

Replace the full body content (keep head structure but update title/meta, then replace body):

**Head changes:**
```html
<title>How It Works | White Tiger Marketing</title>
<meta name="description"
  content="Learn how White Tiger Marketing works with contractors and handyman businesses — from discovery and strategy to execution and optimization." />
<link rel="canonical" href="https://white-tiger-marketing.com/case-studies" />
```
Update OG/Twitter to match. Remove the ItemList JSON-LD and replace with a simple WebPage schema:
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "How It Works — White Tiger Marketing",
  "url": "https://white-tiger-marketing.com/case-studies",
  "description": "How White Tiger Marketing works with contractors and handyman businesses."
}
```
Update breadcrumb JSON-LD second item:
```json
{ "@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://white-tiger-marketing.com/case-studies" }
```

**Body — replace everything after `</nav>` and before `<script type="module" ...>`:**
```html
<!-- Page Header -->
<section class="page-header section">
  <div class="container">
    <span class="label anim-fade-up stagger-1">The Process</span>
    <h1 class="headline-xl anim-fade-up stagger-2">How It Works</h1>
    <p class="subheadline anim-fade-up stagger-3">
      Four steps. Clear expectations. No surprises.
    </p>
  </div>
</section>

<div class="separator"></div>
<section class="section" style="background:var(--navy);">
  <div class="container">
    <div style="max-width:680px; margin:0 auto;">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-week">Step 1</div>
          <h3 class="headline-sm">Discovery</h3>
          <p class="body-text">We review your current setup — Google listing, social profiles, website, and any ads you've run. We identify the gaps honestly, not to upsell you, but to understand where the biggest leaks are.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-week">Step 2</div>
          <h3 class="headline-sm">Strategy</h3>
          <p class="body-text">Based on what we find, we build a clear 30-day plan. You'll know exactly what we're building, what it's for, and what a realistic result looks like in the first month.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-week">Step 3</div>
          <h3 class="headline-sm">Execution</h3>
          <p class="body-text">We build and launch — booking funnel, content calendar, ad campaign if applicable. Structured rollout with a Day 5 Loom walkthrough so you can see exactly what's live.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-week">Ongoing</div>
          <h3 class="headline-sm">Optimization</h3>
          <p class="body-text">Every month we review the data, adjust what isn't working, and report back with plain-English context. No dashboards you have to decode — just clear communication.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-cta" style="background:var(--black);">
  <div class="container cta-container">
    <div class="fade-in">
      <h2 class="headline-xl">Ready to See This in Action?</h2>
      <p class="subheadline" style="max-width:480px; margin: 20px auto 0;">
        Book a free 15-minute call. We'll walk through exactly what this looks like for your business.
      </p>
      <div style="margin-top:40px;">
        <a href="/contact.html" class="btn btn-primary">Book a Free 15-Minute Call</a>
      </div>
    </div>
  </div>
</section>
```

Also update nav and footer (same as all other pages).

- [ ] **Step 2: Commit**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
git add case-studies.html
git commit -m "replace: case-studies page converted to How It Works process page — remove all fabricated case studies"
```

---

## Task 6: Build Verification

**Files:** None — verification only.

- [ ] **Step 1: Run TypeScript check**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
npm run build
```
Expected: build completes with no TypeScript errors and no missing input warnings.

- [ ] **Step 2: Start dev server and manually verify each page**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
npm run dev
```

Open `http://localhost:5173` and check each page against the final checklist:

**index.html:**
- [ ] Hero says "Done Wasting Money on Angi"
- [ ] No fabricated numbers anywhere (ctrl+F: "913", "2500", "150+", "47%", "96%", "127", "312", "209%")
- [ ] No "Med Spa", "Law Firm", "HVAC" anywhere
- [ ] Pilot Offer section present with 5 bullet deliverables
- [ ] Before/After section present
- [ ] Founder section has NO stats grid
- [ ] Nav says "How It Works" (not "Case Studies")
- [ ] Footer tagline is "Performance marketing for contractors and handyman businesses. No hype. No lock-in. No wasted ad spend."

**services.html:**
- [ ] Three pricing tiers visible: $797, $1,497, $2,497
- [ ] Guarantee section (4 cards) present
- [ ] "96% client retention" does NOT appear
- [ ] No "service businesses" — only "contractors"
- [ ] All CTA buttons link to `/contact.html`

**contact.html:**
- [ ] Headline says "Book Your Free 15-Minute Call"
- [ ] Three bullet points updated (audit / biggest leak / clear next steps)
- [ ] No "127 leads", "312 leads", "209%" stats above calendar
- [ ] Cal.com iframe is completely intact and unmodified
- [ ] "For Serious Businesses Only" does NOT appear

**case-studies.html:**
- [ ] "How It Works" heading
- [ ] No case studies, no fake numbers
- [ ] Four-step timeline visible
- [ ] CTA links to `/contact.html`

- [ ] **Step 3: Final commit if any last-minute fixes needed**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
git add -p
git commit -m "fix: final verification adjustments"
```

---

## Self-Review Against Spec

**Spec coverage check:**

| Requirement | Task |
|-------------|------|
| Remove all fabricated stats | Task 1 (Steps 7,8), Task 3 (Step 4) |
| Remove fake case studies | Task 1 (Step 7), Task 5 |
| Fix niche targeting everywhere | Task 1 (Steps 1-10), Task 2 (all steps), Task 3 (all steps) |
| Hero headline contractor-specific | Task 1 Step 3 |
| Problem section updated copy | Task 1 Steps 4-5 |
| Pilot Offer section | Task 1 Step 7 |
| Before/After section | Task 1 Step 7 |
| Three Pillars updated copy | Task 1 Step 6 |
| Founder section — no stats | Task 1 Step 8 |
| Services — three pricing tiers | Task 3 Steps 4-5 |
| Services — guarantee section | Task 3 Step 6 |
| Services — updated process steps | Task 3 Step 7 |
| Services — remove "96% retention" | Task 3 Step 8 |
| Contact — fake stats removed | Task 4 Step 4 |
| Contact — headline updated | Task 4 Step 3 |
| Contact — bullets updated | Task 4 Step 3 |
| Contact — "Serious Businesses" removed | Task 4 Step 3 |
| Cal.com embed untouched | Task 4 Step 4 (explicit note) |
| Nav "How It Works" on all pages | Tasks 1-5 each |
| Footer tagline updated on all pages | Tasks 1-5 each |
| Footer nav updated on all pages | Tasks 1-5 each |
| All CTAs → /contact.html | Throughout |
| No external booking URLs | Throughout |
| case-studies.html → How It Works | Task 5 |
| Dead counter observer removed | Task 2 |

**Placeholder scan:** No TBDs, no TODOs, no "similar to above" shortcuts. All code blocks are complete.

**Type consistency:** No TypeScript type changes; only HTML edits. main.ts removal of `animateCounter` and `#results` observer block — no callers remain after the `[data-count]` elements are gone from index.html.

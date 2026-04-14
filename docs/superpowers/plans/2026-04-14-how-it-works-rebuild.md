# How It Works Page Rebuild + Founder Note Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild case-studies.html into a full "How It Works" page with 6 sections, and add Junior's founder note to the Operator section on index.html.

**Architecture:** Pure HTML edits to two files. No new CSS classes — all sections reuse existing design system classes (`.timeline`, `.pillar-list`, `.card`, `.card-accent`, `.section-header`, `.fade-in`, `.separator`, etc.). Contact page is already correct and requires no changes.

**Tech Stack:** Vite 7 multi-page build, plain HTML entry points, CSS in `src/style.css` + `src/pages.css`, JS in `src/main.ts` (no changes needed).

---

## File Map

| File | Changes |
|------|---------|
| `case-studies.html` | Full body rebuild — replace page header + thin timeline + CTA with 6-section page |
| `index.html` | Insert founder note (2 paragraphs) inside `.founder-content` after existing body copy |
| `contact.html` | No changes — bullet points already match spec exactly |

---

## Task 1: Rebuild case-studies.html — All 6 Sections

**Files:**
- Modify: `case-studies.html`

Read the file first. The head, nav, preloader, and script tag stay unchanged. Replace everything between `</nav>` and `<script type="module" src="/src/main.ts"></script>`.

- [ ] **Step 1: Update head meta — title and description**

Replace the `<title>` tag:
```html
<title>How It Works | White Tiger Marketing</title>
```

Replace `<meta name="description"`:
```html
<meta name="description" content="See exactly what happens when you work with White Tiger Marketing — a week-by-week pilot timeline, what we need from you, and how every engagement runs from day one." />
```

Update OG description:
```html
<meta property="og:description" content="See exactly what happens when you work with White Tiger Marketing — a week-by-week pilot timeline, what we need from you, and how every engagement runs from day one." />
```

Update Twitter description:
```html
<meta name="twitter:description" content="See exactly what happens when you work with White Tiger Marketing — a week-by-week pilot timeline, what we need from you, and how every engagement runs from day one." />
```

- [ ] **Step 2: Replace the entire body content (after `</nav>`, before `<script>`)**

Replace everything between `</nav>` and `<script type="module" src="/src/main.ts"></script>` with the following. Write it section by section exactly as shown.

**Section 1 — Page Hero:**
```html
  <!-- ═══════════════ PAGE HERO ═══════════════ -->
  <section class="page-header section">
    <div class="container">
      <span class="label anim-fade-up stagger-1">No Mystery. No Vague Promises.</span>
      <h1 class="headline-xl anim-fade-up stagger-2">Here's Exactly What Happens When You Work With Us.</h1>
      <p class="subheadline anim-fade-up stagger-3">
        No vague promises. No mystery process. This is what the first 30 days look like, step by step.
      </p>
    </div>
  </section>
```

**Section 2 — 30-Day Pilot Timeline:**
```html
  <!-- ═══════════════ 30-DAY PILOT TIMELINE ═══════════════ -->
  <div class="separator"></div>
  <section class="section" style="background:var(--navy);">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">The 30-Day Pilot</span>
        <h2 class="headline-lg">What We Build in Your First 30 Days.</h2>
        <p class="subheadline">Every pilot engagement follows the same structured timeline. You'll know what's happening, when it's happening, and why. No guessing.</p>
      </div>
      <div style="max-width:720px; margin:0 auto;">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-week">Week 1 — Days 1–5</div>
            <h3 class="headline-sm">Foundation</h3>
            <ul class="pillar-list" style="margin-top:12px;">
              <li>Intake form sent (job photos, GBP access, Facebook access, service area, services list)</li>
              <li>Full audit of your current Google listing, social profiles, and website</li>
              <li>Google Business Profile optimized — all fields filled, photos uploaded, booking link added, services listed</li>
              <li>GHL sub-account built from snapshot and configured for your business</li>
              <li>Day 5: Loom video walkthrough sent showing everything that is now live</li>
            </ul>
          </div>
          <div class="timeline-item">
            <div class="timeline-week">Week 2 — Days 8–12</div>
            <h3 class="headline-sm">Launch</h3>
            <ul class="pillar-list" style="margin-top:12px;">
              <li>All 10–12 social posts for the month batched, written in your voice, and scheduled on Mon/Wed/Fri cadence</li>
              <li>First Facebook/Instagram ad launched at $5–10/day</li>
              <li>GHL review request sequence built — 3-step text + email triggered automatically after job completion</li>
            </ul>
          </div>
          <div class="timeline-item">
            <div class="timeline-week">Week 3 — Days 15–19</div>
            <h3 class="headline-sm">Monitor</h3>
            <ul class="pillar-list" style="margin-top:12px;">
              <li>GBP insights reviewed (views, calls, direction requests)</li>
              <li>Ad performance checked — cost per click, reach, engagement</li>
              <li>Mid-month check-in message sent to you with what we're seeing</li>
              <li>Content comments engaged with on your social profiles</li>
            </ul>
          </div>
          <div class="timeline-item">
            <div class="timeline-week">Week 4 — Days 25–30</div>
            <h3 class="headline-sm">Report and Decide</h3>
            <ul class="pillar-list" style="margin-top:12px;">
              <li>All data pulled and compiled into a plain-English results report</li>
              <li>3-minute Loom video walkthrough of results recorded and sent on Day 27</li>
              <li>Day 28: Retainer conversation — we walk through what happened, what month two scope looks like, and ask if you want to continue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
```

**Section 3 — What You Need to Bring:**
```html
  <!-- ═══════════════ WHAT YOU NEED TO BRING ═══════════════ -->
  <div class="separator"></div>
  <section class="section" style="background:var(--black);">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">Your Part</span>
        <h2 class="headline-lg">What We Need From You to Make This Work.</h2>
        <p class="subheadline">The pilot requires minimal time on your end. Here's the full list of what we need:</p>
      </div>
      <div class="card fade-in" style="max-width:680px; margin:0 auto;">
        <div class="card-accent"></div>
        <ul class="pillar-list" style="margin-bottom:24px;">
          <li>Job photos — taken from your phone, real work only, no stock images needed</li>
          <li>Access to your Google Business Profile (we'll walk you through how to share it)</li>
          <li>Access to your Facebook Business page</li>
          <li>Your service area — city or region you work in</li>
          <li>A list of your main services</li>
          <li>15 minutes in Week 1 for a quick intake call</li>
        </ul>
        <p class="body-text" style="color:var(--blue); font-weight:600;">That's it. If you have job photos on your phone right now, you have everything you need to start.</p>
      </div>
    </div>
  </section>
```

**Section 4 — Before/After Transformation:**
```html
  <!-- ═══════════════ BEFORE / AFTER ═══════════════ -->
  <div class="separator"></div>
  <section class="section" id="what-we-fix" data-spotlight>
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">The Transformation</span>
        <h2 class="headline-lg">What Changes When You Work With Us.</h2>
      </div>
      <div class="fade-in" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:var(--gap-xl); max-width:900px; margin:0 auto;">
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

**Section 5 — 4-Step Process Philosophy:**
```html
  <!-- ═══════════════ PROCESS PHILOSOPHY ═══════════════ -->
  <div class="separator"></div>
  <section class="section" style="background:var(--navy);">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">Our Process</span>
        <h2 class="headline-lg">How We Think About Every Engagement.</h2>
        <p class="subheadline">The timeline above covers the pilot. This is the framework we apply month after month.</p>
      </div>
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
            <p class="body-text">Every month we review the data, adjust what isn't working, and report back with plain-English context. No dashboards you have to decode — just clear communication about what's happening and what we're changing.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
```

**Section 6 — CTA:**
```html
  <!-- ═══════════════ CTA ═══════════════ -->
  <section class="section section-cta" style="background:var(--black);">
    <div class="container cta-container">
      <div class="fade-in">
        <h2 class="headline-xl">Ready to See This in Action for Your Business?</h2>
        <p class="subheadline" style="max-width:520px; margin: 20px auto 0;">
          Book a free 15-minute call. We'll walk through your current setup and tell you exactly what the first 30 days would look like for you specifically.
        </p>
        <div style="margin-top:40px;">
          <a href="/contact.html" class="btn btn-primary">Book a Free 15-Minute Call</a>
        </div>
      </div>
    </div>
  </section>
```

**Footer (identical to all other pages):**
```html
  <!-- Footer -->
  <footer class="footer">
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

- [ ] **Step 3: Verify the file**

After saving, run these searches on `case-studies.html` and confirm 0 matches for any fabricated content:
- `grep -i "med spa\|law firm\|HVAC\|127\|312\|209%" case-studies.html`

Confirm section count:
- `grep -c "separator" case-studies.html` → should return 4 (one between each of sections 2-6)
- `grep -c "timeline-item" case-studies.html` → should return 8 (4 pilot weeks + 4 process steps)

- [ ] **Step 4: Commit**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
git add case-studies.html
git commit -m "rebuild: How It Works page — 6-section pilot timeline, what you need, before/after, process"
```

---

## Task 2: Add Founder Note to index.html Operator Section

**Files:**
- Modify: `index.html` (lines ~315–321, inside `.founder-content`)

The Operator section currently ends with:
```html
          <p class="body-text" style="max-width:560px; margin-top:16px;">
            We sell testing, optimization, management, and process — not explosive growth or guaranteed results. Clear scope. Transparent reporting. Operator-grade execution.
          </p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 1: Insert the founder note after "Operator-grade execution."**

After the second `<p class="body-text" ...>` (the one ending in "Operator-grade execution.") and before the closing `</div>` of `.founder-content`, insert:

```html
          <p class="body-text" style="max-width:560px; margin-top:32px; padding-top:24px; border-top:1px solid rgba(255,255,255,0.08);">
            I started White Tiger Marketing because I kept seeing the same thing — contractors doing genuinely great work who couldn't figure out why their phones weren't ringing consistently. They'd tried Angi, tried running their own ads, maybe hired someone who took their money and disappeared. The problem was never the quality of their work. It was that nobody could find them, and when they did, there was no system to convert that attention into a booked job.
          </p>
          <p class="body-text" style="max-width:560px; margin-top:16px;">
            I'm not a guru. I don't have a course to sell you or a highlight reel of rented cars. I'm someone who builds systems, tests what works, and communicates honestly — including when something isn't working. That's what I'd want from someone handling my business. That's what I bring to every contractor I work with.
          </p>
```

Note: The `border-top` and `padding-top` on the first paragraph create a subtle visual separator between the agency positioning copy and Junior's personal note. This is the only visual treatment — no photo, no stats, no other elements.

- [ ] **Step 2: Verify the insertion**

Read back the founder section to confirm:
- The two existing body paragraphs are still intact and unchanged
- The two new paragraphs appear after them, inside `.founder-content`
- No `<div class="founder-stats">` was re-introduced
- The section still ends with `</div></div></div></section>` (closing founder-content, founder-layout, container, section)

- [ ] **Step 3: Commit**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0"
git add index.html
git commit -m "feat: add Junior's founder note to Operator section on home page"
```

---

## Task 3: Build Verification

**Files:** None — verification only.

- [ ] **Step 1: Run the build**

```bash
cd "/Users/davidmartinezhq/Desktop/white tiger 2.0" && npm run build
```

Expected: clean compile, no TypeScript errors, no warnings. All 7 HTML entry points emitted to `dist/`.

- [ ] **Step 2: Content spot-check**

```bash
# Verify founder note is on home page
grep -c "rented cars" "/Users/davidmartinezhq/Desktop/white tiger 2.0/index.html"
# Expected: 1

# Verify pilot timeline weeks on How It Works page
grep -c "timeline-item" "/Users/davidmartinezhq/Desktop/white tiger 2.0/case-studies.html"
# Expected: 8

# Verify CTA on How It Works page links to /contact
grep "btn btn-primary" "/Users/davidmartinezhq/Desktop/white tiger 2.0/case-studies.html"
# Expected: line containing href="/contact.html"

# Verify no fabricated stats anywhere
grep -ri "2500\|913\|47%\|96%\|150+" "/Users/davidmartinezhq/Desktop/white tiger 2.0/index.html" "/Users/davidmartinezhq/Desktop/white tiger 2.0/case-studies.html"
# Expected: 0 matches
```

- [ ] **Step 3: Report**

Report DONE if build passes and all spot-checks pass. Report DONE_WITH_CONCERNS if anything is off.

---

## Self-Review Against Spec

**Spec coverage:**

| Requirement | Task |
|-------------|------|
| How It Works page — Section 1 hero | Task 1 Step 2 (Section 1) |
| How It Works page — Section 2 30-day timeline (4 weeks with bullets) | Task 1 Step 2 (Section 2) |
| How It Works page — Section 3 what you need to bring (6 items + closing line) | Task 1 Step 2 (Section 3) |
| How It Works page — Section 4 before/after | Task 1 Step 2 (Section 4) |
| How It Works page — Section 5 4-step process philosophy | Task 1 Step 2 (Section 5) |
| How It Works page — Section 6 CTA | Task 1 Step 2 (Section 6) |
| case-studies.html filename unchanged | Task 1 (file modified in-place, not renamed) |
| Nav "How It Works" on all pages | Already correct on all pages — no changes needed |
| Footer identical on all pages | Task 1 includes correct footer; Task 2 doesn't touch footer |
| Founder note added to index.html Operator section | Task 2 |
| No photo, stats, or other elements in founder note | Task 2 Step 1 (explicit note) |
| Contact page bullet points | Already correct — no task needed |
| Cal.com embed untouched | Contact not modified |
| Build passes | Task 3 |

**Placeholder scan:** No TBDs, TODOs, or "similar to above" in the plan. All HTML is written out in full.

**Consistency check:** The before/after section HTML in Task 1 Section 4 exactly matches the version on index.html (7 items each side, same inline grid, same border colors). The 4-step process in Task 1 Section 5 uses the same `timeline-week` / `headline-sm` / `body-text` pattern as the How We Work section on services.html. All `.pillar-list` usage follows the existing `li::before { content: '→' }` pattern.

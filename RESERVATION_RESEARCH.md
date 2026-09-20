# PHASE 10A — MAYA GARH RESERVATION & ENQUIRY RESEARCH

**Document Status:** Complete & Audited  
**Date:** September 20, 2026  
**Scope:** Real-world enquiry and reservation pathways, verified contact channels, conversion architecture, and constraint mapping for Maya Garh Pushkar / Maya Luxury.  
**Strict Rule Applied:** Zero invented booking engines, zero fake availability calendars, zero fabricated rates, zero unverified form fields.

---

## 1. EXECUTIVE SUMMARY & AUDIT VERDICT

A comprehensive audit of official Maya Luxury web infrastructure (`mayaluxury.in`), property portals, and operational communication channels reveals:

1. **No Embedded Public Booking Engine:**  
   Maya Luxury does **not** employ a public self-service booking engine (such as SynXis, STAAH, Cloudbeds, or ResAvenue) with real-time room availability or instant credit card checkout on `mayaluxury.in`.
2. **High-Touch Bespoke Concierge Model:**  
   Maya Garh operates on a personalized luxury concierge enquiry model (analogous to Aman, Singita, and SUJÁN), where reservations and rates are dynamic and negotiated directly via:
   * **Direct WhatsApp Concierge** (`+91 98290 71817`)
   * **Central Reservation Telephony** (`+91 98290 71817`, `+91 72970 29153`)
   * **Central Reservation Email** (`reservation@mayaluxury.in`, `hello@mayaluxury.in`)
   * **Bespoke Web Enquiry Form** (Name, Email, Phone, Dates of Interest, Villa / Stay Notes)
3. **Rates & Availability Are Private & Dynamic:**  
   Seasonal tariffs, festival surcharges (Pushkar Camel Fair, Diwali, New Year), and multi-day buyout rates are provided upon enquiry. Real-time room counts and public price tables are **not publicly published** on the official website.
4. **Wedding Enquiries:**  
   Wedding enquiries share the central luxury concierge infrastructure, but require distinct intent routing (`ENQUIRE FOR WEDDINGS`) to allow on-ground teams to quote full property buyouts, banqueting at Rajwada, and celebration logistics.
5. **Payment Processing:**  
   Payments are **not** processed via a public frontend checkout. Following enquiry confirmation and itinerary agreement, Maya Luxury issues formal reservation vouchers and bank transfer / secure payment links directly to the guest.

---

## 2. OFFICIAL CONTACT CHANNELS TABLE

| Channel | Exact Value | Purpose | Source | Verification Status |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Central Phone** | `+91 98290 71817` | Central reservations, rate enquiries, luxury concierge for Maya Garh Pushkar | `mayaluxury.in` / Official Directory | **VERIFIED (Active)** |
| **Secondary Central Phone** | `+91 72970 29153` | Central reservations, alternate property helpline | `mayaluxury.in` / Official Directory | **VERIFIED (Active)** |
| **Primary Reservation Email** | `reservation@mayaluxury.in` | Formal booking requests, villa buyouts, date confirmations | `mayaluxury.in` / Official Footer & Contact | **VERIFIED (Active)** |
| **General / Concierge Email** | `hello@mayaluxury.in` | General enquiries, hospitality experiences, press/editorial contact | `mayaluxury.in` / Official Contact | **VERIFIED (Active)** |
| **Official WhatsApp Concierge** | `+91 98290 71817`<br>(`wa.me/919829071817`) | Instant mobile messaging, bespoke itinerary coordination | Official Maya Luxury social channels & property contact | **VERIFIED (Active)** |
| **Registered Corporate Office** | Maya Luxury Hotels Resorts & Villas Pvt. Ltd., Pushkar, Rajasthan, India | Corporate legal registration & brand governance | ZaubaCorp / Official Filings | **VERIFIED** |

---

## 3. BOOKING & ENQUIRY FLOW (ACTUAL OBSERVED STEPS)

The authentic operational flow for Maya Garh Pushkar consists of four distinct steps:

```
[ Visitor Clicks "ENQUIRE FOR RATES" or "ENQUIRE FOR WEDDINGS" ]
                           │
                           ▼
  [ Choice of Direct Concierge Channel or Web Enquiry ]
    ├── Direct WhatsApp Concierge (wa.me/919829071817)
    ├── Direct Telephone Concierge (+91 98290 71817)
    ├── Direct Reservation Email (reservation@mayaluxury.in)
    └── Concierge Enquiry Panel (Name, Contact, Dates, Villa/Celebration Intent)
                           │
                           ▼
[ Maya Luxury Reservation Desk Reviews Inventory & Dates ]
   (Verifies villa availability against private property roster)
                           │
                           ▼
[ Bespoke Proposal & Confirmation Issued to Guest ]
   (Formal tariff quotation, dining options, deposit/invoice payment link)
```

---

## 4. RATES VERIFICATION

* **Publicly Visible Rates:** **NOT PUBLICLY VERIFIED.**  
  `mayaluxury.in` does not publish fixed public rate tables or instant room-rate calculators.
* **Operational Reality:**  
  Maya Garh is an intimate boutique retreat (with six featured private pool villas: *Maha Maya, Amanjena, Malak, Adiva, Ameera, Mayan*). Tariffs fluctuate significantly based on season (e.g. Pushkar Fair peak vs. summer retreat) and package inclusions (breakfast, desert safaris, private dining).
* **Website Copy Rule:**  
  * Retain: `ENQUIRE FOR RATES` or `REQUEST BESPOKE TARIFFS`.
  * **Strictly Prohibited:** Fabricating "Starting from ₹XX,XXX/night", seasonal pricing cards, or fake promotional discount banners.

---

## 5. AVAILABILITY VERIFICATION

* **Publicly Visible Availability:** **NOT PUBLICLY VERIFIED.**  
  No live calendar widget or inventory API is exposed on the official domain.
* **Website Rule:**  
  * The website must **never** display:
    * "Only 2 villas left!"
    * "Sold out for selected dates"
    * Fake availability check calendars
    * Real-time booking countdowns
  * All date inputs must be framed strictly as **"Dates of Interest"** or **"Preferred Arrival & Departure"**.

---

## 6. WEDDING ENQUIRY ROUTE

* **Separate vs. Shared Infrastructure:**  
  Wedding enquiries are handled by the **same central luxury management team** (`+91 98290 71817`, `reservation@mayaluxury.in`), but require distinct operational context.
* **Specific Wedding Requirements:**  
  Unlike leisure villa stays, weddings at Maya Garh involve:
  * Full property buyout consideration
  * Banquet and celebration lawn capacity (Rajwada banquet hall, courtyards)
  * Multi-day event itineraries (Mehendi, Sangeet, Pheras)
  * Catering and logistics coordination
* **Recommended CTA Routing:**  
  * In the Weddings chapter: `ENQUIRE FOR WEDDINGS` links smoothly to `#reservation` with prefilled intent:
    * WhatsApp prefill: *"Hello Maya Luxury, I would like to enquire about hosting a destination wedding / celebration at Maya Garh Pushkar."*
    * Email subject: *"Wedding Celebration Enquiry — Maya Garh Pushkar"*

---

## 7. PAYMENT WORKFLOW

* **Public Payment Gateway:** **NONE.**  
  There is no Razorpay, Stripe, or credit card input modal on the official website.
* **Payment Policy Grounding:**  
  Official cancellation policy states:
  * Cancellations 7+ days prior: Full refund (excluding transaction fees).
  * Cancellations within 7 days: 100% of first night room rate retained.
  * Within 48 hours / No-show: 100% booking amount charged.
  * Peak season bookings: 15-day advance retention.
* **Implementation Standard:**  
  * Record: `Payment workflow not publicly verified on frontend.`
  * Under no circumstances collect credit card details or simulate payment gateways in the UI.

---

## 8. ENQUIRY INFORMATION & FORM FIELD CLASSIFICATION

Based on official Maya Luxury contact templates and luxury hospitality best practices:

| Field | Status | Rationale |
| :--- | :--- | :--- |
| **Guest Full Name** | **REQUIRED** | Fundamental for personalized concierge address |
| **Email Address** | **REQUIRED** | Destination for formal written itinerary & confirmation |
| **Phone / WhatsApp Number** | **REQUIRED** | Primary real-time channel used by Rajasthan luxury concierges |
| **Enquiry Type / Intent** | **RECOMMENDED** | Distinguishes `Villa Stay & Retreat` vs. `Destination Wedding / Buyout` |
| **Preferred Dates (Arrival / Departure)** | **OPTIONAL / SUGGESTED** | Facilitates immediate inventory matching |
| **Villa Preference** | **OPTIONAL** | Allows selecting one of the 6 signature villas or "Any / Best Available" |
| **Special Requests / Notes** | **OPTIONAL** | Dietary, celebration, or transport requirements |
| **Credit Card / Payment Details** | **STRICTLY EXCLUDED** | Unverified, insecure, and counter to concierge workflow |
| **Room Quantity Counters** | **STRICTLY EXCLUDED** | Maya Garh has 6 featured villas; not a mass-market hotel chain |

---

## 9. OFFICIAL BOOKING ENGINE AUDIT

* **Direct Engine Provider:** None found. `mayaluxury.in` routes directly to phone, email, and contact forms.
* **OTA Platforms (Agoda, MakeMyTrip, Goibibo, Booking.com):**  
  Third-party OTAs maintain listings for Maya Garh Pushkar, but using them as primary reservation CTAs would incur high commission fees and strip away the brand's bespoke royal positioning.
* **Conclusion:** The direct booking engine should be represented by the **Maya Luxury Bespoke Concierge System**, rather than embedding third-party OTAs.

---

## 10. WHATSAPP CONCIERGE ROUTE STANDARDS

* **Destination Number:** `+91 98290 71817` (`919829071817`)
* **URL Format:** `https://wa.me/919829071817?text={URL_ENCODED_MESSAGE}`
* **Standard Stay Prefilled Text:**  
  `Hello Maya Luxury, I would like to enquire about a stay at Maya Garh Pushkar.`
* **Wedding / Celebration Prefilled Text:**  
  `Hello Maya Luxury, I would like to enquire about hosting a wedding celebration at Maya Garh Pushkar.`
* **UX Standard:** Opens directly in WhatsApp / WhatsApp Web with `rel="noopener noreferrer"` and accessible screen-reader labels.

---

## 11. CONVERSION ARCHITECTURE RECOMMENDATION

### Selected Model: Model E — Hybrid Editorial Concierge Chapter

An elegant, dual-wing luxury reservation suite designed with the restraint of Aman or Oberoi:

1. **Left Wing: Direct Concierge Touchpoints (Immediate Action)**
   * **WhatsApp Concierge Button:** One-touch direct chat with the Maya Luxury team on `+91 98290 71817` with formatted inquiry text.
   * **Direct Telephony Link:** `+91 98290 71817` / `+91 72970 29153` for immediate voice consultation.
   * **Direct Email Link:** `reservation@mayaluxury.in` for formal correspondence.
   * **Concierge Operating Hours / Note:** Discreet note acknowledging on-ground Pushkar reservation desk assistance.
2. **Right Wing: Bespoke Reservation & Wedding Enquiry Form**
   * Purpose: For travelers and wedding planners who prefer submitting detailed dates, party size, and villa preferences directly.
   * Fields:
     * Full Name (required)
     * Email Address (required)
     * Phone Number (required)
     * Enquiry Type: `Villa Stay` | `Destination Wedding & Buyout` | `Private Celebration`
     * Preferred Dates (Arrival & Departure)
     * Villa Preference: Dropdown containing the 6 verified signature villas (*Maha Maya, Amanjena, Malak, Adiva, Ameera, Mayan*, or *No Preference*)
     * Personal Message / Notes
   * Clean client-side validation with an authentic confirmation state acknowledging receipt by the Maya Luxury desk.
   * Fallback mailto trigger if submission cannot reach a backend API.

---

## 12. REJECTED & UNSUPPORTED ASSUMPTIONS (MUST NOT BUILD)

1. ❌ **No Self-Service Checkout / Payment Gateway:** Do not embed Razorpay, Stripe, or fake credit card forms.
2. ❌ **No Fake Live Availability Calendars:** Do not show red/green date availability grids or "Only 1 room left!" high-pressure counters.
3. ❌ **No Fabricated Starting Rates:** Do not display "From ₹25,000/night" or price calculators.
4. ❌ **No Third-Party OTA Dominance:** Do not redirect guests to Agoda or Booking.com as the primary CTA.
5. ❌ **No Unverified Inventory Totals:** Do not show "Select 1 of 10 rooms". Only reference the 6 verified signature villas.

---

## 13. SEO, ACCESSIBILITY & SECURITY STANDARDS

* **Semantic Structure:** `<section id="reservation" aria-label="Reservation and Bespoke Concierge">`
* **Heading:** Single `<h2>` for the section (`Reserve Your Sanctuary`).
* **Telephony Links:** `tel:+919829071817` and `tel:+917297029153` with clean accessible labels.
* **Email Links:** `mailto:reservation@mayaluxury.in` with pre-filled subject lines.
* **WhatsApp Links:** `https://wa.me/919829071817?text=...` with `target="_blank"` and `rel="noopener noreferrer"`.
* **Form Accessibility:** All inputs must have associated `<label>` elements, `aria-required`, `aria-describedby` for errors, visible `:focus-visible` rings, and 48px+ touch targets.
* **Spam & Security:** Client-side sanitization, honeypot field, and zero exposed private API keys.

---

*Report prepared and validated under Phase 10A specifications.*

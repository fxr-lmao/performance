# 🦅 Victor's Performance OS
### Military-Grade Personal Optimization System

**Victor's Performance OS** is a private, high-performance ecosystem designed specifically for **Victor Fournier (Fxr Interactive)** in Joliette, QC. This system serves as a 10-year strategic tool to prepare for integration as a fighter pilot in the **Royal Canadian Air Force (RCAF)**.

---

## 🎯 Strategic Vision & Objectives
- **10-Year Pipeline**: A decade-long trajectory leading to RCAF "wings".
- **Philosophy**: "No-backend", zero social features, zero monetization. Pure focus on data, schedule, and daily performance scores.
- **Milestones**:
    - **2027**: Enriched Science program at CÉGEP.
    - **Level 3+ Cadets**: Target for Glider Pilot Scholarship (GWFC) at age 16 and Power Pilot Scholarship (PPSL) at age 17.
    - **2031**: RMC (Royal Military College) Enrollment.

---

## 📅 The Sacred Schedule (Optimized)
The system enforces a strict morning block to maximize cognitive gains.
> *“Gaining 30 minutes every morning results in 182 hours of additional Deep Work per year.”*

- **06:00**: Wake-up (Advanced target: 06:30).
- **06:00 - 06:10**: **PVT Test**, Readiness Score, and Morning Brief.
- **06:10 - 09:00**: **Deep Work (2h50)** — CÉGEP, Cadet Theory, Chess.
- **09:20 - 16:15**: Enriched Academic Program.
- **16:30 - 18:30**: Training Window (Runna/Strength/Neck Conditioning).
- **18:30 - 21:30**: Study Block 2, Dinner, and Recovery.
- **21:30 - 22:00**: Shutdown Protocol (Dim lights, no caffeine, planning).
- **22:00 - 06:00**: **8h Sleep (Non-negotiable)**.

---

## 🧠 The Readiness Engine
A daily diagnostic score calculated at 06:00 to dictate training and cognitive intensity.

### 📐 The Formula
$$Score = 0.28 \cdot HRV_{\Delta} + 0.25 \cdot SleepScore + 0.20 \cdot TSB_{norm} + 0.15 \cdot PVT_{\Delta} + 0.12 \cdot RPE_{inv}$$

### 📡 Signal Weighting
- **HRV (28%)**: Autonomic recovery via Garmin.
- **Sleep Score (25%)**: Cognitive and physical capacity.
- **TSB (20%)**: Training Stress Balance (FATIGUE) via FIT files.
- **PVT (15%)**: Central Nervous System (CNS) state.
- **RPE Inverse (12%)**: Subjective effort evaluation.

### ⚙️ Automated Decision Logic
| Score | State | Training Intensity | Academic Intensity |
| :--- | :--- | :--- | :--- |
| **85-100** | **Peak** | Full plan, Max intensity | Total Capacity |
| **70-84** | **Good** | Full plan, -10% intensity | Normal Block |
| **55-69** | **Build** | Light Aerobic only | -20% Session |
| **40-54** | **Caution** | Mobility + Walking only | Light Material |
| **<40** | **Rest** | **Cancelled** | Review Only |

---

## ✈️ Pilot Pipeline & Aptitude
- **PVT (Psychomotor Vigilance Test)**: A 30-second daily reaction test. Building a 10-year longitudinal database to prove neurological stability for RCAF selection.
- **Sleep Debt Impact**: 30m loss/night = 45h debt in 90 days. Reaction times drop below RCAF medical thresholds.
- **G-Force Conditioning**: Specific neck and core exercises integrated into training windows.

---

## 📑 Priority Stack (Hierarchy)
1. **P0**: Sleep (8h).
2. **P1**: School & Deep Work.
3. **P2**: Cadet Obligations.
4. **P3**: Structured Training.
5. **P4**: Piano & Hobbies.
6. **P5**: Gaming & Leisure (Always last).

> **Exam Rule**: If a major test is within 72h, physical training automatically swaps to "Light Aerobic" (-30/40%) to protect cognitive resources.

---

## 🛠 Technical Architecture
- **Framework**: React Native + Expo (TypeScript).
- **Database**: WatermelonDB (SQLite local) — Offline-first.
- **AI**: Claude (Anthropic API) — Morning briefings & Natural Language processing for training plans.
- **Biometrics**: Garmin Health SDK + Webhooks.
- **Privacy**: Zero server. All data remains on-device.

---

## 🚀 Development Roadmap (Build Order)
*Use the checkboxes below to track implementation progress.*

### Phase 1: Foundation
- [x] Initialize React Native + Expo project.
- [x] Configure WatermelonDB Schema (Readiness, PVT, Workouts).
- [x] Implement Garmin OAuth Flux & Webhook listeners.

### Phase 2: Readiness Engine
- [x] Build the PVT (Psychomotor Vigilance Test) component.
- [x] Implement the Readiness Score Algorithm ($Score$).
- [x] Create the Daily Morning Briefing UI.

### Phase 3: Training & Performance
- [ ] Integrate FIT file parsing (TSB calculation).
- [ ] Implement Runna API/Plan integration.
- [ ] Build the "Plan Override" system based on Readiness.

### Phase 4: Academic Integration
- [ ] Integrate School Calendar (ICS/CalDAV).
- [ ] Implement the "72h Exam Rule" logic for training reduction.
- [ ] Create the Deep Work timer/tracker.

### Phase 5: Pilot Log & Certification
- [ ] Build long-term trend graphs (10-year database visualization).
- [ ] Implement PDF Export for the official RCAF Application Dossier.
- [ ] Final UI Polish (Premium Dark Mode Aesthetics).

---
*Created with focus and discipline for the future of aviation.*
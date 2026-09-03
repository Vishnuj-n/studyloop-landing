# StudyLoop — Landing Page Design System & Architecture Specification (`DESIGN.md`)

> **Purpose:** Canonical blueprint for rebuilding the StudyLoop landing page and marketing experience. Accurately represents the complete closed-loop app flow (Queue, Reading, Quiz, Socratic Rescue, FSRS Flashcards, Milestone Exams, Examiner Mode, BYOK Architecture, and Extensions).

---

## 1. Visual Theme and Atmosphere

- **Aesthetic Direction:** *Engineered Editorial & Local-First Sovereignty*. Quiet, high-contrast, technical authority. Feels like a precision desktop instrument (similar to Linear, Raycast, and Obsidian) rather than a generic SaaS sales page or consumer chatbot wrapper.
- **Mood & Energy:** Focus-driven, calm, zero marketing fluff. Emphasizes privacy, determinism, and cognitive rigor.
- **Surface Philosophy:** Dark-mode primary with seamless light-mode parity. Depth achieved through luminance stepping and subtle translucent border strokes rather than heavy drop shadows or cheap glassmorphism blur filters. No purple gradients.

---

## 2. Color Palette & Semantic Roles

Built on OKLCH-aligned perceptual steps with dark (`#0B0F17`) and light (`#FFFFFF`) support.

### Dark Mode (Primary Canvas)
| Token | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `bg-canvas` | `#0B0F17` | Root background canvas |
| `bg-surface-1` | `#111827` (`rgba(255,255,255,0.03)`) | Base container / card surface |
| `bg-surface-2` | `#1F2937` (`rgba(255,255,255,0.06)`) | Elevated card layer / hover state |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard divider & card boundary |
| `border-prominent` | `rgba(255, 255, 255, 0.16)` | Active state / highlighted card outline |
| `text-primary` | `#F9FAFB` | Main headlines & high-contrast body |
| `text-muted` | `#94A3B8` | Subtext, captions, and secondary copy |
| `accent-primary` | `#6366F1` (Indigo 500) | Primary brand accent & active tasks |
| `accent-secondary` | `#0EA5E9` (Sky 500) | Secondary highlight & quiz validation |
| `status-pass` | `#10B981` (Emerald 500) | Mastery, Quiz Pass, Local-only badges |
| `status-rescue` | `#EF4444` (Rose 500) | Strike 2 Fail, Socratic Rescue trigger |
| `status-warning` | `#F59E0B` (Amber 500) | Strike 1 REREAD, Python dependency notice |

### Light Mode Parity
| Token | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `bg-canvas` | `#FFFFFF` | Clean white base canvas |
| `bg-surface-1` | `#F8FAFC` | Offset panel background |
| `bg-surface-2` | `#F1F5F9` | Elevated card layer |
| `border-subtle` | `rgba(0, 0, 0, 0.08)` | Card outline & row borders |
| `text-primary` | `#0F172A` | Deep charcoal primary text |
| `text-muted` | `#64748B` | Slate secondary copy |
| `accent-primary` | `#4F46E5` (Indigo 600) | Primary CTA & active states |

---

## 3. Typography Rules

- **Display & Section Headers:** **Space Grotesk** / **Plus Jakarta Sans** (SemiBold/Bold, `tracking-tight` / `-0.022em`, `text-wrap: balance`).
- **Body & Technical Specs:** **Inter** or clean system font stack (`tracking-normal`, line-height `1.6`, `text-wrap: pretty`).
- **Data, Numbers, Badges, Code:** **JetBrains Mono** / tabular numerals (`font-variant-numeric: tabular-nums`).

---

## 4. Complete App Flow & Section-by-Section Blueprint

The landing page communicates that StudyLoop is a **deterministic, self-healing closed-loop learning engine**.

---

### Section 1: Navigation Header (Sticky)
- **Left:** StudyLoop Logomark (Indigo glyph + bold wordmark) + Version Pill (`v1.0 Desktop`).
- **Center:** Quick Links (`How It Works`, `The Engine`, `BYOK Privacy`, `Extensions`, `Pricing`, `FAQ`).
- **Right:**
  - GitHub repository link (`https://github.com/Vishnuj-n/studyloop`).
  - Light/Dark theme toggle with animated sun/moon transition.
  - Primary Action Button: `Download for Windows`.

---

### Section 2: Hero Section
- **Top Pill:** `100% Free Core Desktop App · Local-First · Zero Monthly Markups`
- **Main Headline:**
  ```text
  The Anti-Chatbot AI Study Queue
  for Serious Learners.
  ```
- **Subtitle:**
  > *"Stop getting lost in open-ended AI chat windows. StudyLoop breaks your massive textbooks and YouTube lectures into a deterministic, local-first queue with on-device vector search, automated comprehension quizzes, and FSRS-4 spaced repetition."*
- **Primary CTAs:**
  - `Download Free Desktop App (Windows)` (High-contrast Indigo primary button).
  - `Explore Pro Extensions ($39/yr)` (Ghost button with subtle outline).
- **Trust Badges Row:**
  - `✓ 100% Local Privacy (ONNX Embeddings)`
  - `✓ Bring Your Own Key (Gemini, OpenAI, Ollama)`
  - `✓ 2-Strike Socratic Concept Rescue`
  - `✓ No Monthly Subscriptions`

---

### Section 3: "The Closed-Loop Engine" (Interactive Workflow)
Reactive flowchart showcasing actual states:
1. **Step 01 — Deterministic Queue:** 8-tier cognitive priority hierarchy (`FLASHCARD_GENERATE` → `SOCRATIC_REMEDIAL` → `FLASHCARD_REVIEW` → `REREAD` → `QUIZ` → `MILESTONE_EXAM` → `READING` → `EXAMINER`).
2. **Step 02 — Chunked Reading & Video:** 500+ page PDFs & YouTube lectures parsed into sliding-window 2,500-word study chunks.
3. **Step 03 — Synchronous Validation Quiz:** Immediate questions locked to source text.
4. **Step 04 — Branching Retention & Self-Healing Remediation:**
   - **Quiz Pass:** FSRS-4 flashcards generated for spaced retention; every 10 quizzes triggers an aggregate **Milestone Exam**.
   - **Quiz Fail (Strike 1):** Queue schedules targeted **REREAD** with AI-generated breakdown of missed concepts.
   - **Quiz Fail (Strike 2):** Queue halts progression with **Socratic Concept Rescue**—forcing interactive chat or prompt export to diagnose root misunderstandings before allowing a re-quiz.

---

### Section 4: Deep-Dive Feature Modules
1. **Socratic Concept Rescue**
2. **Milestone Aggregate Exams & Examiner Mode**
3. **FSRS-4 Spaced Repetition (Decoupled & Batch-Scheduled)**
4. **Deterministic Ingestion Engine**

---

### Section 5: BYOK & Zero-Markup Architecture
Visualize Local-First Data Pipeline and zero-markup provider cost comparison.

---

### Section 6: Extensions Hub
- **YouTube Lecture Ingestion** (`Free` - deterministic transcript chunking & quizzes)
- **Audio Overview (Podcast)** (`Pro` - requires local Python for Edge TTS)
- **Reader "Simplify" Tool** (`Free`)
- **Future Importers (12 Mo)** (`Pro` - Obsidian/Notion Vaults, MarkItDown)

---

### Section 7: Transparent Pricing & Plan Comparison
- Community Edition ($0 / Forever)
- 1-Year Pro Extensions Pass ($39 / Single Year Payment - No recurring subscription)
- Full Feature Comparison Table

---

### Section 8: Frequently Asked Questions (Accordion)
5 key questions answered in detail with smooth accordion transitions.

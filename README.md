<div align="center">

# 📚 Thanaweya Student — طالب ثانوية

**A free, open-source, offline-first study companion built for Egyptian Thanaweya Amma & Arab students 🇪🇬**

[العربية 🇪🇬](./README.ar.md) 
</div>

---

## 🌟 About The Project

**Thanaweya Student (طالب ثانوية)** is an all-in-one smart study platform designed to take the stress out of high school (*Thanaweya Amma*). Built in relatable Egyptian Arabic with an accessible, distraction-free interface, it helps students organize their time, stay consistent, and track progress—even without an internet connection.

> 🏆 *Developed in preparation for the **Egyptian State Award for Young Innovators 2027 (جائزة الدولة للمبدع الصغير)**.*

---

## ✨ Key Features

* 🤖 **Smart AI Study Planner:** Powered by an open-source AI model to build personalized daily and weekly schedules around your sleep hours, private lessons, and free time—automatically prioritizing revision before exams while letting you edit manually.
* ⚖️ **Smart Workload Balancing:** Splits chapters and homework evenly across the week so no single day feels overwhelming, sending proactive alerts like *"X days left until the exam and Chapter Y isn't finished yet."*
* 🍅 **Built-in Pomodoro Timer:** Integrated focus and healthy break sessions synced directly with your scheduled subjects.
* 📊 **Gamified Progress & Streaks:** Track daily focus sessions, maintain study streaks, and earn XP and badges.
* 🏆 **Privacy-First Leaderboard:** Compete using only a username and XP—no public profiles, photos, or personal details exposed.
* 📱 **Offline-First PWA:** Installable on any phone or desktop home screen with a single tap, keeping all core study tools functional offline.
* 🔔 **Optional Telegram Reminders:** Connect to a free Telegram bot for schedule and exam notifications that you can customize or mute anytime.
* 🇬🇧 **English Curriculum Spaced Repetition:** Memorize and review the full high school English vocabulary curriculum with smart daily spaced repetition.
* 📝 **Manually Reviewed Summaries:** Access clean, handwritten study summaries reviewed for quality and copyright compliance with creator approval.
* 📄 **Student Resource Blog:** Curated guides featuring free productivity apps and practical study tips.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org) (App Router)
* **Language:** [TypeScript](https://typescriptlang.org)
* **Styling & UI:** [Tailwind CSS](https://tailwindcss.com) & [ShadCN UI](https://shadcn.com)
* **Database & ORM:** [Turso](https://turso.tech) (SQLite) & [Drizzle ORM](https://drizzle.team)
* **AI & Inference:** [Hugging Face Spaces](https://huggingface.co) *(built with assistance from DeepSeek & Google Gemini)*
* **Deployment:** [Vercel](https://vercel.com)

---

## 🚀 Getting Started

To run a local copy of **Thanaweya Student**, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/omarhossdev/thanaweya-student/
   cd thanaweya-student
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your database and AI keys:
   ```env
   TURSO_DATABASE_URL=your_turso_url
   TURSO_AUTH_TOKEN=your_turso_token
   AUTH_SECRET=your_auth_secret
   ```
   you can generate `AUTH_SECRET` using `openssl rand -base64 32`

4. **Push the database schema**
   ```bash
   pnpm db
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

---

## 🤝 Contributing & License

Issues, and feature requests are always welcome! Feel free to check the [issues page](https://github.com/omarhossdev/thanaweya-student/issues).

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
Made with ❤️ by <a href="https://github.com">Omar Hossam (omarhossdev)</a>
</div>

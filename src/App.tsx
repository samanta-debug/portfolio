import React from 'react'

type Project = {
  title: string
  subtitle: string
  bullets: string[]
  tags: string[]
}

// const PROJECTS: Project[] = [
//   {
//     title: 'Smart Doc Summarizer',
//     subtitle: 'End-to-end NLP pipeline — ingestion, retrieval-augmented generation, and deployment',
//     bullets: [
//       'Built retrieval + LLM pipeline using LangChain and FAISS; fine-tuned a T5 model for abstractive summarization.',
//       'Dockerized and deployed as a FastAPI service with CI/CD; latency 300ms per request (p99).',
//       'Repo: https://github.com/YOUR_GITHUB_USERNAME/smart-doc-summarizer'
//     ],
//     tags: ['PyTorch', 'LangChain', 'FAISS', 'FastAPI', 'Docker']
//   },
//   {
//     title: 'Production Anomaly Detector',
//     subtitle: 'Time-series anomaly detection with streaming and alerting',
//     bullets: [
//       'Designed a light-weight LSTM + seasonal decomposition model for near-real-time anomaly detection.',
//       'Integrated with Kafka for streaming, Prometheus for metrics, and alerting on Slack.',
//       'Repo: https://github.com/YOUR_GITHUB_USERNAME/anomaly-detector'
//     ],
//     tags: ['PyTorch', 'Kafka', 'Prometheus', 'Docker']
//   },
//   {
//     title: 'Vision Search',
//     subtitle: 'Image search using embeddings and approximate nearest neighbors',
//     bullets: [
//       'Built image encoder using contrastive learning; indexed embeddings with Annoy for fast nearest-neighbor search.',
//       'Demo: hosted Hugging Face Space (link) and GitHub repo.',
//     ],
//     tags: ['PyTorch', 'Annoy', 'Hugging Face']
//   }
// ]

const PROJECTS: Project[] = [
  {
    title: 'PolySumm – Bilingual Text Summarizer (EN + BN)',
    subtitle: 'Multilingual abstractive summarization optimized with ONNX runtime and 8-bit quantization',
    bullets: [
      'Built bilingual summarizer (Bengali + English) using mT5-small and Hugging Face Transformers.',
      'Optimized inference with ONNX runtime, reducing runtime from 71s → 21s.',
      'Evaluated using ROUGE metrics (Best ROUGE-L = 0.0654).',
    ],
    tags: ['Transformers', 'mT5', 'ONNX', 'Python', 'NLP']
  },
  {
    title: 'DocMind – Intelligent Retrieval-QA System',
    subtitle: 'LLM-powered Q&A using RAG, LangChain Agents, and contextual retrieval',
    bullets: [
      'Developed end-to-end retrieval-augmented generation pipeline for document Q&A.',
      'Implemented query rewriting, contextual retrieval, and agentic reasoning via LangChain.',
      'Logged responses, latency, and sources using LangSmith for full observability.',
    ],
    tags: ['LangChain', 'RAG', 'AstraDB', 'FastAPI', 'LLM']
  },
  {
    title: 'ShopBot AI – Multilingual Ecommerce Assistant',
    subtitle: 'Bilingual chatbot for personalized shopping recommendations and order assistance',
    bullets: [
      'Built bilingual (EN + BN) ecommerce chatbot using FastAPI + NLP.',
      'Integrated with live product database for real-time recommendations.',
      'Dockerized and deployed via AWS EC2 with CI/CD using GitHub Actions.',
    ],
    tags: ['FastAPI', 'Docker', 'AWS EC2', 'NLP', 'CI/CD']
  },
  {
    title: 'TripGenie – AI Travel Planner',
    subtitle: 'AI-powered travel planner integrating real-time data, cost estimation, and itinerary generation',
    bullets: [
      'Developed intelligent trip planner using Python and LangChain with live weather & activity APIs.',
      'Generated personalized itineraries with total expense estimation and summary output.',
      'Delivered end-to-end trip insights combining multiple real-time data sources.',
    ],
    tags: ['Python', 'LangChain', 'APIs', 'AI Agent']
  },
  {
    title: 'MediLingua – AI Health Assistant (EN + BN)',
    subtitle: 'Bilingual medical Q&A system fine-tuned with LoRA for efficient inference',
    bullets: [
      'Built multilingual health assistant using Llama-3.2-3B-Instruct (Unsloth) with LoRA fine-tuning.',
      'Enabled automatic language detection (EN + BN) and trained on medical QA datasets.',
      'Deployed as lightweight FastAPI service (validation loss: 0.74).',
    ],
    tags: ['Llama-3.2', 'LoRA', 'FastAPI', 'Groq API', 'NLP']
  },
];


const TECH = ['Python', 'PyTorch', 'LangChain', 'Hugging Face', 'Transformers', 'TensorFlow', 'FastAPI', 'Docker', 'Kubernetes', 'CI/CD', 'SQL', 'Git', 'Prometheus']

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold">FARJANA KABIR</h1>
            <h2 className="text-xl font-semibold mb-4">
            AI Engineer&nbsp;|&nbsp;LLM &amp; MLOps Specialist
          </h2>
            {/* <p className="mt-2 text-lg max-w-xl">AI Engineer — I build production-ready ML systems: model development, infra, and deployable services.</p> */}
            <p className="mt-2 text-lg max-w-xl">Designing, fine-tuning, and deploying scalable AI systems that turn
            research breakthroughs into real-world impact.</p>
            <div className="mt-4 flex gap-3">
              <a className="inline-block bg-white text-sky-700 px-4 py-2 rounded-md font-medium" href="mailto:farjanakabirsamanta85@gmail.com">Email</a>
              <a className="inline-block bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md" href="https://github.com/samanta-sc" target="_blank" rel="noreferrer">GitHub</a>
              <a className="inline-block bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md" href="https://www.linkedin.com/in/farjana-kabir-samanta-2a8802321/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="w-full md:w-64 bg-white/10 rounded-lg p-4">
            <p className="text-sm">Location</p>
            <p className="font-medium">Dhaka, Bangladesh</p>
            <p className="mt-3 text-sm">Open to full-time, contract, and remote roles</p>
            <a className="mt-4 block font-medium underline" href="https://samanta-debug.github.io/Farjana_Kabir_Resume.pdf">View Resume</a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
  <section>
    <h2 className="text-2xl font-bold">Highlighted Projects</h2>

    <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
      {PROJECTS.map((p) => (
        <article key={p.title} className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-600">{p.subtitle}</p>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1 text-gray-700">
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {TECH.map((t) => (
              <div key={t} className="px-3 py-2 bg-white rounded-lg shadow-sm text-sm">{t}</div>
            ))}
          </div>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-bold">Experience</h2>
  <div className="mt-4 space-y-4">
    
    <div className="bg-white rounded-2xl p-5 shadow">
      <h3 className="font-semibold">Senior Data Scientist — Somikoron</h3>
      <p className="text-sm text-gray-600">Sep 2023 — Feb 2025 · Remote</p>
      <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
        <li>Led Bangla Q&A generation initiative using LLM architectures; achieved <strong>93% evaluation accuracy</strong> across standardized exam sets.</li>
        <li>Developed a <strong>10-class road defect detection system</strong> improving Roads & Highways maintenance efficiency by ~80%.</li>
        <li>Enhanced NLP pipelines with <strong>n-gram–based structural and semantic modeling</strong>, improving downstream performance by ~40%.</li>
        <li>Re-engineered Bangla stemmer and lemmatizer with a team of 3; reduced unique token count by <strong>3.34%</strong> and improved morphological consistency.</li>
        <li>Designed optimized data structures improving recommender performance by <strong>10%</strong> and documented metrics for handover.</li>
      </ul>
    </div>

    <div className="bg-white rounded-2xl p-5 shadow">
      <h3 className="font-semibold">Data Scientist — Somikoron</h3>
      <p className="text-sm text-gray-600">Mar 2023 — Aug 2023 · Remote</p>
      <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
        <li>Built Bengali corpora and ML applications aligned to business goals; standardized text-cleaning and NLP pipelines.</li>
        <li>Extracted and structured <strong>~50 key data fields</strong> from diverse sources to enhance linguistic datasets and power downstream models.</li>
      </ul>
    </div>

  </div>
</section>


        <section className="mt-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-sm text-gray-600">Always open to collaboration and new opportunities in AI and MLOps.
          Reach out anytime!</p>
          <div className="mt-4 flex gap-3">
            <a className="inline-block px-4 py-2 bg-sky-600 text-white rounded-md" href="mailto:farjanakabirsamanta85@gmail.com">Email</a>
            <a className="inline-block px-4 py-2 border rounded-md" href="https://github.com/samanta-sc">GitHub</a>
            <a className="inline-block px-4 py-2 border rounded-md" href="https://www.linkedin.com/in/farjana-kabir-samanta-2a8802321/">LinkedIn</a>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-gray-500">© {new Date().getFullYear()} FARJANA KABIR — AI Engineer</footer>
      </main>
    </div>
  )
}

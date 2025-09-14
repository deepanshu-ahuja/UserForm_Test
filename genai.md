My focus is to **learn Generative AI (GenAI) from a developer perspective** — not on AI coding assistants (e.g., Copilot). 
I want a complete, step-by-step, developer-oriented curriculum that teaches both concepts and how to build real GenAI features into web apps.

Requirements for your teaching style:
- Cover core GenAI theory (transformers, tokenization, LLMs, embeddings, attention, prompt engineering).
- Teach practical developer topics: calling LLM APIs, RAG (Retrieval-Augmented Generation), vector DBs, fine-tuning/adapter flows, evals, cost/scale/monitoring, safety/hallucinations, latency/caching.
- Explicitly include **LangChain** (or equivalent orchestration frameworks) and **Hugging Face** (Transformers, Hub, model hosting) and show when to use Python vs Node/TS.
- Provide **hands-on projects and code** (React/TypeScript frontends, Node.js backend, Python examples where needed for model work), architecture diagrams, sample repo structure, and full end-to-end examples (e.g., RAG Q&A, semantic search, content pipelines).
- Act as my teacher/mentor: explain concepts thoroughly, give exercises, checkpoints, and deliverables. Provide clear code snippets, commands, and references so I can implement them.
- After finishing GenAI fundamentals and practicals, prepare a separate roadmap for **Agentic AI** that builds on GenAI foundations.



## **Module 0 — Environment & Tooling**
- Set up **Node.js + TypeScript** for app integration.  
- Have **Python** ready (for Hugging Face / model work).  
- Optional infra tools: **Docker**, Postman/Insomnia, GitHub Codespaces.

---

## **Module 1 — GenAI Foundations**
- What is Generative AI?  
- LLM basics: Transformers, tokenization, embeddings, attention.  
- Prompt engineering basics (zero-shot, few-shot, chain-of-thought).  
- Tokens & context windows (important for scaling apps).  

---

## **Module 2 — LLM APIs**
- Using APIs (OpenAI, Anthropic, Gemini).  
- API request/response patterns in Node.js.  
- Handling rate limits & retries.  
- JSON mode, structured outputs, schema validation.  

---

## **Module 3 — Retrieval & Vector Databases**
- Why embeddings matter.  
- Chunking docs, creating embeddings, storing vectors.  
- Hands-on with **Pinecone, Weaviate, Milvus, or PostgreSQL + pgvector**.  
- Implementing similarity search.  

---

## **Module 4 — RAG (Retrieval-Augmented Generation)**
- What is RAG & why it’s important.  
- Building an ingestion → retriever → generator pipeline.  
- Project: **Docs Q&A system** (React frontend + Node API + vector DB).  

---

## **Module 5 — LangChain / Orchestration**
- LangChain basics: chains, agents, tools.  
- Memory patterns (short-term vs long-term).  
- Practical examples: multi-step question answering, API integration.  
- Node.js + LangChain integration.  

---

## **Module 6 — Hugging Face Ecosystem**
- Hugging Face Hub: finding & hosting models.  
- Using **Transformers** for inference.  
- Fine-tuning with **PEFT/LoRA adapters**.  
- When to use Hugging Face vs API-based models.  

---

## **Module 7 — Fine-tuning & Custom Models**
- When to fine-tune vs prompt-engineer.  
- Data prep for fine-tuning.  
- Training loop overview with Hugging Face.  
- Evaluation of fine-tuned models.  

---

## **Module 8 — Production Readiness**
- Cost optimization (caching, batching, hybrid RAG).  
- Monitoring & logging.  
- Handling hallucinations & safety.  
- Evals: accuracy, latency, reliability.  

---

## **Module 9 — Projects & Capstone**
- Project 1: **Semantic Search for product catalog**.  
- Project 2: **Content pipeline** (summarization, rewriting, classification).  
- Project 3: **Chatbot with RAG + memory**.  
- Deliverables: MERN stack apps, reusable services, tests.  

---

## **Module 10 — Agentic AI (Next Phase)**
- Difference between GenAI vs Agentic AI.  
- Agent concepts: planning, tool use, multi-step workflows.  
- Frameworks: LangChain Agents, AutoGen, CrewAI.  
- Building autonomous agents with memory/state.  
- Multi-agent orchestration (collaborative AI).

## 1. The Core Idea  
Generative AI (GenAI) is a type of AI that can **create new content** (text, images, audio, code) instead of just analyzing data.  
- Example: A normal program might *check if a password is correct*.  
- GenAI can *write a whole paragraph explaining how to reset your password*.  

At the core of today’s GenAI are **Large Language Models (LLMs)** — these are giant neural networks trained on billions of words.  

---

## 2. The Developer’s Mental Model  
Instead of thinking of an LLM as “magical,” think of it as:  


- **Input:** Your prompt (“Explain React useState in simple words”).  
- **Processing:** Model predicts the next word → “React” → “useState” → “is” → …  
- **Output:** A fluent explanation.  

That’s it. Everything (chatbots, RAG, agents) is built on top of this “next word prediction engine.”  

---

## 3. Why This Matters for Developers  
As a MERN/full-stack developer, this changes how you think about features:  
- **Traditional dev:** Build rules/if-else logic → predictable but rigid.  
- **GenAI dev:** Build *contexts and constraints* → flexible, adaptive, but less predictable.  

**Your job shifts from writing all the rules → to shaping the prompt, providing data (RAG), and controlling the outputs.**  

---

## 4. Key Building Blocks You’ll Keep Seeing  
Let’s introduce some terms now so they won’t feel alien later:  
- **Tokens** → the “words” of LLMs (not exactly words, but chunks).  
- **Embeddings** → numerical representations of meaning (for search).  
- **Context Window** → how much text the model can “remember” in one go.  
- **RAG (Retrieval-Augmented Generation)** → the trick of retrieving info from a database and feeding it into the model so it answers with your data.  
- **Fine-tuning** → training the model further on your specific data to specialize it.  

---

## 5. First Analogy (to lock the idea)  
Think of an LLM as a **very advanced autocomplete system**:  
- When you type in Google → it predicts search queries.  
- An LLM → predicts whole essays, code, or conversations.  

So, **GenAI is basically “autocomplete on steroids.”**  
And as a developer, you’ll learn how to **feed it the right context** so it autocompletes *exactly what you want*.  

---

## 6. Mini-Exercise (Conceptual)  
Let’s do a quick thought exercise (no code yet):  

Imagine you build a **React FAQ chatbot** for your company.  
- Old way: You write dozens of if-else rules like:  
  ```js
  if (input.includes("password reset")) return "Go to Settings → Security";  
  ```  
- New way: You give the LLM:  
  - Prompt: “Answer user questions using the company FAQ below. If not found, say ‘Not sure.’”  
  - Context: A few FAQ entries (“How to reset password → Go to Settings → Security”).  
- Then no matter how the user phrases the question, the LLM answers correctly by *generalizing*.  

This is **why GenAI is powerful**: it removes the need to anticipate *every possible user phrasing*.  

---

- What GenAI is (content generation, not rule-based).  
- Why LLMs = next word predictors.  
- How developers use GenAI differently from traditional programming.  
- Key terms: tokens, embeddings, context, RAG, fine-tuning.

## 1. What Are Tokens?
- **Tokens** are the smallest chunks of text an LLM understands.  
- They are not always full words:
  - “cat” → one token  
  - “cats” → might be two tokens (“cat”, “s”)  
  - “unbelievable” → could split into (“un”, “believ”, “able”)  
- Tokenization depends on the **model’s vocabulary**.  

Models don’t “see” whole sentences; they see sequences of Lego blocks.

---

## 2. Why Tokens Matter
- **Cost**: API pricing is usually per 1,000 tokens (input + output).  
- **Latency**: More tokens = slower responses.  
- **Limits**: Each model has a **context window** (e.g., 8k, 32k, 200k tokens). You can’t exceed it.  

➡️ As a developer, always ask: *“How many tokens will my input + expected output cost?”*

---

## 3. Quick Token Example
```
"Reset your password in the settings page."
```
Might tokenize into something like:  
```
["Reset", " your", " password", " in", " the", " settings", " page", "."]
```
= 8 tokens.  

Long documents (like FAQs, PDFs) can easily reach **thousands of tokens**, which is why we don’t just paste everything → we use **RAG** to retrieve only the needed chunks.

---

## 4. What Are Embeddings?
- An **embedding** is a vector (list of numbers) that represents the *meaning* of text.  
- Instead of words, we turn text into math.  
- Example:  
  - “reset password” → `[0.21, -0.53, 0.88, …]` (768 dimensions)  
  - “change password” → almost the same vector (close in space).  
  - “order pizza” → very different vector (far away).  


---

## 5. Why Embeddings Matter
- Enable **semantic search**:  
  Find “change my login password” even if the docs say “reset credentials.”  
- Core of **RAG pipelines**:  
  - Step 1: Embed all docs into vectors  
  - Step 2: On query, embed the question  
  - Step 3: Find closest matches (cosine similarity)  
  - Step 4: Send those matches to the LLM as context.  
- Other uses: recommendations, clustering, deduplication.

---

## 6. Practical Example (Node.js Pseudocode)
```js
import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 1. Create an embedding for a query
const embedding = await client.embeddings.create({
  model: "text-embedding-3-small",
  input: "How do I reset my password?"
});

// 2. Store embedding.vector in a DB (e.g., pgvector, Pinecone, Weaviate)

// 3. Later, search: embed user query, find nearest neighbors, feed into LLM
```

---

## 7. Analogy to Lock It In
- **Tokens**: The **letters/words** the model reads.  
- **Embeddings**: The **meaning** in math form (so we can compare texts).  
- Together:
  - Tokens = how the LLM *reads text*.  
  - Embeddings = how we *organize and search knowledge* before sending it in.

---

1. What tokens are and why they affect cost, speed, and limits.  
2. What embeddings are and why they’re critical for semantic search.  
3. How embeddings enable RAG pipelines.  
4. Why developers must care about token budgeting + embeddings when building apps.

## 1. Why Transformers?
- Old models (RNNs, LSTMs) read text one word at a time → slow and bad at long dependencies.  
- Transformers process **all tokens in parallel** and still capture relationships.  
- This makes them fast, scalable, and able to handle very long contexts.

---

## 2. The Attention Mechanism
- Each token decides *“which other tokens matter to me?”*  
- Done using **Queries (Q), Keys (K), and Values (V)**:
  - **Query (Q)** → what am I looking for?  
  - **Key (K)** → what do I offer?  
  - **Value (V)** → what details can I share?  
- Each token’s Q is compared with every token’s K → attention weights.  
- These weights decide how much of each Value is mixed in.  


---

## 3. Multi-Head Attention
- The model runs attention many times in parallel (“heads”).  
- Each head looks for different patterns:
  - One head might capture syntax.  
  - Another captures semantics.  
  - Another captures relationships.  
- Then they’re combined for a rich understanding.

---

## 4. Positional Information
- Transformers don’t know order by default.  
- We add **positional encodings** (like sine/cosine signals or rotary embeddings).  
- This way the model knows “dog bites man” ≠ “man bites dog”.

---

## 5. Layers and Depth
- A transformer stacks many attention layers + feedforward nets.  
- Each layer refines token meaning in context.  
- By the end, every token is represented with global knowledge of the sequence.  

---

## 6. Why This Matters for Developers
- **Prompt structure** matters → clear formatting makes attention focus well.  
- **Context length is expensive** → attention cost grows ~O(n²).  
- **Ambiguity/repetition** in prompts can confuse the model (scattered attention).  

---

## 7. Analogy
- Imagine a meeting where each participant (token) has:
  - A **Query** → what info they need.  
  - A **Key** → what they offer.  
  - A **Value** → the details they can share.  
- Everyone looks at everyone else, scores relevance, and blends info.  
- Each leaves with a new understanding.  


---

You should now be able to explain:
1. Why transformers replaced older models (parallel + long-range handling).  
2. What Queries, Keys, and Values are.  
3. What multi-head attention does.  
4. Why context length is expensive.  
5. Why prompt formatting matters.

## 📝 What this example shows
This example demonstrates how **prompt structure affects the quality of responses** from a Large Language Model (LLM).  

- When we give a **messy, unstructured prompt**, the model may:
  - Produce verbose or unclear answers.  
  - Miss steps or mix details together.  

- When we give a **structured, well-formatted prompt**, the model:
  - Produces clearer, more reliable answers.  
  - Follows the requested format (definition, code, explanation).  

Well-structured prompts help the model **focus attention on the right tokens**, giving us better, more predictable results.  

We’ll build a small **Express.js API** with two endpoints:  
- `/messy` → sends a messy prompt.  
- `/structured` → sends a structured prompt.  
Then you can compare the responses side by side.

---

## 1. Setup
```bash
mkdir express-llm-demo && cd express-llm-demo
npm init -y
npm install express openai dotenv
```

Create a `.env` file with your API key:
```env
OPENAI_API_KEY=sk-your-api-key
```

---

## 2. Express Server (server.js)
```js
import express from "express";
import OpenAI from "openai";
import "dotenv/config";

const app = express();
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Helper: call OpenAI
async function askLLM(prompt) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // or gpt-4o, gpt-3.5-turbo if you have access
    temperature: 0.7,
    messages: [{ role: "user", content: prompt }],
  });
  return response.choices[0].message.content;
}

// Endpoint 1: Messy prompt
app.post("/messy", async (req, res) => {
  const prompt = `
tell me react useState and also hooks and explain in detail and 
code exmaple with button click count update just answer dont say much just do it
  `;
  const answer = await askLLM(prompt);
  res.json({ style: "messy", answer });
});

// Endpoint 2: Structured prompt
app.post("/structured", async (req, res) => {
  const prompt = `
You are a helpful teacher for React developers.
Format:
1. Short definition
2. Code example: button that increments count
3. Explanation of code
Keep it concise and clear.
  `;
  const answer = await askLLM(prompt);
  res.json({ style: "structured", answer });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

---

## 3. Test
Run the server:
```bash
node server.js
```

Then test endpoints (use Postman, Insomnia, or curl):

```bash
curl -X POST http://localhost:3000/messy
curl -X POST http://localhost:3000/structured
```

---

## 4. What You’ll Observe
- **Messy Prompt Response**:  
  - Often too long, poorly organized.  
  - May skip explanation or mix code with text.  

- **Structured Prompt Response**:  
  - Clear step-by-step explanation.  
  - Code example is isolated and easier to read.  
  - Explanation follows the requested format.  

This gives you **direct, practical proof** that structured prompting leads to better, more reliable outputs.

---

After running this example, you should understand:
1. Why structured prompts yield clearer answers.  
2. How to wrap LLM calls in an Express.js API.  
3. That this server can be extended into a full **MERN demo** by connecting it to a React frontend.

## 1. Setup (same as before)
```bash
npm install express openai dotenv
```

`.env` file:
```env
OPENAI_API_KEY=sk-your-api-key
```

---


```js
import express from "express";
import OpenAI from "openai";
import "dotenv/config";

const app = express();
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// helper: call OpenAI
async function askLLM(prompt) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.7,
    messages: [{ role: "user", content: prompt }],
  });
  return response.choices[0].message.content;
}

// POST /messy : takes user question and sends messy version
app.post("/messy", async (req, res) => {
  const { question } = req.body;
  const prompt = `
pls tell me quickly ${question} and code if needed no long talk
  `;
  const answer = await askLLM(prompt);
  res.json({ style: "messy", answer });
});

// POST /structured : takes user question and sends structured prompt
app.post("/structured", async (req, res) => {
  const { question } = req.body;
  const prompt = `
You are a helpful teacher for React/Node developers.
Format your answer:
1. Short definition
2. Code example (if relevant)
3. Explanation of code / concept
Be concise and structured.
  `;
  const answer = await askLLM(prompt);
  res.json({ style: "structured", answer });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

---

## 3. Test
Run server:
```bash
node server.js
```

Send a request:
```bash
curl -X POST http://localhost:3000/messy \
  -H "Content-Type: application/json" \
  -d '{"question": "Explain useState in React"}'

curl -X POST http://localhost:3000/structured \
  -H "Content-Type: application/json" \
  -d '{"question": "Explain useState in React"}'
```

---

## 4. What You’ll See
- `/messy` → more casual, inconsistent, sometimes confusing answer.  
- `/structured` → clear, step-by-step explanation with code & context.  

This shows **the same user input** can yield **very different quality** depending on how you design the prompt.

---

- You now have an API that lets you test messy vs structured prompting dynamically.  
- You’ve seen how to **wrap LLM calls in Express endpoints**.  
- This API is the perfect base to extend into **RAG** in the next step.

Why We Need RAG

LLMs are powerful, but:
	1.	They don’t know everything → They are trained up to a cutoff date (e.g., 2023/2024) and don’t know your private company data.
	2.	They hallucinate → If asked something not in training data, they confidently make things up.

Example:
	•	If you ask: “What’s the Wi-Fi password for our office?”, a base LLM will invent an answer because it has no access to your internal docs.

That’s a problem.

⸻

How RAG Fixes It

Instead of relying only on what the model “knows,” we ground it in your own data:
	1.	Index documents → break docs (FAQs, manuals, PDFs) into small chunks.
	2.	Embed chunks → convert each into a numeric vector (embedding).
	3.	Store vectors → keep them in a database specialized for vector search.
	4.	At query time:
	•	Embed the user’s question.
	•	Find the closest chunks using vector similarity.
	•	Feed those chunks into the prompt as context.
	5.	LLM answers → using only the retrieved chunks.


⸻

Analogy

Think of the LLM as a talented writer with no memory of your company.
	•	Without RAG: You ask, “What’s our refund policy?” → it invents something generic.
	•	With RAG: You give it the relevant paragraph from your company handbook, and then ask → it paraphrases correctly.

RAG is like giving the writer the right page of the book before asking the question.

⸻

Why This Matters for You (MERN Developer)
	•	Without RAG → you’re limited to generic Q&A.
	•	With RAG → you can build real apps:
	•	Customer support bots that know your docs.
	•	Internal search assistants for teammates.
	•	Semantic search for product catalogs.
	•	It’s the foundation for making LLMs practical in production.
We’ll cover:
	1.	Database setup (SQL)
	2.	Express.js backend with pgvector
	3.	React frontend

⸻

🗄️ Database Setup (Postgres + pgvector)
```bash

If you installed Postgres locally (without Docker), run:

-- Create a new database
CREATE DATABASE rag_demo;

-- Switch to it
\c rag_demo;

-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create a documents table with text + embedding vector
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  text TEXT,
  embedding VECTOR(1536)  -- must match embedding model size (1536 for text-embedding-3-small/large)
);
docker run -d \
  --name pgvector-demo \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  ankane/pgvector

Then run the same SQL setup inside.
```

```js
// Import dependencies
import express from "express";
import OpenAI from "openai";   // OpenAI client SDK
import pkg from "pg";          // PostgreSQL client
import "dotenv/config";        // Load .env file

const { Pool } = pkg;

const app = express();
app.use(express.json());

// OpenAI client setup
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Postgres connection pool
const pool = new Pool({
  user: "postgres",      // default postgres user
  host: "localhost",     // DB host
  database: "rag_demo",  // our database
  password: "postgres",  // password (default from Docker or local install)
  port: 5432,
});

// Helper: get embedding vector for text
async function embed(text) {
  const res = await client.embeddings.create({
    model: "text-embedding-3-small", // embedding model
    input: text,
  });
  return res.data[0].embedding; // returns an array of floats
}

// Endpoint: index documents into DB
app.post("/index", async (req, res) => {
  const { docs } = req.body; // docs = [{text:"..."}, {text:"..."}]
  for (const d of docs) {
    const e = await embed(d.text); // create embedding
    // Insert doc text + embedding vector into Postgres
    await pool.query("INSERT INTO documents (text, embedding) VALUES ($1, $2)", [
      d.text,
      e,
    ]);
  }
  res.json({ message: "Docs indexed", count: docs.length });
});

// Endpoint: answer a question with RAG
app.post("/ask", async (req, res) => {
  const { question } = req.body;
  const qEmb = await embed(question); // embed the question

  // Search top 3 closest docs using cosine similarity (<-> operator in pgvector)
  const results = await pool.query(
    "SELECT id, text FROM documents ORDER BY embedding <-> $1 LIMIT 3",
    [qEmb]
  );

  // Build a context string with the retrieved docs
  const context = results.rows.map((r, i) => `[${r.id}] ${r.text}`).join("\n");

  // Grounded prompt: instruct LLM to use only retrieved context
  const prompt = `
You are a helpful assistant. Use ONLY the context below to answer.
If the answer is missing, say "Not found".
Cite the source IDs.

Context:
${context}

Answer:
  `.trim();

  // Call LLM with context + question
  const answer = await client.chat.completions.create({
    model: "gpt-4o-mini",  // choose fast + cost-effective model
    temperature: 0,        // deterministic answers
    messages: [{ role: "user", content: prompt }],
  });

  // Return final response + which docs were used
  res.json({
    answer: answer.choices[0].message.content,
    contextUsed: results.rows.map(r => r.id),
  });
});

// Start server
app.listen(3000, () =>
  console.log("RAG server running at http://localhost:3000")
);
```

```js
import { useState } from "react";

export default function RAGChat() {
  const [question, setQuestion] = useState(""); // user input
  const [answer, setAnswer] = useState("");     // model answer

  // Function: call backend
  async function ask() {
    const res = await fetch("http://localhost:3000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer); // store model’s response
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>RAG Q&A</h2>
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        style={{ width: "300px", marginRight: "10px" }}
      />
      <button onClick={ask}>Ask</button>

      {answer && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

import RAGChat from "./RAGChat";

function App() {
  return (
    <div>
      <RAGChat />
    </div>
  );
}

export default App;
```
```bash
Workflow
	1.	Start backend:
node server.js
2.	Index some docs:
curl -X POST http://localhost:3000/index \
  -H "Content-Type: application/json" \
  -d '{"docs":[
    {"text":"To reset your password, go to Settings > Security > Reset Password."},
    {"text":"To change your email, open Profile > Email > Update."},
    {"text":"Two-factor authentication is under Settings > Security > 2FA."}
  ]}'

Start React frontend:

4.	Open browser → http://localhost:3000 → type:
	•	“How do I change my login password?”
	•	“Where do I enable 2FA?”

LLM will answer using the retrieved docs from Postgres instead of hallucinating.
```

```js
⸻

	•	A database-backed vector search (pgvector).
	•	A backend that indexes + retrieves documents.
	•	A React UI to interact with the syst
// RAG Backend with Express + Postgres + pgvector
// Includes document chunking + full notes inside
// =============================================
//
// 🔧 Requirements:
// - Node.js (18+ recommended)
// - Postgres installed OR Docker (pgvector image)
// - OpenAI API key
//
// ---------------------------------------------
// 🗄️ Database Setup Instructions
// ---------------------------------------------
//
// OPTION A: Local Postgres
// 1. Install Postgres from https://www.postgresql.org/download/
// 2. Open psql and run:
//
//    CREATE DATABASE rag_demo;
//    \c rag_demo
//    CREATE EXTENSION IF NOT EXISTS vector;
//
//    CREATE TABLE documents (
//      id SERIAL PRIMARY KEY,
//      text TEXT,
//      embedding VECTOR(1536) -- 1536 dims for text-embedding-3-small
//    );
//
// OPTION B: Docker
// Run pgvector-enabled Postgres in a container:
//
//    docker run -d \
//      --name pgvector-demo \
//      -e POSTGRES_PASSWORD=postgres \
//      -p 5432:5432 \
//      ankane/pgvector
//
// Then connect and run the same SQL as above.
//
// ---------------------------------------------
// 📦 Node Setup
// ---------------------------------------------
//
// npm init -y
// npm install express openai dotenv pg
//
// Create a .env file:
//
//    OPENAI_API_KEY=sk-your-api-key
//
// ---------------------------------------------
// ---------------------------------------------

import express from "express";
import OpenAI from "openai";   // OpenAI client SDK
import pkg from "pg";          // PostgreSQL client
import "dotenv/config";

const { Pool } = pkg;

const app = express();
app.use(express.json());

// OpenAI client setup
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Postgres connection pool
const pool = new Pool({
  user: "postgres",      // default user
  host: "localhost",     // adjust if using Docker or remote DB
  database: "rag_demo",  // database we created
  password: "postgres",  // default password (change if needed)
  port: 5432,
});

// ---------------------------------------------
// 🔑 Helper: Create embeddings for text
// ---------------------------------------------
//
// This converts text into a 1536-length vector.
// These vectors are stored in Postgres and used
// for semantic similarity search.
//
async function embed(text) {
  const res = await client.embeddings.create({
    model: "text-embedding-3-small", // cost-effective, 1536 dims
    input: text,
  });
  return res.data[0].embedding;
}

// ---------------------------------------------
// ✂️ Helper: Chunk text
// ---------------------------------------------
//
// LLMs + embeddings work best when docs are split
// into smaller pieces (~200–500 tokens each).
// Why?
// - More accurate retrieval
// - Avoids hitting context window
// - Keeps embeddings efficient
//
// Below is a simple sentence-based chunker.
//
function chunkText(text, maxLength = 400) {
  const sentences = text.split(/(?<=[.?!])\s+/);
  let chunks = [];
  let current = "";

  for (const s of sentences) {
    if ((current + " " + s).length > maxLength) {
      chunks.push(current.trim());
      current = s;
    } else {
      current += " " + s;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

// ---------------------------------------------
// 📥 Endpoint: Index documents
// ---------------------------------------------
//
// Accepts JSON like:
//   { "docs": [{ "text": "..." }, { "text": "..." }] }
//
// Each doc is split into chunks → embedded → stored.
//
app.post("/index", async (req, res) => {
  const { docs } = req.body;
  let totalChunks = 0;

  for (const d of docs) {
    const chunks = chunkText(d.text);
    totalChunks += chunks.length;

    for (const c of chunks) {
      const e = await embed(c);
      await pool.query(
        "INSERT INTO documents (text, embedding) VALUES ($1, $2)",
        [c, e]
      );
    }
  }

  res.json({ message: "Documents indexed with chunking", chunks: totalChunks });
});

// ---------------------------------------------
// ❓ Endpoint: Ask question with RAG
// ---------------------------------------------
//
// Steps:
// 1. Embed the question
// 2. Retrieve top 3 closest chunks from Postgres
// 3. Build a context string
// 4. Send context + question to LLM
// 5. Return grounded answer
//
app.post("/ask", async (req, res) => {
  const { question } = req.body;
  const qEmb = await embed(question);

  // Search similar docs using pgvector <-> operator
  const results = await pool.query(
    "SELECT id, text FROM documents ORDER BY embedding <-> $1 LIMIT 3",
    [qEmb]
  );

  // Build context string for the LLM
  const context = results.rows.map((r, i) => `[${r.id}] ${r.text}`).join("\n");

  const prompt = `
You are a helpful assistant. Use ONLY the context below to answer.
If the answer is not found, say "Not found".
Cite the source IDs.

Context:
${context}

Answer:
  `.trim();

  // Call the model with grounded prompt
  const answer = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0, // deterministic
    messages: [{ role: "user", content: prompt }],
  });

  res.json({
    answer: answer.choices[0].message.content,
    contextUsed: results.rows.map(r => r.id),
  });
});

// ---------------------------------------------
// ▶️ Start server
// ---------------------------------------------
app.listen(3000, () =>
  console.log("RAG server with chunking running at http://localhost:3000")
);

// =============================================
// =============================================
//
// 1. Start backend:
//    node server.js
//
// 2. Index docs:
//    curl -X POST http://localhost:3000/index \
//      -H "Content-Type: application/json" \
//      -d '{"docs":[
//        {"text":"To reset your password, go to Settings > Security > Reset Password."},
//        {"text":"To change your email, open Profile > Email > Update."},
//        {"text":"Two-factor authentication is under Settings > Security > 2FA."}
//      ]}'
//
// 3. Ask questions:
//    curl -X POST http://localhost:3000/ask \
//      -H "Content-Type: application/json" \
//      -d '{"question":"How do I change my login password?"}'
//
//    → Returns answer grounded in the docs.
// =============================================
// React Frontend for RAG System
// =============================================
//
// 🔧 Requirements:
// - React project (CRA or Vite)
//   Example: npx create-react-app rag-frontend
// - Backend (Express + pgvector) must be running
// - Node.js 18+ recommended
//
// ---------------------------------------------
// 📦 Setup
// ---------------------------------------------
//
// cd rag-frontend
// npm install
//
// Place this file in src/App.js
//
// Start frontend: npm start
//
// Make sure backend is running on http://localhost:3000
// ---------------------------------------------

import { useState } from "react";

function App() {
  // State for user question
  const [question, setQuestion] = useState("");
  // State for LLM answer
  const [answer, setAnswer] = useState("");
  // State for context chunks used
  const [context, setContext] = useState([]);

  // Function: send question to backend
  async function ask() {
    const res = await fetch("http://localhost:3000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);        // answer text
    setContext(data.contextUsed);  // which doc IDs were used
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      {/* App Header */}
      <h1>MERN RAG Demo</h1>
      <p>
        Ask questions about your indexed documents. Answers are grounded in
        Postgres (pgvector) chunks.
      </p>

      {/* Input box for question */}
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        style={{
          width: "400px",
          padding: "0.5rem",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      {/* Ask button */}
      <button
        onClick={ask}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Ask
      </button>

      {/* Display answer */}
      {answer && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Answer</h2>
          <p>{answer}</p>

          {/* Show which docs were used */}
          {context.length > 0 && (
            <div style={{ marginTop: "1rem" }}>
              <h3>Context used (Doc IDs)</h3>
              <p>{context.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

// =============================================
// =============================================
//
// 1. Run backend (server.js):
//    node server.js
//
// 2. Index some documents into Postgres:
//    curl -X POST http://localhost:3000/index \
//      -H "Content-Type: application/json" \
//      -d '{"docs":[
//        {"text":"To reset your password, go to Settings > Security > Reset Password."},
//        {"text":"To change your email, open Profile > Email > Update."},
//        {"text":"Two-factor authentication is under Settings > Security > 2FA."}
//      ]}'
//
// 3. Start frontend:
//    npm start
//
// 4. Open http://localhost:3000 in browser.
//    Type: "How do I change my login password?"
//    → Answer grounded in Postgres docs

```
```js
// =============================================
// FULL MERN RAG EXAMPLE (ONE FILE VERSION)
// =============================================
//
// Contains:
// 1. Backend (Express + Postgres + pgvector + PDF upload + chunking)
// 2. Frontend (React chatbot UI + PDF upload form)
// 3. Notes/instructions inline as comments
//
// ⚠️ In real projects → backend & frontend live in different folders.
// Here, everything is together so you can copy/learn in one place.
// =============================================

// ---------------------------------------------
// 🗄️ Backend: Express + Postgres + pgvector
// ---------------------------------------------
//
// Requirements:
//   npm install express openai dotenv pg express-fileupload pdf-parse
//
// Postgres Setup:
//   CREATE DATABASE rag_demo;
//   \c rag_demo
//   CREATE EXTENSION IF NOT EXISTS vector;
//   CREATE TABLE documents (
//     id SERIAL PRIMARY KEY,
//     text TEXT,
//     embedding VECTOR(1536)
//   );
//
// Docker option:
//   docker run -d --name pgvector-demo -e POSTGRES_PASSWORD=postgres -p 5432:5432 ankane/pgvector
//
// .env file:
//   OPENAI_API_KEY=sk-your-api-key
//
// Run backend: node server.js
// ---------------------------------------------

/* BACKEND CODE START */

import express from "express";
import fileUpload from "express-fileupload"; // handle PDF uploads
import pdfParse from "pdf-parse";            // extract text from PDFs
import OpenAI from "openai";
import pkg from "pg";
import "dotenv/config";

const { Pool } = pkg;
const app = express();
app.use(express.json());
app.use(fileUpload()); // enable file uploads

// OpenAI client
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Postgres connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rag_demo",
  password: "postgres",
  port: 5432,
});

// Create embedding vector
async function embed(text) {
  const res = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data[0].embedding;
}

// Chunk text into smaller parts
function chunkText(text, maxLength = 400) {
  const sentences = text.split(/(?<=[.?!])\s+/);
  let chunks = [];
  let current = "";

  for (const s of sentences) {
    if ((current + " " + s).length > maxLength) {
      chunks.push(current.trim());
      current = s;
    } else {
      current += " " + s;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

// Endpoint: Upload and index PDF
app.post("/upload-pdf", async (req, res) => {
  if (!req.files || !req.files.pdf) {
    return res.status(400).send("No PDF file uploaded");
  }
  const pdfFile = req.files.pdf;
  const pdfData = await pdfParse(pdfFile.data);
  const chunks = chunkText(pdfData.text);

  for (const c of chunks) {
    const e = await embed(c);
    await pool.query("INSERT INTO documents (text, embedding) VALUES ($1, $2)", [
      c,
      e,
    ]);
  }
  res.json({ message: "PDF indexed", chunks: chunks.length });
});

// Endpoint: Ask question with RAG
app.post("/ask", async (req, res) => {
  const { question } = req.body;
  const qEmb = await embed(question);

  const results = await pool.query(
    "SELECT id, text FROM documents ORDER BY embedding <-> $1 LIMIT 3",
    [qEmb]
  );

  const context = results.rows.map((r, i) => `[${r.id}] ${r.text}`).join("\n");

  const prompt = `
Use ONLY the context below to answer.
If missing, say "Not found".
Cite the source IDs.

Context:
${context}

Answer:
  `.trim();

  const answer = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [{ role: "user", content: prompt }],
  });

  res.json({
    answer: answer.choices[0].message.content,
    contextUsed: results.rows.map(r => r.id),
  });
});

// Start server
app.listen(3000, () =>
  console.log("Backend running at http://localhost:3000")
);

/* BACKEND CODE END */

// ---------------------------------------------
// ⚛️ Frontend: React Chatbot + PDF Upload
// ---------------------------------------------
//
// Requirements (inside React project):
//   npm install @mui/material @emotion/react @emotion/styled
//
// Place this in src/App.js
// Run frontend: npm start
//
// Make sure backend is running on port 3000.
// ---------------------------------------------

/* FRONTEND CODE START */

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function FrontendApp() {
  const [messages, setMessages] = useState([]); // chat history
  const [input, setInput] = useState("");       // user input
  const [pdf, setPdf] = useState(null);         // uploaded PDF file

  // Upload PDF to backend
  async function uploadPdf() {
    if (!pdf) return;
    const formData = new FormData();
    formData.append("pdf", pdf);

    await fetch("http://localhost:3000/upload-pdf", {
      method: "POST",
      body: formData,
    });

    alert("PDF uploaded and indexed!");
  }

  // Send user question → backend → assistant reply
  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    const res = await fetch("http://localhost:3000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),
    });
    const data = await res.json();

    setMessages([...newMessages, { role: "assistant", content: data.answer }]);
    setInput("");
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        MERN RAG Chatbot with PDF Support
      </Typography>

      {/* PDF upload */}
      <Box sx={{ mb: 2 }}>
        <input type="file" accept="application/pdf" onChange={e => setPdf(e.target.files[0])} />
        <Button variant="contained" sx={{ ml: 2 }} onClick={uploadPdf}>
          Upload PDF
        </Button>
      </Box>

      {/* Chat window */}
      <Paper
        sx={{
          p: 2,
          mb: 2,
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ddd",
        }}
      >
        {messages.map((msg, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              mb: 1,
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                bgcolor: msg.role === "user" ? "primary.main" : "grey.300",
                color: msg.role === "user" ? "white" : "black",
                maxWidth: "80%",
              }}
            >
              {msg.content}
            </Box>
          </Box>
        ))}
      </Paper>

      {/* Input + Send */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          label="Type your question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <Button variant="contained" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Container>
  );
}

export default FrontendApp;

/* FRONTEND CODE END */

// =============================================
// =============================================
//
// 1. Start backend: node server.js
//
// 2. Start frontend: npm start
//
// 3. In browser:
//    - Upload a PDF (click Upload PDF)
//    - Ask questions → chatbot answers based on PDF
//
```

```js
// =============================================
// FULL MERN RAG — ONE FILE (with multi-PDF support)
// =============================================
//
// This single file contains:
//
// (A) Backend: Express + Postgres (pgvector) + OpenAI
//     - /upload-pdf  : upload & index a PDF (with doc_id)
//     - /ask         : ask questions (optionally restricted to doc_id)
//     - /docs        : list distinct doc_ids present in DB
//     - Chunking logic + embeddings + vector search
//
// (B) Frontend: React + Material-UI chatbot UI
//     - Upload PDF with a chosen doc_id
//     - Select a doc_id to restrict questions (or "All")
//     - Chat history UI
//
// Notes: In a real project, split into two apps (backend & frontend).
// Here, everything is shown together so you can copy once and then split.
//
// ---------------------------------------------
// 🗄️ Postgres Setup (run once in psql)
// ---------------------------------------------
//
// CREATE DATABASE rag_demo;
// \c rag_demo
// CREATE EXTENSION IF NOT EXISTS vector;
// CREATE TABLE documents (
//   id SERIAL PRIMARY KEY,
//   doc_id TEXT,              -- identifies the PDF/source this chunk belongs to
//   text   TEXT,
//   embedding VECTOR(1536)    -- MUST match embedding model dimension
// );
//
// Optional: for faster ANN search in pgvector (after some inserts):
// CREATE INDEX ON documents USING ivfflat (embedding vector_l2_ops) WITH (lists = 100);
// ANALYZE documents;
//
// ---------------------------------------------
// 📦 Backend Dependencies
// ---------------------------------------------
// npm i express openai dotenv pg express-fileupload pdf-parse
//
// .env:
// OPENAI_API_KEY=sk-... (your key)
//
// Run backend: node server.js
//
// ---------------------------------------------
// 🎨 Frontend Dependencies (inside React project)
// ---------------------------------------------
// npm i @mui/material @emotion/react @emotion/styled
//
// Put the React part in src/App.js and run: npm start
// Make sure backend runs at http://localhost:3000
// =============================================


// ==========================
// (A) BACKEND (server.js)
// ==========================
/* BACKEND START */
import express from "express";
import fileUpload from "express-fileupload"; // handle PDF uploads
import pdfParse from "pdf-parse";            // extract text from PDFs
import OpenAI from "openai";                 // embeddings + chat completions
import pkg from "pg";                         // Postgres client
import "dotenv/config";

const { Pool } = pkg;
const app = express();
app.use(express.json());
app.use(fileUpload()); // enable multipart form uploads (PDFs)

// --- OpenAI client
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// --- Postgres connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rag_demo",
  password: "postgres",
  port: 5432,
});

// ---------------------------------------------
// Helper: Create embedding vector for a text
// Model: text-embedding-3-small (1536 dims, cost-effective)
// ---------------------------------------------
async function embed(text) {
  const res = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data[0].embedding; // float[] of length 1536
}

// ---------------------------------------------
// Helper: Chunk long text into smaller pieces
// Why: better retrieval accuracy + avoids huge context
// Simple sentence-based chunker (approx by characters)
// ---------------------------------------------
function chunkText(text, maxLen = 400) {
  const sentences = text.split(/(?<=[.?!])\s+/);
  const chunks = [];
  let cur = "";

  for (const s of sentences) {
    if ((cur + " " + s).length > maxLen) {
      if (cur.trim()) chunks.push(cur.trim());
      cur = s;
    } else {
      cur += (cur ? " " : "") + s;
    }
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

// ---------------------------------------------
// GET /docs : list distinct doc_ids in DB
// Useful for dropdown in UI
// ---------------------------------------------
app.get("/docs", async (_req, res) => {
  const r = await pool.query("SELECT DISTINCT doc_id FROM documents WHERE doc_id IS NOT NULL ORDER BY doc_id ASC");
  res.json({ docs: r.rows.map(x => x.doc_id) });
});

// ---------------------------------------------
// POST /upload-pdf : upload + index one PDF
// FormData fields:
//   - pdf   : the file
//   - docId : desired doc_id (optional; defaults to filename)
// Behavior:
//   1) parse PDF -> text
//   2) chunk -> embed each chunk
//   3) INSERT (doc_id, text, embedding) into Postgres
// ---------------------------------------------
app.post("/upload-pdf", async (req, res) => {
  try {
    if (!req.files || !req.files.pdf) {
      return res.status(400).json({ error: "No PDF file uploaded" });
    }
    const pdfFile = req.files.pdf;
    const docId = (req.body.docId || pdfFile.name || "unnamed").toString();

    const parsed = await pdfParse(pdfFile.data);
    const chunks = chunkText(parsed.text);

    for (const c of chunks) {
      const e = await embed(c);
      await pool.query(
        "INSERT INTO documents (doc_id, text, embedding) VALUES ($1, $2, $3)",
        [docId, c, e]
      );
    }

    res.json({ message: "PDF indexed", docId, chunks: chunks.length });
  } catch (err) {
    console.error("upload-pdf error:", err);
    res.status(500).json({ error: "Failed to index PDF" });
  }
});

// ---------------------------------------------
// POST /ask : ask a question with optional doc_id filter
// Body: { question: string, docId?: string|null }
// Steps:
//  1) embed question
//  2) SELECT top-k chunks by cosine distance (pgvector <->)
//  3) build context
//  4) ask LLM to answer using ONLY that context (cite IDs)
// ---------------------------------------------
app.post("/ask", async (req, res) => {
  try {
    const { question, docId = null } = req.body;
    if (!question || !question.trim()) return res.status(400).json({ error: "Missing question" });

    const qEmb = await embed(question);

    let results;
    if (docId && docId !== "ALL") {
      // restrict search to a specific document
      results = await pool.query(
        "SELECT id, doc_id, text FROM documents WHERE doc_id = $2 ORDER BY embedding <-> $1 LIMIT 3",
        [qEmb, docId]
      );
    } else {
      // search across all documents
      results = await pool.query(
        "SELECT id, doc_id, text FROM documents ORDER BY embedding <-> $1 LIMIT 3",
        [qEmb]
      );
    }

    const context = results.rows.map((r, i) => `[${r.doc_id}#${r.id}] ${r.text}`).join("\n");

    const prompt = `
You are a helpful assistant. Use ONLY the context below to answer.
If the answer is not present, say "Not found".
Cite the sources like [docId#chunkId].

Context:
${context}

Answer:
`.trim();

    const chat = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0,
      messages: [{ role: "user", content: prompt }],
    });

    res.json({
      answer: chat.choices[0].message.content,
      matches: results.rows.map(r => ({ id: r.id, docId: r.doc_id })),
    });
  } catch (err) {
    console.error("ask error:", err);
    res.status(500).json({ error: "Failed to answer question" });
  }
});

// ---------------------------------------------
// Start backend
// ---------------------------------------------
app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000");
});
/* BACKEND END */


// ==========================
// (B) FRONTEND (src/App.js)
// ==========================
/* FRONTEND START */
import { useEffect, useState } from "react";
import {
  Box, Button, Container, Paper, TextField, Typography, MenuItem, Select, InputLabel, FormControl
} from "@mui/material";

function FrontendApp() {
  // chat messages [{role: "user"|"assistant", content: string}]
  const [messages, setMessages] = useState([]);
  // user input
  const [input, setInput] = useState("");
  // pdf upload state
  const [pdf, setPdf] = useState(null);
  // docId to assign when uploading
  const [newDocId, setNewDocId] = useState("");
  // available docIds from backend
  const [docIds, setDocIds] = useState([]);
  // currently selected docId filter for asking
  const [activeDocId, setActiveDocId] = useState("ALL");

  // fetch available docIds on load
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/docs");
        const data = await res.json();
        setDocIds(data.docs || []);
      } catch {
        // ignore
      }
    })();
  }, []);

  // upload PDF with docId
  async function uploadPdf() {
    if (!pdf) return alert("Choose a PDF file first");
    const form = new FormData();
    form.append("pdf", pdf);
    if (newDocId.trim()) form.append("docId", newDocId.trim());

    const res = await fetch("http://localhost:3000/upload-pdf", {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    if (data.error) return alert("Upload failed");
    alert(`Indexed PDF as docId="${data.docId}" with ${data.chunks} chunks`);
    // refresh docIds
    const list = await fetch("http://localhost:3000/docs").then(r => r.json());
    setDocIds(list.docs || []);
  }

  // send question with optional docId filter
  async function sendMessage() {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    const res = await fetch("http://localhost:3000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input, docId: activeDocId }),
    });
    const data = await res.json();
    const answer = data.answer || "(no answer)";
    const cited = (data.matches || []).map(m => `[${m.docId}#${m.id}]`).join(" ");

    setMessages([
      ...newMessages,
      { role: "assistant", content: `${answer}\n\nSources: ${cited || "N/A"}` },
    ]);
    setInput("");
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>MERN RAG Chatbot (multi-PDF)</Typography>

      {/* Upload PDF section */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>Upload & Index PDF</Typography>
        <Box display="flex" gap={1} alignItems="center" mb={1}>
          <input type="file" accept="application/pdf" onChange={e => setPdf(e.target.files?.[0] || null)} />
          <TextField
            label="docId (optional)"
            size="small"
            value={newDocId}
            onChange={e => setNewDocId(e.target.value)}
          />
          <Button variant="contained" onClick={uploadPdf}>Upload</Button>
        </Box>
        <Typography variant="body2" color="text.secondary">
          If docId is empty, the filename will be used as docId.
        </Typography>
      </Paper>

      {/* Doc filter */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="doc-select-label">Answer From</InputLabel>
        <Select
          labelId="doc-select-label"
          label="Answer From"
          value={activeDocId}
          onChange={e => setActiveDocId(e.target.value)}
        >
          <MenuItem value="ALL">All Documents</MenuItem>
          {docIds.map(id => (
            <MenuItem key={id} value={id}>{id}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Chat window */}
      <Paper sx={{ p: 2, mb: 2, height: 400, overflowY: "auto", border: "1px solid #ddd" }}>
        {messages.map((m, i) => (
          <Box key={i} display="flex" justifyContent={m.role === "user" ? "flex-end" : "flex-start"} mb={1}>
            <Box
              sx={{
                px: 2, py: 1, borderRadius: 2,
                bgcolor: m.role === "user" ? "primary.main" : "grey.300",
                color: m.role === "user" ? "white" : "black",
                maxWidth: "80%",
                whiteSpace: "pre-wrap"
              }}
            >
              {m.content}
            </Box>
          </Box>
        ))}
      </Paper>

      {/* Input + Send */}
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          label="Type your question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <Button variant="contained" onClick={sendMessage}>Send</Button>
      </Box>
    </Container>
  );
}

export default FrontendApp;
/* FRONTEND END */


// =============================================
// =============================================
//
// Backend terminal:
//   node server.js
//
// Frontend terminal (React app):
//   npm start
//
// Browser:
//   1) Upload a PDF with an optional docId
//   2) Choose "Answer From": All or a specific docId
//   3) Ask questions — answers cite [docId#chunkId]
//
// =============================================
```

## What LangChain Gives You (Beyond Hand-Written Express Code)

- **Retrievers & Chains:** Pluggable components for RAG (splitters, embedders, vector stores, LLM calls).
- **Pipelines:** Compose steps like “split → embed → store → retrieve → prompt → generate” cleanly.
- **Tools & Agents:** Add tool-calling, web browsing, code execution, etc.
- **Evals & Tracing:** Better observability while prototyping.

---

## When to Use LangChain

- Your code starts to grow: multiple retrievers, reusable chains, different prompts per route.
- You want to swap storage (pgvector ↔ Pinecone) or embedders with minimal changes.
- You plan to add Agentic behaviors later.

---

## When Not to Use LangChain

- For tiny demos (like our minimal Express server), manual code is simpler and faster.

---

## Why LangChain?

**Current backend flow:**
1. User uploads a PDF → parse, chunk, embed → save in Postgres.
2. User asks a question → embed, search Postgres, retrieve chunks.
3. Build a prompt manually, send to OpenAI, return the answer.

This works for demos, but as your app grows:
- Switching Postgres to Pinecone or OpenAI to Anthropic means rewriting code.
- Adding features (summarize multiple docs, chain prompts) gets messy.

LangChain provides abstractions:
- **TextSplitters:** Use `RecursiveCharacterTextSplitter` instead of writing chunking logic.
- **VectorStores:** Use `PGVectorStore` or `PineconeVectorStore` instead of manual SQL.
- **Retrievers:** Wrap vector store and query logic.
- **Chains:** Combine retriever and LLM into a pipeline.
- **Agents:** Add reasoning and tool use (covered later).

**Analogy:**  
LangChain is like React for LLM apps:
- React gives you `<Component>`s (Button, Card, List) so you don’t re-code UI basics.
- LangChain gives you VectorStore, Retriever, Chain so you don’t re-code AI plumbing.

Instead of hardcoding everything, you compose reusable blocks.

---

## Conceptual Rewrite Using LangChain

```js
import { OpenAIEmbeddings } from "@langchain/openai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { ChatOpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";

// 1. Embeddings
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small",
});

// 2. Vector Store (Postgres + pgvector)
const store = await PGVectorStore.initialize(embeddings, {
  connectionString: "postgres://postgres:postgres@localhost:5432/rag_demo",
  tableName: "documents",
});

// 3. LLM
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

// 4. Chain (retriever + LLM)
const chain = RetrievalQAChain.fromLLM(llm, store.asRetriever(3));

// 5. Ask question
const result = await chain.call({ query: "How do I reset my password?" });
console.log(result.text);
```

**Summary:**
- Manual: You write chunking, embedding, SQL, and prompt logic.
- LangChain: Handles chunking, embedding, storage, retrieval, and prompt construction for you.

**Takeaway:**  
LangChain makes RAG pipelines composable and maintainable.  
Learn manual first (for understanding), then use LangChain for scalable apps.

---

## LangChain RAG Backend Examples

Below are two practical backend examples using LangChain with Postgres (pgvector):

---

### 1. Text Ingestion & Q&A (No PDF)

This backend lets you POST raw text, splits it into semantic chunks, embeds, stores in pgvector, and answers questions using RetrievalQAChain.

```js
// LangChain RAG Backend with Postgres (pgvector)
// =============================================
//
// npm install express dotenv pg
// npm install @langchain/openai @langchain/community langchain
//
// .env: OPENAI_API_KEY=sk-...

import express from "express";
import "dotenv/config";
import pkg from "pg";
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { RetrievalQAChain } from "langchain/chains";

const { Pool } = pkg;
const app = express();
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rag_demo",
  password: "postgres",
  port: 5432,
});

const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });
const store = await PGVectorStore.initialize(embeddings, {
  pool,
  tableName: "documents",
  columns: {
    idColumnName: "id",
    contentColumnName: "content",
    vectorColumnName: "embedding",
  },
});

const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const retriever = store.asRetriever(3);
const chain = RetrievalQAChain.fromLLM(llm, retriever, { returnSourceDocuments: true });

const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 400, chunkOverlap: 50 });

app.post("/upload-text", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "No text provided" });
  const docs = await splitter.createDocuments([text]);
  await store.addDocuments(docs);
  res.json({ message: "Text indexed", chunks: docs.length });
});

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "Missing question" });
  const result = await chain.call({ query: question });
  res.json({
    answer: result.text,
    sources: result.sourceDocuments.map(d => d.pageContent),
  });
});

app.listen(3000, () => {
  console.log("LangChain RAG backend running on http://localhost:3000");
});
```

**How it maps:**
- Manual chunkText → `RecursiveCharacterTextSplitter`
- Manual embed + SQL → `OpenAIEmbeddings` + `PGVectorStore`
- Manual prompt + LLM → `RetrievalQAChain`
- Cleaner, reusable, and swappable components.

---

### 2. PDF Ingestion & Q&A

This backend lets you upload a PDF, splits/extracts text, embeds, stores in pgvector, and answers questions over the PDF.

```js
// LangChain RAG Backend with PDF Ingestion
// =============================================
//
// npm install express dotenv pg
// npm install @langchain/openai @langchain/community langchain
// npm install pdf-parse express-fileupload
//
// .env: OPENAI_API_KEY=sk-...

import express from "express";
import fileUpload from "express-fileupload";
import pdfParse from "pdf-parse";
import "dotenv/config";
import pkg from "pg";
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { RetrievalQAChain } from "langchain/chains";

const { Pool } = pkg;
const app = express();
app.use(express.json());
app.use(fileUpload());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rag_demo",
  password: "postgres",
  port: 5432,
});

const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });
const store = await PGVectorStore.initialize(embeddings, {
  pool,
  tableName: "documents",
  columns: {
    idColumnName: "id",
    contentColumnName: "content",
    vectorColumnName: "embedding",
  },
});

const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const retriever = store.asRetriever(3);
const chain = RetrievalQAChain.fromLLM(llm, retriever, { returnSourceDocuments: true });
const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 400, chunkOverlap: 50 });

app.post("/upload-pdf", async (req, res) => {
  if (!req.files || !req.files.pdf) return res.status(400).json({ error: "No PDF uploaded" });
  const pdfFile = req.files.pdf;
  const parsed = await pdfParse(pdfFile.data);
  const docs = await splitter.createDocuments([parsed.text]);
  await store.addDocuments(docs);
  res.json({ message: "PDF indexed", chunks: docs.length });
});

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "Missing question" });
  const result = await chain.call({ query: question });
  res.json({
    answer: result.text,
    sources: result.sourceDocuments.map(d => d.pageContent),
  });
});

app.listen(3000, () => {
  console.log("LangChain RAG backend with PDF running on http://localhost:3000");
});
```

**Summary:**
- Use LangChain abstractions for chunking, embedding, storage, retrieval, and Q&A.
- Easily swap components (e.g., Pinecone instead of pgvector).
- Standardized, maintainable, and production-ready code.

---
## 🗄️ Database Setup (Postgres with pgvector)

```sql
CREATE DATABASE rag_demo;
\c rag_demo
CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  doc_id TEXT,
  content TEXT,
  embedding VECTOR(1536)
);
```

---

## 🚀 LangChain RAG Backend (Express + pgvector + PDF)

```js
import express from "express";
import fileUpload from "express-fileupload";   // PDF uploads
import pdfParse from "pdf-parse";              // PDF text extraction
import "dotenv/config";
import pkg from "pg";

import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { RetrievalQAChain } from "langchain/chains";

const { Pool } = pkg;

const app = express();
app.use(express.json());
app.use(fileUpload());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rag_demo",
  password: "postgres",
  port: 5432,
});

const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });

const store = await PGVectorStore.initialize(embeddings, {
  pool,
  tableName: "documents",
  columns: {
    idColumnName: "id",
    contentColumnName: "content",
    vectorColumnName: "embedding",
  },
});

const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const retriever = store.asRetriever(3);
const chain = RetrievalQAChain.fromLLM(llm, retriever, { returnSourceDocuments: true });

const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 400, chunkOverlap: 50 });

// Upload and index PDF
app.post("/upload-pdf", async (req, res) => {
  try {
    if (!req.files || !req.files.pdf) {
      return res.status(400).json({ error: "No PDF uploaded" });
    }
    const pdfFile = req.files.pdf;
    const docId = pdfFile.name || "unnamed";
    const parsed = await pdfParse(pdfFile.data);
    const docs = await splitter.createDocuments([parsed.text]);
    const docsWithMeta = docs.map(d => ({
      pageContent: d.pageContent,
      metadata: { doc_id: docId },
    }));
    await store.addDocuments(docsWithMeta);
    res.json({ message: "PDF indexed", docId, chunks: docs.length });
  } catch (err) {
    console.error("upload-pdf error:", err);
    res.status(500).json({ error: "Failed to index PDF" });
  }
});

// Ask a question
app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "Missing question" });
    const result = await chain.call({ query: question });
    res.json({
      answer: result.text,
      sources: result.sourceDocuments.map(d => ({
        docId: d.metadata?.doc_id || "unknown",
        content: d.pageContent,
      })),
    });
  } catch (err) {
    console.error("ask error:", err);
    res.status(500).json({ error: "Failed to answer question" });
  }
});

app.listen(3000, () => {
  console.log("LangChain RAG backend with PDF support running on http://localhost:3000");
});
```

---

## 🧑‍💻 How to Run

1. **Start backend:**
   ```bash
   node server.js
   ```

2. **Upload a PDF:**
   ```bash
   curl -X POST http://localhost:3000/upload-pdf \
     -F "pdf=@myfile.pdf"
   ```

3. **Ask a question:**
   ```bash
   curl -X POST http://localhost:3000/ask \
     -H "Content-Type: application/json" \
     -d '{"question":"What is the refund policy?"}'
   ```

4. **Response includes:** answer + source chunks

---

**Key Points:**
- Uses LangChain for chunking, embedding, storage, and retrieval.
- PDF chunks are tagged with `doc_id` for source tracking.
- RetrievalQAChain integrates retrieval and LLM answering.
- Easily extendable for multi-PDF support and doc_id filtering.

---

Next steps:
- Add multi-PDF support (doc_id filter, `/docs` endpoint).
- Extend `/ask` to restrict queries to a specific document.
- Answers will cite `[docId#chunkId]` for traceability.

```js
// (A) BACKEND: server.js (LangChain + Express + pgvector)
// -------------------------------------------------------

import express from "express";
import fileUpload from "express-fileupload";     // to receive PDF files from UI
import pdfParse from "pdf-parse";                // extract text from PDFs
import "dotenv/config";
import pkg from "pg";

import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { RetrievalQAChain } from "langchain/chains";

const { Pool } = pkg;

// Express init
const app = express();
app.use(express.json());
app.use(fileUpload()); // enables multipart/form-data

// Postgres pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rag_demo",
  password: "postgres",
  port: 5432,
});

// Embeddings (1536-dim)
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small",
});

// PGVectorStore (note metadata JSONB column)
const store = await PGVectorStore.initialize(embeddings, {
  pool,
  tableName: "documents",
  columns: {
    idColumnName: "id",
    contentColumnName: "content",
    vectorColumnName: "embedding",
    // 👇 important: tell LangChain to store metadata in JSONB
    metadataColumnName: "metadata",
  },
});

// LLM & retrieval chain
const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });

// Chunker: keeps small overlapping chunks to improve retrieval quality
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 400,
  chunkOverlap: 50,
});

/**
 * Endpoint: list available documents
 * Returns array of distinct doc_ids (from metadata->>'doc_id')
 */
app.get("/docs", async (_req, res) => {
  // Select distinct doc_id values from JSONB
  const query = `
    SELECT DISTINCT metadata->>'doc_id' AS doc_id
    FROM documents
    WHERE metadata ? 'doc_id'
    ORDER BY doc_id ASC
  `;
  const r = await pool.query(query);
  res.json({ docs: r.rows.map((row) => row.doc_id) });
});

/**
 * Endpoint: upload & index a PDF with docId
 * FormData fields:
 *  - pdf: file
 *  - docId: optional string (if absent, fallback to filename)
 */
app.post("/upload-pdf", async (req, res) => {
  try {
    if (!req.files || !req.files.pdf) {
      return res.status(400).json({ error: "No PDF uploaded" });
    }
    const pdfFile = req.files.pdf;
    const docId = (req.body.docId || pdfFile.name || "unnamed").toString();

    // Extract text from PDF
    const parsed = await pdfParse(pdfFile.data);
    const rawText = parsed.text || "";
    if (!rawText.trim()) return res.status(400).json({ error: "PDF has no extractable text" });

    // Split into LangChain Documents
    const docs = await splitter.createDocuments([rawText]);

    // Attach metadata (doc_id, chunk index)
    const docsWithMeta = docs.map((d, i) => ({
      pageContent: d.pageContent,
      metadata: { doc_id: docId, chunk_index: i },
    }));

    // Store in pgvector via LangChain
    await store.addDocuments(docsWithMeta);

    res.json({ message: "PDF indexed", docId, chunks: docsWithMeta.length });
  } catch (err) {
    console.error("upload-pdf error:", err);
    res.status(500).json({ error: "Failed to index PDF" });
  }
});

/**
 * Endpoint: ask a question (All docs or specific docId)
 * Body:
 *   { "question": "Your question...", "docId": "ALL" | "<some id>" }
 */
app.post("/ask", async (req, res) => {
  try {
    const { question, docId = "ALL" } = req.body;
    if (!question || !question.trim()) {
      return res.status(400).json({ error: "Missing question" });
    }

    // Build a retriever; attach a filter if docId is specified
    // PGVectorStore supports metadata filtering (exact match) via retriever search kwargs
    const searchKwargs =
      docId && docId !== "ALL" ? { filter: { doc_id: docId } } : undefined;

    const retriever = store.asRetriever(3, searchKwargs);

    // Create a chain using current retriever
    const chain = RetrievalQAChain.fromLLM(llm, retriever, {
      returnSourceDocuments: true,
    });

    const result = await chain.call({ query: question });

    // Prepare sources (show which docId & chunk index were used)
    const sources = (result.sourceDocuments || []).map((d) => ({
      docId: d.metadata?.doc_id || "unknown",
      chunkIndex: d.metadata?.chunk_index ?? null,
      preview: d.pageContent.slice(0, 220) + (d.pageContent.length > 220 ? "..." : ""),
    }));

    res.json({ answer: result.text, sources });
  } catch (err) {
    console.error("ask error:", err);
    res.status(500).json({ error: "Failed to answer question" });
  }
});

// Start backend
app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
```

**SQL: Postgres Table Setup**
```sql
CREATE DATABASE rag_demo;
\c rag_demo
CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding VECTOR(1536),
  metadata JSONB
);
```

**Bash: Install dependencies**
```bash
npm install express fileupload pdf-parse dotenv pg @langchain/openai @langchain/community langchain
```



```js
// -------------------------------------------------------
// (B) FRONTEND: src/App.js (React + MUI)
// -------------------------------------------------------
//
// Notes:
// - Keep this part in your React app (e.g., create-react-app).
// - Backend must be running on http://localhost:3000
// - This UI supports:
//    • PDF upload with docId
//    • Selecting "All Documents" or a specific docId
//    • Asking questions; chat history retained
//    • Cites sources under each assistant reply
//
// ----- FRONTEND START -----
import { useEffect, useState } from "react";
import {
  Box, Button, Container, Paper, TextField, Typography, MenuItem, Select, InputLabel, FormControl
} from "@mui/material";

function App() {
  // Chat state
  const [messages, setMessages] = useState([]);
  // Input
  const [input, setInput] = useState("");
  // Docs list + selected doc
  const [docIds, setDocIds] = useState([]);
  const [activeDocId, setActiveDocId] = useState("ALL");
  // PDF upload state
  const [pdf, setPdf] = useState(null);
  const [newDocId, setNewDocId] = useState("");

  // Load doc list on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/docs");
        const data = await res.json();
        setDocIds(data.docs || []);
      } catch {
        // ignore
      }
    })();
  }, []);

  // Upload a PDF with optional docId
  async function uploadPdf() {
    if (!pdf) return alert("Choose a PDF first");
    const form = new FormData();
    form.append("pdf", pdf);
    if (newDocId.trim()) form.append("docId", newDocId.trim());

    const res = await fetch("http://localhost:3000/upload-pdf", {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    if (data.error) return alert("Upload failed: " + data.error);

    alert(`Indexed "${data.docId}" with ${data.chunks} chunks`);
    setNewDocId("");
    setPdf(null);

    // Refresh doc list
    const list = await fetch("http://localhost:3000/docs").then(r => r.json());
    setDocIds(list.docs || []);
  }

  // Send question -> backend -> append answer with sources
  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    const res = await fetch("http://localhost:3000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input, docId: activeDocId }),
    });
    const data = await res.json();

    const sources = (data.sources || [])
      .map(s => `[${s.docId}#${s.chunkIndex ?? "?"}]`)
      .join(" ");

    const assistant = `${data.answer || "(no answer)"}\n\nSources: ${sources || "N/A"}`;

    setMessages([...newMessages, { role: "assistant", content: assistant }]);
    setInput("");
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>RAG Chatbot (LangChain + pgvector)</Typography>

      {/* Upload & Index PDF */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>Upload PDF</Typography>
        <Box display="flex" gap={1} alignItems="center" mb={1}>
          <input
            type="file"
            accept="application/pdf"
            onChange={e => setPdf(e.target.files?.[0] || null)}
          />
          <TextField
            label="docId (optional)"
            size="small"
            value={newDocId}
            onChange={e => setNewDocId(e.target.value)}
          />
          <Button variant="contained" onClick={uploadPdf}>Upload</Button>
        </Box>
        <Typography variant="body2" color="text.secondary">
          If docId is empty, the filename will be used.
        </Typography>
      </Paper>

      {/* Doc filter */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="doc-select-label">Answer From</InputLabel>
        <Select
          labelId="doc-select-label"
          label="Answer From"
          value={activeDocId}
          onChange={e => setActiveDocId(e.target.value)}
        >
          <MenuItem value="ALL">All Documents</MenuItem>
          {docIds.map(id => (
            <MenuItem key={id} value={id}>{id}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Chat window */}
      <Paper sx={{ p: 2, mb: 2, height: 420, overflowY: "auto", border: "1px solid #ddd" }}>
        {messages.map((m, i) => (
          <Box key={i} display="flex" justifyContent={m.role === "user" ? "flex-end" : "flex-start"} mb={1}>
            <Box
              sx={{
                px: 2, py: 1, borderRadius: 2,
                bgcolor: m.role === "user" ? "primary.main" : "grey.300",
                color: m.role === "user" ? "white" : "black",
                maxWidth: "80%",
                whiteSpace: "pre-wrap"
              }}
            >
              {m.content}
            </Box>
          </Box>
        ))}
      </Paper>

      {/* Input + Send */}
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          label="Type your question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <Button variant="contained" onClick={sendMessage}>Send</Button>
      </Box>
    </Container>
  );
}

export default App;
// ----- FRONTEND END -----
```

```bash
# -------------------------------------------------------
# HOW TO RUN (Quick Recap)
# -------------------------------------------------------
# Backend: node server.js   (make sure .env has OPENAI_API_KEY)
# Frontend: npm start       (React app where this App component is used)
# In browser:
#   1) Upload a PDF (+ optional docId)
#   2) Select "All Documents" or a specific docId
#   3) Ask questions — answers will cite [docId#chunkIndex]
# -------------------------------------------------------
```

## 1. Chains (Beyond RetrievalQA)

A **Chain** in LangChain is a workflow:  
`Input → Series of steps → Output`  
It lets you break complex tasks into smaller, reusable steps around an LLM.

**Why use Chains?**
- Handle large documents (context window limits).
- Combine multiple reasoning styles (summarize + refine).
- Make pipelines reusable & composable.

---

### 🔑 Main Types of Chains

#### 1. LLMChain
- Simplest: just a prompt + LLM.
- Example:
  ```js
  import { ChatOpenAI } from "@langchain/openai";
  import { LLMChain } from "langchain/chains";

  const llm = new ChatOpenAI({ model: "gpt-4o-mini" });
  const chain = new LLMChain({ llm, prompt: "Summarize this text: {input}" });

  const result = await chain.call({ input: "Long text here..." });
  console.log(result.text);
  ```

---

#### 2. Map-Reduce Chain
- **Map:** Apply LLM to each chunk (summarize each).
- **Reduce:** Combine summaries into one.
- Scalable, fast, but may lose nuance.

  ```js
  import { ChatOpenAI } from "@langchain/openai";
  import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
  import { loadSummarizationChain } from "langchain/chains";

  const llm = new ChatOpenAI({ model: "gpt-4o-mini" });
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 500, chunkOverlap: 50 });
  const docs = await splitter.createDocuments([longText]);

  const chain = loadSummarizationChain(llm, { type: "map_reduce" });
  const summary = await chain.call({ input_documents: docs });
  console.log("Map-Reduce Summary:", summary.text);
  ```

---

#### 3. Refine Chain
- Builds answer incrementally:  
  Start with chunk 1 → draft summary, then refine with each new chunk.
- Slower, more tokens, but higher quality.

  ```js
  import { ChatOpenAI } from "@langchain/openai";
  import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
  import { loadSummarizationChain } from "langchain/chains";

  const llm = new ChatOpenAI({ model: "gpt-4o-mini" });
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 500, chunkOverlap: 50 });
  const docs = await splitter.createDocuments([longText]);

  const chain = loadSummarizationChain(llm, { type: "refine" });
  const summary = await chain.call({ input_documents: docs });
  console.log("Refine Summary:", summary.text);
  ```

---

#### 4. Router Chains
- Decide which chain to use based on the query.
- Example:  
  If query is "translate" → TranslationChain.  
  If query is "summarize" → SummarizationChain.

---

## 🖥️ Backend Example: PDF Summarization

Add `/summarize` endpoint to your Express backend:

```js
// /summarize endpoint (map-reduce or refine)
app.post("/summarize", async (req, res) => {
  try {
    const { docId = "ALL", mode = "map_reduce" } = req.body;
    let results;
    if (docId !== "ALL") {
      results = await pool.query(
        "SELECT content FROM documents WHERE metadata->>'doc_id' = $1 ORDER BY id ASC",
        [docId]
      );
    } else {
      results = await pool.query("SELECT content FROM documents ORDER BY id ASC");
    }
    if (results.rows.length === 0) {
      return res.status(404).json({ error: "No documents found" });
    }
    const docs = results.rows.map((row) => ({
      pageContent: row.content,
      metadata: {},
    }));
    const chain = loadSummarizationChain(llm, { type: mode });
    const summary = await chain.call({ input_documents: docs });
    res.json({
      summary: summary.text,
      chunksProcessed: docs.length,
      mode,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to summarize document(s)" });
  }
});
```

---

## 🖥️ Frontend Example: Summarization Button

Add a summarization mode selector and button:

```js
// Summarization mode selector
<FormControl fullWidth sx={{ mb: 2 }}>
  <InputLabel id="mode-select-label">Summarization Mode</InputLabel>
  <Select
    labelId="mode-select-label"
    value={mode}
    onChange={e => setMode(e.target.value)}
  >
    <MenuItem value="map_reduce">Map-Reduce (faster, scalable)</MenuItem>
    <MenuItem value="refine">Refine (slower, more accurate)</MenuItem>
  </Select>
</FormControl>

// Summarize button
<Button
  fullWidth
  variant="outlined"
  sx={{ mb: 2 }}
  onClick={summarize}
>
  Summarize Document
</Button>

// Summarize function
async function summarize() {
  const res = await fetch("http://localhost:3000/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ docId: activeDocId, mode }),
  });
  const data = await res.json();
  const newMessages = [
    ...messages,
    {
      role: "assistant",
      content: `📄 Summary (${mode}) for ${activeDocId}:\n\n${data.summary || "(no summary)"}\n\nChunks processed: ${data.chunksProcessed}`,
    },
  ];
  setMessages(newMessages);
}
```

---

**Summary:**
- Chains let you structure LLM workflows for summarization, multi-step reasoning, or dynamic routing.
- Map-Reduce: fast, scalable summaries.
- Refine: slower, more accurate summaries.
- Router: dynamic pipeline selection.
- Integrate summarization into your MERN RAG app with a backend endpoint and frontend button.

## 🧑‍💻 Agents: Planning, Acting, and Autonomy in GenAI

Agents are LLM-powered workflows that **plan steps, use tools, and act autonomously**.  
Instead of a fixed pipeline (input → retrieval → answer), Agents run a loop:

1. **Plan:** Decide what to do next.
2. **Act:** Call a tool (retriever, calculator, API, etc.).
3. **Observe:** Read the result.
4. **Repeat:** Iterate until a final answer is produced.

This is the core of **Agentic AI**—models that reason and act, not just generate.

---

### 🔧 Agent Tools

Agents use tools to interact with the world:
- **Retriever:** Search your vector DB (pgvector, Pinecone, etc.).
- **Calculator:** Solve math problems.
- **API:** Fetch external data (weather, stocks, etc.).
- **Custom Functions:** Any logic you expose.

The Agent chooses which tool to use based on the query.

---

### 🔑 Why Agents?

**Example:**  
*"From my PDF, calculate the average price of cars in the last 30 days, then summarize in bullet points."*

A simple RAG chain can only retrieve and summarize.  
An Agent can:
1. Retrieve relevant data from your DB.
2. Use a calculator tool for math.
3. Generate a summary with the LLM.

---

### 🧠 Agent Types in LangChain

1. **ReAct Agent:**  
  - LLM reasons ("I should check DB") and acts ("call retriever"), looping until done.
2. **Plan-and-Execute Agent:**  
  - Plans multi-step tasks, then executes each step.
3. **Structured Tool Agent:**  
  - Picks and executes tools based on strict schemas.

---

### 🖥️ Example: Agent with Calculator Tool

```js
// LangChain Agent with Calculator Tool
import { ChatOpenAI } from "@langchain/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { Calculator } from "langchain/tools/calculator";

const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const tools = [new Calculator()];
const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
});

const result = await executor.call({ input: "What is 23 * 7 plus 55?" });
console.log("Final Answer:", result.output);
```

---

### 📄 Example: Agent with Retriever Tool

Expose your vector DB retriever as a tool:

```js
const retriever = store.asRetriever(3);
import { createRetrieverTool } from "langchain/tools";
const retrieverTool = createRetrieverTool(retriever, {
  name: "pdf_search",
  description: "Search through uploaded PDF documents",
});
```

Now the Agent can choose between searching PDFs or doing math.

---

### 🖥️ Multi-Tool Agent Backend Example

```js
// LangChain Agent with Retriever Tool + Calculator
import express from "express";
import "dotenv/config";
import pkg from "pg";
import { ChatOpenAI } from "@langchain/openai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createRetrieverTool } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { initializeAgentExecutorWithOptions } from "langchain/agents";

const { Pool } = pkg;
const app = express();
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rag_demo",
  password: "postgres",
  port: 5432,
});

const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });
const store = await PGVectorStore.initialize(embeddings, {
  pool,
  tableName: "documents",
  columns: {
   idColumnName: "id",
   contentColumnName: "content",
   vectorColumnName: "embedding",
   metadataColumnName: "metadata",
  },
});

const retriever = store.asRetriever(3);
const retrieverTool = createRetrieverTool(retriever, {
  name: "pdf_search",
  description: "Searches uploaded PDF documents for relevant information",
});
const calcTool = new Calculator();

const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const tools = [retrieverTool, calcTool];
const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
});

app.post("/ask-agent", async (req, res) => {
  try {
   const { question } = req.body;
   if (!question) return res.status(400).json({ error: "Missing question" });
   const result = await executor.call({ input: question });
   res.json({ answer: result.output });
  } catch (err) {
   console.error("ask-agent error:", err);
   res.status(500).json({ error: "Agent failed" });
  }
});

app.listen(3000, () => {
  console.log("Agent backend running on http://localhost:3000");
});
```

---

### 📝 How Agent Reasoning Works

When you POST to `/ask-agent`, the Agent:
1. **Thinks:** "Should I use the calculator or search PDFs?"
2. **Acts:** Calls the chosen tool.
3. **Observes:** Reads the result.
4. **Repeats:** Loops until it can answer.

With `verbose: true`, you see the reasoning steps in your server console.

---

**Summary:**
- **Chains:** Fixed pipelines.
- **Agents:** Dynamic, adaptive workflows.
- **Tools:** The Agent's "hands" for external actions.
- **Agents** enable LLMs to plan, act, and solve complex tasks autonomously.

---

**Next Steps:**  
- Add more tools (web search, database queries).
- Explore multi-agent systems (agents collaborating).
- Return intermediate reasoning steps to the frontend for transparency.


⸻

- **Memory** = how the LLM keeps track of past interactions.
- **Without memory:** Each query is stateless; the bot forgets previous messages.
- **With memory:** The bot can reference earlier conversation, enabling context-aware responses.

⸻

## 🔑 Types of Memory

1. **BufferMemory**
  - Stores full chat history (all messages).
  - Best for short conversations and prototyping.
  - **Drawback:** Grows quickly, increasing token cost.

2. **SummaryMemory**
  - Summarizes older messages into a concise context using an LLM.
  - Best for longer conversations.
  - **Advantage:** Keeps memory affordable by reducing token usage.

3. **VectorStoreRetrieverMemory**
  - Embeds past conversations into a vector database (e.g., pgvector).
  - Bot retrieves only relevant history chunks.
  - Best for long-term, scalable memory.

⸻

## 🖥️ Example: Agent with BufferMemory

```js
// Agent with BufferMemory (LangChain JS)
// ===========================================
//
// npm install @langchain/openai langchain
//
import { ChatOpenAI } from "@langchain/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { Calculator } from "langchain/tools/calculator";
import { BufferMemory } from "langchain/memory";

// 1. LLM
const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });

// 2. Tools
const tools = [new Calculator()];

// 3. Memory
const memory = new BufferMemory({
  memoryKey: "chat_history", // key passed to agent
  returnMessages: true,      // stores full chat history
});

// 4. Agent with memory
const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  memory,    // 👈 attach memory
  verbose: true,
});

// Conversation
await executor.call({ input: "My name is Alex." });
```

## 🖥️ Example: Agent with SummaryMemory

```js
import { ConversationSummaryMemory } from "langchain/memory";

// Memory that summarizes older messages
const memory = new ConversationSummaryMemory({
  llm,                      // uses LLM to auto-summarize
  memoryKey: "chat_history",
  returnMessages: true,
});

const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  memory,
  verbose: true,
});
```

## 🖥️ Example: Agent with VectorStoreRetrieverMemory

```js
import { OpenAIEmbeddings } from "@langchain/openai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { VectorStoreRetrieverMemory } from "langchain/memory";

// Vector store setup
const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });
const store = await PGVectorStore.initialize(embeddings, {
  pool,
  tableName: "memory",
  columns: {
   idColumnName: "id",
   contentColumnName: "content",
   vectorColumnName: "embedding",
  },
});

// Memory that retrieves relevant history chunks
const memory = new VectorStoreRetrieverMemory({
  retriever: store.asRetriever(3),
  memoryKey: "chat_history",
});
```

⸻

- **BufferMemory:** Use for short chats and testing.
- **SummaryMemory:** Use for medium-length chats, cost-aware.
- **VectorStoreMemory:** Use for long-term, production bots.

⸻

We’ve now covered **Chains → Agents → Memory**.

**Next step: Agentic AI proper—**
- Multi-agent systems (agents collaborating)
- Planning & coordination
- Example: “Researcher Agent + Summarizer Agent + Writer Agent” working together

---

Here’s how you can update your existing Agent backend that uses both the `pdf_search` tool and the `calculator` tool:

### RAG Agent Backend with BufferMemory
---
**Features:**
- Uses retriever tool (pgvector) + calculator tool
- Remembers conversation history (BufferMemory)
- `/ask-agent` endpoint: now context-aware

**Install dependencies:**
```bash
npm install @langchain/openai @langchain/community langchain express dotenv pg
```
// ==================================================

```js
import express from "express";
import "dotenv/config";
import pkg from "pg";

import { ChatOpenAI } from "@langchain/openai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createRetrieverTool } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { BufferMemory } from "langchain/memory";

const { Pool } = pkg;

const app = express();
app.use(express.json());

// Postgres connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rag_demo",
  password: "postgres",
  port: 5432,
});

// Vector store + retriever
const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });
const store = await PGVectorStore.initialize(embeddings, {
  pool,
  tableName: "documents",
  columns: {
    idColumnName: "id",
    contentColumnName: "content",
    vectorColumnName: "embedding",
    metadataColumnName: "metadata",
  },
});
const retriever = store.asRetriever(3);

// Tools
const retrieverTool = createRetrieverTool(retriever, {
  name: "pdf_search",
  description: "Searches uploaded PDF documents for relevant information.",
});
const calcTool = new Calculator();

// Memory (BufferMemory: keeps full conversation in RAM)
const memory = new BufferMemory({
  memoryKey: "chat_history", // passed to agent
  returnMessages: true,
});

// LLM + Agent
const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const tools = [retrieverTool, calcTool];
const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
  memory,   // 👈 memory attached here
});

// Endpoint: ask-agent (now context-aware)
app.post("/ask-agent", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "Missing question" });

    const result = await executor.call({ input: question });

    res.json({
      answer: result.output,
      chatHistory: await memory.loadMemoryVariables({}), // show stored memory
    });
  } catch (err) {
    console.error("ask-agent error:", err);
    res.status(500).json({ error: "Agent failed" });
  }
});

app.listen(3000, () => {
  console.log("RAG Agent with Memory running at http://localhost:3000");
});
```

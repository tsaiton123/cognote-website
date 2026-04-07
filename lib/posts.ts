export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'how-to-search-handwritten-notes',
    title: 'How to Search Your Handwritten Notes in Seconds',
    date: '2026-04-01',
    excerpt:
      'Stop flipping through pages. Cognote\'s on-device OCR indexes every word you write so you can find anything instantly.',
    content: `
Handwritten notes are personal and fast — but finding something specific later can feel like searching for a needle in a haystack. Cognote solves this with on-device OCR that indexes every word as you write.

## How it works

When you finish a note, Cognote silently runs optical character recognition on your handwriting. This creates a searchable index stored entirely on your device — no data leaves your phone.

When you type a keyword into the search bar, Cognote scans that index and surfaces every note containing that word, highlighting exactly where it appears.

## Tips for better search results

- **Write clearly at the edges** — words near the margin are sometimes cropped. Leave a small border.
- **Use consistent terminology** — if you write "mitochondria" in one lecture and "mito" in another, search for both.
- **Star important notes** — starred notes surface first in results so your most-used material is always one tap away.

## Works fully offline

Search works with no internet connection. Whether you're on a plane or in a basement lecture hall with no signal, your notes are always findable.

Give it a try: open Cognote, tap the search icon, and type any word from a note you wrote last week.
    `.trim(),
  },
  {
    slug: 'whiteboard-to-notes-study-hack',
    title: 'The Whiteboard Study Hack Every Student Needs',
    date: '2026-03-20',
    excerpt:
      'Your professor just erased the board before you finished copying. Here\'s how Board to Note turns any photo into a clean, searchable note.',
    content: `
It happens in every lecture. The professor fills the whiteboard with equations, diagrams, and key concepts — then erases it the moment you look down at your notebook. Cognote's Board to Note feature is built for exactly this problem.

## What Board to Note does

Point your camera at any whiteboard or chalkboard and tap capture. Cognote:

1. Removes glare and corrects perspective
2. Enhances contrast so faint chalk is legible
3. Converts the image into a structured, editable note
4. Indexes all the text so it's searchable immediately

## Best practices

- **Shoot straight on** — a slight angle is fine, but extreme angles reduce accuracy.
- **Good lighting helps** — avoid shooting directly into a bright window behind the board.
- **Capture before the erase** — the feature works best on a complete, unmodified board.

## Beyond whiteboards

Board to Note also works on:
- Printed slides projected on a screen
- Sticky-note brainstorms on a wall
- Physical textbook pages you want to annotate digitally

Try it in your next class and never lose a board again.
    `.trim(),
  },
  {
    slug: 'ask-ai-about-your-notes',
    title: 'Ask AI Anything About Your Notes with Gemini',
    date: '2026-03-10',
    excerpt:
      'Cognote connects Google Gemini AI to your actual notes — so you can ask questions, get explanations, and solve problems in context.',
    content: `
Studying means more than taking notes — it means understanding them. Cognote's Ask AI feature connects Google Gemini to your notes so you can have a conversation about exactly what you wrote.

## What you can ask

- **Explain a concept** — "What does this formula mean?" and Gemini explains it using the context of your note.
- **Quiz yourself** — "Give me 5 questions based on this page."
- **Solve problems** — paste or photograph a practice problem and ask for a step-by-step solution.
- **Summarize** — "Summarize this note in three bullet points."

## Why context matters

Most AI chatbots answer from general knowledge. Ask AI reads your specific notes first, so its answers are grounded in what your professor actually taught — not a generic textbook version.

## Privacy

Your notes are sent to Gemini only when you explicitly trigger Ask AI. Notes you don't open in a session are never shared.

## Getting started

1. Open any note in Cognote.
2. Tap the sparkle icon in the toolbar.
3. Type your question.

That's it. Your personal AI tutor is ready.
    `.trim(),
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getLatestPosts(n = 3): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n)
}

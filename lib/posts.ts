export type Locale = 'en' | 'zh-TW'

export interface PostTranslation {
  title: string
  excerpt: string
  content: string
}

interface PostRecord {
  slug: string
  date: string
  translations: Record<Locale, PostTranslation>
}

export interface Post extends PostTranslation {
  slug: string
  date: string
}

const postRecords: PostRecord[] = [
  {
    slug: 'how-to-search-handwritten-notes',
    date: '2026-04-01',
    translations: {
      en: {
        title: 'How to Search Your Handwritten Notes in Seconds',
        excerpt:
          "Stop flipping through pages. Cognote's on-device OCR indexes every word you write so you can find anything instantly.",
        content: `
Handwritten notes are personal and fast, but finding something specific later can feel like searching for a needle in a haystack. Cognote solves this with on-device OCR that indexes every word as you write.

## How it works

When you finish a note, Cognote silently runs optical character recognition on your handwriting. This creates a searchable index stored entirely on your device, so no data leaves your phone.

When you type a keyword into the search bar, Cognote scans that index and surfaces every note containing that word, highlighting exactly where it appears.

## Tips for better search results

- **Write clearly at the edges** so words near the margin do not get cropped.
- **Use consistent terminology** if you want search to find similar ideas across different classes.
- **Star important notes** so your most useful results rise to the top faster.

## Works fully offline

Search works with no internet connection. Whether you are on a plane or in a lecture hall with no signal, your notes are still instantly findable.

Give it a try: open Cognote, tap the search icon, and type any word from a note you wrote last week.
        `.trim(),
      },
      'zh-TW': {
        title: '如何在幾秒內搜尋你的手寫筆記',
        excerpt:
          '別再一頁一頁翻找。Cognote 的裝置端 OCR 會為你寫下的每個字建立索引，讓你立即找到需要的內容。',
        content: `
手寫筆記很直覺，也很適合上課時快速記錄，但回頭要找某個重點時，常常像在大海撈針。Cognote 透過裝置端 OCR，讓你寫下的每個字都能被搜尋。

## 運作方式

當你完成一則筆記後，Cognote 會在背景自動辨識你的手寫內容，建立只儲存在裝置上的搜尋索引，不需要把資料上傳到雲端。

當你在搜尋列輸入關鍵字時，Cognote 會掃描這份索引，找出所有包含該詞的筆記，並直接標示出出現的位置。

## 提升搜尋效果的小技巧

- **邊緣字跡寫清楚**，避免靠近頁面邊界的文字被裁掉。
- **盡量使用一致術語**，同一個概念不要一堂課寫全名、另一堂課只寫縮寫。
- **把重要筆記加星號**，常用內容會更快浮到前面。

## 完全支援離線搜尋

搜尋功能不需要網路。無論你在飛機上，還是在訊號很差的教室裡，筆記一樣可以立刻找到。

現在就試試看：打開 Cognote，點一下搜尋圖示，輸入你上週筆記中的任何一個字。
        `.trim(),
      },
    },
  },
  {
    slug: 'whiteboard-to-notes-study-hack',
    date: '2026-03-20',
    translations: {
      en: {
        title: 'The Whiteboard Study Hack Every Student Needs',
        excerpt:
          "Your professor just erased the board before you finished copying. Here's how Board to Note turns any photo into a clean, searchable note.",
        content: `
It happens in every lecture. The professor fills the whiteboard with equations, diagrams, and key concepts, then erases it the moment you look down at your notebook. Cognote's Board to Note feature is built for exactly this problem.

## What Board to Note does

Point your camera at any whiteboard or chalkboard and tap capture. Cognote:

1. Removes glare and corrects perspective
2. Enhances contrast so faint chalk is legible
3. Converts the image into a structured, editable note
4. Indexes all the text so it is searchable immediately

## Best practices

- **Shoot straight on** because extreme angles reduce recognition quality.
- **Use good lighting** and avoid strong backlight behind the board.
- **Capture before the erase** while the board is still complete and readable.

## Beyond whiteboards

Board to Note also works on:
- Printed slides projected on a screen
- Sticky-note brainstorms on a wall
- Physical textbook pages you want to annotate digitally

Try it in your next class and never lose a board again.
        `.trim(),
      },
      'zh-TW': {
        title: '每個學生都該知道的白板轉筆記技巧',
        excerpt:
          '教授在你抄完之前就把板書擦掉了？Board to Note 可以把任何白板照片轉成乾淨、可搜尋的筆記。',
        content: `
這種情況幾乎每堂課都會發生。教授把公式、圖表和重點寫滿整面白板，結果你才剛低頭抄寫，黑板就被擦掉了。Cognote 的 Board to Note 正是為這種場景設計。

## Board to Note 會做什麼

把相機對準白板或黑板，按下拍攝。Cognote 會：

1. 去除反光並校正透視角度
2. 提升對比，讓較淡的粉筆字也能看清楚
3. 把影像轉成結構化、可編輯的筆記
4. 立即建立文字索引，拍完就能搜尋

## 使用建議

- **盡量正面拍攝**，角度太斜會降低辨識效果。
- **選擇光線穩定的環境**，避免背後有太亮的窗戶。
- **在擦掉之前先拍**，完整的板書最容易轉換成功。

## 不只是白板

Board to Note 也很適合拿來處理：
- 投影幕上的講義頁面
- 貼滿便利貼的腦力激盪牆
- 想轉成數位筆記的紙本教材

下次上課就試試看，別再讓重要板書從你眼前消失。
        `.trim(),
      },
    },
  },
  {
    slug: 'ask-ai-about-your-notes',
    date: '2026-03-10',
    translations: {
      en: {
        title: 'Ask AI Anything About Your Notes with Gemini',
        excerpt:
          'Cognote connects Google Gemini AI to your actual notes so you can ask questions, get explanations, and solve problems in context.',
        content: `
Studying means more than taking notes. It means understanding them. Cognote's Ask AI feature connects Google Gemini to your notes so you can have a conversation about exactly what you wrote.

## What you can ask

- **Explain a concept** and Gemini will answer using the context of your note.
- **Quiz yourself** by asking for review questions based on the current page.
- **Solve problems** with step-by-step help grounded in your notes.
- **Summarize** a dense page into a shorter review version.

## Why context matters

Most AI chatbots answer from general knowledge. Ask AI reads your specific notes first, so its answers stay grounded in what your professor actually taught instead of a generic textbook version.

## Privacy

Your notes are sent to Gemini only when you explicitly trigger Ask AI. Notes you do not open in a session are never shared.

## Getting started

1. Open any note in Cognote.
2. Tap the sparkle icon in the toolbar.
3. Type your question.

That is it. Your personal AI study assistant is ready.
        `.trim(),
      },
      'zh-TW': {
        title: '用 Gemini 直接詢問 AI 你的筆記內容',
        excerpt:
          'Cognote 將 Google Gemini AI 接上你的真實筆記，讓你可以依照上下文提問、理解觀念，甚至解題。',
        content: `
讀書不只是把內容抄下來，更重要的是能真正理解。Cognote 的 Ask AI 功能會把 Google Gemini 與你的筆記結合，讓你直接針對自己寫下的內容發問。

## 你可以怎麼問

- **解釋觀念**，例如請 AI 說明某個公式或名詞的意思。
- **幫自己出題**，依照目前這頁筆記產生複習問題。
- **逐步解題**，把題目貼上去或拍下來，讓 AI 依照筆記脈絡協助你思考。
- **快速摘要**，把一整頁濃縮成幾個重點段落。

## 為什麼上下文很重要

一般聊天機器人通常只依賴通用知識作答。Ask AI 會先讀你的筆記，因此答案更貼近老師上課的內容，而不是套用一個很通用的版本。

## 隱私方式

只有在你主動啟用 Ask AI 時，相關筆記內容才會傳送給 Gemini。沒有打開的筆記不會被一起送出。

## 如何開始

1. 在 Cognote 中打開任一筆記
2. 點一下工具列上的閃光圖示
3. 輸入你的問題

這樣就完成了。你的 AI 學習助理已經可以開始工作。
        `.trim(),
      },
    },
  },
]

function toLocalizedPost(post: PostRecord, locale: Locale): Post {
  const translation = post.translations[locale] ?? post.translations.en

  return {
    slug: post.slug,
    date: post.date,
    title: translation.title,
    excerpt: translation.excerpt,
    content: translation.content,
  }
}

export const posts = postRecords.map(({ slug, date }) => ({ slug, date }))

export function getAllPosts(locale: Locale): Post[] {
  return postRecords.map((post) => toLocalizedPost(post, locale))
}

export function getPost(locale: Locale, slug: string): Post | undefined {
  const post = postRecords.find((entry) => entry.slug === slug)
  return post ? toLocalizedPost(post, locale) : undefined
}

export function getLatestPosts(locale: Locale, n = 3): Post[] {
  return [...getAllPosts(locale)]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n)
}

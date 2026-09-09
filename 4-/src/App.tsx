import { useState } from 'react'
import './App.css'


const EMOJIS: Emoji[] = [
  { emoji: "💯", title: "100", keywords: "hundred, points, symbol, won, win, perfect, parties" },
  { emoji: "🔥", title: "fire", keywords: "lit, flame, hot, burn" },
  { emoji: "🎉", title: "party popper", keywords: "celebration, congrats, tada" },
  { emoji: "😂", title: "face with tears of joy", keywords: "laugh, lol, funny, crying" },
  { emoji: "❤️", title: "red heart", keywords: "love, like, heart" },
]

function App() {
  const [input, setInput] = useState(" ")

  const filtered = EMOJIS.filter((e) =>
    e.keywords.toLowerCase().includes(input.toLowerCase()) ||
    e.title.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <>
      <header>
        <h1>Emoji Finder</h1>

        <p className="description">Find the emoji per keywords</p>

        <input placeholder="Placeholder" type="text" value={input}
          onChange={(e) => setInput(e.target.value)} />
      </header>

      <main>

      <div className="container">

          {filtered.map((e) => (
            <div className="card" key={e.title}>
              <p className="emoji">{e.emoji}</p>
              <p className="title">{e.title}</p>
              <p className="keywords">{e.keywords}</p>
            </div>
          ))}
      </div>

      </main>
    </>
  )
}

export default App
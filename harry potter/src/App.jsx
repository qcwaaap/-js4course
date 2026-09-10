import { useState } from 'react'
import './App.css'

const characters: Character[] = [
  { character: "Hermione Granger", actor: "Emma Watson", gender: "Female", house: "Gryffindor", Wand_Core: "Dragon heartstring", Alive: "Yes" },
  { character: "Harry Potter", actor: "Daniel Radcliffe", gender: "Male", house: "Gryffindor", Wand_Core: "Phoenix feather", Alive: "Yes" },
  { character: "Ron Weasley", actor: "Rupert Grint", gender: "Male", house: "Gryffindor", Wand_Core: "Unicorn hair", Alive: "Yes" },
  { character: "Draco Malfoy", actor: "Tom Felton", gender: "Male", house: "Slytherin", Wand_Core: "Unicorn hair", Alive: "Yes" },
  { character: "Luna Lovegood", actor: "Evanna Lynch", gender: "Female", house: "Ravenclaw", Wand_Core: "Unknown", Alive: "Yes" },
  { character: "Neville Longbottom", actor: "Matthew Lewis", gender: "Male", house: "Gryffindor", Wand_Core: "Unknown", Alive: "Yes" },
  { character: "Albus Dumbledore", actor: "Michael Gambon", gender: "Male", house: "Gryffindor", Wand_Core: "Phoenix feather", Alive: "No" },
  { character: "Severus Snape", actor: "Alan Rickman", gender: "Male", house: "Slytherin", Wand_Core: "Unknown", Alive: "No" },
  { character: "Minerva McGonagall", actor: "Maggie Smith", gender: "Female", house: "Gryffindor", Wand_Core: "Dragon heartstring", Alive: "Yes" },
  { character: "Rubeus Hagrid", actor: "Robbie Coltrane", gender: "Male", house: "Gryffindor", Wand_Core: "Unknown", Alive: "Yes" },
  { character: "Ginny Weasley", actor: "Bonnie Wright", gender: "Female", house: "Gryffindor", Wand_Core: "Unknown", Alive: "Yes" },
  { character: "Voldemort", actor: "Ralph Fiennes", gender: "Male", house: "Slytherin", Wand_Core: "Phoenix feather", Alive: "No" },
];

function App() {
  const [count, setCount] = useState(0)

  const filtered = characters.filter((c) =>
    c.character.toLowerCase().includes(input.toLowerCase()) ||
    c.actor.toLowerCase().includes(input.toLowerCase()) ||
    c.gender.toLowerCase().includes(input.toLowerCase()) ||
    c.house.toLowerCase().includes(input.toLowerCase())
  )

  return (
  <>
      <header>
        <h1>Harry Potter</h1>

        <p className="description">View all characters from the Harry Potter universe</p>
        <p className="name">Name/actor/gender/house</p>

        <input placeholder="Placeholder" type="text" value={input}
          onChange={(c) => setInput(c.target.value)} />
        <label for="school">Choose one:</label>

        <select id="school" name="variants">
          <option value="">--Please choose an option--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
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

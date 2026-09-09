import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function Greeting() {
  return (
    <div>
      <h1>хай</h1>
      <p>first application</p>
    </div>
  );
}

function TaskList() {
  return (
    <ul>
      <li>wakeup</li>
      <li>workout</li>
      <li>get breakfast</li>
      <li>have fun</li>
    </ul>
  );
}

function ActionButton() {
  return (
    <div>
      <button>dont touch!!!!!</button>
      <p>still untouched</p>
    </div>
  );
}

function ProfileCard() {
  return (
    <div>
      <h2>Аnna Ivanova</h2>
      <h3>frontend developer</h3>
      <p>like to learn new technologies</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
      </ul>
    </div>
  );
}

function ImageGallery() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <img src="https://picsum.photos/id/1015/150" alt="пейзаж с горами" />
      <img src="https://picsum.photos/id/1016/150" alt="вид на скалы" />
      <img src="https://picsum.photos/id/1018/150" alt="река в лесу" />
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>приветствие</h2>
      <Greeting />

      <h2>список задач</h2>
      <TaskList />

      <h2>кнопка</h2>
      <ActionButton />

      <h2>карточка профиля</h2>
      <ProfileCard />

      <h2>галерея изображений</h2>
      <ImageGallery />
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Top_Header from './components/layout/Top_Header'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Top_Header />
    <Header/>
    <Hero/>
    </>
  )
}

export default App

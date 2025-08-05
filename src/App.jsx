import Headers from "./components/header"
import Hero from "./components/hero"

export default function App() {
  return (
    <main>
      <img className="absolute top-0 right-0 opacity-60 -z-1" src="/gradient.png" alt="Graient-img"></img>
      { /* Blur Effect */}

      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Headers>
      </Headers>

      <Hero>

      </Hero>
    </main>
  )
}  
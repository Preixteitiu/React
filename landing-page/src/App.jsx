import Beneficios from "./components/beneficios"
import Card from "./components/Card"
import Formulario from "./components/formulario"
import Header from "./components/header"
import Hero from "./components/hero"
import Input from "./components/input"

function App() {
  return (
    <>
      <Header />

      <Hero
        titulo="Aprenda programação do zero"
        descricao="Um curso para quem quer começar na tecnologia"
        botao="Quero começar" />

      <Card />

      <Beneficios />


      <Formulario/>
    </>


  )
}

export default App

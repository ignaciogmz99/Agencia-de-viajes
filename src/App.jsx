import Navbar from './components/Navbar.jsx'
import Button from "./components/Button.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <p>Bienvenido a nuestra página</p>
      <Button
        text="Reservar"
        variant="primary"
        size="medium"
        onClick={() => alert("Reservando...")}
      />
    </div>
  )
}

export default App

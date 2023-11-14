import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'

function App() {
    return (
        <>
            <Navbar />
            <h1>Coder React Project</h1>
            <ItemListContainer shop='Mi Tienda de E-Commerce de CoderHouse' />
        </>
    )
}

export default App

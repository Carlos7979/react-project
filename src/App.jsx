import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer shop='Mi Tienda de E-Commerce de CoderHouse' />
        </>
    )
}

export default App

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Historia from './pages/História'
import Recordes from './pages/Recordes'
import Condecoracoes from './pages/Condecorações'
import Erro from './pages/Erro'
import Footer from './components/Footer'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/historia' element={<Historia/>}/>
                <Route path='/recordes' element={<Recordes/>}/>
                <Route path='/condecoracoes' element={<Condecoracoes/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
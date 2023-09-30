import {Link} from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <header>
            <div className='titulo'>
                <Link to='/'><h1>Ayrton Senna</h1></Link>
            </div>
            <div className='itens'>
                <Link to='/'>Home</Link>
                <Link to='/historia'>História</Link>
                <Link to='/recordes'>Recordes</Link>
                <Link to='/condecoracoes'>Condecorações</Link>
            </div>
        </header>
    )
}
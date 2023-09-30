import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import './Header.css'

export default function Header() {

    const [itensVisible, setItensVisible] = useState(false)

    useEffect(() => {
        function mudouTamanho() {
            setItensVisible(window.innerWidth >= 1139)
        }

        window.addEventListener('resize', mudouTamanho);

        mudouTamanho();

        return () => {
            window.removeEventListener('resize', mudouTamanho);
          };
    }, [])

    function clickMenu() {
        setItensVisible(!itensVisible)
    }

    function hideMenu() {
        if (window.innerWidth <= 1139) {
            setItensVisible(false)
        }
    }

    return (
        <header>
            <div className='titulo'>
                <Link to='/'><h1>Ayrton Senna</h1></Link>
            </div>
            <span id="burguer" className="material-symbols-outlined" onClick={clickMenu}>menu</span>
            <div className='itens' style={{ display: itensVisible ? 'block' : 'none' }}>
                <Link onClick={hideMenu} to='/'>Home</Link>
                <Link onClick={hideMenu} to='/historia'>História</Link>
                <Link onClick={hideMenu} to='/recordes'>Recordes</Link>
                <Link onClick={hideMenu} to='/condecoracoes'>Condecorações</Link>
            </div>
        </header>
    )
}
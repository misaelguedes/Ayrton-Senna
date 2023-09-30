import './Erro.css'

import Error from '../../images/erro.png'

export default function Erro() {
    return (
        <div className='erro'>
            <h1>404</h1>
            <p>Página não encontrada!</p>
            <img src={Error} alt='Erro'/>
        </div>
    )
}
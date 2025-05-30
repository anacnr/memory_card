
import { useParams } from 'react-router-dom'
import './css/winner.module.css'

const Winner = () =>{

    const { name } = useParams()

    return(
        <div>
            <h1>Parabéns, você venceu!</h1>
            <img src={'pic'} alt="Usuário"/>
            <h2><strong>{name}</strong></h2>
        </div>
    )
}

export {Winner}
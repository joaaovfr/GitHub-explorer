import './CardUsuario.css';
import { Card } from 'react-bootstrap';

function CardUsuario(props) {
    return (
        <>
            <Card className='mb-2'>
                <Card.Body>
                    <Card.Title>{props.usuario.login}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Id:{props.usuario.id}</Card.Subtitle>
                    <img className='img' src={props.usuario.avatar_url} alt='Usuário'></img>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardUsuario;

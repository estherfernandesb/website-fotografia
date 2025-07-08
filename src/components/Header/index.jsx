import React from 'react';
import { Container, Titulo, Menu } from '../Header/styles';

    const Header = () => {
        return (
            <Container>
                <Titulo>
                    <h2>Lucas Bastos</h2>
                </Titulo>
                <Menu>
                    <ul>
                        <li><span>Sobre</span></li>
                        <li><span>Galeria</span></li>
                        <li><span>Projetos</span></li>
                        <li><span>Contato</span></li>
                        
                    </ul>
                </Menu>
            </Container>
        )
    }


export default Header;

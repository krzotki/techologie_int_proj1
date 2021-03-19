import React from 'react';
import Aux from '../../hoc/ReactAux';
import {NavLink} from 'react-router-dom';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <header>
            <div className = "logo container">

            </div>
            <nav>
                <ul>
                    <li> <NavLink to='/' exact>Home</NavLink> </li>
                    <li> <NavLink to='/friends' exact>Friends</NavLink> </li>
                    <li> <NavLink to='/temp' exact>Temp</NavLink> </li>
                    <li> <NavLink to='/profile' exact>Profile</NavLink> </li>
                </ul>
            </nav>
        </header>

        <main className = 'main'>
            <section className = 'panel left'>
                Left navigation
            </section>

            <section className = 'page_content'>
                {props.children}
            </section>
            
            <section className = 'panel right'>
                Friends list
            </section>
        </main>
    </Aux>
)

export default layout;
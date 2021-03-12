import React from 'react';
import Aux from '../../hoc/ReactAux';
import {Link} from 'react-router-dom';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <header>
            <div className = "logo container">

            </div>
            <nav>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/friends'>Friends</Link> </li>
                    <li> <Link to='/profile'>Profile</Link> </li>
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
import React from 'react';
import Aux from '../../hoc/ReactAux';
import {NavLink} from 'react-router-dom';
import './Layout.css';

class Layout extends React.Component {
    
    state = {
        leftPanelVisible: true,
    }

    showHideLeftPanel() {
        this.setState({
            leftPanelVisible: (!this.state.leftPanelVisible)
        });
    }

    render() {
        const leftPanelCLasses = ['panel', 'left'];
        if(this.state.leftPanelVisible) {
            leftPanelCLasses.push('visible');
        }

        return(
        <Aux>
            <header>
                <button className='menu' onClick={() => this.showHideLeftPanel()}>
                    <i className="fa fa-bars"></i>
                </button>
    
                <div className = "logo container">
                    <NavLink to='/' exact>
                        <img src='/images/logo.png'/>
                    </NavLink>
                </div>
        
                <nav>
                    <ul>
                        <li> <NavLink to='/friends' exact>Friends</NavLink> </li>
                        {/* <li> <NavLink to='/temp' exact>Temp</NavLink> </li> */}
                        <li> <NavLink to='/profile' exact>Profile</NavLink> </li>
                    </ul>
                </nav>
            </header>
    
            <main className = 'main'>
                <section className = {leftPanelCLasses.join(' ')}>
                    Left navigation
                </section>
    
                <section className = 'page_content'>
                    {this.props.children}
                </section>
                
                <section className = 'panel right'>
                    Friends list
                </section>
            </main>
        </Aux>);
    }
}

export default Layout;
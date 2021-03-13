import React from "react";
import './Temp.css';

class Temp extends React.Component{

    render() {
        return(
            <div className='temp'>
                <div className='header'>
                    <h1>Witam na mojej stronie</h1>
                    <ul className='temp_nav'>
                        <nav>
                            <li>
                                <a href='#'>O mnie</a>
                                <ul>
                                    <li>O mnie 1</li>
                                    <li>O mnie 2</li>
                                </ul>
                            </li>
                            <li>
                                <a href='#'>O kimś innym </a>
                                <ul>
                                    <li>O kimś innym 1</li>
                                    <li>O kimś innym 2</li>
                                </ul>
                            </li>
                        </nav>
                    </ul>
                </div>
                
                <div className='content'>
                    <p>To</p>
                    <h2>jest</h2>
                    <p>strona</p>
                    <h3>inna</h3>
                    <p>niż</p>
                    <h4><a target='_blank' href='https://9gag.com/'>inne</a></h4>

                    <section className='jumbotron'>
                        <h1>Super jumbotron</h1>
                        <button>Ponętny przycisk</button>
                    </section>

                    <section className='gallery'>
                        <img src='/images/0.jpg' alt='cat1' />
                        <img src='/images/1.jpg' alt='cat2' />
                        <img src='/images/3.jpg' alt='cat3' />
                        <img src='/images/4.jpg' alt='cat4' />
                        <img src='/images/5.jpg' alt='cat4' />
            
                    </section>
                    
                </div>

                <div className='footer'><p>Ale fajna stópka</p></div>
            </div>
        );
    }
}

export default Temp;
import React from "react";

import 'font-awesome/css/font-awesome.min.css';
import './Temp.scss';

class Temp extends React.Component{

    render() {
        return(
            <div className='temp'>

                <h1>Sprawozdanie 1</h1>
                <hr/>

                <div className='header'>
                    <h1>Witam na mojej stronie</h1>
                    <nav className='temp_nav'>
                        <ul>
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
                        </ul>
                    </nav>
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

                <hr/>
                <h1>Sprawozdanie 2</h1>

                <div className='gradient-buttons'>
                    <button className='button-grad purple'>Purple button</button>
                    <button className='button-grad yellow'>Yellow button</button>
                    <button className='button-grad blue'>Blue button</button>
                </div>

                <div className='star8 gold'>
                    <i className='fa fa-hand-o-up'></i>
                </div>

                <div className='star8 orange'>
                     <i className='fa fa-diamond'></i>
                </div>
                <div className='star8 blue'>
                    <i className='fa fa-flask'></i>
                </div>

                <section className='social'>
                    <h2>Say hello!</h2>

                    <div className='panel'>
                        <button className='twitter'><i className="fa fa-twitter"></i></button>
                        <button className='facebook'><i className="fa fa-facebook"></i></button>
                        <button className='google-plus'><i className="fa fa-google-plus"></i></button>
                        <button className='button instagram'><i className="fa fa-instagram"></i></button>
                        <button className='github'><i className="fa fa-github"></i></button>
                    </div>
                </section>

                <div className='grid_container'>
                    <h1>Super grid :)</h1>
                    <div className='grid_row'>
                        <div className='grid_col-5'>col 5</div>
                        <div className='grid_col-7'>col 7</div>
                    </div>
                    <div className='grid_row'>
                        <div className='grid_col-3'>col 3</div>
                        <div className='grid_col-9'>col9</div>
                    </div>
                    <div className='grid_row'>
                        <div className='grid_col-6 grid_col_offsetX-6'>col 6 offset 6</div>
                    </div>
                    <div className='grid_row footer'>
                        <div className='grid_col-12'>Stopka</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Temp;
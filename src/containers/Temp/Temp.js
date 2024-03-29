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

                    <section className='gallery rwd_container'>
                    <div className='rwd_row'>
                        <img src='/images/0.jpg' className='rwd_col-3 rwd_col_m-6' alt='cat1' />
                        <img src='/images/1.jpg' className='rwd_col-3 rwd_col_m-6' alt='cat2' />
                        <img src='/images/3.jpg' className='rwd_col-3 rwd_col_m-6' alt='cat3' />
                        <img src='/images/4.jpg' className='rwd_col-3 rwd_col_m-6' alt='cat4' />
                        <img src='/images/5.jpg' className='rwd_col-3 rwd_col_m-6' alt='cat4' />
                    </div>
                    </section>
                    
                </div>

                <div className='footer rwd_container'>
                    <div className='rwd_row'>
                        <p className='rwd_col-6 rwd_col_m-12'>Ale fajna stópka</p>
                        <div className='grid_container rwd_col-6 rwd_col_m-12'>
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
                    </div>
                <hr/>
                <h1>Sprawozdanie 2</h1>

                <div className='gradient-buttons rwd_container'>
                    <div className='rwd_row'>
                        <button className='button-grad purple rwd_col-4 rwd_col_m-12'>Purple button</button>
                        <button className='button-grad yellow rwd_col-4 rwd_col_m-12'>Yellow button</button>
                        <button className='button-grad blue rwd_col-4 rwd_col_m-12'>Blue button</button>
                    </div>
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

              
            </div>
        );
    }
}

export default Temp;
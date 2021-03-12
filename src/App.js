import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Posts from './containers/Posts/Posts';
import Friends from './containers/Friends/Friends';
import Profile from './containers/Profile/Profile';
import {Route} from 'react-router-dom';

class App extends React.Component
{
    render() {
        return(
            <BrowserRouter>
                <Layout> 
                    <Route path='/' exact component={Posts}/>
                    <Route path='/friends' exact component={Friends}/>
                    <Route path='/profile' exact component={Profile}/>
                </Layout>
            </BrowserRouter>
        );
    }
    
}

export default App;

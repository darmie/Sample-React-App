import React, {Component} from 'react';

import Logo  from '../logo.svg';
import '../App.css';

class Home extends Component {
    render(){
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={Logo} className="App-logo" alt="logo" />
                        <nav>
                        <ul>
                            <li><a href="#/home">About</a></li>
                            <li><a href="#/login">Login</a></li>
                            <li><a href="#/signup">SignUp</a></li>
                        </ul>
                        </nav>
                    </header>
                    <main>
                        <section>
                        <h1>A Simple React App</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.0
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <p>But we've got this new deploy nothing new to see here</p>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
};
export default Home;
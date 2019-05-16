import React from 'react';
import Logo  from '../logo.svg';
import '../App.css';
const login = (props) => (
	<div className="login">
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
				<h3>Here's our sample react app</h3>
				<p>fill the form below to Login</p>
				<form>
					<div className="form-group">
						<label>Email</label>
						<br />
						<input type="email" className="form-control" placeholder="Enter your email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<br />
						<input type="password" className="form-control" placeholder="Enter your email" />
					</div>
					<div className="form-group">
						<button type="button" className="btn">Login</button>
					</div>
					<div className="form-group">
						<p>Click here to login <a href='/signup'>signup</a></p>
					</div>
				</form>
			</section>
		</main>
	</div>
);
export default login;
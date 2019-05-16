import React from 'react';
import '../App.css';
import Logo  from '../logo.svg';

const signup = (props) => (
	<div className="signup">
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
				<p>fill the form below to Sign Up</p>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<br />
						<input type="text" className="form-control" placeholder="Enter your full name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<br />
						<input type="email" className="form-control" placeholder="Enter your email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<br />
						<input type="password" className="form-control" placeholder="Enter your Password" />
					</div>
					<div className="form-group">
						<label>Confirm Password</label>
						<br />
						<input type="password" className="form-control" placeholder="Enter your password again" />
					</div>
					<div className="form-group">
						<button type="button" className="btn">SignUp</button>
					</div>
					<div className="form-group">
						<p>Click here to login <a href='/login'>login</a></p>
					</div>
				</form>
			</section>
		</main>
	</div>
);
export default signup;
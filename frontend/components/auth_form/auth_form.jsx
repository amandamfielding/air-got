import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			name: "",
			about_me: ""
		};
		this.handleLogInSubmit = this.handleLogInSubmit.bind(this);
		this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleLogInSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.login(user);
	}

	handleSignUpSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.signup(user);
	}

	renderErrors() {
		return(
			<ul className="errors">
				{this.props.errors.map((error, i) => (
					<li  key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		if (this.props.formType == "login") {
		return (
			<div className="form-container">
				<div className="group">
					<button id="x" onClick={this.props.closeModal}>x</button>
				</div>
				<form onSubmit={this.handleLogInSubmit} className="form-box">
					<img id="logo" src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478035701/logo3_up1bhc.png"/>
					{this.renderErrors()}
					<div className="form">
						<label> <span>*</span> Username
							<br/>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								/>
						</label>
						<br/>
						<label> <span>*</span> Password
							<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								/>
						</label>
						<br/>
						<div className="button-box">
							<input id="login-button" type="submit" value="Submit" />
						</div>
					</div>
				</form>
			</div>
		);
	} else {
	    return (
	      <div className="form-container">
					<div className="group">
						<button id="x" onClick={this.props.closeModal}>x</button>
					</div>
	        <form onSubmit={this.handleSignUpSubmit} className="form-box">
						<img id="logo" src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478035701/logo3_up1bhc.png"/>
	          {this.renderErrors()}
	          <div className="form">
	            <label> <span>*</span> Username
								<br/>
	              <input type="text"
	                value={this.state.username}
	                onChange={this.update("username")}
	                />
	            </label>
	            <br/>
	            <label> <span>*</span> Password
								<br/>
	              <input type="password"
	                value={this.state.password}
	                onChange={this.update("password")}
	               	/>
	            </label>
	            <br/>
	            <label> <span>*</span> Name
								<br/>
	              <input type="text"
	                value={this.state.name}
	                onChange={this.update("name")}
	                />
	            </label>
	            <br/>
	            <label> About Me
								<br/>
	              <textarea
	                value={this.state.aboutMe}
	                onChange={this.update("about_me")}
									rows="4" cols="30"
	                />
	            </label>
							<br/>
							<div className="button-box">
	            	<input id="signup-button" type="submit" value="Submit" />
							</div>
	          </div>
	        </form>
	      </div>
			);
		}
	}
}

export default withRouter(AuthForm);

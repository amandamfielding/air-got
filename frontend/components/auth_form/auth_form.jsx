import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			name: "",
			about_me: "",
			allegiance_id:"",
			image_url:"https://res.cloudinary.com/dbsxgncvx/image/upload/c_fill,h_300,w_300/v1478741526/avatar_blank.jpg_1_yjymq5.png"
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
		if (this.props.formType === "login") {
		return (
			<div className="auth-form-container">
				<div className="group">
					<button id="close" onClick={this.props.closeModal}>close</button>
				</div>
				<form onSubmit={this.handleLogInSubmit} className="auth-form-box">
					<img id="logo" src="https://res.cloudinary.com/dbsxgncvx/image/upload/v1478035701/logo3_up1bhc.png"/>
					{this.renderErrors()}
					<div className="auth-form">
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
	      <div className="auth-form-container">
					<div className="group">
						<button id="close" onClick={this.props.closeModal}>close</button>
					</div>
	        <form onSubmit={this.handleSignUpSubmit} className="auth-form-box">
						<img id="logo" src="https://res.cloudinary.com/dbsxgncvx/image/upload/v1478035701/logo3_up1bhc.png"/>
	          {this.renderErrors()}
	          <div className="auth-form">
	            <label>
								<span>*</span>
	              <input
									placeholder="Username"
									type="text"
	                value={this.state.username}
	                onChange={this.update("username")}
	                />
	            </label>
	            <br/>
	            <label>
								<span>*</span>
	              <input
									placeholder="Password"
									type="password"
	                value={this.state.password}
	                onChange={this.update("password")}
	               	/>
	            </label>
	            <br/>
	            <label> <span>*</span>
	              <input
									placeholder="Name"
									type="text"
	                value={this.state.name}
	                onChange={this.update("name")}
	                />
	            </label>
	            <br/>
	            <label>
	              <textarea
									placeholder="About me"
									className="about-me"
	                value={this.state.aboutMe}
	                onChange={this.update("about_me")}
									rows="4" cols="30"
	                />
	            </label>
							<br/>
							<label>
								<select>
									onChange={this.update("allegiance_id")}
									<option value="" disabled selected>Select your Allegiance</option>
									<option value="1">Lannister</option>
									<option value="2">Stark</option>
									<option value="3">Targaryen</option>
									<option value="4">Baratheon</option>
									<option value="5">Tully</option>
									<option value="6">Tyrell</option>
									<option value="7">Tarly</option>
									<option value="8">Frey</option>
									<option value="9">Greyjoy</option>
									<option value="10">Arryn</option>
									<option value="11">Bolton</option>
									<option value="12">Martell</option>
								</select>
							</label>
							<br/>
							<label>
								<input
									className="sign-up-image-url"
									placeholder="Profile Pic (image url)"
									type="text"
									onChange={this.update("image_url")}
									/>
							</label>
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

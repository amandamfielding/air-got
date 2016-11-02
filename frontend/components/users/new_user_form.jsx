import React from 'react';
import { withRouter } from 'react-router';

class NewUserForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
      name: "",
      about_me: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <br/>
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <label> Username
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="signup-input" />
            </label>
            <br/>
            <label> Password
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input" />
            </label>
            <br/>
            <label> Name
              <input type="text"
                value={this.state.name}
                onChange={this.update("name")}
                className="signup-input" />
            </label>
            <br/>
            <label> About Me
              <textarea
                value={this.state.aboutMe}
                onChange={this.update("about_me")}
                className="signup-input" />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
  }


export default withRouter(NewUserForm);

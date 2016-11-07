import React from 'react';
import { Link, withRouter } from 'react-router';

class BookingEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id:this.props.booking.id,
			place_id: this.props.booking.place_id,
			check_in_date: "",
      check_out_date: "",
			number_of_guests: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const booking = this.state;
		this.props.updateBooking(booking);
	}

	renderErrors() {
		if (this.props.errors) {
			return(
				<ul className="errors">
					{this.props.errors.map((error, i) => (
						<li  key={`error-${i}`}>
							{error}
						</li>
					))}
				</ul>
			);
		} else {
			return (<div></div>);
		}
	}

	render() {
    return (
      <div className="form-container">
  			<div className="group">
  				<button id="x" onClick={this.props.closeModal}>x</button>
  			</div>
        <form onSubmit={this.handleSubmit} className="form-box">
  				<img id="logo" src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478035701/logo3_up1bhc.png"/>
          {this.renderErrors()}
          <div className="form">
            <label> <span>*</span> Check In
  						<br/>
              <input type="date"
                value={this.state.check_in_date}
                onChange={this.update("check_in_date")}
                />
            </label>
            <br/>
            <label> <span>*</span> Check Out
  						<br/>
              <input type="date"
                value={this.state.check_out_date}
                onChange={this.update("check_out_date")}
               	/>
            </label>
            <br/>
              <label className="num-guests"> <span>*</span>Guests
                <select
                  value={this.state.name}
                  onChange={this.update("name")}
                  className="booking-input">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
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

export default withRouter(BookingEditForm);

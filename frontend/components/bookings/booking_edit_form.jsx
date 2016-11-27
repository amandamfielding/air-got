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
		this.edited = false;
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
		if (this.props.errors.length !== 0) {

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
      <div className="booking-edit-form-container">
  			<div className="group">
  				<button id="close" onClick={this.props.closeModal}>close</button>
  			</div>
        <form onSubmit={this.handleSubmit} className="booking-edit-form-box">
  				<img id="logo" src="https://res.cloudinary.com/dbsxgncvx/image/upload/v1478035701/logo3_up1bhc.png"/>
          {this.renderErrors()}
          <div className="booking-edit-form">
            <label> <span>*</span> Check In
							<br/>
              <input type="date"
                onChange={this.update("check_in_date")}
                />
            </label>
            <label> <span>*</span> Check Out
							<br/>
              <input type="date"
                onChange={this.update("check_out_date")}
               	/>
            </label>
              <label className="num-guests-edit"> <span>*</span>Guests
								<br/>
                <select
                  onChange={this.update("number_of_guests")}
                  className="booking-input">
									<option value="" disabled selected>Select guests</option>
									<option value="1">1</option>
                  <option value="2">2</option>
									<option value="3">3</option>
                  <option value="4">4</option>
									<option value="5">5</option>
                  <option value="6">6</option>
									<option value="7">7</option>
                  <option value="8">8</option>
									<option value="9">9</option>
                  <option value="10">10</option>
									<option value="11">11</option>
                  <option value="12">12</option>
									<option value="13">13</option>
                  <option value="14">14</option>
									<option value="15">15</option>
                  <option value="16">16</option>
									<option value="17">17</option>
                  <option value="18">18</option>
									<option value="19">19</option>
                  <option value="20">20</option>
									<option value="21">21</option>
                  <option value="22">22</option>
									<option value="23">23</option>
                  <option value="24">24</option>
									<option value="25">25</option>
                  <option value="26">26</option>
									<option value="27">27</option>
                  <option value="28">28</option>
									<option value="29">29</option>
                  <option value="30">30</option>
									<option value="31">31</option>
                  <option value="32">32</option>
									<option value="33">33</option>
                  <option value="34">34</option>
									<option value="35">35</option>
                  <option value="36">36</option>
									<option value="37">37</option>
                  <option value="38">38</option>
									<option value="39">39</option>
                  <option value="40">40</option>
                </select>
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

export default withRouter(BookingEditForm);

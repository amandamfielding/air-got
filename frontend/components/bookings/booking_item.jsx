import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import EditFormContainer from './edit_form_container';

const customStyles = {
  content : {
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class BookingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

 closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length === 0) {
      this.closeModal();
    }
  }

  render() {
    const {user, place_id, place_title, place_main_image, check_in_date, check_out_date, host_image_url, region_name, stars} = this.props.booking;
    if (this.props.booking) {
      return (
        <ul className="booking">
          <img className="place-main-image" src={place_main_image} />
          <img className="host-image-url" src={host_image_url}/>
          <div className="booking-details">
            <li><h2>{region_name}</h2></li>
            <li><h3>{place_title}</h3></li>
            <li className="booking-rating"><span>{"♛".repeat(stars)}</span></li>
            <li className="booking-link">
              <Link to={`places/${place_id}`}>Listing Info</Link>
            </li>
            <br/>
          </div>
          <button className="booking-edit-button" onClick={() => this.openModal()}>Edit Booking</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              style={customStyles}>
              <div>
                <EditFormContainer
                  key={this.props.booking.id}
                  booking={this.props.booking}
                  closeModal={this.closeModal}/>
              </div>
            </Modal>
          <button className="booking-delete-button" onClick={() => this.props.deleteBooking(this.props.booking.id)}>Cancel Booking</button>
          </ul>
        );
    } else {
      return (<div></div>);
    }
  }
}

export default withRouter(BookingItem);

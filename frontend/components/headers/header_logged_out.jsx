import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import AuthFormContainer from '../auth_form/auth_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class HeaderLoggedOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, formType: "login" };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(formType) {
    this.setState({modalIsOpen: true, formType: formType });
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

 closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="header-box">
        <div className="nav-buttons">
          <ul>
            <button
              onClick={() => this.openModal("signup")}>Sign Up</button>
            <button
              onClick={() => this.openModal("login")}>Log In</button>
            <button>Demo</button>
          </ul>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}>
          <div>
            <AuthFormContainer formType={this.state.formType} closeModal={this.closeModal}/>
          </div>
      </Modal>
    </div>
  );
  }
}

export default HeaderLoggedOut;

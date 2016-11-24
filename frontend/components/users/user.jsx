import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestUser(this.props.userId);
  }

  hasAllegiance() {
    return (
      <img className="profile-flag" src={this.props.user.flag_image_url} />
    );
  }

  noAllegiance() {
    return (<div></div>);
  }

  showLink() {
    return (
      <Link to={`/places/${this.props.user.places[0].id}`}>Check out my listing!</Link>
    );
  }

  noLink() {
    return (<div></div>);
  }

  render() {
    const { username, name, image_url, about_me, allegiance_id, places } = this.props.user;

    if (this.props.user) {
      let show_allegiance;
      let show_places;
      if (allegiance_id) {
        show_allegiance = this.hasAllegiance();
      } else {
        show_allegiance = this.noAllegiance();
      }
      if (places === [] || places === undefined || places === {}) {
        show_places = this.noLink();
      } else {
        show_places = this.showLink();
      }
    return (
      <div className="user-profile">
        <div className="top-details">
        <div className="user-main-details">
          <img src={image_url} className="profile-pic"/>
          <div className="profile-username">{username}</div>
        </div>
        <div className="greeting-and-about">
          <span className="profile-greeting">Hey, I'm {name}!</span>
          <div className="about-me">{about_me}</div>
        </div>
        </div>
        <div className="bottom-details">
          {show_places}
          {show_allegiance}
        </div>
      </div>
    );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default User;

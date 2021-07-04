import React, {Component} from 'react';

class ProfilesList extends Component {
    render() {
      return(
        <ol className='profiles-list'>
        {this.props.profiles.map((profile) => (
          <li key={profile.id} className='profiles-list-items' >
          <div className='profile-info'>
            <p>{}</p>
            <p>{}</p>
          </div>
          </li> ))
        }
        </ol>
      )
    }
}

export default ProfilesList ;
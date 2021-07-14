import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsersAC } from '../../Redux/usersReducer';
import { User } from './User';

class Users extends Component {
  
  componentDidMount() {
    if (this.props.users.length === 0) { 

      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => 
          // console.log(data),
          this.props.setUsers(data)
        );

    }
  }

  render() {
    return (
      <>
        {
          this.props.users.map( user => 
              <User
                key={user.id}
                name={user.name}
                username={user.username}
                phone={user.phone}
                email={user.email}
                company={user.company}
                address={user.address}
                website={user.website}
              />
          )
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: users => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
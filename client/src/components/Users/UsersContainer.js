import { List } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { followUserAC, setUsersAC, unfollowUserAC } from '../../Redux/usersReducer';
import { User } from './User';

class Users extends Component {
  // constructor(props) {
  //   super(props);
  //   this.subscribeToUser = this.subscribeToUser.bind(this);
  //   this.unsubscribeToUser = this.unsubscribeToUser.bind(this)
  // }
  
  componentDidMount() {
    if (this.props.users.length === 0) { 

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => 
          // console.log(response.data.items),
          this.props.setUsers(response.data.items)
        );
      // this.props.setUsers([
      //   {
      //     name: "Wenom",
      //     id: 18314,
      //     uniqueUrlName: null,
      //     photos: {
      //     small: null,
      //     large: null
      //     },
      //     status: null,
      //     followed: false
      //   },
      //   {
      //     name: "romanxeo",
      //     id: 18313,
      //     uniqueUrlName: null,
      //     photos: {
      //     small: null,
      //     large: null
      //     },
      //     status: null,
      //     followed: false
      //   },
      //   {
      //     name: "rescuer-net",
      //     id: 18312,
      //     uniqueUrlName: null,
      //     photos: {
      //     small: null,
      //     large: null
      //     },
      //     status: null,
      //     followed: false
      //   },
      //   {
      //     name: "Farhod",
      //     id: 18311,
      //     uniqueUrlName: null,
      //     photos: {
      //     small: null,
      //     large: null
      //     },
      //     status: null,
      //     followed: false
      //   },
      //   {
      //     name: "faceless49",
      //     id: 18310,
      //     uniqueUrlName: null,
      //     photos: {
      //     small: null,
      //     large: null
      //     },
      //     status: null,
      //     followed: true
      //   }
      // ])
    }
  };

  subscribeToUser = userId => {
    this.props.followUser(userId)
    console.log(userId);
    
  }

  unsubscribeToUser = userId => {
    this.props.unfollowUser(userId)
    console.log(userId);
  }

  render() {
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
    let pages = [];
    for (let i = 1; i<=pagesCount; i++) {
      pages.push(i);
    }
    return (
      <List>
        {
          this.props.users.map( user => 
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                status={user.status}
                photos={user.photos}
                uniqueUrlName={user.uniqueUrlName}
                followed={user.followed}
                subscribeToUser={this.subscribeToUser}
                unsubscribeToUser={this.unsubscribeToUser}
              />
          )
        }
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
    followUser: userId => {
      dispatch(followUserAC(userId))
    },
    unfollowUser: userId => {
      dispatch(unfollowUserAC(userId))
    },
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
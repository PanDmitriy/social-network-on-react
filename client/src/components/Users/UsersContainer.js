import React, { Component } from 'react';
import s from './User.module.css'
import { connect } from 'react-redux';
import { 
  followUserAC, 
  setTotalUsersCountsAC, 
  setUsersAC, 
  toSwitchUsersPageAC, 
  unfollowUserAC 
} from '../../Redux/usersReducer';
import { User } from './User';
import { List } from '@material-ui/core';
import axios from 'axios';
import { StepperPagesSwitch } from '../utils/StepperPagesSwitch';
import StyledPagination from '../utils/StyledPagination';
class Users extends Component {
  // constructor(props) {
  //   super(props);
  //   this.subscribeToUser = this.subscribeToUser.bind(this);
  //   this.unsubscribeToUser = this.unsubscribeToUser.bind(this)
  // }
  
  componentDidMount() {
    if (this.props.users.length === 0) { 
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.pageCounter}`)
        .then((response) => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCounts(response.data.totalCount)
        });
    }
  };

  subscribeToUser = userId => {
    this.props.followUser(userId)
    
  }

  unsubscribeToUser = userId => {
    this.props.unfollowUser(userId)
  }

  onPageChanged = numberPage => {
    this.props.toSwitchUsersPage(numberPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${numberPage}`)
    .then((response) => 
      this.props.setUsers(response.data.items)
    );
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i<=pagesCount; i++) {
      pages.push(i);
    }
    console.log('PROPS', this.props);
    console.log('pages',  pages);
    console.log('pagesCount', pagesCount);
    return (
      <List>
        <StepperPagesSwitch
          stepsMax={pages.length}
          activeStep={this.props.pageCounter-1}
          clickNext={()=> this.onPageChanged(this.props.pageCounter + 1)}
          clickBack={()=> this.onPageChanged(this.props.pageCounter - 1)}
          disabledNextButton={this.props.pageCounter === pages.length}
          disabledBackButton={this.props.pageCounter === 1}
        />
        {/* <div className={s.stepperPanel}>
          {pages.map((n) => {
            return (
              <span 
                className={
                  this.props.pageCounter === n ? s.selected : s.itemCountPage
                }
                onClick={() => this.onPageChanged(n)}
              >
                {n}
              </span>
            )
          })}
        </div> */}
        
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
          <StyledPagination
            count={pages.length}
            showFirstButton 
            showLastButton
            page={this.props.pageCounter}
            defaultPage={this.props.pageCounter}
            onChange={ (e, p) => this.onPageChanged(p)}
          />
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageCounter: state.usersPage.pageCounter,

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
    toSwitchUsersPage: number => {
      dispatch(toSwitchUsersPageAC(number))
    },
    setTotalUsersCounts: number => {
      dispatch(setTotalUsersCountsAC(number))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
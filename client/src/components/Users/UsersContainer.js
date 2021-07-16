import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  followUser, 
  isLoadingFalse, 
  isLoadingTrue, 
  setTotalUsersCounts, 
  setUsers, 
  toSwitchUsersPage, 
  unfollowUser 
} from '../../Redux/usersReducer';
import axios from 'axios';
import { LinearProgress } from '@material-ui/core';
import { StepperPagesSwitch } from '../utils/StepperPagesSwitch';
import StyledPagination from '../utils/StyledPagination';
import { Users } from './Users';
import s from './User.module.css'


class UsersWrapperComponent extends Component {
  constructor(props) {
    super(props);
    // this.props.users = this.props.users.bind(this);
    this.subscribeToUser = this.subscribeToUser.bind(this);
    this.unsubscribeToUser = this.unsubscribeToUser.bind(this);
  }
  
  componentDidMount() {
    if (this.props.users.length === 0) { 
      this.props.isLoadingTrue()
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.pageCounter}`)
        .then((response) => {
          try {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCounts(response.data.totalCount)
            this.props.isLoadingFalse()
          } catch(e) {
            console.log(e);
          }
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
    this.props.isLoadingTrue()
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${numberPage}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
      this.props.isLoadingFalse()
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i<=pagesCount; i++) {
      pages.push(i);
    }
    return (
      <>
        { 
          this.props.isLoading 
            ? <LinearProgress />
            : <>
                <StepperPagesSwitch
                  stepsMax={pages.length}
                  activeStep={this.props.pageCounter-1}
                  clickNext={()=> this.onPageChanged(this.props.pageCounter + 1)}
                  clickBack={()=> this.onPageChanged(this.props.pageCounter - 1)}
                  disabledNextButton={this.props.pageCounter === pages.length}
                  disabledBackButton={this.props.pageCounter === 1}
                />
                  <Users
                    users={this.props.users}
                    subscribeToUser={this.subscribeToUser}
                    unsubscribeToUser={this.unsubscribeToUser}
                  />
                <StyledPagination
                  count={pages.length}
                  showFirstButton 
                  showLastButton
                  page={this.props.pageCounter}
                  defaultPage={this.props.pageCounter}
                  onChange={ (e, p) => this.onPageChanged(p)}
                />
              </>
        }
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
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageCounter: state.usersPage.pageCounter,
    isLoading: state.usersPage.isLoading,

  }
}

export const UsersContainer = connect(mapStateToProps, {
  setUsers,
  followUser,
  unfollowUser,
  toSwitchUsersPage,
  setTotalUsersCounts,
  isLoadingTrue,
  isLoadingFalse,
})(UsersWrapperComponent);
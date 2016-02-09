import React from 'react';

class FriendEntry extends React.Component {
  constructor(){
    super();
    this.displayButton = this.displayButton.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.selectDiner = this.selectDiner.bind(this);
    // this.displayProfilePic = this.displayProfilePic.bind(this);
  }

  displayButton(){
    if(this.props.displayFriendsChoice){
      return(
        <button
          className='badge'
          onClick={this.selectDiner}>
          <span className='glyphicon glyphicon-plus'>
          Dine with
          </span>
        </button>
      )
    } else {
      return(
        <button
          className='badge'
          onClick={this.removeFriend}>
          <span className='glyphicon glyphicon-minus'>
          Remove
          </span>
        </button>
      )
    }
  }

  removeFriend(){
    const { username, friendName, removeFriend } = this.props;
    const removeFriendInfo = {
      username: username,
      friendname: friendName
    }

    removeFriend(removeFriendInfo);
  }

  selectDiner(){
    const { friendName, addToDiners } = this.props;

    addToDiners(friendName);
  }

  displayProfilePic(){
    // if(){//image exists in avatar folder
      const { friendName } = this.props;
      var picPath = "http://localhost:5679/static/assets/avatar/" + friendName;
      var errorPicPath = "./../static/assets/avatar/default_pea.png";
      var errorPath = function(img) {
        console.log('this: ', img);
        return (
            <img src={errorPicPath} />
          )
      }
      // return(
      //   <img src={picPath} onError="this.onError=null;this.src='./../static/assets/avatar/default_pea.png';" />
      // )
      return(
        <img src={picPath} />
      )
    // } else { //want to display default pic here
    //   return(
    //     <button
    //       className='badge'
    //       onClick={this.removeFriend}>
    //       <span className='glyphicon glyphicon-minus'>
    //       Remove
    //       </span>
    //     </button>
    //   )
    // }
  }

  render(){
    return(
      <li className='list-group-item'>
        {this.displayButton()}
        <span className='badge'>
          {Object.keys(this.props.categories).length} Categories
        </span>
        <p>{this.props.friendName}</p>
        {this.displayProfilePic()}
      </li>
    )
  }
}

export default FriendEntry;

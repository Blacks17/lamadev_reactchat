import React from "react";

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='profile'
        />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='profile'
        />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='profile'
        />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;

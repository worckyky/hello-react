import React from 'react';

const Profile = () => {
  return (
    <div className={'content'}>
      <img className="content__bg" src="https://clck.ru/MqoWL" alt="" />
      <div className="content__description">
        <img src="https://clck.ru/Mr77z" alt="" />
        <div className={'content__description-text'}>
          <h2>Dmitry K</h2>
          <p>Date of Birth: 2 january</p>
          <p>City: Minsk</p>
          <p>Education: BSU'11</p>
          <p>Web Site: https://it-kamasutra.com</p>
        </div>
      </div>
      <div className={'content__chat'}>
        <h2>My posts</h2>
        <textarea name="" id="" cols="30" rows="10" placeholder={'Set your data'}></textarea>
        <button>Send</button>
      </div>
      <div className={'content__comment'}>
        <div className="content__comment-block">
          <div className={'content__comment-img'}></div>
          <div className={'content__comment-text'}>Hey, why nobody love me?</div>
        </div>
        <div className="content__comment-block">
          <div className={'content__comment-img'}></div>
          <div className={'content__comment-text'}>Hey, why nobody love me?</div>
        </div>
        <div className="content__comment-block">
          <div className={'content__comment-img'}></div>
          <div className={'content__comment-text'}>Hey, why nobody love me?</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

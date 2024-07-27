import React from 'react';
import { FaRegComment } from 'react-icons/fa'; // وارد کردن آیکون چت از react-icons
import './index.scss';

const LetsLaunch = () => {
  return (
    <div className="lets_launch launch_bg_1 overlay2">
      <div className="launch_text text-center">
        <h3>Let’s Launch your Website Now</h3>
        <p>
          Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving.
          <br />
          Moving in fourth air night bring upon you’re it beast.
        </p>
        <div className="chat">
          <a className="boxed_btn_green" href="#">
            <FaRegComment className='flaticon' />
            <span>Live Chat</span>
          </a>
          <a className="boxed_btn_green2" href="#">
            <span>get start now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetsLaunch;

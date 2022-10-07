import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a className="app__social-twitter" rel="noopener noreferrer" href="https://twitter.com/rajprabhuwork" target="_blank">
          <BsTwitter />
      </a>
      </div>
      <div>
        <a className="app__social-facebook" rel="noopener noreferrer" href="https://www.facebook.com/Rajprabhu147" target="_blank">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a className="app__social-linkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/raj-prabhu-rajasekaran-727193165/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
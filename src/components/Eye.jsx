import React , {useState} from 'react'

import showPwdImg from '../assets/showPwdImg.svg';
import hidePwdImg from '../assets/hidePwdImg.svg';

const Eye = ({inputRef}) => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (

    <img
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
      />
      
  )
}

export default Eye

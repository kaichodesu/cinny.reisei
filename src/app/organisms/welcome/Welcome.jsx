import React from 'react';
import './Welcome.scss';

import Text from '../../atoms/text/Text';


import AkariWelcome from '../../../../public/res/svg/akariloaded.png'

function Welcome() {
  return (
    <div className="app-welcome flex--center">
      <div>
        <img className="app-welcome__logo noselect" src={AkariWelcome}/>
      </div>
    </div>
  );
}

export default Welcome;

/*
<Text className="app-welcome__heading" variant="h1" weight="medium" primary>reisei.moe</Text>
        <Text className="app-welcome__subheading" variant="s1">based on cinny</Text>
*/

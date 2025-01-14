import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
        <Featurebox image={fimage1} title="WeightLifting" description="Build strength and endurance through targeted weightlifting routines designed for all levels."/>
        <Featurebox image={fimage2} title="Specific Muscle" description="Focus on specific muscle groups to enhance tone, strength, and definition."/>
        <Featurebox image={fimage3} title="Flex Your Muscle" description="Improve flexibility and muscle control through targeted flexing and stretching exercises."/>
        <Featurebox image={fimage4} title="Cardio Exercise" description="Boost your cardiovascular health and stamina with intense cardio workouts."/>
      </div>
    </div>
  );
}

export default Feature;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Icon from './components/icon';
import IconGrid from './components/iconGrid';
import DetailsBox from './components/detailsBox';
import IntroText from './components/introText';

import { FoundDescription, SynFootDescription, FindDescription } from './components/descriptions/phd';
import { TryaDescription, UMWDescription, BlenderSynthDescription, WLDODescription } from './components/descriptions/work';
import { PersonalDescription, RowingDescription, DodoDescription } from './components/descriptions/personal';

import './App.css'; // General App-wide styles

  // Single array of icons, each with a tag property
  const icons = [
    {id: 0, name: "About Me", imgSrc: "assets/sidebar/headshot-2 icon.jpg", description: <PersonalDescription/>, tag: "Personal"},
    // PhD icons
    { id: 1, name: "FOUND", imgSrc: "assets/research/FOUND_x.png", description: <FoundDescription/>, link: "https://ollieboyne.com/FOUND", tag: "PhD" },
    { id: 2, name: "SynFoot", imgSrc: "assets/research/SynFoot_x.png", description: <SynFootDescription />, link: "https://ollieboyne.com/synfoot", tag: "PhD" },
    { id: 3, name: "FIND", imgSrc: "assets/research/FIND_x.png", description: <FindDescription />, link: "https://ollieboyne.com/FIND", tag: "PhD" },
    // Other Work icons
    { id: 4, name: "Trya", imgSrc: "assets/work/snapfeet.png", description: <TryaDescription/>, link: "https://snapfeet.io/", tag: "Work" },
    { id: 5, name: "UnderMyWing", imgSrc: "assets/work/umw.png", description: <UMWDescription/>, link: "https://umw-learning.com", tag: "Work" },
    { id: 6, name: "BlenderSynth", imgSrc: "assets/work/bsyn.png", description: <BlenderSynthDescription/>, link: "https://ollieboyne.com/BlenderSynth", tag: "Work" },
    { id: 7, name: "WLDO", imgSrc: "assets/work/wldo_1.png", description: <WLDODescription/>, link: "https://ollieboyne.com/wldo", tag: "Work" },
    // Personal icons
    { id: 8, name: "Rowing", imgSrc: "assets/personal/br.jpg", description: <RowingDescription/>, tag: "Personal" },
    { id: 9, name: "Dodo", imgSrc: "assets/personal/dodo.png", description: <DodoDescription/>, tag: "Personal" },
  ];

const App = () => {
  const [currentIcon, setCurrentIcon] = useState(icons[0]);
  
  return (
    <div className="app">
        <Helmet>
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KYBYGNS3XF"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KYBYGNS3XF');
            `}
          </script>
        </Helmet>

      <div className="content">
        <IntroText />
        <IconGrid>
          {icons.map(icon => (
            <Icon
              key={icon.id}
              text={icon.name}
              imgSrc={icon.imgSrc}
              onClick={() => setCurrentIcon(icon)}
              isActive={currentIcon && icon.id === currentIcon.id}
              // Add tag as a prop if you want to pass it to Icon component
            />
          ))}
        </IconGrid>
        <DetailsBox icons={icons} currentIcon={currentIcon} />
      </div>
    </div>
  );
};

export default App;

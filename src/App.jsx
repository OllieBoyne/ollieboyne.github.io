// App.js
import React, { useState } from 'react';

import Icon from './components/icon';
import IconGrid from './components/iconGrid';
import DetailsBox from './components/detailsBox';
import SideBar from './components/sidebar';

import {FoundDescription, SynFootDescription, FindDescription} from './components/descriptions/phd';
import {UMWDescription, BlenderSynthDescription, WLDODescription} from './components/descriptions/work';
import {RowingDescription, DodoDescription} from './components/descriptions/personal';

import './App.css'; // General App-wide styles
import IntroText from './introText';

const App = () => {
  const [currentIcon, setCurrentIcon] = useState(null);

  // Array of categories, each with a title and a data array
  const categories = [
    {
      title: "PhD",
      data: [
        { id: 1, name: "FOUND", imgSrc: "assets/research/FOUND.png", description: <FoundDescription/>, link:"https://ollieboyne.com/FOUND"},
        { id: 2, name: "SynFoot", imgSrc: "assets/research/SynFoot.png", description: <SynFootDescription />, link:"https://ollieboyne.com/synfoot" },
        { id: 3, name: "FIND", imgSrc: "assets/research/FIND.png", description: <FindDescription />, link:"https://ollieboyne.com/FIND" },
      ],
    },
    {
      title: "Other Work",
      data: [
        { id: 1, name: "UnderMyWing", imgSrc: "assets/work/umw.png", description: <UMWDescription/>, link:"https://umw-learning.com" },
        { id: 2, name: "BlenderSynth", imgSrc: "assets/work/bsyn.png", description: <BlenderSynthDescription/>, link:"https://ollieboyne.com/BlenderSynth" },
        { id: 3, name: "WLDO", imgSrc: "assets/work/bsyn.png", description: <WLDODescription/>, link:"https://ollieboyne.com/wldo" },
      ]
    },
    {
      title: "Personal",
      data: [
        { id: 1, name: "Rowing", imgSrc: "assets/personal/br.jpg", description: <RowingDescription/> },
        { id: 2, name: "Dodo", imgSrc: "assets/personal/dodo.png", description: <DodoDescription/>, link:"https://ollieboyne.com/dodo" },
      ],
    },
  ];

  return (
    <div className="app">
      <SideBar />
      <div className="content">
        <IntroText />
        <div className="icon-grids-container">
          {categories.map((category, index) => (
            <IconGrid key={index} title={category.title}>
              {category.data.map(icon => (
                <Icon
                  key={icon.id}
                  text={icon.name}
                  imgSrc={icon.imgSrc}
                  onHover={() => setCurrentIcon(icon)}
                />
              ))}
            </IconGrid>
          ))}
        </div>
        <DetailsBox currentIcon={currentIcon} />
      </div>
    </div>
  );
};

export default App;

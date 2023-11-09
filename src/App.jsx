// App.js
import React, { useState } from 'react';

import Icon from './components/icon';
import IconGrid from './components/iconGrid';
import DetailsBox from './components/detailsBox';
import SideBar from './components/sidebar';

import './App.css'; // General App-wide styles

const App = () => {
  const [currentIcon, setCurrentIcon] = useState(null);

  // Array of categories, each with a title and a data array
  const categories = [
    {
      title: "PhD",
      data: [
        { id: 1, name: "FOUND", imgSrc: "assets/research/FOUND.png", description: "Surface normal detections", link:"https://ollieboyne.com/FOUND"},
        { id: 2, name: "SynFoot", imgSrc: "assets/research/SynFoot.png", description: "Synthetic dataset", link:"https://ollieboyne.com/synfoot" },
        { id: 3, name: "FIND", imgSrc: "assets/research/FIND.png", description: "Building a generative model", link:"https://ollieboyne.com/FIND" },
      ],
    },
    {
      title: "Other Work",
      data: [
        { id: 1, name: "UnderMyWing", imgSrc: "assets/work/umw.png", description: "Founding Engineer", link:"https://umw-learning.com" },
        { id: 2, name: "BlenderSynth", imgSrc: "assets/work/bsyn.png", description: "Synthetic rendering", link:"https://ollieboyne.com/BlenderSynth" },
      ]
    },
    {
      title: "Personal",
      data: [
        { id: 1, name: "Rowing", imgSrc: "assets/personal/br.jpg", description: "Rowing experience" },
        { id: 2, name: "Dodo", imgSrc: "assets/personal/dodo.png", description: "I have been producing a unique puzzle game, Dodo, with my brother. We've made it in Godot. Check out the demo in the link below!", link:"https://ollieboyne.com/dodo" },
      ],
    },
  ];

  return (
    <div className="app">
      <SideBar />
      <div className="content">
        <div>
          Hi! I'm Ollie, a PhD student in Computer Vision at the University of Cambridge. I work in 3D reconstruction from multiview images, with an interest in using synthetic data. Check out what I'm working on below!
        </div>
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

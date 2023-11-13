import React from 'react';

export const PersonalDescription = () => (
    <div>
        <p>I'm currently in my <b>3rd year of my PhD</b> studying Computer Vision at the <b>University of Cambridge.</b></p>
        <p style={{"margin-bottom": "40px"}}>I'm working currently on using high resolution 3D data and synthetic 2D renders to significantly improve foot reconstruction pipelines - for use in commercial footwear solutions.</p>
        <p>I did my undergraduate degree in <b>Mechanical Engineering at Cambridge</b>, graduating in 2020.</p>
        <p>Have a look through my projects above! I work mostly in <b>Python</b>, but have experience in many other languages, including <b>Swift</b> for mobile development. </p>
        <a href="/assets/cv/cv_23.pdf" download="OBoyne_CV.pdf">View my CV</a>
    </div>

);


export const RowingDescription = () => (
    <div>
        <p>I used to be a coxswain for Cambridge University Boat Club.</p>
        <p>I was <b>Men's President</b> of the club last year, in our clean sweep win over Oxford.</p>
        <p>I coxed <b>Goldie</b>, the men's reserve crew, between 2021 and 2023.</p>
        <img src="assets/personal/br23-celebration-full.jpg" alt="Boat Race win 2023"></img>
    </div>
);

export const DodoDescription = () => (
    <div>
        <p>My brother and I have been using <b>Godot</b> to make a unique puzzle game - Dodo</p>
        <p>Check out our demo below!</p>
        <iframe 
            title="Dodo demo" 
            className="embed-frame" 
            frameborder="0" 
            src="https://itch.io/embed/2320056" 
            width="552" 
            height="167"
            style={{ maxWidth: '70%', width: '100%' }} // Adding inline style
        >
            <a href="https://ollieboyne.itch.io/dodo-demo">Dodo [DEMO] by OllieBoyne</a>
        </iframe>
    </div>
);

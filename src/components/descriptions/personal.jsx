import React from 'react';

export const PersonalDescription = () => (
    <div>
        <p>I'm currently in my <b>4th year of my PhD</b> studying Computer Vision at the <b>University of Cambridge.</b>
        </p>
        <p>My PhD, supervised by <a href="http://mi.eng.cam.ac.uk/~cipolla/index.htm">Prof. Roberto Cipolla</a>, is
            in <b>accurate foot reconstruction from mobile phone multiview images.</b></p>
        <p style={{"margin-bottom": "40px"}}>I am currently focusing on how <b>synthetic data</b> can help solve this
            problem.</p>

        <p>I did my undergraduate degree in <b>Mechanical Engineering at Cambridge</b>, graduating in 2020.</p>
        <p>Have a look through my projects above! I work mostly in <b>Python</b>, but have experience in many other
            languages, including <b>Swift</b> for mobile development. </p>
        <a href="/assets/cv/cv_23.pdf" download="OBoyne_CV.pdf" className="link-box">View my CV</a>
    </div>

);


export const RowingDescription = () => (
    <div>
        <p>I am a coxswain for Cambridge University Boat Club.</p>
        <p>I was <b>Men's President</b> of the club in 2022-23, in our clean sweep win over Oxford.</p>
        <p>I coxed <b>Goldie</b>, the men's reserve crew, between 2021 and 2023.</p>
        <p>I'm currently training to race in the 170th Men's Boat Race in April 2025.</p>
        <img src="assets/personal/br23-celebration-full.jpg" alt="Boat Race win 2023"></img>
    </div>
);

export const DodoDescription = () => (
    <div>
        <p>My brother and I made a unique puzzle game - Dodo.</p>
        <p>We used the open source game engine, <b>Godot</b>.</p>
        <p>Check out our demo below, or our Steam page!</p>
        <iframe
            title="Dodo demo"
            className="embed-frame"
            frameborder="0"
            src="https://itch.io/embed/2320056"
            width="552"
            height="167"
            style={{width: '30%', height: "auto"}} // Adding inline style
        >
            <a href="https://ollieboyne.itch.io/dodo-demo">Dodo [DEMO] by OllieBoyne</a>
        </iframe>
        <p></p>
        <iframe
            title="Dodo Steam"
            src="https://store.steampowered.com/widget/2700250/"
            frameBorder="0"
            width="552"
            height="190"></iframe>
    </div>
);

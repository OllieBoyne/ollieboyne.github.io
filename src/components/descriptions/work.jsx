import React from 'react';
import './descriptions.css';

export const TryaDescription = () => (
    <div>
        <p>I am a technical consultant for Trya - my PhD sponsor.</p>
        <p>I provide computer vision expertise to Trya to develop their AR and foot reconstruction systems.</p>
        <img style={{width: "60%"}} src="assets/work/trya_splash.png" alt="Snapfeet"></img>
    </div>
);


export const BlenderSynthDescription = () => (
    <div>
        <p>BlenderSynth is a software package for <b>rendering synthetic datasets at scale</b>.</p>
        <p>It is released as a Python package, and provides advanced functionality within <a href="https://www.blender.org">Blender</a> for producing synthetic datasets.</p>
        <a href="https://ollieboyne.com/BlenderSynth/"><img src="assets/work/bsyn_splash_1.png" alt="BlenderSynth homepage"/></a>
    </div>
);

export const WLDODescription = () => (
    <div>
        <p className="cite-title">Who Left The Dogs Out? 3D Animal Reconstruction With Expectation Maximization In The Loop</p>
        <p className="cite-authors">Benjamin Biggs, Oliver Boyne, James Charles, Andrew Fitzgibbon, Roberto Cipolla - ECCV 2020</p>
        <p>This work produced an end-to-end method for reconstructing 3D dog models from images.</p>
        <p>We also released <b>StanfordExtra</b> as part of this, a large scale dataset of 2D dog annotations, which has over 1400 downloads.</p>
        
        <iframe title="WLDO Video" className="video-frame" width="560" height="315" src="https://www.youtube.com/embed/kf86CBLwgJM?si=rYiA-aybsUsKC1TX" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* https://github.com/benjiebob/StanfordExtra */}
    </div>
);

export const GoogleDescription = () => (
    <div>
        <p>I worked at Google as a Student Researcher in 2024.</p>
        <p>In the synthetic data team, I developed pipelines for large scale synthetic dataset generation for training
downstream tasks for AR and VR vision applications.</p>
        <p>I worked in <b>Blender</b> and <b>Python</b>.</p>
    </div>
);
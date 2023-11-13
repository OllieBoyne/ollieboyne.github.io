import React from 'react';
import './descriptions.css';

export const TryaDescription = () => (
    <div>
        <p>I am a technical consultant for Trya - my PhD sponsor.</p>
        <p>I provide computer vision expertise to Trya to develop their AR and foot reconstruction systems.</p>
        <img style={{width: "60%"}} src="assets/work/trya_splash.png" alt="Snapfeet"></img>
    </div>
);


export const UMWDescription = () => (
    <div>
        <p>I am a <b>Founding Engineer</b> at <b>UnderMyWing</b> - a teaching platform seeking to use <b>AI to revolutionize the classrom experience</b>.</p>
        <p>I am working on using <b>LLMs</b> and <b>Computer Vision</b> to provide a closed loop of automatic student assessment.</p>
        <p>This includes fully automatic <b>personalized questions</b> and <b>marking</b>.</p>
    </div>
);

export const BlenderSynthDescription = () => (
    <div>
        <p>BlenderSynth is a <b>synthetic rendering</b> Python package, for creating synthetic datasets at scale.</p>
        <img src="assets/work/bsyn_splash_1.png" alt="BlenderSynth homepage"/>
    </div>
);

export const WLDODescription = () => (
    <div>
        <p className="cite-title">Who Left The Dogs Out? 3D Animal Reconstruction With Expectation Maximization In The Loop</p>
        <p className="cite-authors">Benjamin Biggs, Oliver Boyne, James Charles, Andrew Fitzgibbon, Roberto Cipolla - ECCV 2020</p>
        <p>This work produced an end-to-end method for reconstructing 3D dog models from images.</p>
        <p>We also released <b>StanfordExtra</b> as part of this, a large scale dataset of 2D dog annotations, which has over 1100 downloads.</p>
        
        <iframe title="WLDO Video" className="video-frame" width="560" height="315" src="https://www.youtube.com/embed/kf86CBLwgJM?si=rYiA-aybsUsKC1TX" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* https://github.com/benjiebob/StanfordExtra */}
    </div>
);
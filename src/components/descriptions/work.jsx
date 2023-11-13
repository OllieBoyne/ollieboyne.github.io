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
        <p>I am a Founding Engineer at UnderMyWing - a teaching platform seeking to use AI to revolutionize the classrom experience.</p>
        <p>I am working on using AI and Computer Vision tools to automate the entire student assessment experience.</p>
        <p>My work includes automated question generation, OCR of handwritten work, and automated marking.</p>
    </div>
);

export const BlenderSynthDescription = () => (
    <div>
        <p>BlenderSynth is a <b>synthetic rendering</b> python package, for large scale dataset creation.</p>
        <img src="assets/work/bsyn_splash_1.png" alt="BlenderSynth homepage"/>
    </div>
);

export const WLDODescription = () => (
    <div>
        <p><i>Who Left The Dogs Out? 3D Animal Reconstruction With Expectation Maximization In The Loop</i></p>
        <p className="cite-end"><i>Benjamin Biggs, Oliver Boyne, James Charles, Andrew Fitzgibbon, Roberto Cipolla - ECCV 2020</i></p>
        <p>This research paper submitted in ECCV 2020 showed an end-to-end method for reconstructing 3D dog models from images.</p>
        <p>We also released <b>StanfordExtra</b> as part of this, a large scale dataset of 2D dog annotations, which has over 1100 downloads.</p>
        
        <iframe title="WLDO Video" className="video-frame" width="560" height="315" src="https://www.youtube.com/embed/kf86CBLwgJM?si=rYiA-aybsUsKC1TX" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* https://github.com/benjiebob/StanfordExtra */}
    </div>
);
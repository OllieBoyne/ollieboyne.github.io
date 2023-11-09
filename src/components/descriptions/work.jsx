import React from 'react';
import './descriptions.css';

export const UMWDescription = () => (
    <div>
        <p>I am a Founding Engineer at UnderMyWing - A teaching platform</p>
    </div>
);

export const BlenderSynthDescription = () => (
    <div>
        <p>BlenderSynth is a <b>synthetic rendering</b> python package, for large scale dataset creation.</p>
        <img src="assets/work/bsyn_splash_1.png"/>
    </div>
);

export const WLDODescription = () => (
    <div>
        <p>This research paper submitted in ECCV 2020 showed an end-to-end method for reconstructing 3D dog models from images.</p>
        <p>We also released <b>StanfordExtra</b> as part of this, a large scale dataset of 2D dog annotations, which has over 1100 downloads.</p>
        
        <iframe className="video-frame" width="560" height="315" src="https://www.youtube.com/embed/kf86CBLwgJM?si=rYiA-aybsUsKC1TX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* https://github.com/benjiebob/StanfordExtra */}
    </div>
);
import React from 'react';
import anime from 'animejs'

export default class Loading extends React.Component {
    componentDidMount() {
        anime.timeline({loop: true})
        .add({
          targets: '.ml2 .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70*i
        }).add({
          targets: '.ml2',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
    render() {
        return (
            <h1 className="ml2 text-4xl text-center text-blue-900 pt-32">
                <span className="letter">C</span>
                <span className="letter">a</span>
                <span className="letter">l</span>
                <span className="letter">c</span>
                <span className="letter">u</span>
                <span className="letter">l</span>
                <span className="letter">a</span>
                <span className="letter">t</span>
                <span className="letter">i</span>
                <span className="letter">n</span>
                <span className="letter">g</span>
                &nbsp;
                <span className="letter">M</span>
                <span className="letter">o</span>
                <span className="letter">v</span>
                <span className="letter">e</span>
                &nbsp;
                <span className="letter text-red-500">.</span>
                <span className="letter text-red-500">.</span>
                <span className="letter text-red-500">.</span>
            </h1>
        )
    }
}


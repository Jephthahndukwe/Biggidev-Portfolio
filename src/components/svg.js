import React from "react";


const Svg = () => {
    const circleSvg = document.querySelector('svg')

    let mouseX = 0
    let mouseY = 0

    // window.addEventListener('mousemove', (event) => {
    //     circleSvg.style.top = event.clientY - 45;
    //     circleSvg.style.left = event.clientX - 45;

    // })

    // const mouseMove = () => {
        
    //     circleSvg.style.top = mouseY
    //     circleSvg.style.left = mouseX
    // }

    return (
        <>

           <svg xlinkHref="http://www.w3.org/2000/svg" xmlLang='en'
            viewBox="0 0 500 500">
        <title>Circular Text Path</title>

        <defs>
            <path id="textcircle"
                d="M250,400
                    a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                transform="rotate(12,250,250)"/>
        </defs>
        <rect width="100%" height="100%" fill="none" />
        <text>
            <textPath xlinkHref="#textcircle"
                    aria-label="All for One &amp; One for All"
                    textLength="1000">Jephthah Ndukwe </textPath>
        </text>

    </svg>
        </>
    )
}



export default Svg
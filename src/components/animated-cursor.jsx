import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
    return (
        <AnimatedCursor 
         innerSize={15}
         outerSize={70}
         color= "5, 90, 130"
         outerAlpha={0.2}
         innerScale={0.7}
         outerScale={5}
         clickable={[
            'a',
            'input[type="text]',
            'input[type="email]',
            'input[type="number]',
            'input[type="submit]',
            'input[type="image]',
            'label[for]',
            'textarea',
            'button',
            'link',
            'text',
            'h1',
         ]}

         className="AnimCursor" />
    )
}

export default AnimCursor
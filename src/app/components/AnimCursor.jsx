import React from "react";
import AnimatedCursor from "react-animated-cursor";
import styles from './_Btn.module.scss'

function AnimCursor() {
  return (
    <div className={styles.animCursor}>
      <AnimatedCursor
        innerSize={10}
        outerSize={31}
        color="90, 75, 27"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={1.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}

export default AnimCursor;

import React from "react";

function AnimateLetters({ letterClass, strArray, idx }) {
  return (
    <span>
      {strArray.map((e, i) => {
        return (
          <span key={e + i} className={`${letterClass} _${i + idx}`}>
            {e}
          </span>
        );
      })}
    </span>
  );
}

export default AnimateLetters;

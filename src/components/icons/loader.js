import React, { useState, useEffect } from 'react';

const IconLoader = () => {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    // Show the letter after the animation completes (e.g., 2 seconds)
    const timer = setTimeout(() => setShowLetter(true), 2000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Loader Logo</title>
      <g>
        {showLetter && (
          <g id="P" transform="translate(11.000000, 5.000000)">
            <path
              d="M40.5,30 L28.5,30 L28.5,61 L33.5,61 L33.5,45.5 L40.5,45.5 C45,45.5 48,42.5 48,38 C48,33.5 45,30 40.5,30 Z M33.5,34.5 L40.5,34.5 C42.5,34.5 44,36 44,38 C44,40 42.5,41.5 40.5,41.5 L33.5,41.5 L33.5,34.5 Z"
              fill="currentColor"
            />
          </g>
        )}
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
        />
      </g>
    </svg>
  );
};

export default IconLoader;

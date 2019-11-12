import React from 'react';

const Spinner = () => {
  return (
    <div>
      <svg
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-ellipsis"
        style={{ background: 'none' }}
      >
        <circle cx="84" cy="50" r="0.918799" fill="#ffb900">
          <animate
            attributeName="r"
            values="10;0;0;0;0"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            values="84;84;84;84;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="80.8761" cy="50" r="10" fill="#fc636b">
          <animate
            attributeName="r"
            values="0;10;10;10;0"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="-0.8s"
          ></animate>
          <animate
            attributeName="cx"
            values="16;16;50;84;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="-0.8s"
          ></animate>
        </circle>
        <circle cx="46.8761" cy="50" r="10" fill="#1aafd0">
          <animate
            attributeName="r"
            values="0;10;10;10;0"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="-0.4s"
          ></animate>
          <animate
            attributeName="cx"
            values="16;16;50;84;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="-0.4s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="9.0812" fill="#3be8b0">
          <animate
            attributeName="r"
            values="0;10;10;10;0"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            values="16;16;50;84;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="0" fill="#ffb900">
          <animate
            attributeName="r"
            values="0;0;10;10;10"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            values="16;16;16;50;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1.6s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default Spinner;

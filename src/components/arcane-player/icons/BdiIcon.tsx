import React from 'react';

interface BdiIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const BdiIcon: React.FC<BdiIconProps> = ({ width = "60", height = "60", color = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`
            .cls-1 {
              fill: ${color};
            }
          `}
        </style>
      </defs>
      <rect
        className="cls-1"
        x="222.64"
        y="222.23"
        width="70.51"
        height="70.51"
        rx=".83"
        ry=".83"
        transform="translate(257.6 -106.94) rotate(45)"
      />
      <path
        className="cls-1"
        d="M497.89,261.96l-39.75,39.75c-2.36,2.36-6.19,2.36-8.55,0l-183.96-183.96c-5.09-5.09-13.34-5.09-18.42,0L63.25,301.71c-2.36,2.36-6.19,2.36-8.55,0l-39.75-39.75c-2.36-2.36-2.36-6.19,0-8.55L231.52,36.86c13.76-13.76,36.06-13.76,49.82,0l216.55,216.55c2.36,2.36,2.36,6.19,0,8.55Z"
      />
      <path
        className="cls-1"
        d="M352.95,311.46l-86.59,86.59c-4.58,4.58-12.02,4.58-16.6,0l-86.74-86.74c-2.42-2.42-6.35-2.42-8.77,0l-39.75,39.75c-2.42,2.42-2.42,6.35,0,8.77l117.97,117.97c14.04,14.04,36.81,14.04,50.85,0l117.98-117.98c2.42-2.42,2.42-6.35,0-8.77l-39.57-39.57c-2.42-2.42-6.35-2.42-8.77,0Z"
      />
    </svg>
  );
};

export default BdiIcon;

import * as React from 'react';
import { getStyle } from './Utils';

const style: React.CSSProperties = {
  stroke: 'none',
  fillRule: 'nonzero',
  fill: '#008000',
  fillOpacity: 1
};

interface AddButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ isDisabled, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="50pt"
    height="50pt"
    viewBox="0 0 50 50"
    version="1.1"
    style={getStyle(isDisabled)}
    onClick={isDisabled ? undefined : onClick}
  >
    <g id="surface1">
      <path
        style={style}
        d="M 25 0.78125 C 11.621094 0.78125 0.78125 11.621094 0.78125 25 C 0.78125 38.378906 11.621094 49.21875 25 49.21875 C 38.378906 49.21875 49.21875 38.378906 49.21875 25 C 49.21875 11.621094 38.378906 0.78125 25 0.78125 Z M 39.0625 27.734375 C 39.0625 28.378906 38.535156 28.90625 37.890625 28.90625 L 28.90625 28.90625 L 28.90625 37.890625 C 28.90625 38.535156 28.378906 39.0625 27.734375 39.0625 L 22.265625 39.0625 C 21.621094 39.0625 21.09375 38.535156 21.09375 37.890625 L 21.09375 28.90625 L 12.109375 28.90625 C 11.464844 28.90625 10.9375 28.378906 10.9375 27.734375 L 10.9375 22.265625 C 10.9375 21.621094 11.464844 21.09375 12.109375 21.09375 L 21.09375 21.09375 L 21.09375 12.109375 C 21.09375 11.464844 21.621094 10.9375 22.265625 10.9375 L 27.734375 10.9375 C 28.378906 10.9375 28.90625 11.464844 28.90625 12.109375 L 28.90625 21.09375 L 37.890625 21.09375 C 38.535156 21.09375 39.0625 21.621094 39.0625 22.265625 Z M 39.0625 27.734375 "
      />
    </g>
  </svg>
);

export default AddButton;

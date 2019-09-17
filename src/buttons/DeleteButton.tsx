import * as React from 'react';
import { getStyle } from './Utils';

const style: React.CSSProperties = {
  stroke: 'none',
  fillRule: 'nonzero',
  fill: '#f00000',
  fillOpacity: 1
};

interface DeleteButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ isDisabled, onClick }) => (
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
        d="M 25 0.78125 C 11.621094 0.78125 0.78125 11.621094 0.78125 25 C 0.78125 38.378906 11.621094 49.21875 25 49.21875 C 38.378906 49.21875 49.21875 38.378906 49.21875 25 C 49.21875 11.621094 38.378906 0.78125 25 0.78125 Z M 36.875 31.359375 C 37.335938 31.816406 37.335938 32.558594 36.875 33.015625 L 33.007812 36.875 C 32.546875 37.335938 31.804688 37.335938 31.347656 36.875 L 25 30.46875 L 18.640625 36.875 C 18.183594 37.335938 17.441406 37.335938 16.984375 36.875 L 13.125 33.007812 C 12.667969 32.546875 12.667969 31.804688 13.125 31.347656 L 19.53125 25 L 13.125 18.640625 C 12.667969 18.183594 12.667969 17.441406 13.125 16.984375 L 16.992188 13.117188 C 17.453125 12.65625 18.195312 12.65625 18.652344 13.117188 L 25 19.53125 L 31.359375 13.125 C 31.816406 12.667969 32.558594 12.667969 33.015625 13.125 L 36.886719 16.992188 C 37.34375 17.453125 37.34375 18.195312 36.886719 18.652344 L 30.46875 25 Z M 36.875 31.359375 "
      />
    </g>
  </svg>
);

export default DeleteButton;

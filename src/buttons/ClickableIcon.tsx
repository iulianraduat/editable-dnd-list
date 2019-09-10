import * as React from 'react';

const getStyle = (isDisabled: boolean): React.CSSProperties => ({
  width: '1.5em',
  height: '1.5em',
  paddingTop: 5,
  cursor: isDisabled ? 'default' : 'pointer',
  opacity: isDisabled ? 0.5 : 1
});

interface ClickableIconProps {
  icon: string;
  isDisabled: boolean;
  onClick: () => void;
}

const ClickableIcon: React.FC<ClickableIconProps> = ({ icon, isDisabled, onClick }) => (
  <img src={icon} onClick={isDisabled ? undefined : onClick} style={getStyle(isDisabled)} />
);

export default ClickableIcon;

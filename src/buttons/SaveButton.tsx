import * as React from 'react';
import ClickableIcon from './ClickableIcon';

const SaveIcon = require('../svg/SaveIcon.svg') as string;

interface SaveButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ isDisabled, onClick }) => (
  <ClickableIcon icon={SaveIcon} isDisabled={isDisabled} onClick={onClick} />
);

export default SaveButton;

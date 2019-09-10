import * as React from 'react';
import ClickableIcon from './ClickableIcon';

const AddIcon = require('../svg/AddIcon.svg') as string;

interface AddButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ isDisabled, onClick }) => (
  <ClickableIcon icon={AddIcon} isDisabled={isDisabled} onClick={onClick} />
);

export default AddButton;

import * as React from 'react';
import ClickableIcon from './ClickableIcon';

const DeleteIcon = require('../svg/DeleteIcon.svg') as string;

interface DeleteButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ isDisabled, onClick }) => (
  <ClickableIcon icon={DeleteIcon} isDisabled={isDisabled} onClick={onClick} />
);

export default DeleteButton;

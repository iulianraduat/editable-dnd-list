import * as React from 'react';
import { TextField } from '@material-ui/core';

interface TextInputProps {
  onChange: (text: string) => void;
  onEnter?: () => void;
  onEscape?: () => void;
  placeholder?: string;
  text?: string;
}

const TextInput: React.FC<TextInputProps> = ({ onChange, onEnter, onEscape, placeholder, text }) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const handleKeyUp = (ev: React.KeyboardEvent) => {
    switch (ev.key) {
      case 'Enter':
        ev.preventDefault();
        onEnter && onEnter();
        break;
      case 'Escape':
        ev.preventDefault();
        onEscape && onEscape();
        break;
    }
  };

  return (
    <TextField value={text} placeholder={placeholder} onChange={handleChange} onKeyUp={handleKeyUp} fullWidth={true} />
  );
};

export default TextInput;

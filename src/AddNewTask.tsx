import * as React from 'react';
import AddButton from './buttons/AddButton';
import AddNewTaskLayout from './AddNewTaskLayout';
import TextInput from './TextInput';
import { Task } from './EditableDndList';

interface AddNewTaskProps {
  onAdd: (newItem: Task) => void;
}

const AddNewTask: React.FC<AddNewTaskProps> = ({ onAdd }) => {
  const [text, setText] = React.useState<string>('');

  const handleChangeText = React.useCallback((newText: string) => setText(newText), [setText]);
  const handleEscape = React.useCallback(() => setText(''), [setText]);
  const handleAdd = React.useCallback(() => {
    setText('');
    onAdd({
      id: getNewId(),
      text
    });
  }, [onAdd, text]);

  return (
    <AddNewTaskLayout
      textInput={<TextInput text={text} placeholder="Press Enter to add, and Escape to drop changes" onChange={handleChangeText} onEnter={handleAdd} onEscape={handleEscape} />}
      addButton={<AddButton onClick={handleAdd} isDisabled={text.length === 0} />}
    />
  );
};

const getNewId = () => new Date().getTime().toString(36);

export default AddNewTask;

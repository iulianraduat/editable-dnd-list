import * as React from 'react';
import DeleteButton from './buttons/DeleteButton';
import EditableTaskLayout from './EditableTaskLayout';
import SaveButton from './buttons/SaveButton';
import TextInput from './TextInput';
import { Task } from './EditableDndList';

interface EditableTaskProps {
  item: Task;
  onChange: (newItem: Task) => void;
  onDelete: (newItem: Task) => void;
}

const EditableTask: React.FC<EditableTaskProps> = ({ item, onChange, onDelete }) => {
  const [text, setText] = React.useState<string>(item.text);

  const handleChangeText = React.useCallback((newText: string) => setText(newText), [setText]);
  const handleEscape = React.useCallback(() => setText(item.text), [item.text, setText]);
  const handleDelete = React.useCallback(() => onDelete(item), [item, onDelete]);
  const handleSave = React.useCallback(() => onChange({ ...item, text }), [item, onChange, text]);

  return (
    <EditableTaskLayout
      deleteButton={<DeleteButton onClick={handleDelete} isDisabled={false} />}
      saveButton={<SaveButton onClick={handleSave} isDisabled={text.length === 0 || text === item.text} />}
      textInput={<TextInput text={text} placeholder={item.text} onChange={handleChangeText} onEnter={handleSave} onEscape={handleEscape} />}
    />
  );
};

export default EditableTask;

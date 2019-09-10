import * as React from 'react';
import AddNewTask from './AddNewTask';
import EditableTask from './EditableTask';
import GenericDndList from 'generic-dnd-list';

export interface Task {
  id: string;
  text: string;
}

interface EditableDndListProps {
  items?: Task[];
  onChange: (items: Task[]) => void;
}

const EditableDndList: React.FC<EditableDndListProps> = ({ items: defaultItems, onChange }) => {
  const [items, setItems] = React.useState<(Task | undefined)[]>([undefined]);

  React.useEffect(() => {
    setItems([...getOnlyTasks(defaultItems ? defaultItems : []), undefined]);
  }, [defaultItems, setItems]);

  const handleChangeTask = (newItem: Task) => {
    const newItems = items.map((oldItem?: Task) => (oldItem && oldItem.id === newItem.id ? newItem : oldItem));
    setItems(newItems);
    onChange(getOnlyTasks(newItems));
  };

  const handleDeleteTask = (delItem: Task) => {
    const newItems = items.filter((oldItem?: Task) => oldItem === undefined || oldItem.id !== delItem.id);
    setItems(newItems);
    onChange(getOnlyTasks(newItems));
  };

  const handleAddNewTask = (newItem: Task) => {
    const newItems = [...getOnlyTasks(items), newItem, undefined];
    setItems(newItems);
    onChange(getOnlyTasks(newItems));
  };

  const handleReorder = (items: Task[]) => {
    const newItems = getOnlyTasks(items);
    setItems([...newItems, undefined]);
    onChange(newItems);
  };

  const getId = (item?: Task) => (item ? item.id : 'new');

  const renderItem = (item?: Task) =>
    item ? (
      <EditableTask item={item} onChange={handleChangeTask} onDelete={handleDeleteTask} />
    ) : (
      <AddNewTask onAdd={handleAddNewTask} />
    );

  return (
    <GenericDndList
      items={items}
      getId={getId}
      renderItem={renderItem}
      onReorder={handleReorder}
      getItemStyle={getItemStyle}
      getListStyle={getListStyle}
    />
  );
};

const getOnlyTasks = (items: (Task | undefined)[]): Task[] => items.filter(isNotUndefined) as Task[];

const isNotUndefined = (item?: Task) => item !== undefined;

const grid = 2;

const getItemStyle = (isDragging: boolean): React.CSSProperties => ({
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? '#ffff00' : 'transparent',
  color: isDragging ? '#cccccc' : '#000000'
});

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? '#cccc00' : 'transparent',
  padding: grid
});

export default EditableDndList;

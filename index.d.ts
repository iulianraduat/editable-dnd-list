import * as React from 'react';

export interface EditableDndListProps {
  items?: Task[];
  onChange: (items: Task[]) => void;
}

export interface Task {
  id: string;
  text: string;
}

declare class EditableDndList extends React.Component<EditableDndListProps> {}

declare module 'editable-dnd-list' {}

export default EditableDndList;

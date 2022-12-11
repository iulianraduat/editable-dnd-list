import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import EditableDndList, { Task } from '../src/EditableDndList';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '90vh',
    margin: 10,
    textAlign: 'center',
  },
  pre: {
    margin: 'auto',
    textAlign: 'left',
    width: 'fit-content',
  },
};

const items: Task[] = [
  {
    id: '1',
    text: 'Text 1',
  },
  {
    id: '2',
    text: 'Text 2',
  },
];

const handleChange = (id: string) => (items: Task[]) =>
  (document.getElementById(id)!.innerHTML = JSON.stringify(
    items,
    undefined,
    2
  ));

export default {
  title: 'EditableDndList',
  component: EditableDndList,
} as ComponentMeta<typeof EditableDndList>;

export const WithEmptyList: ComponentStory<typeof EditableDndList> = () => (
  <div style={styles.container}>
    <EditableDndList onChange={handleChange('l1')} />
    <div />
    Items in list: <pre id="l1" style={styles.pre} />
  </div>
);

export const WithNonEmptyList: ComponentStory<typeof EditableDndList> = () => (
  <div style={styles.container}>
    <EditableDndList items={items} onChange={handleChange('l2')} />
    <div />
    Items in list: <pre id="l2" style={styles.pre} />
  </div>
);

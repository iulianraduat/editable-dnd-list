import EditableDndList, { Task } from '../src/EditableDndList';
import React from 'react';
import { storiesOf } from '@storybook/react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '90vh',
    margin: 10,
    textAlign: 'center'
  },
  pre: {
    margin: 'auto',
    textAlign: 'left',
    width: 'fit-content'
  }
};

const items: Task[] = [
  {
    id: '1',
    text: 'Text 1'
  },
  {
    id: '2',
    text: 'Text 2'
  }
];

const handleChange = (id: string) => (items: Task[]) =>
  (document.getElementById(id).innerHTML = JSON.stringify(items, undefined, 2));

storiesOf('EditableDndList', module)
  .addParameters({ options: { showPanel: false } })
  .add('with empty list', () => (
    <div style={styles.container}>
      <EditableDndList onChange={handleChange('l1')} />
      <div />
      Items in list: <pre id="l1" style={styles.pre} />
    </div>
  ))
  .add('with non empty list', () => (
    <div style={styles.container}>
      <EditableDndList items={items} onChange={handleChange('l2')} />
      <div />
      Items in list: <pre id="l2" style={styles.pre} />
    </div>
  ));

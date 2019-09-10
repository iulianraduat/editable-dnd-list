import * as React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 40
  },
  addButton: {
    marginRight: 5
  },
  textInput: {
    flexGrow: 1
  }
};

interface AddNewTaskLayoutProps {
  addButton: JSX.Element;
  textInput: JSX.Element;
}

const AddNewTaskLayout: React.FC<AddNewTaskLayoutProps> = ({ addButton, textInput }) => (
  <div style={styles.container}>
    <div style={styles.addButton}>{addButton}</div>
    <div style={styles.textInput}>{textInput}</div>
  </div>
);

export default AddNewTaskLayout;

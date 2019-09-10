import * as React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  deleteButton: {
    marginRight: 5
  },
  saveButton: {
    marginLeft: 10
  },
  textInput: {
    flexGrow: 1
  }
};

interface EditableTaskLayoutProps {
  deleteButton: JSX.Element;
  saveButton: JSX.Element;
  textInput: JSX.Element;
}

const EditableTaskLayout: React.FC<EditableTaskLayoutProps> = ({ deleteButton, saveButton, textInput }) => (
  <div style={styles.container}>
    <div style={styles.deleteButton}>{deleteButton}</div>
    <div style={styles.textInput}>{textInput}</div>
    <div style={styles.saveButton}>{saveButton}</div>
  </div>
);

export default EditableTaskLayout;

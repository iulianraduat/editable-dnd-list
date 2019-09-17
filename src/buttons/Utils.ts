import * as React from 'react';

export const getStyle = (isDisabled: boolean): React.CSSProperties => ({
  width: '1.5em',
  height: '1.5em',
  paddingTop: 5,
  cursor: isDisabled ? 'default' : 'pointer',
  opacity: isDisabled ? 0.5 : 1
});

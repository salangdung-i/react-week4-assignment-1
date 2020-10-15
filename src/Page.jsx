import React from 'react';

import InputContainer from './InputContainer';
import ListContainer from './ListContainer';

export default function Page() {
  return (
    <div>
      <h1>To-do</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}

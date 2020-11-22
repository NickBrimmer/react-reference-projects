import React from 'react';

const MyForm = ({ text, changeFunction }) => (
  <form>
    <input type="text" value={text} onChange={changeFunction} />
    <button>Submit</button>
  </form>
);

export default MyForm;

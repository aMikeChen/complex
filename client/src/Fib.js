import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

async function fetchValues() {
  const values = await axios.get('/api/values/current');
  return values.data;
};

async function fetchIndexes() {
  const indexes = await axios.get('/api/values/all');
  return indexes.data;
};

export default () => {
  const [ seenIndexes, setSeenIndexes ] = useState([]);
  const [ values, setValues ] = useState({});
  const [ index, setIndex ] = useState('');

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    await axios.post('/api/values', { index });
    setIndex('');
  }, [index]);

  useEffect(() => {
    fetchValues().then((values) => { setValues(values); });
    fetchIndexes().then((indexes) => { setSeenIndexes(indexes); });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          value={index}
          onChange={event => { setIndex(event.target.value); }}
        />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {seenIndexes.map(({ number }) => number).join(', ')}

      <h3>Calculated Values:</h3>
      {Object.keys(values).map(key => (
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      ))}
    </div>
  );
};

import React, { useState } from 'react';
import { useEffect } from 'react';

const RouteForm = ({ getpark }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      getpark(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div>
      <br />
      <div>
        <label>
          What States Are You Visiting?
          <br />
          <br />
          <input type="text" placeholder="State Name" value={searchTerm} onChange={handleChange} onKeyUp={onKeyUp} />
        </label>
        <button
          type="submit"
          onClick={() => {
            getpark(searchTerm)
            setSearchTerm('');
          }}
        >
          Add To Trip!
        </button>
      </div>
    </div>
  );
};

export default RouteForm;

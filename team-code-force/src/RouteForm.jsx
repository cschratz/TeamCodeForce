import React from 'react';

const RouteForm = (props) => {

  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const [start, setStart] = React.useState('');
  const handleStart = event => {
    setStart(event.target.value);
  }

  return (
  <div style={{ 'marginBottom': '20px' }}>
    <div>
      <label>
        What States Are You Visiting?
        <input type="text" placeholder="State Name" value={searchTerm} onChange={handleChange}/>
      </label>
      <button onClick={() => props.getpark(searchTerm)}>Add To Trip!</button>
    </div>
    <div>
    <label>
        Where Are You Starting From?
        <input type="text" placeholder="Starting Point" value={start} onChange={handleStart}/>
      </label>
      <button onClick={() => console.log('I was Clicked')}>Get Route!</button>
    </div>
  </div>
  );
}


export default RouteForm;

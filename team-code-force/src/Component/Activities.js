import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Activities function component
function Activities() {

  // Declare new state variables
  const [parkActivities, setParkActivities] = useState([]);
  const [userActivities, setUserActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    alert("Submit received")
  }


  // Checkbox change handler
  const handleChange = (event) => {
    // Declare variables for current event checkbox
    const checked = event.target.checked;
    const activity = event.target.value;

    // Declare array variable for user selected activities
    const selected = [...userActivities];

    // Index of current activity in user selected array
    const index = selected.indexOf(activity)

    // If checked and activity is not in user selected array, add activity to array
    if (checked && index === -1) {
      selected.push(activity);
    } // Else if unchecked and activity is in user selected array, remove activity from array
    else if (!checked && index > -1) {
      selected.splice(index, 1);
    }

    // // SELECT BOX code:
    // // Declare variable for selected options
    // const selectedOptions = event.target.selectedOptions;
    // // Declare variable for favorites array
    // const favorites = Array.from(selectedOptions, (item) => item.value);

    // Update user activities state
    setUserActivities(selected);
  }


  // Park Activities 'ComponentDidUpdate'
  // useEffect is executed on every parkActivities update 
  useEffect(() => {
    // Confirm update of setParkActivities in useEffect
    console.log('Park Activities update', parkActivities);
  }, [parkActivities]);


  // User Activities 'ComponentDidUpdate'
  // useEffect is executed on every userActivities update 
  useEffect(() => {
    // Confirm update of setUserActivities in handleChange
    console.log('Favorites update', userActivities);
  }, [userActivities]);


  // Park Activities 'ComponentDidMount'
  // useEffect is executed on every component rendering/updating 
  // unless an empty array is passed as second argument 
  useEffect(async () => {
    setIsLoading(true);
    axios.get('https://developer.nps.gov/api/v1/activities?api_key=gwHKy0xMUoHYHE6MhzXkBbKYuPcejjLlkuMpJdK0')
      .then(res => { 
        const currentActivities = res.data.data;
        setParkActivities(currentActivities);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  // render Activities
  return (
    <div>
      {isLoading ? (
        <p>Loading . . . </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h5>Choose your favorite park activities:</h5>
          {parkActivities.map(({id, name}) => {
            return (
              <label>
                <input type="checkbox" key={id} value={name} onChange={handleChange}/>
                {name}
                <br />
              </label>
            )
          })}
          {/* SELECT BOX code: */}
          {/* <select multiple={true} size={10} onChange={handleChange}>
            {parkActivities.map(activity => {
              return (
                <option value={activity.name}>{activity.name}</option>
              )
            })}
          </select> */}
          <br />
          <input type="submit" value="Search/Save" />
        </form>
      )}
    </div>
  )
}


export default Activities
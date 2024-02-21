import React, { useEffect, useState } from 'react'

const Subcription = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCount(prev=>prev+1)


            return () => {
                clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
              };
        },1000)
    },[])
  return (
    <div>
        <h1>
            Count:{count}
        </h1>
    </div>
  )
}

export default Subcription;


// Here's a breakdown of what the code does:

// useState(0): This initializes a state variable named count with an initial value of 0, and a function setCount to update its value.

// useEffect: This hook allows performing side effects in function components. It takes two arguments: a function and an optional array of dependencies.

// The function passed to useEffect is executed after every render of the component.
// The second argument, the array, specifies the dependencies for the effect. If the array is empty, as it is in this case ([]), the effect runs only once after the initial render, similar to componentDidMount in class components.
// Inside the useEffect function:

// setInterval: This function repeatedly calls a provided function (() => { setCount(prevCount => prevCount + 1); }) at a specified interval (every 1000 milliseconds or 1 second in this case). This function increments the count state by 1 every second.

// clearInterval: This is a cleanup function that clears the interval when the component unmounts. It ensures that the interval doesn't keep running after the component is removed from the DOM, preventing memory leaks.

// The component returns a div containing a p element that displays the current value of the count state variable. The count is updated every second due to the interval set up in the useEffect hook.

// In summary, this component renders a h1 that displays a count which increments every second, starting from 0, and stops incrementing when the component unmounts.
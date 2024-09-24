import { useState } from 'react'
import '../styles/App.css'


function List(props) {
	console.log(props);
	return (
		<p>child</p>
	); 
}

function App() {
  const [count, setCount] = useState(0);
	
	function incrementCount() {
		setCount(count + 1);
		setCount((count)=> count + 1);
		console.log('clicked', count);
	}
	
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>i: {count}</p>
    </div>
  );
}

export default App

import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
 
 const counter= useSelector(state => state.counter);
 const show =useSelector(state => state.showCounter)
const dispatch =useDispatch();
//usedispatch help us to dispatch an action to the store here dispatch is an object with type arguement

const incHandler =()=> {
  dispatch({type:'increment'});
};
const increseHandler=()=>{
  dispatch({type:'increase',amount:10})
}
const decHandler =() => {
  dispatch({type:'decrement'});
};
const toggleCounterHandler = () => {
  dispatch({type:'toggle'})
};


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incHandler}>Increment</button>
      <button onClick={increseHandler}>Increse by 10</button>
      <button onClick={decHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';

const Counter = () => {
  const dispatch =useDispatch();
 const counter= useSelector((state) => state.counter.counter);
 const show =useSelector((state) => state.counter.showCounter)

//usedispatch help us to dispatch an action to the store here dispatch is an object with type arguement
// by using redux
// const incHandler =()=> {
//   dispatch({type:'increment'});
// };
// const increseHandler=()=>{
//   dispatch({type:'increase',amount:10})
// }
// const decHandler =() => {
//   dispatch({type:'decrement'});
// };
// const toggleCounterHandler = () => {
//   dispatch({type:'toggle'})
// };

const incHandler =()=> {
  dispatch(counterActions.increment());
};
const increseHandler=()=>{
  dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 } // here rtk automatically generate the type as unique identifier
}
const decHandler =() => {
  dispatch(counterActions.decrement());
};
const toggleCounterHandler = () => {
  dispatch(counterActions.toggleCounter())
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

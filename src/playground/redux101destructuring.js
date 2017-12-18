import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => {
  type: 'DECREMENT',
  decrementBy
}

const setCount = ({ setBy } = {}) => {
  type: 'SET',
  setBy
}

const setReset = ({ reset } = {}) => {
  type: 'RESET',
  reset
}

// reducers
// reducers are pure functions
// output only determined by input



const countReducer = (state = {count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    }
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
    }
    case 'SET':
    return {
      count: action.setBy
    }
    case 'RESET':
    return {
      count: 0
    }
    default:
    return state
  }
}
const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


// id like to increase the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setReset({reset: 0}))

store.dispatch(setCount({setBy: 101}))

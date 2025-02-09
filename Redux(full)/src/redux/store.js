import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})




// It's pretty simple when you think about it:

// Store - is what holds all the data your application uses.
// Reducer - is what manipulates that data when it receives an action.
// Action - is what tells reducer to manipulate the store data, it carries the name and (optionally) some data.


// Reducer is usually in the format of a switch statement that switches between all possible Actions (cases)
// and then manipulates the Store data based on the action. When reducer data changes within redux,
//  the properties in your components are changed and then the re-rendering occurs.


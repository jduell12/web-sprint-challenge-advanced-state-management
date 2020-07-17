1. What problem does the context API help solve?

In React data is passed from top component to the bottom component via props. If the application is large this can be cumbersome and involve prop drilling (props are carried along components to reach the component that needs it without the in between components using the props). Context API provides a way to share values between components without passing props through the components. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is a JS object that holds the state of the application as well as changes that can be made in the application.

Actions are pieces of information that contain an action type that is used by the reducer and the data from that particular action.

Reducers change the state of the application based on the action type and the payload it is given. 

The store is called the single source of truth because it's the only place that state in the application can change and the UI can be rendered based on the state of the application.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state of the entire application and can be reached by any component in the application.

Component state is the local state of the component and can be passed down through props to other components but can't be passed up.

Component state should be used when only a select few components need that particular state. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

The middleware, redux-thunk, allows us to change the action - reducer flow from being synchronous to asynchronous which allows us to make API calls (promises) in our actions.

For each action creator in the synchronous application is changed into three action creators. These three types represent the start, success and failure of the API call.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Context API. I enjoy this state management because I don't have to pass props to pass state to components. I also like how I don't need as many files as redux to keep track of state and where the data flow is going. 
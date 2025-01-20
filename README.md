# React Native AsyncStorage Error: Component Unmounted

This repository demonstrates a common yet subtle bug in React Native applications involving AsyncStorage and component unmounting. The bug occurs when an asynchronous operation using AsyncStorage is initiated within a component, and that component unmounts before the asynchronous operation completes.  This often results in warnings or errors related to accessing properties or functions of a component that's already been unmounted. The solution illustrates how to properly handle this using cleanup functions and asynchronous operation cancellation.

## Bug Description
The core problem is the asynchronous nature of AsyncStorage's methods (`getItem`, `setItem`, etc.). If a component initiates an AsyncStorage operation and then unmounts before the operation completes, the callback function provided to the AsyncStorage method may attempt to update the state of a component that no longer exists.  This can cause errors such as `Can't perform a React state update on an unmounted component`. 

## Solution
The provided solution introduces a cleanup function and uses a boolean flag to prevent state updates after the component unmounts. The cancellation of the operation before the component unmounts is also important to prevent potential memory leaks or other issues.
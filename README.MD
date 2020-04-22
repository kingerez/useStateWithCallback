# useStateWithCallback

I created this package to enable developers to use a functionality similar to what we used to have with the setState method.

### Important caviat
Because of the way React works, the callback being called exists on the **previous** instantiation of the component. So I've updated the callback function to also pass the updated state.

## Installation
npm i @kingerez/usestatewithcallback

-or-

yarn add @kingerez/usestatewithcallback

## Import

```javascript
import { useStateWithCallback } from '@kingerez/usestatewithcallback';
```

## Usage
```javascript
const [counter, setCounter] = useStateWithCallback(0);
setCounter(5, (newValue) => {
    console.log('Counter state updated. Current value:', newValue);
});

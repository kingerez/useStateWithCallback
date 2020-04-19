# useStateWithCallback

I created this package to enable developers to use a functionality similar to what we used to have with the setState method.

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
setCounter(5, () => {
    console.log('Counter state updated!');
});

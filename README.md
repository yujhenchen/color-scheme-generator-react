# color-scheme-generator-react


# Vertical align text in <p>?
flex items-center justify-center

# How to display check mark in the selected <option> in <select>?

# Vertical stretch flex item in flex direct row parent?
set self-stretch to the flex item

# Scale to increase the size of flex item without changing the layout of the parent?

# click copy to clipboard
navigator.clipboard.writeText(color);

# Show copy toast and hide after seconds
debounce

# debounce does not work?
Root cause:
> This is a caveat of function components. Local variables inside a function expires after every call. Every time the component is re-evaluated, the local variables gets initialized again.

Solution: 
https://rajeshnaroth.medium.com/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3



debounce function in helper.js:
```
export default function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
```

Before
```
  const hideToast = debounce(() => setShowToast(false), 2000);
```

After wrap the usage using useCallBack()
```
const hideToast = useCallback(
    debounce(() => setShowToast(false), 2000),
    []
  );
```


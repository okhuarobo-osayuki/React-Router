# AltSchool Challenge

This is a solution to the [AltSchool Africa](https://www.altschoolafrica.com/) challenge of building a React-Router app; implementing Error Boundary, and client-side Pagination with React.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Solution URL: [GitHub](https://github.com/okhuarobo-osayuki/React-Router)
- Live Site URL: [Live Site](https://react-router-vert.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Custom Hook
- react-router-dom
- react-error-boundary
- useReducer
- [React](https://reactjs.org/) - JS library

### What I learned

On this project, I understood more on how to put to use useReducer. See examples below:

```React useReducer
    const fetchReducer = (state, action) => {
        switch (action.type) {
        case "loading":
            return { ...initialState, loading: true };
        case "fetched":
            return { ...initialState, data: action.payload, loading: false };
        case "error":
            return { ...initialState, error: action.payload, loading: false };
        default:
            return state;
        }
    };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
```

### Continued development

I would love to imporve on my knowledge on using APIs and Error Boundary.

## Author

- Website - [Osayuki](https://github.com/okhuarobo-osayuki)
- Twitter - [@osayuki\_\_](https://twitter.com/osayuki__)
- LinkedIn - [@osayukiokhuarobo](https://www.linkedin.com/in/osayukiokhuarobo/)

const init = {
  count: 0
};

export const increment = (state = init, { type, n }) => {
  // console.log(type, n);
  switch (type) {
    case "UP":
      return { count: state.count + n };
    case "DOWN":
      return { count: state.count - n };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

// const arr = 0;
// export const increment = (state = arr, { type }) => {
//   switch ({ type }) {
//     default:
//       return state;
//   }
// };

const init = {
  status: false,
  data: []
};

export const fetcher = (state = init, action) => {
  console.log(action.payload, "pay");
  switch (action.type) {
    case "FETCH_OK":
      return { status: true, data: action.payload };
    case "FETCH_ERROR":
      return { status: false };
    default:
      return state;
  }
};

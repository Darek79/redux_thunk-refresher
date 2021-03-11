import axios from "axios";
export const up = ({ n = 5 } = {}) => ({
  type: "UP",
  n
});
export const down = ({ n = 5 } = {}) => ({
  type: "UP",
  n
});

export const reset = () => ({
  type: "RESET"
});

export const fetched_data = (data = []) => {
  return {
    type: "FETCH_OK",
    payload: data
  };
};
export const fetched_error = () => ({
  type: "FETCH_ERROR"
});

export const fetch_files = (fnOK, FNERR, url) => {
  return async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      fnOK(data);
    } catch (error) {
      if (error) console.log(error);
      FNERR();
    }
  };
};

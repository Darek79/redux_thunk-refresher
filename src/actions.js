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
      // console.log(inst, "inst");
      const key = "AccessKey";
      // const options = {
      //   headers: {
      //     [key]: "0fe84002-e413-4668-8c1ab4e1905b-e4c7-4ede"
      //   }
      // };
      // const { data } = await axios.get(
      //   "https://storage.bunnycdn.com/dkdevappointment/",
      //   options
      // );
      const res = await fetch(
        "https://storage.bunnycdn.com/dkdevappointment/",
        {
          method: "GET",

          referrerPolicy: "no-referrer",
          headers: {
            [key]: "0fe84002-e413-4668-8c1ab4e1905b-e4c7-4ede"
          }
        }
      );
      const data = await res.json();
      console.log(data);
      fnOK(data);
    } catch (error) {
      if (error) console.log(error);
      FNERR();
    }
  };
};

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetched_data, fetched_error, fetch_files } from "./actions";
export const FetchedStuff = ({
  data,
  status,
  fetched_data,
  fetched_error,
  fetch_files
}) => {
  useEffect(() => {
    if (data.length === 0) {
      fetch_files(
        fetched_data,
        fetched_error,
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
    }
  }, []);
  return (
    <section>
      {console.log(data, "data")}
      <ul>
        {status ? data.map((el, i) => <li key={i}>{el.name}</li>) : "not"}
      </ul>
    </section>
  );
};

const storage = ({ fetcher }) => {
  console.log(fetcher, "sss");
  return {
    data: fetcher.data,
    status: fetcher.status
  };
};

export default connect(storage, { fetched_data, fetched_error, fetch_files })(
  FetchedStuff
);

import React, { Fragment, memo, useRef } from "react";
import { connect } from "react-redux";
import { up, reset } from "./actions";
export const Button = memo(({ fn }) => {
  console.log("render");
  return (
    <Fragment>
      <button onClick={fn}>up</button>
    </Fragment>
  );
});

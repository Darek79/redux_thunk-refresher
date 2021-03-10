import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { Button } from "./upper";
import { up, reset } from "./actions";
const Connected = ({ count, up }) => {
  const upper = useCallback(() => {
    up({ n: 1 });
  }, [up]);
  return (
    <section>
      <Button fn={upper} />
      {count}
    </section>
  );
};

const mapStateToProps = ({ increment }) => {
  return {
    count: increment.count
  };
};

export default connect(mapStateToProps, { up })(Connected);

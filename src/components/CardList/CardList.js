import React, { useState, useEffect } from "react";
import { Card } from "antd";

const CardList = props => {
  const { data } = props;
  return (
    <Card
      type="inner"
      title={data.productTitle}
      style={{ width: 300, height: 200 }}
    >
      <p>{data.productDescription}</p>
    </Card>
  );
};

export default CardList;

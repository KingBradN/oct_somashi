import React from "react";

const styleCryptoCurrency = {
  backgroundColor: "yellow",
  border: "solid 1px gray",
  padding: "10px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
};

const styleName = {
  padding: "0 5px",
  flex: "1",
  color: "#004e92",
};

const styleSymbol = {
  fontWeight: "bold",
  color: "gray",
  padding: "0 5px",
  marginLeft: "20px",
  textAlign: "center",
  flex: "6",
};

const stylePrice = {
  padding: "0 5px",
};

const cryptocurrency = (props) => (
  <div style={styleCryptoCurrency}>
    <div style={styleName}>{props.name}</div>
    <div style={styleSymbol}>{props.symbol}</div>
    <div style={stylePrice}>{props.price}</div>
  </div>
);

export default cryptocurrency;

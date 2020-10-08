import React from "react";
import "./App.css";
import Layout from "./Components/Layouts/Layout";
import CryptoCurrencies from "./Containers/CryptoCurencies/CryptoCurrencies";

function App() {
  return (
    <div className="App">
      <Layout>
        <CryptoCurrencies/>
      </Layout>
    </div>
  );
}

export default App;

import React from "react";
import Layout from "./components/Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import TopNavBar from "./components/TopNavBar/TopNavBar";
function App() {
  return (
    <div className="App flex container  mx-auto 2xl ">
      <Layout>
        <TopNavBar />
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;

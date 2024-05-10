import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Router from "@functions/router";
import LayoutHome from "@components/Navigation";


function App() {
  // return <RouterProvider router={router} />;
  return (
    <>
    <LayoutHome/>
    <Router/>
   
    </>
  );
}

export default App;

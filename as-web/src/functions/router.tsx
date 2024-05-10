import EvaluateCoursePage from "@components/EvaluateCoursePage";
import HomePage from "@components/HomePage";
import LayoutHome from "@components/Navigation";
import QuizPage from "@components/QuizPage";
import ScorePage from "@components/ScorePage";
import { Layout } from "antd";
import {
  Route,
  Routes,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
// import "./App.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "quiz",
//     element: <QuizPage />,
//   },
//   {
//     path: "score",
//     element: <ScorePage />,
//   },
//   {
//     path: "evaluatecourse",
//     element: <EvaluateCoursePage />,
//   },
// ]);

// export default router;

// import HomePage from '@components/HomePage'
// import QuizPage from '@components/QuizPage'
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'

function router() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/evaluatecourse" element={<EvaluateCoursePage />} />
      </Routes>
    </>
  );
}

export default router;

import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/default/layoutdefault";
// import Home from "./pages/home/home";
// import Createquestion from "./pages/createquestion/createquestion";
// import AuthGuard from "@/route-guards";
import { lazy, Suspense } from "react";

const LazySignIn = lazy(() => import("./pages/auth/logIn"));
const LazySignUp = lazy(() => import("./pages/auth/signUp"));
const LazyHomePage = lazy(() => import("./pages/home/home"));
const LazyCreateQuestionPage = lazy(
  () => import("./pages/createquestion/createquestion")
);
const LazyQuestionPage = lazy(() => import("./pages/questionPage"));

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySignUp />
            </Suspense>
          }
        />
        <Route
          path="/logIn"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySignIn />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHomePage />
            </Suspense>
          }
        />
        <Route
          path="/createquestion"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCreateQuestionPage />
            </Suspense>
          }
        />
        <Route
          path="/question-page"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyQuestionPage />
            </Suspense>
          }
        />
        {/* <Route element={<AuthGuard />}>
          <Route path="/home" element={<Home />} />
          <Route path="/createquestion" element={<Createquestion />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default App;

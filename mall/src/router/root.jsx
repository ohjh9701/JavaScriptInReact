import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";

//1. 라우터(컨트롤러 대상이 되는 페이지를 가져와야 한다.)
const MainPage = lazy(() => import("../pages/MainPage"));
const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
]);
export default root;

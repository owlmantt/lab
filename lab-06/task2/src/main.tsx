import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import NotFound from './pages/NotFound';
import CourseDetail from './pages/CourseDetail'; 
import { getCourseById } from './data';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { 
        path: "courses", 
        element: <Courses /> 
      },
      { 
        path: "courses/:id", 
        element: <CourseDetail />,
        errorElement: <div style={{ padding: "20px", color: "red" }}>Course not found!</div>,
        loader: async ({ params }) => {
          const course = getCourseById(Number(params.id));
          if (!course) {
            // Это вызовет errorElement
            throw new Response("Not Found", { status: 404 });
          }
          return { course };
        },
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
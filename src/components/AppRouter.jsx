import React from 'react';
import About from "../pages/About"
import Posts from "../pages/Posts"
import Error from "../pages/Error"
import PostIdPage from "../pages/PostIdPage"
import { Routes, Route, Navigate } from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../router";
import { useContext } from 'react';

const AppRouter = () =>{
  const isAuth = true // Можно менять

  return (

    isAuth ?
      <Routes>
            {privateRoutes.map(route => 
        <Route 
        element = {<route.element />}
        path={route.path}
        key={route.path}
        />
      )}
      <Route path="/" element={<Navigate replace to="/posts" />} />
    </Routes>
      :
      <Routes>
        {publicRoutes.map(route => 
          <Route 
          element = {<route.element />}
          path={route.path}
          key={route.path}
        />
      )}
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
    
  )
}

export default AppRouter;

import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  Login,
  Status,
  NotFound,
  Home,
  Members,
  News,
  NewsID,
  Offers,
  Main,
  About,
  Blog,
  BlogPage,
  Development,
} from "./pages";
import "src/styles/App.scss";
import { isAdmin } from "./server/Host";
import React from "react";
import MainContextProvider from "./hooks";

const App: React.FC = () => {
  return (
    <Router>
      <MainContextProvider>
        {/* All pages rendered here */}
        <Routes>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="blog">
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogPage />} />
          </Route>

          {/* Login page for admins*/}
          <Route
            path="home"
            element={isAdmin() ? <Home /> : <Navigate to="/login" />}
          >
            <Route path="news">
              <Route index element={<News />} />
              <Route path=":newsID" element={<NewsID />} />
            </Route>
            <Route path="offers" element={<Offers />} />
            <Route path="members" element={<Members />} />
          </Route>

          <Route
            path="login"
            element={isAdmin() ? <Navigate to="/home" /> : <Login />}
          />

          {/* Status page */}
          <Route path="/qabul.jsp" element={<Status />} />

          {/* Not found page */}
          <Route path="/*" element={<NotFound />} />
          <Route path="/development" element={<Development />} />
        </Routes>
      </MainContextProvider>
    </Router>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

library.add(faSolidStar, faRegularStar)

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies">
              <Route path="" element={<MoviesPage />} />
              <Route path=":slug" element={<MovieDetailsPage />} />
            </Route>
          </Route>
        </Routes>      
      </BrowserRouter>
    </>
  );
};

export default App;

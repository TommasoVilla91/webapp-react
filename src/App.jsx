import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar)

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies">
              <Route path="" element={<MoviesPage />} />
              <Route path=":id" element={<MovieDetailsPage />} />
            </Route>
          </Route>
        </Routes>      
      </BrowserRouter>
    </>
  );
};

export default App;

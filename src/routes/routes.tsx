import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Laytout from "../components/layout/laytout";
import NotFound from "../components/not-found/not-found";
import { routesData } from "./routes-data";
import { useAppSelector } from "../store/store";
import { useState } from "react";

const Routeing = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const [user, setUser] = useState(currentUser);
  const RequiredAuth = ({ children }: any) => {
    return currentUser ? children : <Navigate to="login" />;
  };

  return (
    <Routes>
      <Route element={<Laytout />}>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        {/* All routes */}
        {routesData.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            element={<RequiredAuth>{item.component}</RequiredAuth>}
          />
        ))}
        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routeing;

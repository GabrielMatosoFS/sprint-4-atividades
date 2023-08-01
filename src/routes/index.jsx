import { Route, Routes } from "react-router-dom";
import { PostPage } from "../pages/PostPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/post/:id" element={<PostPage />} />
         <Route path="/404" element={<NotFoundPage />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   );
};

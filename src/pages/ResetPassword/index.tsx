import { Route, Routes } from "react-router-dom";

import Issued from "./Issued";
import Reset from "./Reset";
import Validation from "./Validation";

function ResetPassword() {
  return (
    <Routes>
      <Route path={""} element={<Issued />} />
      <Route path={"validation"} element={<Validation />} />
      <Route path={"reset"} element={<Reset />} />
    </Routes>
  );
}

export default ResetPassword;

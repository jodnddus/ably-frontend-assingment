import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Login, ResetPassword, UserInfo } from "pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/resetPassword/*" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

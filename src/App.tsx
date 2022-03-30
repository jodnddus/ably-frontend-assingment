import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Login, UserInfo } from "pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;

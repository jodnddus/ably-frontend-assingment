import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Login, ResetPassword, UserInfo } from "pages";

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/resetPassword/*" element={<ResetPassword />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 0 auto;
  min-width: 470px;
  max-width: 640px;
  padding: 12px;
`;

export default App;

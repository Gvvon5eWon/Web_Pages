import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import IntroduceWrapPage from "./js/Introduce/WrapPage/WrapPage";
import Login from './js/Login/Login';
import SignUp from './js/SignUp/SignUp';
import Main from './js/Main/Main';
import React, { useState } from 'react';

function App() {
  // 여기서 로그인이 됐는지 state에 값을 저장
  const [isLogined, setIsLogined] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="introduce" element={<IntroduceWrapPage isLogined={isLogined} />} />
        {isLogined ? null :
          <>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </>
        }
        <Route path='main/*' element={<Main isLogined={isLogined} />} />
        <Route 
          path='/' 
          element={<Navigate to="main"/>} 
        />
      </Routes>
    </Router>
  );
}

export default React.memo(App);

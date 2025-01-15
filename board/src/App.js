import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./component/board/List";
import Write from "./component/board/Write";
import View from "./component/board/View";
import NotFound from "./component/common/NotFound";
import LoginForm from "./component/member/LoginForm";
import DashBoard from "./component/common/DashBoard";
import ProtectedRoute from "./component/common/ProtectedRoute";
import { AuthProvider } from "./hooks/AuthContext"
import Modify from "./component/board/Modify";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginForm />}  />
          <Route path="/dashboard" element={<DashBoard />}  />
          <Route path="/list"  element={<ProtectedRoute><List /></ProtectedRoute>} />
          <Route path="/write" element={<ProtectedRoute><Write/></ProtectedRoute>} />
          <Route path="/view/:num" element={<ProtectedRoute><View /></ProtectedRoute>} />
          <Route path="/modify/:num" element={<ProtectedRoute><Modify /></ProtectedRoute>} />
          <Route path="/*" element={<NotFound />}  />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
  ;
}

export default App;

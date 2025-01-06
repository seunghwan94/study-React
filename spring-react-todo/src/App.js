import { Route, BrowserRouter , Routes} from "react-router-dom";
import Posts from "./component/Posts";
import Index from "./component/Index";
import PostDetail from "./component/PostDetail";
import Header from "./component/Header";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<PostDetail/>}/>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

import {
  HashRouter as Router,
  Routes,
  Route,
  Link, NavLink
} from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Chat from "./components/Chat";
import Mchat from "./components/Mchat";
import Shopping from "./components/Shopping";
import More from "./components/More";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <div className="center">
        <div className="main_bottom_btn">
          <Link to="/" >
            <img src="/images/home_w.png" alt='home' />
          </Link>
          <Link to="/chat">
            <img src="/images/chat_w.png" alt='chat' />
          </Link>
          <Link to="/mchat">
            <img src="/images/mchat_w.png" alt='mchat' />
          </Link>
          <Link to="/shopping">
            <img src="/images/shopping_w.png" alt='shopping' />
          </Link>
          <Link to="/more">
            <img src="/images/more_w.png" alt='more' />
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mchat" element={<Mchat />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

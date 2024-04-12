import "./App.css";
import Audio from "./page/Audio";
import Music from "./page/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="view">
          <div className="header">
            <a href="/">
              <h1>Pitch Finder</h1>
            </a>
            <h5>
              부르기 쉬운 노래를 찾고 싶은 당신을 위한 사용자 음높이 기반 가요
              필터링 서비스
            </h5>
            <h3 className="team">⭐️ 그로쓰 14팀 CoB ⭐️</h3>
          </div>
          <div className="body">
            <Routes>
              <Route path="/" element={<Audio />} />
              <Route path="/music" element={<Music />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

import { Routes, Route, Outlet, Link } from "react-router-dom";
import ArchivePage from "./pages/archive/ArchivePage";
import Navbar from "./components/Navbar";
import EditorPage from "./pages/editor/EditorPage";
import Homepage from "./pages/home/Homepage";
import "./App.css";
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <div className="bg-red-400 flex w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Sidebar />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

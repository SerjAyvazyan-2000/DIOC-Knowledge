import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./pages/home/home.jsx";
import Blog from "./pages/blog/blog.jsx";
import Footer from "./components/footer/footer.jsx";
import BlogPost from "./pages/BlogPost/index.jsx"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

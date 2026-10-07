import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/solutions"
            element={<Solutions />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <AnimatedRoutes />

      <Footer />

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
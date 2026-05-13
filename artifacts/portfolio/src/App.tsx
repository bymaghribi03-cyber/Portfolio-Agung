import { Switch, Route, Router as WouterRouter } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import VideoEditing from "./pages/VideoEditing";
import GraphicDesign from "./pages/GraphicDesign";
import UIDesign from "./pages/UIDesign";
import NotFound from "./pages/not-found";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/">
          {() => (
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          )}
        </Route>
        <Route path="/projects/video-editing">
          {() => (
            <AnimatedPage>
              <VideoEditing />
            </AnimatedPage>
          )}
        </Route>
        <Route path="/projects/graphic-design">
          {() => (
            <AnimatedPage>
              <GraphicDesign />
            </AnimatedPage>
          )}
        </Route>
        <Route path="/projects/ui-design">
          {() => (
            <AnimatedPage>
              <UIDesign />
            </AnimatedPage>
          )}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </WouterRouter>
  );
}

export default App;

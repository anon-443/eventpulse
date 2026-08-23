// EventPulse style reminder: this shell carries the Sunlit Editorial Festival system through every route with warm surfaces, coral action, cobalt navigation, and deliberately quiet page movement.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
function Router() {
  // make sure to consider if you need authentication for certain routes
  const [location] = useLocation();
  return <AnimatePresence mode="wait">
    <motion.div key={location} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/organizer" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </motion.div>
  </AnimatePresence>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light" switchable><MotionConfig reducedMotion="user"><TooltipProvider><Toaster position="top-right" richColors /><Router /></TooltipProvider></MotionConfig></ThemeProvider></ErrorBoundary>;
}

import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Commands from "@/pages/Commands";
import Status from "@/pages/Status";
import { useState, useEffect, useCallback } from "react";

// Use hash-based routing for static deployments
const useHashLocation = () => {
  const [loc, setLoc] = useState(window.location.hash.slice(1) || "/");

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.slice(1) || "/";
      setLoc(hash);
    };

    window.addEventListener("hashchange", handler);
    if (!window.location.hash) window.location.hash = "/";

    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [loc, navigate];
};

function RouterContent() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/commands" component={Commands} />
      <Route path="/status" component={Status} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation}>
        <RouterContent />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
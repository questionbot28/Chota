import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the base URL from the current location for proper asset loading
const basePath = import.meta.env.BASE_URL || '/';
document.documentElement.dataset.basePath = basePath;

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(<App />);
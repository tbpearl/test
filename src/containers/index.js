import { createRoot } from "react-dom/client";
import { SignIn } from "./Authform";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<SignIn />);
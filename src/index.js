import { createRoot } from "react-dom/client";
import { ButtonAppBar } from "./header";
import {Footer} from "./footer";
import {Main} from "./main";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<>
<ButtonAppBar />
<Main />
<Footer />
</>);
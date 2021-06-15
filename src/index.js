import ScrollBar from "smooth-scrollbar";

import "./bgpattern.css";
import "./style.css";
import "./mobile.css";

const wrapper = document.querySelector(".wrapper");

wrapper && ScrollBar.init(wrapper);

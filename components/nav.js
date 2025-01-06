import html from "html-literal";
import navItem from "./navItem.js";


export default navItems => {
  return html`
    <nav class="nav-sec">
    <i class="fa-solid fa-bars"></i>
    <ul class="nav-sec-list hidden--mobile">
        ${navItems.map(item => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};





import html from "html-literal";

export default item => {
  return html`<li><a href="${item.url}" data-navigo>${item.text}</a></li>`;
}

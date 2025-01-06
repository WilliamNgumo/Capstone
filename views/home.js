import html from "html-literal";

export default state => html`<main>
<h1 class="firster">HomePage</h1>
<h3>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
  </h3>





</main>`;

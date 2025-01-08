import html from "html-literal";

export default () => html`<main>

<section class="drops">
  <h1>Contact US</h1>
  <h3>Our Team Is Waiting To Help You</h3>

</section>

<div class="form-section">
<!-- <img src="assets/pexels-tima-miroshnichenko-5912677.jpg" alt="here to help png" width="200" height="auto"> -->
<h1>Contact US</h1>

<form action="submit form">
  <label for="name">UserName</label>
  <input type="text" name="name" placeholder="UserName" required>
  <label for="Email">Email</label>
  <input type="email" name="email" placeholder="Enter Your Email" required>
  <label for="message">message</label>
  <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
  <button type="submit">Submit</button>

  <h3>Thanks fo contacting Us!!!</h3>

</form>

</div>


</main>`;

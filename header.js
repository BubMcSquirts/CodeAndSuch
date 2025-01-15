class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="headerMaster">
      <a href="index.html" class="headerBlockLeft">
        <img src="images/Logo/LogoDonut.jpg" />
      </a>
      <div class="headerBlockCenter">
        <a href="index.html">Home</a>
        <a href="3D.html">3D</a>
        <a href="music.html">Music</a>
        <a target ="_blank" href="Quiz_Website/indexQuiz.html">Quizzes</a>
        <a href="stopmotion.html">Stop Motion</a>
        <a href="2D.html">2D</a>
        <a href="coding.html">Coding</a>
        <a href="film.html">Film</a>
        <a href="photos.html">Photos</a>
        <a href="cubeTimer.html">Cube Timer</a>
      </div>
      <a class="headerBlockRightAbout" href="about.html">About</a>
    </div>
        `;
  }
}

customElements.define("header-bar", Header);

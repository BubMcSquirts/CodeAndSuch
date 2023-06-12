class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="headerMaster">
      <div class="headerBlockLeft">
        <img src="images/Logo/LogoDonut.jpg" />
        <a href="index.html">Home</a>
      </div>
      <div class="headerBlockCenter">
        <a href="photos.html">Photos</a>
        <a href="3D.html">3D</a>
        <a href="music.html">Music</a>
      </div>
      <a class="headerBlockRightAbout" href="about.html">About</a>
      <div class="headerBlockRight">
        <img src="images/Icons/Menu_Logo_Icon.png" />
        <div class="menuDropdownMaster">
          <a href="photos.html">Photos</a>
          <a href="3D.html">3D</a>
          <a href="music.html">Music</a>
        </div>
      </div>
    </div>
        `;
  }
}

customElements.define("header-bar", Header);

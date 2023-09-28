import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class KeefCard2 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .coolawesomebuttons {
    border: 3.5px solid;
    background-color: blue;
  }
  .dupBtn:focus,.dupBtn:hover {
    background-color: white;
    color: blue;
  }
  .colorBtn:focus, .colorBtn:hover {
    background-color: white;
    color: blue;
  }
  .txtBtn:focus, .txtBtn:hover {
    background-color: white;
    color: blue;
  }
  .deleteBtn:focus, .deleteBtn:hover {
    background-color: white;
    color: blue;
  }
  
  .wrapper {
    display: inline-block;
    background-color: blue;
    font-size: 24px;
    padding: 100px;
    text-align: center;
    max-width: 400px;
    margin: 20px auto;
    border: 3.5px solid;
  }
  .wrapper img {
    max-width: 100%;
    height: auto;
    width: 100%;
    border: 3.5px solid;
  }
  
  @media only screen and (max-width: 1200px){
    .wrapper {
      background-color: pink;
    }
  }
  @media only screen and (max-width: 600px) {
     .wrapper {
      background-color: purple;
    }
  }
  @media only screen and (max-width: 425px){
     .wrapper {
      font-weight: normal;
    }
     .wrapper .header h2 {
      font-size: 12px;
    }
     .wrapper .paragraph p {
       font-size: 10px !important;
    }
      wrapper {
          display: none;
   }
  }`
  ;

  constructor() {
    super();
    this.header = 'My app';
  }

  firstUpdated(){
    const titleBtn = this.shadowRoot.querySelector('.txtBtn');
    const deleteBtn = this.shadowRoot.querySelector('.deleteBtn');
    const colorBtn = this.shadowRoot.querySelector('.colorBtn');
    const cardTitle = this.shadowRoot.querySelector('.header');
    const card = this.shadowRoot.querySelector('');
    const clone = card.cloneNode(true);
    const cards = this.shadowRoot.querySelector('.wrapper');
    const details = this.shadowRoot.querySelector('');
    const cardImage = this.shadowRoot.querySelector('img');
    const cardClone2 = this.shadowRoot.querySelector('.container');

    titleBtn.addEventListener('click', () => {
      cardTitle.innerHTML = "Chief Keef";
    });

    deleteBtn.addEventListener('click', () => {
      cards.removeChild(cardClone2);
    });

    
  }

  colorChange(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  cloneCard(e){
    const card = this.shadowRoot.querySelector('.wrapper');
    const clone = card.cloneNode(true);
    this.shadowRoot.querySelector('.wrapper').appendChild(clone);
  }

  render() {
    return html`
    <div class="coolawesomebuttons">
    <p>Buttons that do cool things:</p>
    <button id="dupBtn" @click="${this.cloneCard}>Duplicate Last Card</button>
    <button class="colorBtn">Toggle Color</button>
    <button class="txtBtn">Change Name</button>
    <button class="deleteBtn">Delete</button>
  </div>
  <div class="wrapper">
    <div class="container">
    <img class="image" src ="https://i.gyazo.com/d1dad04e66b7b98caeb5d76b1f51401e.png"/>
      <div class="header">
        <h3>Dank Meme Collection Beware</h3>
        <h4>Here's a homemade Chief Keef meme enjoy! P.S. Do not click the button, please DON'T.</h4>
      </div>
      <details class="details">
        <Summary>Hit Songs</summary>
        <div>
          <ul>
            <li>Love Sosa</li>
            <li>Don't Like</li>
            <li>Hate Being Sober</li>
          </ul>
        </div>
      </details>
    </div>  
`
;
  }
}

customElements.define('keef-card2', KeefCard2);
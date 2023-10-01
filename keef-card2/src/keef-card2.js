import { LitElement, html, css } from 'lit';

export class KeefCard2 extends LitElement {
  static get properties () {
    return {
      name: {
        type: String,
        Reflect: true
      },
      position: {
        type: String,
      }
    }
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
  }
  `;

  constructor() {
    super();
    this.name = "Dank Meme Collection Beware";
    this.position = "Here's a homemade Chief Keef meme enjoy! P.S. Do not click the button, please DON'T."
  }

  render() {
    return html`
  <div class="wrapper">
    <div class="container">
    <img class="image" src ="https://i.gyazo.com/d1dad04e66b7b98caeb5d76b1f51401e.png"/>
      <div class="header">
        <h3>${this.name}</h3>
        <h4>${this.position}</h4>
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
  </div> 
`;

  }
}

customElements.define('keef-card2', KeefCard2);
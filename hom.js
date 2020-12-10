

const template = document.createElement('template')

template.innerHTML = `

  <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    p{
      font-size: 1.2em;
      line-height: 1.4;
      color: #444;
    }
    .container{
      padding: 3rem 0;
      margin: 0 7rem;
      display: grid;
      grid-template-columns: 20% 50% 30%;
    }

    .container > div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .btn{
      background: tomato;
    }

    .bottom{
      margin: 0 7rem;
      display: grid;
      grid-template-columns: 55% 30%;
      grid-gap: 120px;
    }
  </style>

  <div class="container">
    <div class="product-details">
      <h1>Rosta</h1>
      <h2>Tatai</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corrupti alias voluptate vero odit
                        itaque repellat nihil? Temporibus, quidem veritatis.</p>
    </div>
    <div class="product-img">
      <img src="./images/5-370x444.jpg">
    </div>
    <div class="action">
      <h2>R56.99</h2>
       <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, sequi.</p>
       <sl-button type="primary">Add to Cart</sl-button>
    </div>
  </div>

  <div class="bottom">
    <sl-tab-group>
      <sl-tab slot="nav" panel="general">Product Details</sl-tab>
      <sl-tab slot="nav" panel="custom">Delivery Information</sl-tab>
      

      <sl-tab-panel name="general">
        <h3>Product Details</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus fugit quasi, dolorem
        ad reprehenderit magnam animi aspernatur at corporis tenetur, hic enim? Consectetur,
        libero?</p>
      </sl-tab-panel>
      <sl-tab-panel name="custom">
        <h3>Delivery Information</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus fugit quasi, dolorem
        ad reprehenderit magnam animi aspernatur at corporis tenetur, hic enim? Consectetur,
        libero?</p>
      </sl-tab-panel>
    </sl-tab-group>

    <div class="message">
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
  
    </div>

  </div>


`

class homContent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

}

window.customElements.define('home-content', homContent)

import { LitElement, html, css } from "lit";
import {ref, createRef} from 'lit/directives/ref.js'

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;

  greeting = "Hello";
  planet = "World";

  inputRef = createRef<HTMLInputElement>();

  render() {
    return html`
    <input ${ref(this.inputRef)}>
    <span @click=${this.togglePlanet}
      >${this.greeting}
      <span class="planet">${this.planet}</span>
    </span>`;
  }

  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
}

customElements.define("my-element", MyElement);

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}

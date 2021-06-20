import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Futura BT light";
  src: local("Futura BT light"), url("./fonts/futura-light-bt.ttf") format("truetype");
}
@font-face {
  font-family: "Futura BT heavy";
  src: local("Futura BT heavy"), url("./fonts/futura-hv-bt-heavy.ttf") format("truetype");
}
@font-face {
  font-family: "Futura BT medium";
  src: local("Futura BT heavy"), url("./fonts/futura-md-bt-medium.ttf") format("truetype");
}

html {
  height: 100%;
  font-size: 43.75%;
  -webkit-text-size-adjust: 100%;
}

@media only screen and (min-width: 1200px) {
  html {
    font-size: 50%;
  }
}

@media only screen and (min-width: 1340px) {
  html {
    font-size: 56.25%;
  }
}

body {
  box-sizing: border-box;
  font-family: "Futura BT light", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  line-height: 1;
}

main {
  display: block;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  text-decoration: none;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

input {
  outline: none;
  border: 0;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  border: 0;
  background-color: transparent;
  outline: none;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`;

export default GlobalStyle;

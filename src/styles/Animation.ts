import {createGlobalStyle} from 'styled-components';

const Animation = createGlobalStyle`
.nav-enter {
  opacity: 0;
}
.nav-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}
.nav-exit {
  opacity: 1;
}
.nav-exit-active {
  opacity: 0;
  transition: opacity 500ms ease-in;
}
`;
export {Animation};

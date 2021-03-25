// importación de fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  solidIcons.faMoon,
  solidIcons.faSun,
  solidIcons.faArrowRight,
  solidIcons.faArrowLeft,
  solidIcons.faPowerOff
)



export default FontAwesomeIcon;
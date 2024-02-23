import { TPlace } from "./types";

import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/CSS_logo.png';
import JSLogo from '../images/JS-logo.png';
import ReactLogo from '../images/React-logo.png';
import JestLogo from '../images/jest-logo.webp';

export const skills = [
  { id: 1, title: 'HTML', img: htmlLogo },
  { id: 2, title: 'CSS', img: cssLogo },
  { id: 3, title: 'JavaScript', img: JSLogo },
  { id: 4, title: 'React', img: ReactLogo },
  { id: 5, title: 'Jest', img: JestLogo },
];

export const places: TPlace[] = [
  { value: '', title: 'Please select the you job country' },
  { value: 'de', title: 'Deutschland' },
  { value: 'ua', title: 'Ukraine' },
  { value: 'usa', title: 'United States of America' },
  { value: 'earth', title: 'Earth' },
];
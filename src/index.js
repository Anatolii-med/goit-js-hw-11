import './css/styles.css';
import { debounce } from 'debounce';
import { fetchPic } from './fetchPic';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

function makeMessage(type, message) {
  Notiflix.Notify[type](message);
}

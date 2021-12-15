import MEMO_IMG01 from '../image/img01.png';
import MEMO_IMG02 from '../image/img02.png';
import MEMO_IMG03 from '../image/img03.png';
import MEMO_IMG04 from '../image/img04.png';
import MEMO_IMG05 from '../image/img05.png';
import MEMO_IMG06 from '../image/img06.png';
import MEMO_IMG07 from '../image/img07.png';
import MEMO_IMG08 from '../image/img08.png';
import MEMO_IMG09 from '../image/img09.png';

export const uniqueCardsArray = [
  { type: "language03", image: MEMO_IMG01, },
  { type: "language05", image: MEMO_IMG02 },
  { type: "language06", image: MEMO_IMG03 },
  { type: "language07", image: MEMO_IMG04 },
  { type: "language08", image: MEMO_IMG05 },
  { type: "language02", image: MEMO_IMG06 },
  { type: "language04", image: MEMO_IMG07 },
  { type: "language09", image: MEMO_IMG08 },
  { type: "language01", image: MEMO_IMG09 },
];

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export const shuffleCards = (array) => {
  for (let i = array.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}
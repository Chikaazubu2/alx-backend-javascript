// eslint-disable-next-line
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const arr = [19, 20, 34];
  const newArr = [];
  for (const i of arr) {
    newArr.push(new ClassRoom(i));
  }
  return newArr;
}

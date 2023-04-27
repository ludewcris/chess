import "./chessboard.css";
import {
  wP,
  wR,
  wN,
  wB,
  wQ,
  wK,
  bP,
  bR,
  bN,
  bB,
  bQ,
  bK,
} from "../assets/pieces";

const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];
const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [
  { image: bR, x: 0, y: 0 },
  { image: bN, x: 1, y: 0 },
  { image: bB, x: 2, y: 0 },
  { image: bQ, x: 3, y: 0 },
  { image: bK, x: 4, y: 0 },
  { image: bB, x: 5, y: 0 },
  { image: bN, x: 6, y: 0 },
  { image: bR, x: 7, y: 0 },
  { image: wR, x: 0, y: 7 },
  { image: wN, x: 1, y: 7 },
  { image: wB, x: 2, y: 7 },
  { image: wQ, x: 3, y: 7 },
  { image: wK, x: 4, y: 7 },
  { image: wB, x: 5, y: 7 },
  { image: wN, x: 6, y: 7 },
  { image: wR, x: 7, y: 7 },
];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: bP, x: i, y: 1 });
  pieces.push({ image: wP, x: i, y: 6 });
}

export default function Chessboard() {
  const board = [];

  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < files.length; j++) {
      let image;

      pieces.forEach((p) => {
        if (p.x === j && p.y === i) {
          image = p.image;
        }
      });

      if ((i + j + 1) % 2 === 0) {
        board.push(
          <div className="tile dark">
            <img src={image} alt="" />
          </div>
        );
      } else {
        board.push(
          <div className="tile light">
            <img src={image} alt="" />
          </div>
        );
      }
    }
  }
  return <div className="chessboard">{board}</div>;
}

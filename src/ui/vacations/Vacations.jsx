import React from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import g1 from "../../assets/images/G0060068 (1).png";
import g2 from "../../assets/images/GOPR0007.png";
import g3 from "../../assets/images/GOPR0012.png";
import g4 from "../../assets/images/GOPR0146.png";
import g5 from "../../assets/images/GOPR0164.png";
import g6 from "../../assets/images/GOPR0194.png";
import g7 from "../../assets/images/GOPR0212.png";
import g8 from "../../assets/images/GOPR0234.png";
import g9 from "../../assets/images/GOPR0280 (1).png";
import g10 from "../../assets/images/GOPR0349 (1).png";
import g11 from "../../assets/images/GOPR0350 (2).png";
import g12 from "../../assets/images/GOPR0357 (1).png";
import g13 from "../../assets/images/GOPR0369 (1).png";
import g14 from "../../assets/images/GOPR0404 (1).png";
import g15 from "../../assets/images/GOPR0490 (2).png";
import g16 from "../../assets/images/GOPR0494.png";
import g17 from "../../assets/images/GOPR0525.png";
import g18 from "../../assets/images/GOPR0544.png";
import g19 from "../../assets/images/GOPR0545.png";
import g20 from "../../assets/images/GOPR0584.png";
import g21 from "../../assets/images/GOPR0586 (1).png";
import g22 from "../../assets/images/GOPR0587 (1).png";
import g23 from "../../assets/images/GOPR0588.png";
import g24 from "../../assets/images/GOPR0603.png";

const photos = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
  g20,
  g21,
  g22,
  g23,
  g24
];

function Vacations() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 23) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        background: "black",
        height: "100vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {photos.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Vacations />, rootElement);

export default Vacations;

import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import zowenmakes10 from "./zowenmakes10.png";
import "./Showcase.css";

export default function Showcase() {
  return (
    <div className="Showcase">
      <Image className="Showcase-book" src={zowenmakes10} />
      <Link className="button" to="/books">
        See the Book
      </Link>
    </div>
  );
}

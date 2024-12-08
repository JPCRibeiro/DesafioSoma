import { Link } from "react-router-dom";

export default function CategoryLink({ to, imgSrc, altText, label }) {
  return (
    <Link to={to}>
      <img src={imgSrc} alt={altText}/>
      <span>{label}</span>
    </Link>
  )
}
import { Title } from "./PageTitle.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageTitle({ title, subtitle, icon }) {
  return (
    <Title>
      <div>
        <FontAwesomeIcon icon={icon} />
        <h2>{title}</h2>
      </div>
      <p>{subtitle}</p>
    </Title>
  )
}
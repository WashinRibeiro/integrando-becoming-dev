import "./styles.css";
import { BsLinkedin } from 'react-icons/bs';

export function Details(props: any) {

  return (
    <main>
      <div className="card_info">
        <span><strong>Nome:</strong> {props?.obj?.name} {props?.obj?.lastname}</span>
        <span><strong>Idade:</strong> {props?.obj?.age}</span>
        <span><strong>Email:</strong> {props?.obj?.email}</span>
        <span><strong>Contato:</strong> {props?.obj?.contact}</span>
        <span><strong>Experiência:</strong> {props?.obj?.experience}</span>
        <span><strong>Tecnologias:</strong> {props?.obj?.technology}</span>

        <a href={props?.obj?.socials} target="blank">
          <BsLinkedin/>
        </a>
      </div>
      <img src={props?.obj.Photos[0].url} alt="Foto de perfil" />
    </main>
  )
}
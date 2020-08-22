import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Layout from './Layout';
import Body from './Body';
import Menu from './Menu';
import Content from './Content';

//Se importa Body y Layout
export default () => {
  const displayed = {
    history: <p>Historia de BarberBall Los Mochis.</p>,
    mission: <p>"Nuestra misión principal es contar con clientes satisfechos y colaboradores motivados. Ademas buscamos fomentar en nuestros equipos de trabajo la venta de productos competitivos y de calidad. Siempre trabajando para obtener el máximo rendimiento y una posición de liderazgo. A su vez, tenemos como objetivo demostrar a través de nuestro compromiso y contribución con los valores de la sociedad, el medio ambiente, la seguridad, la salud y la calidad; que como empresa somos un ciudadano responsable".</p>,
    values: (
      <ul>
        <li> <span>Excelencia en el Servicio</span></li>
        <li><span>Honestidad en la recomendación de Servicios/Productos</span></li>
        <li><span>Limpieza y Orden</span></li>
        <li><span>Profesionalidad</span></li>
        <li><span>Puntualidad</span></li>
      </ul>
    ),
    contact: (
      <ul>
        <li><span><b>Direccion: </b> Blvd. Gral. Gabriel Leyva, Edificio "La Joya" Entre Avenida Bienestar y Avenida Netzahualcóyotl. C.P. 81280</span></li>
        <li><span><b>Agendar citas: </b> 6684634306</span></li>
        <li><span><b>Quejas y sugerencias: </b> 6683967192</span></li>
        <li><span><b>Correo Electrónico: </b><u> Carlos.agz94@gmail.com</u></span></li>
      </ul>
    ),
  };

  useEffect(() => {
  }, []);

  const [text, setText] = useState(displayed.history);

  const displayHistory = () => {
    setText(displayed.history);
  };

  const displayMission = () => {
    setText(displayed.mission);
  };

  const displayValues = () => {
    setText(displayed.values);
  };

  const displayContact = () => {
    setText(displayed.contact);
  };

  return (
    <Body title="Acerca de Nosotros">
      <NavBar>Nosotros</NavBar>
      <Layout>Información de BarberBall</Layout>
      <Menu>
        <button className="btn btn-light" type='button' onClick={displayHistory}>
          Historia
        </button>

        <button className="btn btn-light" type='button' onClick={displayMission}>
          Misión
        </button>

        <button className="btn btn-light" type='button' onClick={displayValues}>
          Valores
        </button>

        <button className="btn btn-light" type='button' onClick={displayContact}>
          Contacto
        </button>
      </Menu>
      <Content>{text}</Content>
    </Body>
  );
  };
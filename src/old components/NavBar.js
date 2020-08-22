import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = props => {
  return (
    <div>
      <nav className='bg-custom'>
        <h1 className='mb-2 text-center text-light display-header font-italic progress-bar progress-bar-striped progress-bar-animated'>{props.children}</h1>
        <div className='d-flex justify-content-between align-items-center p-1'>
          <div className='bd-highlight d-flex justify-content-around'>
            <Link href='/'>
              <a className='nav-link link-ball text-light'>
                <img src='images/barberShop.jpg' alt='Barber Shop' />
              </a>
            </Link>
          </div>

          <div className='bd-highlight mr-4'>
            <span>
              <a href='https://www.facebook.com/barber.mochis' target='_blank' className='fa fa-facebook-official'></a>
              <a href='https://wa.me/526683967192' target='_blank' className='fa fa-whatsapp'></a>
              <a href='https://www.instagram.com/barberball_lm' target='_blank' className='fa fa-instagram'></a>
              <a href='https://www.facebook.com/barber.mochis' data-toggle='modal' data-target='#exampleModal' className='fa fa-map-marker'></a>
            </span>
          </div>
        </div>

        <nav className='navbar navbar-expand-lg navbar-light bg-custom d-flex align-items-end mb-2 mr-4 p-1'>
          <button className='navbar-toggler bg-light navbar-toggler-icon ml-auto' type='button p-2' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'></button>

          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link to='/'>
                <a className='nav-link link-a text-light'>
                  <p>Inicio</p>
                </a>
              </Link>
              <Link to='/gallery'>
                <a className='nav-link link-a text-light'>
                  <p>Galería</p>
                </a>
              </Link>
              <Link to='/about'>
                <a className='nav-link link-a text-light'>
                  <p>Nosotros</p>
                </a>
              </Link>
            </div>
          </div>
        </nav>

        <div className='d-flex justify-content-end'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div className='modal fade bd-example-modal-lg' id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Ubicación de Barber Ball LM
              </h5>

              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='embed-responsive embed-responsive-1by1'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5080.71861656878!2d-109.00043764476865!3d25.783422954757143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba252a57bd035b%3A0xb27bb3df3f222e97!2sBarber%20Ball%20Leyva!5e0!3m2!1ses!2smx!4v1588383278083!5m2!1ses!2smx' width='600' height='450' frameBorder='0' style={{ border: "0" }} allowFullScreen='' aria-hidden='false' tabIndex='0' className='embed-responsive-item'></iframe>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-dark' data-dismiss='modal'>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        span a {
          font-size: 30px;
          color: #ffffff;
          margin: 0 0 0px 30px;
        }
        img {
          width: 40px;
          height: auto;
          margin-left: -10px;
        }
        button {
          font-size: 25px;
        },
        .bg-custom {
          background-color: #EC3237;
          background-color: #234270;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
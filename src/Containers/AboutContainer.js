import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, List, ListItem, ListItemText, Typography, Box } from '@material-ui/core';

const content = [
  (
    <List dense={false}>
      <ListItem>
        <ListItemText
          primary="Nuestra misión principal es contar con clientes satisfechos y colaboradores motivados. Ademas buscamos fomentar en nuestros equipos de trabajo la venta de productos competitivos y de calidad. Siempre trabajando para obtener el máximo rendimiento y una posición de liderazgo. A su vez, tenemos como objetivo demostrar a través de nuestro compromiso y contribución con los valores de la sociedad, el medio ambiente, la seguridad, la salud y la calidad; que como empresa somos un ciudadano responsable"
        />
      </ListItem>
    </List>
  ),
  (

    <List component='ol' dense={false}>
      <ListItem>
        <ListItemText
          primary="Excelencia en el Servicio"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Honestidad en la recomendación de Servicios/Productos"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Limpieza y Orden"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Profesionalidad"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Puntualidad"
        />
      </ListItem>
    </List>
  ),
  (
    <List dense={false}>
      <ListItem>
        <ListItemText
          primary="Dirección:"
          secondary="Blvd. Gral. Gabriel Leyva, Edificio La Joya Entre Avenida Bienestar y Avenida Netzahualcóyotl. C.P. 81280"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Agendar citas:"
          secondary="6684634306"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Quejas y sugerencias:"
          secondary="6683967192"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Correo Electrónico:"
          secondary="Carlos.agz94@gmail.com"
        />
      </ListItem>
    </List>
    )
];

const AboutContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('newvalue', newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={handleChange}
        variant="fullWidth"
        aria-label="disabled tabs example"
      >
        <Tab label='Misión' />
        <Tab label='Valores' />
        <Tab label='Contacto' />
      </Tabs>
      <Grid>
        {content[value]}
      </Grid>
    </Paper>
  );
}

export default AboutContainer;
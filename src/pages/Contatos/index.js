import React from 'react';
import { TituloContatos } from '../Curriculo/style'
import Grid from '@material-ui/core/Grid';
import Menu from '../../components/Menu';
import { Container } from '@material-ui/core';
import Mensagens from '../NovosRecados/index';

export default function Contatos(props) {

  return (
      <Grid component="main" maxWidth="md">
        <Menu />
          
          <Container  maxWidth="md">
          
        <TituloContatos> Deixe seu contato! </TituloContatos>
        <Mensagens key={props.id} />
        </Container>
      </Grid>
    
  );
}
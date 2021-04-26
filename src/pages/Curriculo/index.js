import React from 'react';
import { Imagem, Paragrafo, Titulo, TituloContatos } from './style.js'
import Grid from '@material-ui/core/Grid';
import Menu from '../../components/Menu';
import { Container } from '@material-ui/core';
import Mensagens from '../Scraps/index';





export default function Curriculo(props) {



   

  return (
      <Grid component="main" maxWidth="md">
        <Menu />
          
            <Container  maxWidth="md">
           <Imagem>   
            <img src="https://scontent.fpoa28-1.fna.fbcdn.net/v/t1.6435-9/41359675_285898158677512_6173468949116616704_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGV_bNkgaPQywI6bS5gNnJbRIBbb4lRpbdEgFtviVGlt2zZdIkbJ2N2Q9kHQTDKegvHC__GnE4vH0M2vDwQ-nx0&_nc_ohc=dKWu2XVw-3sAX_8uhvr&_nc_ht=scontent.fpoa28-1.fna&oh=b86133bb3c690531c310f48961d837a0&oe=60A9B2D9"  width="600px" />
          
          </Imagem>
        <Titulo> Bruno Rodrigues </Titulo>
        <Paragrafo> Sou apaixonado por tecnologia. Adoro estar sempre aprendendo coisas novas e evoluindo com isso.
          Gosto de estar na companhia da minha família. Eles são tudo para mim.</Paragrafo>
          <Paragrafo>
          Sei que ainda tenho muito a aprender , mas tenho certeza que vou conseguir atingir meu objetivo de ser um programador.
           </Paragrafo>
        <hr></hr>
        <TituloContatos> Deixe seu contato para conversarmos! </TituloContatos>
        <Mensagens key={props.id} />
        </Container>
      </Grid>
    
  );
}
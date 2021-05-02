import React from 'react';
import { Imagem, Paragrafo, Titulo, TituloContatos } from './style.js'
import Grid from '@material-ui/core/Grid';
import Menu from '../../components/Menu';
import { Container } from '@material-ui/core';
import Mensagens from '../Scraps/index';
import Skills from '../../components/Skills';





export default function Curriculo(props) {

  return (
      <Grid component="main" maxWidth="md">
        <Menu />
          
            <Container  maxWidth="md">
           <Imagem>   
            <img src="https://scontent.fpoa28-1.fna.fbcdn.net/v/t1.6435-9/177609245_828026031131386_5380349706296926054_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeHPMyhKfbA24-o8NaRq5xPbP3H5LBR17Ew_cfksFHXsTJ1tuA_pIw3TDfk607ThzlmtW95djIzBZGeh-0qHYoWa&_nc_ohc=IxRO-cHZDGUAX9dtElT&_nc_ht=scontent.fpoa28-1.fna&oh=144c854ef563c0b6c7b0214992a15bd8&oe=60ADA721"  width="250px" />
          
          </Imagem>
        <Titulo> Bruno Rodrigues </Titulo>
        <Paragrafo>Moro em São Leopoldo, tenho 34 anos e moro com minha esposa e meu filho de 8 anos de idade. </Paragrafo>
        <Paragrafo> Sou apaixonado por tecnologia. Adoro estar sempre aprendendo coisas novas e evoluindo com isso.
          Gosto de estar na companhia da minha família. Eles são tudo para mim.</Paragrafo>
          <Paragrafo>
          Sei que ainda tenho muito a aprender , mas tenho certeza que vou conseguir atingir meu objetivo de ser um programador.
          Acredito que, quando eu tiver a oportunidade de estar diariamente trabalhando com programação, a minha evolução será muito mais rápida.
          
           </Paragrafo>
           <hr></hr>
           <TituloContatos> Skills </TituloContatos>
           <Paragrafo>Algumas tecnologias que aprendi durante a 3º edição do Programa Starter da Growdev.</Paragrafo>
           <Skills />
        <hr></hr>
        <TituloContatos> Deixe uma mensagem! </TituloContatos>
        <Mensagens key={props.id} />
        </Container>
      </Grid>
    
  );
}
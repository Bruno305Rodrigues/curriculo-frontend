import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MeuRecado from '../../components/Recado';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

/*
const scraps = [
  {
    title: 'Título',
    longText: 'Descrição longa'
  },
  {
    title: 'Segundo recado',
    longText: 'Descrição longa do segundo recado'
  }
];
*/



export default function Scraps() {
  const classes = useStyles();

  const [scraps, setScraps] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [telefone, setDescricao] = useState("");
  const [email, setEmail] = useState("");


  function clicou(e) {
    if(e.key === "A") {
      alert('clicou no A');
    }
  }

 async function novoScrap() {

   const dados = await api.post('/contatos',{
     name: titulo,
     phone: telefone,
     email: email,
   })
    return dados.data
           
        
  }

  useEffect(() => {
    BuscaDados();
  }, []);

 async function BuscaDados() {
   const dados = await api.get("/")
    
      return  setScraps(dados.data);
     
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
      
      
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Título"
                autoFocus
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Telefone"            
                value={telefone}
                onChange={e => setDescricao(e.target.value)}
                onKeyDown={e => clicou(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"              
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => clicou(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={novoScrap}
          >
            Salvar
          </Button>
        </form>
      </div>   

      <Grid container spacing={5} alignItems="flex-end">
        {scraps.map((scrap) => (
          <MeuRecado reload={BuscaDados} key={scrap.id} scrap={scrap}  />
        ))}
      </Grid>
    </Container>
  );
}
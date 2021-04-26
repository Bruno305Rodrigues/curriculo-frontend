import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea } from '@material-ui/core';


export default function Recado(props) {

    // Aqui eu tenho o scrap inteiro
    // props.scrap.id -> pra deletar
  

    return (
        <Grid item key={props.scrap.titulo} xs={12} sm={12} md={6}>
            <Card>
                <CardActionArea>
                   
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Nome: {props.scrap.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Telefone: {props.scrap.phone}
                           
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Email: {props.scrap.email}
                           
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button size="small" color="primary"
                    >
                        Obrigado pelo contato!
                </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
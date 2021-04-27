import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouteWrapper';
import Curriculo from '../pages/Curriculo';
import Contatos from '../pages/Contatos';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Curriculo}/>
                <Route path="/contatos" exact component={Contatos}/>


            </Switch>
        </BrowserRouter>
    ); 
}
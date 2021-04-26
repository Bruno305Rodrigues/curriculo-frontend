import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouteWrapper';
import Curriculo from '../pages/Curriculo';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Curriculo}/>

            </Switch>
        </BrowserRouter>
    ); 
}
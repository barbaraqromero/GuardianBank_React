import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './auth';
import Login from './components/pages/login';
import Cadastro from './components/pages/cadastro';
import CadastroInfo from './components/pages/infos';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/usuario' component={Cadastro}/>
            <PrivateRoute path='/infos' component={CadastroInfo}></PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;
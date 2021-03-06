import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../Components/Pages/Home/Home';
import Layout from '../../Components/Layout/Layout';
import Login from '../../Components/Pages/Login/Login';
import SignUp from '../../Components/Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/signup' component={SignUp}></Route>
                <Layout>
                    <PrivateRoute path="/home" component={Home}/>
                </Layout>
            </Switch>
        </Router>

    );
}
export default Routes

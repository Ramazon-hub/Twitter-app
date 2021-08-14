
import './App.css';
import  { Switch,Route} from 'react-router-dom'
//  PAGES
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp/SignUp';
import Error from './pages/Error/Error';

//  COMPONENTS
//CONTEXT
// ROUTES
import Public from './router/Public';
import Private from './router/Private';
function App() {
    return (
        <>
            <Switch>
                    <Public path='/' component={Home} exact /> 
                    <Public path='/login' component={Login}  />
                    <Private path='/profile' component={Profile}  />   
                    <Public path='/signup' component={SignUp} />
                    <Route path="*" component={Error} />    
            </Switch>
        </>
    );
}

export default App;

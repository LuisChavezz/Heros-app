
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";


export const AppRouter = () => {
    
    
    
    return (
        <Router>
            <div>
                {/* <Navbar /> */}

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />

                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
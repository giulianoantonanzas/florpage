import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from '../components/Navbar/'
import Footer from '../components/Footer/'
import Home from './../screens/Home/'

const Navigation = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path={"/"} component={Home} />
                {/*
                <Route path={"/services"} component={ } />
                <Route path={"/about"} component={ } />
                <Route path={"/contact"} component={ } />
                 */}
            </Switch>
            <Footer />
        </Router>
    );
}

export default Navigation
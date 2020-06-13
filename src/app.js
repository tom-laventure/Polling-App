import React, {Component} from 'react'
import { render } from '@testing-library/react'
import Homepage from './Containers/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <Switch>
                <Route path="/" component={Homepage}/>
            </Switch>
        );
    }
}

export default App
import react, {Component} from "react";
import Lead from './components/pages/Lead';
import './App.css'

export default class App extends Component{
    render(){
        return(
            <div className="App">
                <Lead/>
            </div>
        )
    }
}
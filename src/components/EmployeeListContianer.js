import { Component } from "react";
import EmployeeList from "./EmployeeList";
import API from "../utils/API"


class EmployeeListContianer extends Component {
    state = {
        results: []
    }
    renderEmployeeList = ()=>{
        API.search()
             .then(res => {
                console.log(res.data.results)
                this.setState({ results: res.data.results })
             })
                
             .catch(err => console.log(err));;
     }

    componentDidMount(){
        this.renderEmployeeList()
    }

    render(){
        return ( 
            
            <EmployeeList results={this.state.results} />
         );
    };
}
 
export default EmployeeListContianer;
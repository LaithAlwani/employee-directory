import { Component } from "react";
import Searchbar from "./Searchbar"
import EmployeeList from "./EmployeeList";
import API from "../utils/API"


class EmployeeListContianer extends Component {
    state = {
        results: []
    }
    renderEmployeeList = ()=>{
        API.search()
             .then(res => {
                this.setState({ results: res.data.results })
             })  
             .catch(err => console.log(err));;
     }

    componentDidMount(){
        this.renderEmployeeList()
    }
    
    handleDelete = id=>{
        const employeeList = this.state.results.filter(employee => employee.id.value !== id);
        this.setState({results:employeeList});
    }

    render(){
        return ( 
            <div className= "">
                <Searchbar />
                <EmployeeList 
                results={this.state.results}
                handleDelete={this.handleDelete}
                />
            </div>
            
         );
    };
}
 
export default EmployeeListContianer;
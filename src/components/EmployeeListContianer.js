import { Component } from "react";
import Searchbar from "./Searchbar";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";
import _get from "lodash/get";

class EmployeeListContianer extends Component {
  state = {
    results: [],
    toggle: true,
    searchInput: "",
  };
  renderEmployeeList = () => {
    API.search()
      .then((res) => {
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.renderEmployeeList();
  }

  handleDelete = (id) => {
      // eslint-disable-next-line no-restricted-globals
      const confirmDelete = confirm("Are you sure you want to delete the employee?");
      if(confirmDelete === true){
        const employeeList = this.state.results.filter(
            (employee) => employee.id.value !== id
          );
          this.setState({ results: employeeList });
      }else{
          return
      }
    
  };

  sortByName = (param) => {
    const sortedEmployeeList = this.state.results.sort((emp1, emp2) =>
      this.state.toggle
        ? _get(emp1, param).localeCompare(_get(emp2, param))
        : _get(emp2, param).localeCompare(_get(emp1, param))
    );
    this.setState({ results: sortedEmployeeList, toggle: !this.state.toggle });
  };

  searchFilter = (event) => {
    // const newEmployeeList = this.state.results.filter(employee => employee.name.first === input)
    this.setState({ searchInput: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <div className="container">
        <Searchbar search={this.searchFilter} />
        <EmployeeList
          searchInput={this.state.searchInput}
          results={this.state.results}
          handleDelete={this.handleDelete}
          sortByName={this.sortByName}
        />
      </div>
    );
  }
}

export default EmployeeListContianer;

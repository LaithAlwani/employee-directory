const EmployeeList = (props) => {
    return ( 
        <div className="container">
            
                {props.results.map(result => (
                    <div>
                        <img src={result.picture.thumbnail} alt="employee"/>
                        <p>{result.name.title}. {result.name.first} {result.name.last}</p> 
                    </div>
                ))}
                    
                   
            
        </div>
     );
}
 
export default EmployeeList;
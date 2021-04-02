const EmployeeList = ({results, handleDelete}) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id.value}>
          <img src={result.picture.thumbnail} alt="employee" />
          <p>
            {result.name.title}. {result.name.first} {result.name.last}
          </p>
          <button className="btn btn-danger mb-2" onClick={()=> handleDelete(result.id.value) }>Delete Employee</button>
        </div>
        
      ))}
    </div>
  );
};

export default EmployeeList;

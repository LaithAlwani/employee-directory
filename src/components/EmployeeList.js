const EmployeeList = ({ results, handleDelete }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">location</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
          {results.map(result=>(
          <tr>
            <td><img src={result.picture.thumbnail} alt=""/> </td>
            <td>{result.name.first} {result.name.last}</td>
            <td>{result.email}</td>
            <td>{result.location.city}</td>
            <td><button className="btn ml-auto" onClick={() => handleDelete(result.id.value)}>X</button></td>
        </tr>
          ))}
        
      </tbody>
    </table>
  );
};

export default EmployeeList;

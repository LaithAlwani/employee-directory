const EmployeeList = ({ results, handleDelete, sortByName, searchInput }) => {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" onClick={()=>sortByName("name.first")}>Name</th>
          <th scope="col" className="email">Email</th>
          <th scope="col" onClick={()=>sortByName("location.city")}className="city">location</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
          {results.filter(result=> `${result.name.first}${result.name.last}`.toLowerCase().startsWith(searchInput)).map(result=>( 
          <tr key={result.id.value}>
            <td><img src={result.picture.thumbnail} alt=""/> </td>
            <td>{result.name.first} {result.name.last}</td>
            <td className="email">{result.email}</td>
            <td className="city">{result.location.city}</td>
            <td><button className="btn deleteBtn ml-auto" onClick={() => handleDelete(result.id.value)}>X</button></td>
        </tr>
          ))}
        
      </tbody>
    </table>
  );
};

export default EmployeeList;

const TableHead = ({ columns }) => {
  // ...
  const handleSortingChange = (accessor) => {
   console.log(accessor);
  };
  return (
   <thead>
    <tr>
     {columns.map(({ label, accessor }) => {
      return (
       <th key={accessor} onClick={() => handleSortingChange(accessor)}>
        {label}
       </th>
      );
     })}
    </tr>
   </thead>
  );
 };
 
 export default TableHead;
import './App.css';

function Table({ headers = [], rows = []}) {
  return (
    <table className="w-full">
      <thead className='border-b-2 border-gray-200'>
        <tr>
          {
            headers.map(item => (
              <th className={`text-left p-2 ${item.className}`}>{item.value}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map((item, index) => (
            <tr key={index} className='border-b-2 border-gray-200'>
              <td className='flex row p-1 py-2'>
                <img src={item.logo_url} alt={item.contract_name} className="h-6 pr-2" />
                <span className='font-medium'>{item.contract_name}</span>
              </td>
              <td className='font-medium text-right'>{item.quote}</td>
            </tr>
          ))
        }
        
      </tbody>
    </table>
  );
}

export default Table;

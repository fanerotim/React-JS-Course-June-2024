import './Table.css'
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';

const Table = () => {

  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({value: 1});

  useEffect(() => {
    console.log('re-render')
  }, [loading, value])

  function checkLoading(data) {
    setLoading(data);
  }

  function shouldRerenderComp(data) {
    setValue(() => {
      setValue({value: 2})
    })
  }

  return (
    <>
    {loading && <Spinner/>}
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        <Item checkLoading={checkLoading} shouldRerender={shouldRerenderComp}/>
      </tbody>
    </table>
    </>
  )
}

export default Table;
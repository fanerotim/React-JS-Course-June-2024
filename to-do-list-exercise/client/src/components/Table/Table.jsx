import './Table.css'
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';

const Table = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, [loading])

  function checkLoading(data) {
    setLoading(data);
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
        <Item checkLoading={checkLoading} />
      </tbody>
    </table>
    </>
  )
}

export default Table;
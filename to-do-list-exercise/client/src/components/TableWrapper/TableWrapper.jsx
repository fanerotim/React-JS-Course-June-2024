import './TableWrapper.css'
import Spinner from '../Spinner/Spinner';
import Table from '../Table/Table';

const TableWrapper = () => {
    return (
        <div className="table-wrapper">
            {/* <Spinner/> */}
            <Table/>
        </div>
    )
}

export default TableWrapper;
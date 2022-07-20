import React, {useState} from "react";

const TableSearch = props => {
    const [value, setValue] = useState('');

    const onValueChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <button onClick={() => props.onSearch(value)} className="btn btn-outline-secondary">Search</button>
            </div>
            <input value={value} onChange={onValueChange} type="text" className="form-control" />
        </div>
    )
}
export default TableSearch;
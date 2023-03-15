import React from 'react'

const EditAbleRow = ({ changeEditValue, handelInputOfEditFields, saveFieldAfterEditing }) => {
    return (
        <tr>
            <td>
                <input type="text" name='fullName' className="form-control" value={changeEditValue.fullName} onChange={handelInputOfEditFields} />
            </td>
            <td>
                <input type="text" name='lastName' className="form-control" value={changeEditValue.lastName} onChange={handelInputOfEditFields} />
            </td>
            <td>
                <input type="email" name='email' className="form-control" value={changeEditValue.email} onChange={handelInputOfEditFields} />
            </td>
            <td>
                <input type="text" name='phone' className="form-control" value={changeEditValue.phone} onChange={handelInputOfEditFields} />
            </td>
            <td>
                <input type="text" name='adress' className="form-control" value={changeEditValue.adress} onChange={handelInputOfEditFields} />
            </td>
            <td>
                <input type="number" name='zip' className="form-control" value={changeEditValue.zip} onChange={handelInputOfEditFields} />
            </td>
            <td>
                <button onClick={saveFieldAfterEditing}>  
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="green" className="bi bi-save2" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default EditAbleRow
import { React, useState, Fragment } from 'react'
import Data from './data.json'
import { nanoid } from 'nanoid'
import ReadOnlyRow from './ReadOnlyRow'
import EditAbleRow from './EditAbleRow'

const Ytform = () => {
    const [contact, setcontact] = useState(Data)

    // defult value of input field
    const [inputValues, setinputValues] = useState({
        fullName: '',
        lastName: '',
        email: '',
        phone: '',
        adress: '',
        zip: ''
    });

    // open edit field According to its id
    const [openEditFields, setopenEditFields] = useState(null)

    // entering the value in the input fields after opening the input fields
    const [changeEditValue, setchangeEditValue] = useState({
        fullName: '',
        lastName: '',
        email: '',
        phone: '',
        adress: '',
        zip: ''
    })

    // Handling input values of {Form} fields like updating value of hook's object
    const handelInput = (event) => {
        event.preventDefault();

        // geting name attribute of the fields
        const fieldName = event.target.getAttribute('name');
        // getting value of the field
        const fieldValue = event.target.value;

        // holding the value of input field
        const newFieldValue = { ...inputValues };
        // adding fields value to the holded constant 'newFieldValue' according to the field name
        newFieldValue[fieldName] = fieldValue;

        // updating the value of hook
        setinputValues(newFieldValue)

        // testing
        // console.log(inputValues);
    }

    // Handling input values of Editing input fields of {table} row like updating value of hook's object
    const handelInputOfEditFields = (event) => {
        event.preventDefault();

        // geting name attribute of the fields
        const fieldName = event.target.getAttribute('name');
        // getting value of the field
        const fieldValue = event.target.value;

        // holding the value of input field
        const newFieldValue = { ...changeEditValue };
        // adding fields value to the holded constant 'newFieldValue' according to the field name
        newFieldValue[fieldName] = fieldValue;

        // updating the value of hook
        setchangeEditValue(newFieldValue)

        // testing
        // console.log(inputValues);
    }

    // save after eding the edit Able field
    const saveFieldAfterEditing = (event) => {
        event.preventDefault();

        // declare the new value of the object after clicing save button
        const saveAfterEditing = {
            id: openEditFields,
            fullName: inputValues.fullName,
            lastName: inputValues.lastName,
            email: inputValues.email,
            phone: inputValues.phone,
            adress: inputValues.adress,
            zip: inputValues.zip
        }

        const newContacts = [...contact]
        const index= contact.findIndex((contact)=>contact.id===openEditFields)
        newContacts[index]= saveAfterEditing

        // set the newly added values of the input field
        setcontact(newContacts);
        setopenEditFields(null);
    }

    // submit form
    const submitForm = (event) => {
        event.preventDefault();

        // object that have value of 'inputValu' hook's object
        const newContacts = {
            id: nanoid(),
            fullName: inputValues.fullName,
            lastName: inputValues.lastName,
            email: inputValues.email,
            phone: inputValues.phone,
            adress: inputValues.adress,
            zip: inputValues.zip
        }

        // assigen incoming input value to the 'newContacts' object
        const contactData = [...contact, newContacts]
        setcontact(contactData);
    }

    // set id 'editContact' hook to decide which row is to be edit
    const editRowData = (event, contact) => {
        event.preventDefault();
        setopenEditFields(contact.id)

        const newChangeEditValue = {
            id: nanoid(),
            fullName: inputValues.fullName,
            lastName: inputValues.lastName,
            email: inputValues.email,
            phone: inputValues.phone,
            adress: inputValues.adress,
            zip: inputValues.zip
        }
        // set hooks value that that have object which have empty value initially
        setchangeEditValue(newChangeEditValue)
    }
    return (
        <div>
            <div className="">
                {/* Content Wrapper. Contains page content */}
                <div className=" mb-5">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1 className="text-center text-xl">Contact Mannagement System</h1>
                    </section>
                    {/* Main content */}
                    <section className="content mt-2 ">
                        <form onSubmit={submitForm}>
                            <div className="container">
                                {/* First Row */}
                                <div className="form-row">
                                    {/* First Name */}
                                    <div className="form-group col-md-4">
                                        <label >First Name</label>
                                        <input type="text" name='fullName' className="form-control" onChange={handelInput} />
                                    </div>
                                    {/* Last Name */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="lName">Last Name</label>
                                        <input type="text" name='lastName' className="form-control" onChange={handelInput} />
                                    </div>
                                    {/* Email */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' className="form-control" onChange={handelInput} />
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="form-row">

                                    {/* phone */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="phone" name='phone' className="form-control" onChange={handelInput} />
                                    </div>
                                    {/* Adress */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="text">Adress</label>
                                        <input type="text" name='adress' className="form-control" onChange={handelInput} />
                                    </div>
                                    {/* Zip Code */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="zip">Zip code</label>
                                        <input type="number" name='zip' className="form-control" onChange={handelInput} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" >Add</button>
                            </div>
                        </form>

                        {/* /.Start Table */}
                        <div className="card mt-3 ">
                            <div className="card-header">
                                <h3 className="card-title">Details</h3>
                            </div>
                            {/* /.card-header */}
                            <form onSubmit={saveFieldAfterEditing}>

                                <div className="card-body">
                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                {/* <th>#</th> */}
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Adress</th>
                                                <th>Zip Code</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contact.map((newDataMaped) => (
                                                <Fragment>
                                                    {openEditFields === newDataMaped.id ? (<EditAbleRow changeEditValue={changeEditValue} handelInputOfEditFields={handelInputOfEditFields} saveFieldAfterEditing={saveFieldAfterEditing}/>)
                                                        :
                                                        (<ReadOnlyRow newData={newDataMaped} editRowData={editRowData} />)}
                                                </Fragment>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                {/* <th>#</th> */}
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Adress</th>
                                                <th>Zip Code</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>

                                </div></form>
                            {/* /.card-body */}
                        </div>
                        {/* End Table */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>
        </div>
    )
}

export default Ytform
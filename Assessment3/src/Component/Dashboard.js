import React, { useState } from 'react'

export default function Dashboard() {

    const [data, setData] = useState({
        name: "",
        gender: "",
        age: "",
        designation: "",
        department: "",
        joiningDate: ""
    })


    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        let length = localStorage.length
        if (data.name.length > 0 && data.age.length > 0 && data.designation.length > 0 && data.department.length > 0 && data.joiningDate.length > 0) {

            if (Number.isInteger(parseInt(data.age))) {
                document.getElementById("employee-data").innerHTML += `
                <tr id=${data.name + length}>
                <td>${data.name}</td>
                <td>${data.department}</td>
                <td>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" defaultChecked />
                        <label class="custom-control-label" htmlFor="customCheck1"></label>
                    </div>
                </td>
                <td>
                    <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal"  id=${data.name + length}>
                        <i class="fa fa-edit"></i>&nbsp; Edit
                        </button>
                    <button type="button" class="btn btn-outline-danger btn-sm"  id=${data.name + length}>
                        <i class="fa fa-trash"></i>&nbsp; Delete
                        </button>
                </td>
                </tr>`
                alert("Data Added Successfully")
            } else {
                alert("Age must be an integer")
            }
        } else {
            alert("All fields are required")
        }


        // window.location.reload()
    }




    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="question-dashboard">
                            <div className="card mt-4 mb-3 mb-md-4">
                                <div className="card-body p-3">
                                    <h5 className="text-secondary mb-2">
                                        Available: <span className="font-weight-bold ml-1 text-dark">08</span>
                                    </h5>
                                    <h5 className="text-secondary">
                                        Total: <span className="font-weight-bold ml-1 text-dark">50</span>
                                    </h5>

                                    <button className="btn btn-primary mt-4" data-toggle="modal" data-target="#addEmployeeModal">
                                        <i className="fa fa-plus"></i>
                                        &nbsp; Add Employee
                                    </button>
                                </div>
                            </div>

                            <div className="table-responsive mt-3 mt-md-4 mb-2">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Available</th>
                                            <th>View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody id="employee-data">
                                        <tr>
                                            <td>Joseph</td>
                                            <td>Testing</td>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
                                                    <i className="fa fa-edit"></i>&nbsp; Edit
                                                    </button>
                                                <button type="button" className="btn btn-outline-danger btn-sm">
                                                    <i className="fa fa-trash"></i>&nbsp; Delete
                                                    </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Add Employee Modal */}
            <div className="modal fade" id="addEmployeeModal" tabIndex="-1" role="dialog" aria-labelledby="addEmployeeModal"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pt-3 pb-2">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmitHandler}>
                                <div className="form-row ">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Name"
                                            name="name"
                                            onChange={onChangeHandler}
                                            value={data.name}
                                            required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Gender</label>
                                        <select className="form-control" id="exampleFormControlSelect1"
                                            name="gender"
                                            onChange={onChangeHandler}
                                            value={data.gender}
                                        >
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Age</label>
                                        <input type="text" className="form-control" placeholder="Enter Age"
                                            name="age"
                                            onChange={onChangeHandler}
                                            value={data.age}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Designation</label>
                                        <input type="text" className="form-control" placeholder="Enter Designation"
                                            name="designation"
                                            onChange={onChangeHandler}
                                            value={data.designation} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Department</label>
                                        <input type="text" className="form-control" placeholder="Enter Department"
                                            name="department"
                                            onChange={onChangeHandler}
                                            value={data.department}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Joining Date</label>
                                        <input type="date" className="form-control" placeholder=""
                                            name="joiningDate"
                                            onChange={onChangeHandler}
                                            value={data.joiningDate} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
                            <button onClick={onSubmitHandler} type="button" className="btn btn-success btn-sm">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

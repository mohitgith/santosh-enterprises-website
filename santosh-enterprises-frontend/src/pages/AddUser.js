import React, { useState } from 'react'

export default function AddUser() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        let data = {
            username: username,
            password: password,
            role: role
        }

        console.log(data);

        if (data.role === '' || data.username === '' || data.password === '') {
            console.log("Some fields are required");
            e.preventDefault();
        } else {
            fetch("/user/add", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(data)
            })
                .then((response) => {
                    if (response.status === 201) {
                        console.log("User Added.");
                    }
                    else if (response.status === 409) {
                        console.log("Already exist.");
                    } else {
                        console.log(response.status);
                        throw new Error("Something went wrong.")
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    }
    return (
        <div className="row">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <br />
                <form className="row g-3">
                    <h3>Add User</h3>
                    <div className="col-md-6">
                        <label htmlFor="add-username" className="form-label">Email/Mobile No./Username</label>
                        <input type="text" className="form-control" id="add-username" value={username} onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="add-password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="add-password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="add-role" className="form-label">Role</label>
                        <select id="add-role" className="form-select" value={role} onChange={e => setRole(e.target.value)} required>
                            <option value='no-role'>Select Role</option>
                            <option id='admin' value='admin'>Admin</option>
                            <option id='consumer' value='consumer'>Consumer</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
                    </div>
                </form>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

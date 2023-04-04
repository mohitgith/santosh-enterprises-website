import React, { useState } from 'react';

const AddCourierModal = ({ handleModalData }) => {

    const [courierId, setCourierId] = useState('');
    const [courierName, setCourierName] = useState('');
    const [courierReceipt, setCourierReceipt] = useState(null);

    function arrayBufferToByteArray(buffer) {
        const bytes = new Uint8Array(buffer);
        const byteArray = [];

        for (let i = 0; i < bytes.byteLength; i++) {
            byteArray.push(bytes[i]);
        }

        return byteArray;
    }


    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            const fileData = reader.result;
            const byteArray = arrayBufferToByteArray(fileData);
            setCourierReceipt(byteArray)
        };
    };


    const handleSubmit = () => {

        handleModalData(courierId);

        let data = {
            courierTrackingId: courierId,
            courierName: courierName,
            courierReceipt: courierReceipt
        }

        // const data = new FormData();
        // data.append('courierTrackingId', courierId);
        // data.append('courierName', courierName);
        // data.append('courierReceipt', courierReceipt);

        console.log("Courier Data: ", data);

        fetch("/consignment/courier", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log("Courier Entry Added.");
                }
                // else if (response.status === 409) {
                //     console.log("Courier Already exist.");
                // } 
                else {
                    console.log(response.status);
                    // throw new Error("Something went wrong.")
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Courier Info</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12">
                                <label htmlFor="tracking-no" className="form-label">Courier Tracking ID/Docket ID</label>
                                <input type="text" className="form-control" id="tracking-no" onChange={(e) => setCourierId(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="courier-name" className="form-label">Courier Name</label>
                                <input type="text" className="form-control" id="courier-name" onChange={(e) => setCourierName(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="courier-reciept" className="form-label">Courier Reciept</label>
                                <input type="file" className="form-control" id="courier-reciept" onChange={handleFileInputChange} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCourierModal;
import React, { useState } from 'react';
import AddCourierModal from './AddCourierModal';
import '../styles/Buttons.css'

const AddCourierAccordian = (props) => {

    const [access, setAccess] = useState(false);
    const [selectedOption, setSelectedOption] = useState('existing');
    // const [couriers, setCouriers] = useState([]);

    const handleModalData = (data) => {
        props.onChildData(data);
    }

    const handleClick = (e) => {
        // console.log("Value: ", e.target.value);
        setSelectedOption(e.target.value);
        if (selectedOption === "new") {
            setAccess(false);
            // console.log(access);
        } else {
            setAccess(true);
            // console.log(access);
        }
    }

    // useEffect(() => {
    //     fetch('/consignment/courier/all')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setCouriers(data);
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    // }, []);

    // const dispayData = couriers.map((courier) => {
    //     return (
    //         <option key={courier.courierTrackingId} value={courier.courierTrackingId}>{courier.courierTrackingId}</option>
    //     )
    // })

    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Courier Info
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="existing-rb" value='existing' onChange={handleClick} checked={selectedOption === 'existing'} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Existing
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="new-rb" value='new' onChange={handleClick} checked={selectedOption === 'new'} data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            New
                                        </label>
                                        <AddCourierModal handleModalData={handleModalData} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <select id="courier-id" className="form-select" disabled={access}>
                                        <option defaultValue>Select Tracking/Docket Id</option>
                                        {/* {dispayData} */}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddCourierModal />
        </div>
    );
}

export default AddCourierAccordian;
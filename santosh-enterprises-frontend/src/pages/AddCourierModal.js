import React from 'react';

const AddCourierModal = () => {
    return(
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
                            <input type="text" className="form-control" id="tracking-no"/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="courier-name" className="form-label">Courier Name</label>
                            <input type="text" className="form-control" id="courier-name"/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="courier-reciept" className="form-label">Courier Reciept</label>
                            <input type="file" className="form-control" id="courier-reciept"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark">Save</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCourierModal;
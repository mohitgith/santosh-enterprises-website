import React, { useState } from 'react';

const DeleteProductModal = () => {
    const [productNo, setProductNo] = useState("");
    const [productName, setProductName] = useState("");

    function handleSaveClick() {

        let data = {productNo, productName};
        fetch("/product", {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)
        })
        .then((response) => {
        })
    }

    return(
        <div>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Delete
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Delete Product</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="col-md-12">
                        <label htmlFor="part-no" className="form-label">Product No.</label>
                        <input type="text" className="form-control" id="part-no" value={productNo} readOnly/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="part-name" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="part-name" value={productName} readOnly/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={handleSaveClick}>Save</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default DeleteProductModal;
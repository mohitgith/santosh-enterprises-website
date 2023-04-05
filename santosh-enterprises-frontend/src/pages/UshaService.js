import { React, useState } from 'react';
import AddCourierAccordian from './AddCourierAccordian';
import "../styles/Divider.css"

const UshaService = ({ products }) => {

    const [dispatchDate, setDispatchDate] = useState('');
    const [invoiceNo, setInvoiceNo] = useState('');
    const [invoiceDate, setInvoiceDate] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [netPrice, setNetPrice] = useState(0);
    const [partNum, setPartNum] = useState('');
    const [price, setPrice] = useState('');
    const [courierData, setCourierData] = useState();
    const [submitData, setSubmitData] = useState(false);
    const [today, setToday] = useState('');
    const [fiveYearsAgoStr, setFiveYearsAgoStr] = useState('');

    const dataRange = () => {
        setToday(new Date().toISOString().slice(0, 10)); // Get today's date
        const fiveYearsAgo = new Date();
        fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
        setFiveYearsAgoStr(fiveYearsAgo.toISOString().slice(0, 10));
    }

    const dispayData = products.map((partNo) => {
        return (
            <option key={partNo.productNo} value={partNo.productNo}>{partNo.productNo}</option>
        )
    })

    const handleChange = (e) => {
        let product = products.find(data => data.productNo === e.target.value);
        if (product !== undefined) {
            setPartNum(product.productNo);
            setProductName(product.productName);
        }
        else {
            setPartNum("");
            setProductName("");
        }
    }

    const getQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const calculateNetPrice = (e) => {
        setPrice(e.target.value);
        let tax = quantity * e.target.value * 0.18
        setNetPrice((quantity * e.target.value) + tax);
    }

    const handleChildData = (courierObj) => {
        setCourierData(courierObj);
    }

    const validateData = (data) => {
        if ((data.invoiceNo === null || data.invoiceNo === "") ||
            (data.invoiceDate === null || data.invoiceDate === "") ||
            (data.partNo === null || data.partNo === "") ||
            (data.partName === null || data.partName === "") ||
            (data.quantity === null || data.quantity === "") ||
            (data.price === null || data.price === "") ||
            (data.netPrice === null || data.netPrice === "") ||
            (data.dispatchDate === null || data.dispatchDate === "") ||
            (data.courier === null || data.courier === {})) {
            setSubmitData(false)
        } else {
            setSubmitData(true);
        }
    }

    const handleSaveClick = async (e) => {

        let data = {
            invoiceNo: invoiceNo,
            invoiceDate: invoiceDate,
            partNo: partNum,
            partName: productName,
            quantity: quantity,
            price: price,
            netPrice: netPrice,
            dispatchDate: dispatchDate,
            courier: courierData
        };
        console.log("Consignment Data: ", data);

        validateData(data);

        console.log(submitData);

        if (submitData === false) {
            e.preventDefault();
        } else {
            await fetch("/consignment", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(data)
            })
                .then((response) => {
                    if (response.status === 201) {
                        console.log("Entry Added.");
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
                    <h3>New Consignment Dispatch</h3>
                    <div className="col-md-4">
                        <label htmlFor="dispatch-date" className="form-label">Dispatch Date</label>
                        <input type="date" className="form-control" id="dispatch-date" value={dispatchDate} min={fiveYearsAgoStr} max={today} onClick={dataRange} onChange={(e) => setDispatchDate(e.target.value)} required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoice-no" className="form-label">Invoice No.</label>
                        <input type="text" className="form-control" id="invoice-no" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoice-date" className="form-label">Invoice Date</label>
                        <input type="date" className="form-control" id="invoice-date" value={invoiceDate} min={fiveYearsAgoStr} max={today} onClick={dataRange} onChange={(e) => setInvoiceDate(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="part-no" className="form-label">Part No.</label>
                        {/* <input type="text" className="form-control" id="part-no"/> */}
                        <select id="part-no" className="form-select" onChange={handleChange} required>
                            <option className="form-control" value='select-part' defaultValue>Select Part No.</option>
                            {dispayData}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="part-name" className="form-label">Part Name</label>
                        <input className="form-control" type="text" value={productName} aria-label="readonly input example" readOnly />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="quantity" value={quantity} onChange={getQuantity} required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="price-per-item" className="form-label">Price</label>
                        <input type="text" className="form-control" id="price-per-item" value={price} onChange={calculateNetPrice} required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="tax-percent" className="form-label">GST %</label>
                        <input className="form-control" type="text" value="18" aria-label="Disabled input example" disabled readOnly />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="net-value" className="form-label">Net Value</label>
                        <input className="form-control" type="text" value={netPrice} aria-label="readonly input example" readOnly />
                    </div>
                    <div className="col-md-12">
                        {/* <hr data-content="Courier Info" class="hr-text" /> */}
                        <AddCourierAccordian onChildData={handleChildData} />
                    </div>
                    <div className="col-1 me-3">
                        <button type="submit" className="btn btn-dark" onClick={handleSaveClick}>Save</button>
                    </div>
                    {/* <div className="col-1">
                        <button type="submit" className="btn btn-dark">Export</button>
                    </div> */}
                </form>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default UshaService
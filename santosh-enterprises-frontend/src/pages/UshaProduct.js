import { React } from 'react';
import { Link } from 'react-router-dom';
import AddProductModal from '../pages/AddProductModal';
import "../styles/Input.css";
import "../styles/Pagination.css";
import DeleteProductModal from './DeleteProductModal';
import ModifyProductModal from './ModifyProductModal';

const UshaProduct = ({ products }) => {

    const dispayData = products.map((partNo) => {
        return (
            <tr>
                <td className='text-center'>{partNo.productNo}</td>
                <td className='text-center'>{partNo.productName}</td>
                <td className='text-center'>
                    <div class="btn-group" role="group">
                        <ModifyProductModal/>
                        <DeleteProductModal/>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <div className="row">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <br />
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <AddProductModal />
                </div>
                <br />
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <nav>
                        <ul class="pagination">
                            <li class="page-item"><Link class="page-link" to="/product/usha">Previous</Link></li>
                            <li class="page-item"><Link class="page-link" to="/product/usha">1</Link></li>
                            <li class="page-item"><Link class="page-link" to="/product/usha">2</Link></li>
                            <li class="page-item"><Link class="page-link" to="/product/usha">3</Link></li>
                            <li class="page-item"><Link class="page-link" to="/product/usha">Next</Link></li>
                        </ul>
                    </nav>
                </div>
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col" className='text-center'>Product ID</th>
                            <th scope="col" className='text-center'>Product Name</th>
                            <th scope="col" className='text-center'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dispayData}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UshaProduct;
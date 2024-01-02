import { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const perPage = 2; // Number of items per page

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]); // Fetch products whenever the page changes

    const fetchProducts = (page) => {
        http.get(`/products?page=${page}&per_page=${perPage}`).then(res => {
            setProducts(res.data.data);
            setCurrentPage(res.data.current_page);
            setTotalPages(res.data.last_page);
        });
    };

    const deleteUser = (id) => {
        http.delete(`/products/${id}`).then(res => {
            fetchProducts(currentPage); // Refresh the product list after deletion
        });
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <div>
            <h2>Products List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/products/edit/" + product.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/products/view/" + product.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => { deleteUser(product.id) }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        http.get('/products/' + id + '/edit').then((res) => {
            setInputs({
                name: res.data.name,
                price: res.data.price,
                description: res.data.description,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        http.put('/products/' + id, inputs).then((res) => {
            navigate('/products');
        })
    }
    return (
        <div>
            <h2>Edit Product</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                            value={inputs.name || ''}
                            onChange={handleChange}
                        />

                        <label>Price</label>
                        <input type="number" name="price" className="form-control mb-2"
                            value={inputs.price || ''}
                            onChange={handleChange}
                        />
                        <label>Description</label>
                        <input type="text" name="description" className="form-control mb-2"
                            value={inputs.description || ''}
                            onChange={handleChange}
                        />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
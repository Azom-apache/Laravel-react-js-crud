import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../http'

export default function Create() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        http.post('/products', inputs).then((res) => {
            navigate('/products');
        })
    }
    return (
        <div>
            <h2>New product</h2>
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

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
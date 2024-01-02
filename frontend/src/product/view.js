import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function View(props) {
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
    return (
        <div>
            <h2>View Products</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h4>Name</h4>
                        <p>{inputs.name}</p>
                        <h4>Price</h4>
                        <p>{inputs.price}</p>
                        <h4>Description</h4>
                        <p>{inputs.description}</p>

                    </div>
                </div>
            </div>
        </div>

    )
}
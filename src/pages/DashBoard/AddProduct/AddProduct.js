
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/title/UseTitle';

const AddProduct = () => {
    useTitle('Add Product')
    const navigate = useNavigate()
    const handleProduct = event => {

        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const name = form.name.value;
        const image_url = form.img.value;
        const rating = form.rating.value;
        const location = form.location.value;
        const year_of_used = form.year_of_used.value;
        const original_price = form.original_price.value;
        const resale_price = form.resale_price.value;
        const time = form.time.value;
        const total_view = form.total_view.value;


        const product = {
            title,
            name,
            image_url,
            rating,
            location,
            year_of_used,
            original_price,
            resale_price,
            time,
            total_view
        }
        console.log(product)
        fetch('https://phonemax-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Added Successful');
                    navigate('/product')
                }
                else {
                    toast.error(data.message);
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleProduct}>


                <div className='grid grid-cols-1 lg:grid-cols-2 my-12'>
                    <input name="title" type="text" placeholder="Your title" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="name" type="text" placeholder="Your Name" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="img" type="text" placeholder="Your Image" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="rating" type="text" placeholder="Your rating" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="location" type="text" placeholder="Your location" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="year_of_used" type="text" placeholder="year of used" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="original_price" type="text" placeholder="original_price" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="resale_price" type="text" placeholder="resale_price" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="time" type="text" placeholder="Time" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                    <input name="total_view" type="text" placeholder="total_view" className="input input-ghost border-red-800 mt-6 mr-16 input-bcommentsed" required />
                </div>
                <input className='btn btn-primary my-12 mx-6 px-6 font-bold' type="submit" value="Submit Now" />
            </form>
        </div>
    );
};

export default AddProduct;
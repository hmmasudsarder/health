import { Link } from "react-router-dom";

const Cart = ({ health }) => {
  const { name, id, image, description, price} = health;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-full w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {
            description?.length > 100 ? <p>{description.slice(0, 75)} <Link className="text-blue-600 font-bold" to={`/health/${id}`}>See More</Link> </p> : <p>{description}</p>
          }
          <h2 className="card-title">$ {price}</h2>
          <div className="card-actions justify-center pt-3">
            <button className="btn btn-info w-full text-white ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

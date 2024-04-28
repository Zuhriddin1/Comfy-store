import { useNavigate } from "react-router-dom";
function Card(props) {
  const { image, title, price } = props.data;
  // const { id } = props.id;
  // const navigate = useNavigate();
  // function handleRederekt() {
  //   navigate(`/product/${id}`);
  // }
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center items-center align-middle  mt-16">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="Products"
              className="cursor-pointer rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title cursor-pointer">{title}</h2>
            <p className="text-purple-500 cursor-pointer">${price / 100}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

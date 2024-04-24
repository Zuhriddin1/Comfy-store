import { Link } from "react-router-dom";
function HomeText() {
  return (
    <div>
      <div className="ml-56 mt-40 max-w-2xl">
        <h1 className="text-6xl font-semibold text-white">
          We are changing <br />
          the way people shop <br />
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <Link to={"/products"}>
          <button className="uppercase btn mt-10 btn-primary dark:btn-secondary">
            OUR PRODUCTS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeText;

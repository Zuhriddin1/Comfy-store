import { useState, useEffect, useContext } from "react";
import { FadeLoader } from "react-spinners";
import Card from "../pages/Card";
import { ThemeContext } from "../App";
function HomeProducts() {
  const [feature, setFeature] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    setLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setFeature(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="border-b border-base-300 pb-5">
        <h1
          className={`pt-24 ml-[220px]  text-3xl font-medium tracking-wider capitalize ${
            theme.theme == "light" ? "text-black" : "text-white"
          }`}
        >
          Featured Products
        </h1>
        <hr className="ml-[220px] mr-[220px] mt-4 text-black mb-5" />
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center align-middle  mt-0">
        <div>{loading && <FadeLoader size={21} />}</div>
        {feature &&
          feature.map((el, index) => {
            return (
              <div>
                {!loading && (
                  <Card data={el.attributes} id={el.id} key={index}></Card>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}
export default HomeProducts;

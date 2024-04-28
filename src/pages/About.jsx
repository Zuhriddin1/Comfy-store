import { useContext } from "react";
import { ThemeContext } from "../App";
function About() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <section className="py-20 items-center flex flex-wrap flex-row">
        <div className="translate-x-[600px] flex flex-row gap-2 sm:gap-x-6  items-center justify-center">
          <h1
            className={`text-4xl font-bold leading-none tracking-tight sm:text-6xl ${
              theme.theme == "light" ? "text-black" : "text-white"
            }`}
          >
            We love
          </h1>
          <div className="stats bg-primary shadow  dark:bg-secondary">
            <div className="stat">
              <div className="stat-title text-primary-content text-4xl font-bold tracking-widest cursor-pointer">
                Comfy
              </div>
            </div>
          </div>
        </div>
        <p
          className={`mt-6 text-lg leading-8 translate-y-32 -translate-x-40 max-w-2xl mx-auto ${
            theme.theme == "light" ? "text-black" : "text-white"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </section>
    </div>
  );
}
export default About;

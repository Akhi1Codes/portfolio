import streetFight from "../assets/project1.png";
import etchasketch from "../assets/project3.png";
import fastfood from "../assets/project4.png";
import weather from "../assets/project5.png";

const Home = () => {
  return (
    <>
      <div>
        <section>
          <p className="text-xl font-bold py-4">Hey,I&apos;m Akhil</p>
          <p className="text-base">
            A front-end developer passionate about building beautiful and
            user-friendly web applications with a focus on UI design and user
            experience.
          </p>
        </section>
        <section className="grid grid-cols-4 grid-rows-3 gap-3 py-8">
          <div className="col-span-2 blur-[2px] grayscale hover:filter-none">
            <a href="https://ar-akhil.github.io/RPS-Survival/" target="blank">
              <img
                src={streetFight}
                alt="streetfight project"
                className="object-cover h-[100%]"
              />
            </a>
          </div>
          <div className="col-span-3 row-span-2 blur-[2px] grayscale hover:filter-none ">
            <a href="https://ar-akhil.github.io/WeatherGaze" target="blank">
              <img
                src={weather}
                alt="weather project"
                className="object-cover h-[100%]"
              />
            </a>
          </div>
          <div className="row-span-2 blur-[2px] grayscale hover:filter-none">
            <a href="https://ar-akhil.github.io/Restaurant" target="blank">
              <img
                src={fastfood}
                alt="fastfood project"
                className="object-cover h-[100%]"
              />
            </a>
          </div>
          <div className="col-span-2 col-start-3 row-start-1 grayscale blur-[2px] hover:filter-none">
            <a href="https://ar-akhil.github.io/Etch-a-Sketch" target="blank">
              <img
                src={etchasketch}
                alt="etchasketch project"
                className="object-cover h-[100%]"
              />
            </a>
          </div>
        </section>
        <p className="text-base">
          I&apos;m proficient in HTML, CSS, and JavaScript, and I have
          experience with front-end framework and libraries like React. I&apos;m
          also skilled in creating/designing responsive designs.
        </p>

        <section className="py-3">
          <p className="text-lg font-bold py-4">Things i know/used</p>
          <div>
            <p>Programming Languages</p>
            <div>
              <ul className="flex gap-4 py-2 overflow-x-scroll">
                <li className="p-2 border-2 rounded-xl">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="blank"
                  >
                    Javascript
                  </a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/SQL"
                    target="blank"
                  >
                    SQL
                  </a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/Java"
                    target="blank"
                  >
                    Java
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p>Frameworks</p>
            <div>
              <ul className="flex gap-4 py-2 overflow-x-scroll">
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://react.dev/">ReactJs</a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://tailwindcss.com/">TailwindCSS</a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://nextjs.org/">NextJS</a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://getbootstrap.com/">Bootstrap</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p>Design Tools</p>
            <div>
              <ul className="flex gap-4 py-2 overflow-x-scroll">
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://www.figma.com/">Figma</a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://www.canva.com/en_in/">Canva</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p>Others</p>
            <div>
              <ul className="flex gap-4 py-2 overflow-x-scroll">
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://github.com/">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

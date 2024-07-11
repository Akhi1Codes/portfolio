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
            <img src={streetFight} className="object-cover h-[100%]" />
          </div>
          <div className="col-span-3 row-span-2 blur-[2px] grayscale hover:filter-none ">
            <img src={weather} className="object-cover h-[100%]" />
          </div>
          <div className="row-span-2 blur-[2px] grayscale hover:filter-none">
            <img src={fastfood} className="" />
          </div>
          <div className="col-span-2 col-start-3 row-start-1 grayscale blur-[2px] hover:filter-none">
            <img src={etchasketch} className="object-cover h-[100%]" />
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
              <ul className="flex gap-4 py-2">
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                    Javascript
                  </a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                    Html
                  </a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                    Css
                  </a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL">
                    SQL
                  </a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/Java">
                    Java
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p>Frameworks</p>
            <div>
              <ul className="flex gap-4 py-2">
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
              <ul className="flex gap-4 py-2">
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://www.figma.com/">Figma</a>
                </li>
                <li className="p-2 border-2 rounded-xl">
                  <a href="https://www.canva.com/en_in/">Canva</a>
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

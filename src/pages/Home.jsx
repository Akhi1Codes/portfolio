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
        <section className="grid grid-cols-4 grid-rows-3 gap-3 py-4">
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
      </div>
    </>
  );
};

export default Home;

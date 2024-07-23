const Projects = () => {
  return (
    <>
      <div className="py-2 ">
        <div className="py-2">
          <h2 className="font-bold underline underline-offset-2">
            WeatherGaze
          </h2>
          <p className="font-thin text-xs text-slate-300 italic p-1">
            [webpack/css-loader/style-loader]
          </p>
          <ol className="list-disc">
            <li>
              Developed weather applictaion that used a weatherAPI to retrive a
              real-time weather data.
            </li>
            <li>
              Wrote code to parse the JSON response from the API and display the
              weather data in a user-friendly format.
            </li>
            <li>
              Implemented error handling to ensure that the application would
              continue to function even if the API may not be unavailable.
            </li>
          </ol>
        </div>

        <div className="py-2">
          <h2 className="font-bold underline underline-offset-2">
            RPS-Survival
          </h2>
          <p className="font-thin text-xs text-slate-300 italic p-1">
            [Html,Css,JS]
          </p>
          <ol className="list-disc">
            <li>Developed a game website based on Street-Fight theme.</li>
            <li>Created a user-friendly interface to play the game.</li>
            <li>Implemented game logic to determine the winner of the game.</li>
          </ol>
        </div>

        <div className="py-2">
          <h2 className="font-bold underline underline-offset-2">Bookology</h2>
          <p className="font-thin text-xs text-slate-300 italic p-1">
            [Html,Css,Js]
          </p>
          <ol className="list-disc">
            <li>
              Created a user-friendly interface for interacting with the data.
            </li>
            <li>
              Developed a Standard library themed website using Html,Css and
              javascript
            </li>
            <li>Imporoved user experience by eliminating bugs</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Projects;

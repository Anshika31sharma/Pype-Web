export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center p-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Build, Evaluate and Improve Prompts
            <br />
            10x faster
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Empower your team to build, evaluate, and deploy high-performing prompts for LLM-based applications. Pype streamlines collaboration, version control, and performance analysis, helping you
            deliver reliable AI solutions faster.
          </p>
        </div>
        <div className="relative w-full max-w-4xl mb-8">
          <iframe
            className="w-full h-60 md:h-80 rounded-lg shadow-lg dark:shadow-gray-800"
            src="https://www.youtube.com/embed/-y_KrosGWaU?iv_load_policy=3&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
            allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video"
          ></iframe>
        </div>

        <div className="flex gap-4 mb-8">
          <a
            href="https://app.pypeai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-lg hover:bg-gray-700 transition-colors dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            Launch App
          </a>
          <a
            href="https://calendar.app.google/YLUDu9bnYRGn5B9x8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-500 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Book a demo →
          </a>
        </div>

        <div className="w-full bg-white dark:bg-gray-800 py-6">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
            Helping individuals and teams at the world’s best companies
          </p>
          <div className="overflow-hidden relative mx-20 mt-10">
            <div className="flex animate-scroll">
              <img src="https://framerusercontent.com/assets/x0pA6lc2Zv1rNKox96Rgu895qE.png" alt="Samunnati Logo" className="h-16 mx-4" />
              <img src="https://framerusercontent.com/assets/wwWCQkOBDFrszgYbSeQMlynsNtA.png" alt="Aakhya Logo" className="h-16 mx-4" />
              <img src="https://framerusercontent.com/assets/1ixQN712E4EccjSXzGH0bW54C5c.png" alt="Eight Logo" className="h-16 mx-4" />
              <img src="https://framerusercontent.com/assets/x0pA6lc2Zv1rNKox96Rgu895qE.png" alt="Samunnati Logo" className="h-16 mx-4" />
              <img src="https://framerusercontent.com/assets/wwWCQkOBDFrszgYbSeQMlynsNtA.png" alt="Aakhya Logo" className="h-16 mx-4" />
              <img src="https://framerusercontent.com/assets/1ixQN712E4EccjSXzGH0bW54C5c.png" alt="Eight Logo" className="h-16 mx-4" />
              <img src="https://framerusercontent.com/assets/x0pA6lc2Zv1rNKox96Rgu895qE.png" alt="Samunnati Logo" className="h-16 mx-4" />
              <img src="https://framerusercontent.com/assets/wwWCQkOBDFrszgYbSeQMlynsNtA.png" alt="Aakhya Logo" className="h-16 mx-4" />
              <img src="https://framerusercontent.com/assets/1ixQN712E4EccjSXzGH0bW54C5c.png" alt="Eight Logo" className="h-16 mx-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
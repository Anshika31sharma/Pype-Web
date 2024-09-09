export default function Features() {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto py-8 px-6">
        <div className="text-center mb-8">
          <button className="flex mx-auto items-center justify-center px-4 py-2 border border-gray-300 bg-white text-gray-800 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Features</span>
          </button>
          <p className="text-gray-600 mt-2 dark:text-gray-400">Turbocharge your LLM apps development</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="border border-gray-200 p-6 rounded-lg dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 dark:text-gray-400" aria-hidden="true">
                <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Team collaboration</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Collaborate on a Notion-like interface to define your LLM app requirements. Attach docs, data, and examples to ensure your prompts achieve high precision results.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 dark:text-gray-400" aria-hidden="true">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Accelerated prompt development</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Autogenerate your prompts and test examples. Compare selected prompts across models, parameters and prompt techniques.</p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 dark:text-gray-400" aria-hidden="true">
                <path d="M23 1l-2.5 1.4L18 1l1.4 2.5L18 6l2.5-1.4L23 6l-1.4-2.5L23 1zm-8.34 6.22l2.12 2.12-2.44 2.44.81.81 2.55-2.55c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0L11.4 8.84l.81.81 2.45-2.43zm-.78 6.65l-3.75-3.75-6.86-6.86L2 4.53l6.86 6.86-6.57 6.57c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0l6.57-6.57L19.47 22l1.27-1.27-6.86-6.86z"></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Effortless deployment</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Integrate Pype SDK in 4 lines of code.</p>
            <img src="https://framerusercontent.com/images/xg2v3VcznHbHM8bdbn9OtRKXuI.png?lossless=1" alt="Effortless Deployment" className="mt-20" />
          </div>
          <div className="border border-gray-200 p-6 rounded-lg dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 dark:text-gray-400" aria-hidden="true">
                <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Evaluate and Auto Optimize prompts</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Evaluate and pick the best performing prompt. Auto-Tune prompts to improve accuracy and consistency of the results.</p>
            <img src="https://framerusercontent.com/images/RhJi2zGPT7MXyFVsixZ01SJ2Qok.png?scale-down-to=512&lossless=1" alt="optimization" />
          </div>
          <div className="border border-gray-200 p-6 rounded-lg dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 dark:text-gray-400" aria-hidden="true">
                <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Monitor deployed prompts</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Robust observability tools provide real-time metrics— cost, latency, requests, accuracy and 10+ metrics.</p>
            <img src="https://framerusercontent.com/images/ga0zUll3eJhtf14SmrGRAoHrtM.png?scale-down-to=1024&lossless=1" alt="monitor" />
          </div>
          <div className="border border-gray-200 p-6 rounded-lg dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 dark:text-gray-400" aria-hidden="true">
                <path d="M15 2c-2.71 0-5.05 1.54-6.22 3.78-1.28.67-2.34 1.72-3 3C3.54 9.95 2 12.29 2 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78 1.28-.67 2.34-1.72 3-3C20.46 14.05 22 11.71 22 9c0-3.87-3.13-7-7-7zM9 20c-2.76 0-5-2.24-5-5 0-1.12.37-2.16 1-3 0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3c-2.76 0-5-2.24-5-5 0-1.12.37-2.16 1-3 0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7 .84-.63 1.87-1 3-1 2.76 0 5 2.24 5 5 0 1.12-.37 2.16-1 3z"></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">No expertise required</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">No need to learn 50+ prompting techniques to improve prompts.</p>
          </div>
        </div>
      </div>
    </>
  );
}

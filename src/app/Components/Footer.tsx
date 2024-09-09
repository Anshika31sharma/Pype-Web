export default function Footer() {
  return (
    <>
      <hr className="border-t border-gray-300 dark:border-gray-700" />
      <footer className="w-full p-4 py-6 flex justify-between bg-white dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300">
          © Singularity Corp Pvt. Ltd. 2024. All rights reserved. Privacy Policy.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-700 dark:text-gray-400"
        >
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.5 19H5.7v-9h2.8v9zm-1.4-10.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6zm13.8 10.2h-2.8v-5c0-1.2-.4-2-1.4-2-1.1 0-1.8.8-1.8 2v5h-2.8v-9h2.8v1.2h.1c.4-.6 1.3-1.2 2.3-1.2 2.5 0 4.2 1.7 4.2 5v5z" />
        </svg>
      </footer>
    </>
  );
}

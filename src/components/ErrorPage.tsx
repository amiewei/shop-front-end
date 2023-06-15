import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] w-full bg-primary-100 py-10 pt-24 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-sm px-8 py-10 sm:py-16 lg:max-w-screen-xl lg:px-6">
        <div className="">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-50 dark:text-white lg:text-4xl">
            Oops! You seem to be lost.
          </h2>
          <h3 className="py-4 text-center text-gray-600 hover:text-secondary-400">
            <Link to="/">Click Here To Return Home 🏡</Link>
          </h3>
        </div>
      </div>
    </section>
  );
}

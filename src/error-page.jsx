import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center text-center h-screen">
      <div className="p-8 inline-block w-1/3 m-auto">
        <h1 className="font-semibold text-teal-400 text-6xl p-8">Whoops!</h1>
        <p className="text-xl px-8 py-4">Looks like this page can't be found. Maybe it's been moved or renamed.</p>
        {/* <p>
          Error : {error.statusText || error.message}
        </p> */}
            <div className="mt-4">
              <a
                href="/"
                className="inline-block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-white bg-black shadow-md ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Back to Home
                <span className="px-1 text-white font-bold" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
      </div>
      <img src='/monster_404_teal.png' className="p-8 inline-block h-screen m-auto justify-center items-center"/>
      {/* Attribution: Web illustrations by Storyset [https://storyset.com/web] */}
    </div>
  );
}
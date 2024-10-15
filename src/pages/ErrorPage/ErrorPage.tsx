import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: { statusText?: string; message?: string } = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center gap-5 font-bold">
      <h1 className="text-3xl">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-gray-500">{error?.statusText || error?.message}</i>
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to the home page
      </Link>
    </div>
  );
}

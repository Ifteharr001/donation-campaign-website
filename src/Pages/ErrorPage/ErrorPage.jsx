import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div>
        <div className="h-screen flex justify-center items-center font-extrabold text-6xl">
          <div className="flex flex-col">
            <div className="">
              <h3>Opps...404 Error</h3>
            </div>
            <div className="text-center">
              <Link to="/">
                <button className="btn justify-center items-center font-extrabold bg-[#FF444A] border-none rounded-sm text-white px-8 py-3 ">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;
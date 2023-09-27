import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { getAddedDonation } from "../../Components/utility/localStorage";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonate(donationItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  console.log(donate);

  return (
    <div>
      {noFound ? (
        <div className="h-screen flex justify-center items-center font-bold md:font-extrabold text-2xl md:text-6xl">
          <h3>No Data Found</h3>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-8 pt-[150px]">
            {isShow
              ? donate.map((donates) => (
                  <div key={donates.id}>
                    <div
                      className="card card-side rounded-none"
                      style={{ backgroundColor: donates.card_bg }}
                    >
                      <figure>
                        <img
                          className="rounded-none p-4"
                          src={donates.picture}
                          alt="Movie"
                        />
                      </figure>
                      <div className="card-body">
                        <span
                          className="px-2 py-2 font-bold rounded-md w-[50%] text-center"
                          style={{
                            backgroundColor: donates.category_card_bg,
                            color: donates.text_button_bg,
                          }}
                        >
                          {donates.category_card}
                        </span>
                        <h2 className="card-title text-black font-bold">
                          {donates.title}
                        </h2>
                        <p
                          className="font-bold"
                          style={{ color: donates.text_button_bg }}
                        >
                          ${donates.price}
                        </p>
                        <div className="card-actions justify-end">
                          <Link to={`/card/${donates.id}`}>
                            <button className="btn bg-[#FF444A] border-none rounded-sm text-white font-bold">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : donate.slice(0, 4).map((donates) => (
                  <div key={donates.id}>
                    <div
                      className="card card-side rounded-none"
                      style={{ backgroundColor: donates.card_bg }}
                    >
                      <figure>
                        <img
                          className="rounded-none p-4"
                          src={donates.picture}
                          alt="Movie"
                        />
                      </figure>
                      <div className="card-body">
                        <span
                          className="px-2 py-2 font-bold rounded-md w-[50%] text-center"
                          style={{
                            backgroundColor: donates.category_card_bg,
                            color: donates.text_button_bg,
                          }}
                        >
                          {donates.category_card}
                        </span>
                        <h2 className="card-title text-black font-bold">
                          {donates.title}
                        </h2>
                        <p
                          className="font-bold"
                          style={{ color: donates.text_button_bg }}
                        >
                          ${donates.price}
                        </p>
                        <div className="card-actions justify-end">
                          <Link to={`/card/${donates.id}`}>
                            <button className="btn bg-[#FF444A] border-none rounded-sm text-white font-bold">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          <div className="my-5">
            {donate.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="block btn bg-[#FF444A] border-none rounded-sm text-white font-bold px-8 py-3 mx-auto"
              >
                {isShow ? "See Less" : "See All"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;

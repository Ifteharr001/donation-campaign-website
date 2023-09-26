import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getAddedDonation } from "../../Components/utility/localStorage";

const Donation = () => {

    const donationsAdded = useLoaderData();
    
        const [addDonation, setAddDonation] = useState([])
    useEffect(() => {
        const donationApplied = [];
        const storedDonetionIds = getAddedDonation();{
            const donationSet = donationsAdded?.data?.filter(donation => storedDonetionIds.includes(donation.id))
            if(donationSet){
                donationApplied.push(donationSet)
            }
            setAddDonation(donationSet);
            
            
        }
    }, [donationsAdded])
    return (
      <div className="grid grid-cols-2 gap-8 pt-[150px]">
        {addDonation.map((donationADD) => (
          <div key={donationADD.id}>
            <div
              className="card card-side rounded-none"
              style={{ backgroundColor: donationADD.card_bg }}
            >
              <figure>
                <img
                  className="rounded-none p-4"
                  src={donationADD.picture}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <span
                  className="px-2 py-2 font-bold rounded-md w-[50%] text-center"
                  style={{
                    backgroundColor: donationADD.category_card_bg,
                    color: donationADD.text_button_bg,
                  }}
                >
                  {donationADD.category_card}
                </span>
                <h2
                  className="card-title"
                  style={{ color: donationADD.text_button_bg }}
                >
                  {donationADD.title}
                </h2>
                <p
                  className="font-bold"
                  style={{ color: donationADD.text_button_bg }}
                >
                  ${donationADD.price}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/card/${donationADD.id}`}>
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
    );
};

export default Donation;
/* eslint-disable react/prop-types */

import swal from "sweetalert";

const CardItems = ({ cardItem }) => {
  const { id, picture, title, description, price } = cardItem || {};

  const handleAddToDonation = () => {

    const addedDonationArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if(!donationItems){
      addedDonationArray.push(cardItem);
      localStorage.setItem('donation', JSON.stringify(addedDonationArray))
      swal({
        title: "Good job!",
        text: "Donation Done",
        icon: "success",
        button: "Ok",
      });
    } else{

      const isExist = donationItems.find(donationCard => donationCard.id == id)
      
      if(!isExist){
        addedDonationArray.push(...donationItems, cardItem);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        swal({
          title: "Good job!",
          text: "Donation Done",
          icon: "success",
          button: "Ok",
        });
      } else{
        swal({
          title: "Error",
          text: "Alredy Donate",
          icon: "error",
          button: "Ok",
        });
      }



      
    }



    // console.log(cardItem);
    // localStorage.setItem(
    //   "test",
    //   JSON.stringify([{ name: "talha" }, { name: "ph" }])
    // );
  };

  return (
    <div className="md:pt-[100px] pt-[200px]">
      <div className="card rounded-none card-compact md:h-[500px] w-full md:w-[800px] mx-auto ">
        <img
          className="w-full md:h-[600px] rounded-none"
          src={picture}
          alt=""
        />
        <div className="">
          <div className="absolute  w-full left-0 bottom-0 font-semibold text-lg rounded-lg pt-5">
            <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
            <button
              onClick={handleAddToDonation}
              className="btn bg-[#FF444A] border-none rounded-sm text-white font-bold px-8 py-3 mb-5 ml-5 relative"
            >
              Donate ${price}
            </button>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItems;


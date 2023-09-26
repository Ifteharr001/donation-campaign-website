/* eslint-disable react/prop-types */


const CardItems = ({cardItem}) => {
    const { picture, title, description, price } = cardItem || {}

    const handleAddToDonation = () => {
        console.log(cardItem);
        localStorage.setItem('test', )
    }

    return (
      <div className="pt-[100px]">
        <div className="card rounded-none card-compact h-[500px] w-[800px] mx-auto ">
          <figure>
            <img className="w-full h-[600px]" src={picture} alt="" />
          </figure>
          <div className="">
            <div className="card-actions justify-end absolute top-[240px] right-[650px] ">
              <button onClick={handleAddToDonation} className="btn bg-[#FF444A] border-none rounded-sm text-white font-bold">Donate ${price}</button>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{title}!</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
};

export default CardItems;
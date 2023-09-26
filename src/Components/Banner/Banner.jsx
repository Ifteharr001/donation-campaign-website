
const Banner = () => {
    return (
      <div
        className="hero min-h-[90vh] bg-cover"
        style={{
          backgroundImage: "url(https://i.ibb.co/3zPR8Td/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-black text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="form-control text-center">
              <label className="input-group justify-center">
                <input
                  className="px-40 py-3 text-left"
                  type="text"
                  placeholder="Search Here...."
                />
                <span className="btn bg-[#FF444A] text-white">Search</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
import React from "react";

const ToBuyPage = () => {
  return (
    <>
      <div className="text-gray-900 bg-gray-200">
        <div className="w-full py-4">
          <div className="px-8 relative">
            <div className="w-full h-80 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-lg" />
              <img
                src={"./assets/imgs/placeImage.jpg"}
                className="w-full h-full object-cover rounded-lg mx-auto"
              />
              <div className="text-center absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white">Buy</h1>
                <p className="text-xl text-white uppercase">
                  Are you ready to begin your investment journey?
                </p>
                <p className="text-sm text-white uppercase">Coming soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToBuyPage;

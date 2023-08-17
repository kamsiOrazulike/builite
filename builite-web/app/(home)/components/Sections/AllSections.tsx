import React from "react";
import { CardWithLink } from "../Cards/AllCards";
import Button from "../Buttons/AllButtons";

export const DiscoverSection = () => {
  return (
    <div className="text-black bg-white">
      <div className="w-full py-20 px-14">
        <div className="w-full mx-auto text-left flex flex-col justify-start">
          <h1 className="md:text-3xl sm:text-2xl text-xl mb-2 md:py-2 ease-in-out duration-500">
            Discover how we can help
          </h1>
          <div className="w-full flex flex-col md:flex-row justify-evenly">
            <CardWithLink
              title={"Buy a Home"}
              description={
                "Find your place including things you cant find anywhere else"
              }
              href={"#"}
              link={"See Homes"}
              thumbnail={
                "https://cybercraftinc.com/wp-content/uploads/2019/04/webaliser-_tptxzd9moo-unsplash-1-scaled.webp"
              }
            />
            <CardWithLink
              title={"Build with Us"}
              description={
                "Find your place including things you cant find anywhere else"
              }
              href={"#"}
              link={"Learn More"}
              thumbnail={
                "https://www.jacobsonholdings.co/wp-content/uploads/2023/03/joe-holland-80zZ1s24Nag-unsplash-1-1536x1195.jpg"
              }
            />
            <CardWithLink
              title={"Sell your Home"}
              description={
                "Find your place including things you cant find anywhere else"
              }
              href={"#"}
              link={"View Options"}
              thumbnail={
                "https://assets.weforum.org/article/image/responsive_big_webp_y5DqkUFjHaHlumDVn5JPi9yHjL22C91DvpooSuyTcPM.webp"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CTASection = () => {
  return (
    <div className="text-black bg-white">
      <div className="w-full py-14 px-14">
        <div className="mx-auto text-left flex flex-row items-center align-middle justify-between">
          <div className="w-[35%] flex flex-col items-start justify-start">
            <h1 className="md:text-4xl sm:text-3xl text-2xl md:py-2 mb-12 ease-in-out duration-500">
              Lets build your vision together
            </h1>
            <Button
              link="/"
              label="Get Started"
              className={"bg-blue-500 px-4 py-2 rounded-md text-white"}
            />
          </div>
          <div className="w-[60%]">
            <img src={"./assets/imgs/imageCollage.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

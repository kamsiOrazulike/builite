import React from "react";
import { CardWithLink } from "../Cards/AllCards";

export const DiscoverSection = () => {
  return (
    <div className="text-black bg-white">
      <div className="w-full py-12 px-14">
        <div className="w-full mx-auto text-left flex flex-col justify-start">
          <h1 className="md:text-2xl sm:text-xl text-lg mb-2 md:py-2 ease-in-out duration-500">
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

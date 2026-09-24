import Image from "next/image";
import heroImg from "@/app/assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className=" min-h-full">
      <div className="hero py-10 my-10 container mx-auto flex flex-row bg-[#F3F3F3] rounded-2xl px-10">
        <div>
          <h1 className="text-6xl font-bold w-[600px]">
            Books To Freshen Up Your Bookshelf
          </h1>

          <button className="btn btn-primary my-5 font-bold text-[16px]">
            View The List
          </button>
        </div>
        <Image
          src={heroImg}
          alt="hero Image"
          width={700}
          height={700}
          className="ml-10 rounded-2xl"></Image>
      </div>
    </div>
  );
};

export default Banner;

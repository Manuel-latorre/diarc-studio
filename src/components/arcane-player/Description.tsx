import Link from "next/link";
import React from "react";
import WhatsappIcon from "./icons/WhatsappIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

interface Description {
  text: JSX.Element;
  cards: JSX.Element[];
}

const Description = ({ text, cards }: Description) => {
  return (
    <div className="md:h-screen flex flex-col justify-between bg-[#2e2e2e] ">
      <div className="mt-12 w-[95%] mx-auto">
        <hr className="border border-white" />

        <div className="flex justify-center text-center mt-48 max-lg:mb-24 max-sm:mt-20">{text}</div>
      </div>

      <div className="max-lg:flex-wrap flex items-center justify-center gap-4">
        {cards}
      </div>

      <div className="flex gap-4 items-center justify-end p-4 mt-12 max-sm:justify-center">
        <Link href={"https://wa.me/5491140266010"} target="_blank">
          <WhatsappIcon />
        </Link>
        <Link href={"https://www.instagram.com/diarc.studio/"} target="_blank">
          <InstagramIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/company/diarcstudio"}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UCS679OEsKuiY9I_aFna9hBA"}
          target="_blank"
        >
          <YoutubeIcon />
        </Link>
      </div>
    </div>
  );
};

export default Description;

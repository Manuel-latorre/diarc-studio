"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-44 rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h4 className="text-3xl font-bold mb-7 mt-10">Trusted Partners</h4>
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const images = [
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536365/wgxrgqiznis22k2w3hlu.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536430/micsnowetlnkawnji1nh.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536461/qipnbclkczzyk9snwyzi.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536479/mrnlkbpt1douynsm6qlc.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536495/jl33p5kyf5jichobt094.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536511/ng6xemtmygkzjm6ic6e0.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536544/ikpghjbzvjfu49jhq73r.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536561/efnzbhoyyd4foou8yryy.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536576/j1jlcrsyqnrosxlfyubh.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536614/xkfwiccfhxlzpbyvylbm.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536632/osbdgut9bn0vhz9wlstv.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536650/bh7zwvsk8cjmwcrnuxvd.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536705/nadfqpiawpxc9p0c2w5y.png",
  },
  {
    image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1713536720/s5nyzbzzqtex87uhwakh.png",
  },
];

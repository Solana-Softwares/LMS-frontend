import React from "react";
import ParticlesBg, { ConfigProp } from "particles-bg";

interface HeaderData {
  title: string;
  paragraph: string;
  // Add more properties as needed
}

interface HeaderProps {
  data?: HeaderData;
}

const config: ConfigProp = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "absolute", // all or center or {x:1,y:1,width:100,height:100}
  color: ["random"],
  cross: "dead", // cross or bround
  random: 15, // or null,
  g: 5, // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(
      particle.p.x,
      particle.p.y,
      particle.radius * 2,
      particle.radius * 2
    );
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  },
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg type="circle" bg={true} config={config} />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="md:text-[90px] max-sm:text-[50px] text-center text-white font-bold flex justify-center pt-40 max-sm:ml-12">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className="text-center text-white max-sm:text-xs max-sm:ml-16">
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="/enrolled"
                  className="bg-purple-600 max-sm:ml-[138px] flex text-xl justify-center rounded-full w-[20%] max-sm:w-[40%] text-center text-white max-sm:py-1 py-2 font-semibold mt-6 mx-auto"
                >
                  Get Started
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

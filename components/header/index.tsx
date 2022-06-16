import Button from "../buttons/button";
import Container from "../container";
import ArrowRightIcon from "../svgs/arrowRightIcon";
import Shapes from "../shapes";
import HeaderRight from "./header-right";

const Header = () => (
  <div className="relative sm:mt-20 md:mt-32  ">
    <Shapes />
    <Container className="flex space-between items-center flex-wrap">
      <div className="md:basis-1/2  sm:basis-full">
        <p className="text-primary-900">Hi There 👋 I am</p>
        <h2 className="mt-3 text-6xl font-extrabold transition-all  duration-1000 ease-out">
          Elon Musk
        </h2>
        <p className="text-2xl mt-3 ">
          <span className="text-slate-400">Professional</span> {"  "}
          {"  "}
          <span className="font-bold text-primary-800">Software Enginer</span>
        </p>
        <p className="max-w-[550px] mt-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          interdum consequat convallis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aenean interdum consequat convallis.
        </p>
        <div className="flex mt-10">
          <Button
            colorClass={`
        bg-zinc-800
        active:bg-zinc-900
        hover:bg-zinc-700
       `}
            className="uppercase"
          >
            View Portfolio
          </Button>

          <Button className="ml-5 uppercase">
            Hire Me
            <span className="ml-3">
              <ArrowRightIcon color="white" />
            </span>
          </Button>
        </div>
      </div>
      <div className="md:basis-1/2  sm:basis-full relative flex items-center justify-center">
        <HeaderRight />
      </div>
    </Container>
  </div>
);

export default Header;

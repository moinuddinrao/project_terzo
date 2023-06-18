import { rightArrow } from "../assets";

const Button = () => (
  <div className="flex justify-center items-center mt-5 mr-10">
    <a href="#more" className="text-purple text-[16px] font-roboto font-medium">Learn More</a>
    <img className="ml-2 mt-1" src={rightArrow} alt="rightArrow" />
  </div>
);

export default Button;
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-16`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex flex-col justify-start items-start m-10 relative`} >
        <div className="absolute z-[0] w-[150%] h-[150%] -bottom-2 -right-2 bg-gradient " />
        <h1 className="text-[100px] text-gradient m-0">
          {stat.value}
        </h1>
        <p className="font-roboto font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-white">
          {stat.title}
        </p>
        <hr className="line w-full mt-5" />
        <p className="font-roboto font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 mr-10">
          {stat.description}
        </p>   
      </div>
    ))}
  </section>
);

export default Stats;
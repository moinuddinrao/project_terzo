import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexStart} sm:flex-row flex-col flex-wrap gap-10 sm:mb-20 mb-16`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`w-full flex-1 flex flex-col justify-start items-start my-10 relative`} >
        <div className="absolute z-[0] w-[150%] h-[150%] -bottom-2 -right-2 bg-gradient" />
        <h1 className="font-segoe-ui md:text-[100px] sm:text-[75px] text-[50px] text-gradient m-0">
          {stat.value}
        </h1>
        <p className="font-roboto font-normal md:text-[21px] sm:text-[18px] text-[16px] md:leading-[24px] sm:leading-[21px] leading-[18px] text-white">
          {stat.title}
        </p>
        <hr className="line sm:mt-5 mt-3" />
        <p className={`${styles.paragraph} sm:mt-5 mt-3`} >
          {stat.description}
        </p>   
      </div>
    ))}
  </section>
);

export default Stats;
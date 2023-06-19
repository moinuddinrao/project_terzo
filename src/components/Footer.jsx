import styles from "../style";
import { logo, rightArrow } from "../assets";
import { footerLinks, certificate, socialMedia } from "../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <hr className="line w-full sm:mb-28 mb-10" />
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full ${styles.paddingX}`}>
            <div className="flex-[1] flex flex-col justify-start mr-10 relative">
                <div className="absolute z-[0] w-[100%] h-[200%] bg-gradient" />
                <img src={logo} alt="terzo" className="w-[150px] h-[50px] object-contain" />
                <div className="flex flex-row md:my-15 my-10">
                    {certificate.map((cert, index) => (
                        <img
                            key={cert.id}
                            src={cert.icon}
                            alt={cert.id}
                            className={`h-[50px] object-contain cursor-pointer ${index !== cert.length - 1 ? "mr-6" : "mr-0"
                                }`}
                        />
                    ))}
                </div>
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                }`}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 relative">
                <div className="absolute z-[0] w-[100%] h-[250%] bg-gradient" />
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                        <h4 className="font-roboto font-medium text-[18px] leading-[27px] text-white">
                            {footerlink.title}
                        </h4>
                        <ul className="list-none mt-3">
                            {footerlink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-roboto font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className={`w-full flex justify-between items-center md:flex-row flex-col pt-6 ${styles.paddingX}`}>
            <p className="font-roboto font-normal text-center text-[12px] text-dimWhite my-2 sm:my-0">
                © 2023 Terzo Technologies, Inc. All Rights Reserved.
            </p>
            <div className="flex justify-center items-center my-2 sm:my-0">
                <a href="#more" className="text-white text-[20px] font-roboto font-medium">social@terzocloud.com</a>
                <img className="ml-2 mt-1" src={rightArrow} alt="rightArrow" />
            </div>
            <p className="font-roboto font-normal text-center text-[12px] text-dimWhite my-2 sm:my-0">
                Privacy Policy
            </p>
        </div>
    </section>
);

export default Footer;
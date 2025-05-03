import Link from "next/link";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const socialLinks = [
    {
        icon: <FaGithub />,
        link: "https://github.com/DewaJayon",
    },
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/dwdejayon",
    },
    {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/dewa.jayon.3",
    },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socialLinks.map((social, index) => {
                return (
                    <Link href={social.link} key={index} target="_blank" rel="noopener noreferrer" className={iconStyles}>
                        {social.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;

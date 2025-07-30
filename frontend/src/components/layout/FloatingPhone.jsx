import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TypographySmall } from "@/custom/Typography";
import { Navlinks } from "@/data/Navlinks";

const FloatingPhoneRight = () => {
  return (
    <section className="grid place-content-center p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-primary/60"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 h-full w-full border overflow-hidden px-4 py-6 rounded-[20px] bg-white text-xs">
      <div className="h-full overflow-y-auto scrollbar-custom">
        {Navlinks.map((section) => (
          <div key={section.title} className="mb-3 space-y-4">
            <TypographySmall>{section.title}</TypographySmall>
            <ul className="flex flex-col gap-[6px] mt-2">
              {section?.items?.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-blue-600 leading-6 line-clamp-1 text-sm underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    - {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* <Link to="/contact-us">
        <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-primary cursor-pointer backdrop-blur">
          Get Started
        </button>
      </Link>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-primary/60" /> */}
    </div>
  );
};

export default FloatingPhoneRight;

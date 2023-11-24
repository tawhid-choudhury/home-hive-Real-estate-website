import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div>
            <div className="h-[80vh] relative">
                <div className="bg-gradient-to-b from-[#032e4b] h-full absolute bg-opacity-60 z-50 right-0 left-0"></div>
                <motion.img
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: [0, 0, 1, 1, 1, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity
                    }}
                    className="absolute w-full h-full object-cover"
                    src="https://i.ibb.co/VSsnbSD/banner1.jpg"
                    alt="" />
                <img className="w-full h-full object-cover" src="https://i.ibb.co/8M5b2kr/banner2.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;
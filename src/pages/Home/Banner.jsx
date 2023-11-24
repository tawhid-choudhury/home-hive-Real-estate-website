import { Typography } from "@mui/material";
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div>
            <div className="h-[80vh] relative overflow-hidden">
                <div className="bg-gradient-to-b from-[#032e4b] h-full absolute z-10 right-0 left-0"></div>
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
                <img className="w-full h-full object-cover" src="https://i.ibb.co/Mf3nGd9/r-architecture-Cn87-TISYij8-unsplash.jpg" alt="" />
                <div className="absolute  w-full h-full top-0 bottom-0 left-0 right-0 z-20 flex flex-col justify-center items-center">
                    <motion.div
                        initial={{
                            x: -3000,
                        }}
                        animate={{
                            x: [0, 0, -2000, -5000, -3000, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity
                        }}
                    >
                        <Typography sx={{ color: "white", textAlign: "center", textShadow: "4px 4px 10px #032e4b", typography: { xs: 'h4', md: 'h2' } }} gutterBottom>
                            <span style={{ color: "#b79537", }}>Home</span>Hive: Your <span style={{ color: "#b79537" }}>Dream Home</span> Awaits!
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 0,
                        }}
                        animate={{
                            y: [0, 0, 5000, 1000, 1000, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity
                        }}
                    >
                        <Typography sx={{ color: "white", textAlign: "center" }} variant="subtitle1" gutterBottom>
                            Explore a Collection of Over 1000 Properties – Your Perfect Home is Just a Click Away.
                        </Typography>
                    </motion.div>


                </div>



                <div className="absolute  w-full h-full top-0 bottom-0 left-0 right-0 z-20 flex flex-col justify-center items-center">
                    <motion.div
                        initial={{
                            y: 0,
                        }}
                        animate={{
                            y: [-5000, -1000, 0, 0, 0, -1000]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity
                        }}
                    >
                        <Typography sx={{ color: "white", textAlign: "center", textShadow: "4px 4px 10px #032e4b", typography: { xs: 'h4', md: 'h2' } }} variant="h2" gutterBottom>
                            Where <span style={{ color: "#b79537" }}>Comfort</span> Meets <span style={{ color: "#b79537" }}>Convenience</span>
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: 0,
                        }}
                        animate={{
                            x: [5000, 5000, 0, 0, 0, 2000]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity
                        }}
                    >
                        <Typography sx={{ color: "white", textAlign: "center" }} variant="subtitle1" gutterBottom>
                            Exploring Beyond Walls, Find the Perfect Fusion of Comfort and Convenience in Every Home.
                        </Typography>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
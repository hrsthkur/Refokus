import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arq.mp4";
import rain from "../assets/rain.mp4";
import yahoo from "../assets/yahoo.mp4";
import yir from "../assets/yir.mp4";

const Products = () => {
  var data = [
    {
      title: "Arqitel",
      description:
        "jbiadsbvovn oiwfh  wf hwe oedn c ojdaa jkc jds jdssd s d jsd jdskjsd  jdsojdsk  befvihdsf  ifvb  bifbvfhi j vfil djl ",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "jbiadsbvovn oiwfh  wf hwe oedn c ojdaa jkc jds jdssd s d jsd jdskjsd  jdsojdsk  befvihdsf  ifvb  bifbvfhi j vfil djl ",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "jbiadsbvovn oiwfh  wf hwe oedn c ojdaa jkc jds jdssd s d jsd jdskjsd  jdsojdsk  befvihdsf  ifvb  bifbvfhi j vfil djl ",
      live: true,
      case: true,
    },
    {
      title: "YAHOO!",
      description:
        "jbiadsbvovn oiwfh  wf hwe oedn c ojdaa jkc jds jdssd s d jsd jdskjsd  jdsojdsk  befvihdsf  ifvb  bifbvfhi j vfil djl ",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState(0);

  const mover = (val) => {
    setpos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {data.map((val, index) => (
        <Product val={val} mover={mover} index={index} />
      ))}
      <div className="w-full h-full pointer-events-none absolute top-0 ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window w-[28rem] h-[23rem]  left-[46%] overflow-hidden absolute -translate-x-[50%]"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
             transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
            className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            src={arqitel}
              ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
             transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
             <video
            className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            src={rain}
              ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
             transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
             <video
            className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            src={yir}
              ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
             transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
             <video
            className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            src={yahoo}
              ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

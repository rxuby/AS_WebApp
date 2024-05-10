import "./style.css";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { motion } from "framer-motion";

function ScorePage() {
  const { listScore } = useSelector((state: RootState) => state.quiz.value);
  return (
    <>
      <div
        className="h-screen flex justify-center items-center bg-[#ed2929] dark:bg-[#373b74] duration-700"
        style={{ fontFamily: "Mitr" }}
      >
        <div className="bg-[#ffe667] dark:bg-[#5b769b] rounded-[30px] w-[100%] mx-52 py-32 mt-12 h-[80%]">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center content-center"
          >
            <h1 className="font-medium text-2xl text-[#ed2929] dark:text-[#e5aab2]">
              ผลการทดสอบทั้งหมด
            </h1>
          </motion.div>
          <div className="overflow-y-auto h-[30vh] mx-96 mt-5">
            <div className="flex flex-col justify-center items-center content-center gap-1 mt-2 ">
              {listScore.map((score, index) => (
                <div className="font-medium text-[#ed2929] dark:text-[#e5aab2]  duration-300">
                  {index + 1}. {score} คะแนน
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScorePage;

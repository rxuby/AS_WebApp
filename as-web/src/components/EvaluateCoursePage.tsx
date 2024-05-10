import React from "react";
import "./style.css";
import { motion } from "framer-motion";

function EvaluateCoursePage() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-[#ed2929] dark:bg-[#373b74] text-[#ed2929] dark:text-[#e5aab2] duration-700"
      style={{ fontFamily: "Mitr" }}
    >
      <div className="bg-[#ffe667] dark:bg-[#5b769b] rounded-[30px] w-[100%] mx-52 py-20 px-44 mt-12 h-[80%]">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-[#ed2929] dark:text-[#f2b5bd]"
        >
          ประเมินคอร์สเรียน
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-4"
        >
          {/* Course 1 */}
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="text-base font-medium text-[#ed2929] dark:text-[#f2b5bd]  ">
                Git Version Control
              </span>
              <span className="text-sm font-medium text-[#ed2929]  dark:text-[#f2b5bd]">
                9/10
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div
                className="bg-[#ed2929] dark:bg-[#f2b5bd]  h-4 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="mb-4">
            <div className="flex justify-between">
              <span className=" text-base font-medium text-[#ed2929] dark:text-[#f2b5bd]">
                Basic Javascript
              </span>
              <span className="text-sm font-medium text-[#ed2929] dark:text-[#f2b5bd]">
                8/10
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div
                className="bg-[#ed2929] dark:bg-[#f2b5bd] h-4 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          {/* Course 3 */}
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="text-base font-medium text-[#ed2929] dark:text-[#f2b5bd]">
                Basic Typescript
              </span>
              <span className="text-sm font-medium text-[#ed2929] dark:text-[#f2b5bd]">
                8/10
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div
                className="bg-[#ed2929] h-4 dark:bg-[#f2b5bd]  rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          {/* Course 4 */}
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="text-base font-medium text-[#ed2929] dark:text-[#f2b5bd]">
                React Typscript
              </span>
              <span className="text-sm font-medium text-[#ed2929] dark:text-[#f2b5bd]">
                5/10
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div
                className="bg-[#ed2929] h-4 dark:bg-[#f2b5bd] rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>

          {/* Course 5 */}
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="text-base font-medium text-[#ed2929] dark:text-[#f2b5bd]">
                Github Page
              </span>
              <span className="text-sm font-medium text-[#ed2929] dark:text-[#f2b5bd]">
                8/10
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div
                className="bg-[#ed2929] h-4 dark:bg-[#f2b5bd] rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default EvaluateCoursePage;

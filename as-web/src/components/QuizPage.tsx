import data from "../data/QuestionsData";
import { Radio, RadioChangeEvent } from "antd";
import "./style.css";
import "./test.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  nextQuestion,
  prevQuestion,
  reAttempt,
  setSatrtAttempt,
  setSelectedAns,
  submit,
} from "@store/slice/questionSlice";
import { ReloadOutlined } from "@ant-design/icons";

function QuizPage() {
  console.log(data);

  const { startAttempt, currentQuestion, answer, score, isSubmit } =
    useSelector((state: RootState) => state.quiz.value);
  const dispatch = useDispatch();

  const onClickStart = () => {
    dispatch(setSatrtAttempt());
  };

  const onNext = () => {
    dispatch(nextQuestion());
  };

  const onPrev = () => {
    dispatch(prevQuestion());
  };

  const onSubmit = () => {
    dispatch(submit());
  };

  const handleChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    dispatch(setSelectedAns(value));
  };
  const reStart = () => {
    dispatch(reAttempt());
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-[#ed2929] dark:bg-[#373b74] duration-700"
        style={{ fontFamily: "Mitr" }}
      >
        <div className=" bg-[#ffe667] dark:bg-[#5b769b]  rounded-[30px] w-[100%] mx-52 py-36 mt-12  h-[80%] ">
          {!startAttempt ? (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-medium mt-14 text-[#ed2929] dark:text-[#e2929c]">
                แบบทดสอบก่อนเรียน
              </div>
              <button
                className="btn border border-[#ed2929] dark:border-[#d88b95] dark:bg-[#d88b95] dark:hover:text-[#d88b95] dark:hover:bg-[#5b769b] hover:bg-[#ffe667] hover:border hover:border-[#ed2929] hover:text-[#ed2929]  duration-300"
                onClick={onClickStart}
              >
                เริ่มทำแบบทดสอบ
              </button>
            </motion.div>
          ) : (
            <div className=" ">
              {!isSubmit ? (
                <div className="flex flex-col  px-32 ">
                  {data[currentQuestion] && (
                    <div key={currentQuestion}>
                      <div className="text-2xl font-semibold dark:text-[#f2b5bd] mb-4 text-[#ed2929] ">
                        ข้อที่ {currentQuestion + 1}:{" "}
                        {data[currentQuestion].question}
                      </div>
                      <Radio.Group
                        className="flex flex-col "
                        onChange={handleChange}
                        value={answer[currentQuestion] || ""}
                      >
                        <Radio
                          className="radio-button dark:text-[#f2b5bd] mb-2 font-medium text-base text-[#ed2929] hover:text-[#373b74] dark:hover:text-[#fff2b3] duration-700"
                          style={{ fontFamily: "Mitr" }}
                          value="A"
                        >
                          A. {data[currentQuestion].A}
                        </Radio>
                        <Radio
                          className="radio-button dark:text-[#f2b5bd] mb-2 font-medium text-base text-[#ed2929] hover:text-[#373b74] dark:hover:text-[#fff2b3] duration-700"
                          style={{ fontFamily: "Mitr" }}
                          value="B"
                        >
                          B. {data[currentQuestion].B}
                        </Radio>
                        <Radio
                          className="radio-button dark:text-[#f2b5bd] mb-2 font-medium text-base text-[#ed2929] hover:text-[#373b74] dark:hover:text-[#fff2b3] duration-700"
                          style={{ fontFamily: "Mitr" }}
                          value="C"
                        >
                          C. {data[currentQuestion].C}
                        </Radio>
                        <Radio
                          className="radio-button dark:text-[#f2b5bd] mb-2 font-medium text-base text-[#ed2929] hover:text-[#373b74] dark:hover:text-[#fff2b3] duration-700"
                          style={{
                            fontFamily: "Mitr",
                          }}
                          value="D"
                        >
                          D. {data[currentQuestion].D}
                        </Radio>
                      </Radio.Group>
                    </div>
                  )}
                  <div className="flex   w-full pt-20  ">
                    <div className="flex justify-end w-full  ">
                      {currentQuestion > 0 && (
                        <button
                          className="mr-6 text-[#fff2b3] border-black p-2 rounded-full bg-[#ed2929] dark:text-[#5b769b] dark:bg-[#f2b5bd]  hover:bg-[#373b74] active:bg-[#373b74] dark:hover:bg-[#fff2b3] dark:active:bg-[#fff2b3] duration-200"
                          onClick={onPrev}
                          disabled={currentQuestion === 0}
                        >
                          <FaArrowLeft className="text-3xl  " />
                        </button>
                      )}
                      {currentQuestion < data.length - 1 && (
                        <button
                          className="ml-3 text-[#fff2b3] border-black p-2 rounded-full bg-[#ed2929] dark:text-[#5b769b] dark:bg-[#f2b5bd]  hover:bg-[#373b74] active:bg-[#373b74] dark:hover:bg-[#fff2b3] dark:active:bg-[#fff2b3] duration-200"
                          onClick={onNext}
                          disabled={currentQuestion === data.length - 1}
                        >
                          <FaArrowRight className="text-3xl" />
                        </button>
                      )}
                      {currentQuestion >= data.length - 1 && (
                        <button
                          onClick={onSubmit}
                          className="ml-3 text-[#ed2929] dark:text-[#f2b5bd]  hover:text-[#373b74] active:text-[#373b74] dark:hover:text-[#fff2b3] dark:active:text-[#fff2b3] duration-200"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center content-center text-lg text-[#ed2929] dark:text-[#f2b5bd]  ">
                  <div className="text-center mt-5">
                    <div className="text-xl">สรุปผลการทดสอบ</div>
                    <div>ได้คะแนน {score} จาก 10 คะแนน</div>
                    <button
                      onClick={reStart}
                      className="mt-6 p-2 border border-[#ed2929] dark:border-[#f2b5bd] hover:bg-[#373b74] hover:border-[#373b74] dark:hover:bg-[#fff2b3] dark:hover:border-[#fff2b3] hover:text-[#fff2b3] dark:hover:text-[#ed919e] duration-300 rounded-lg  "
                    >
                      <ReloadOutlined spin className=" p-2" />{" "}
                      ทำแบบทดสอบอีกครั้ง
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuizPage;

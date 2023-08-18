import { useEffect, useState } from "react";
import "./App.css";
import interviewQuestions from "./components/interviewQuestions ";

function App() {
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const [bgColor, setBgColor] = useState([]);
  const [correctAns, setCorrectAns] = useState([]);

  const handlePrev = () => {
    if (next == 0) {
      return false;
    }
    setNext(next - 1);
  };
  const handleNext = () => {
    if (next != interviewQuestions.length - 1) {
      if (!bgColor.some((item) => item.Q == next)) {
        return false;
      } else {
        setNext((prev) => prev + 1);
      }
    } else {
      setNext(interviewQuestions.length);
    }
  };
  //

  const handleSelect = (e, item, index) => {
    e.preventDefault();
    let isScore = item == interviewQuestions[next].answer;
    if (bgColor.some((item) => item.Q == next)) {
      return false;
    }
    {
      setBgColor((prev) => [
        ...prev,
        {
          Q: next,
          index: index,
          item,
        },
      ]);
    }

    if (!isScore) {
      if (correctAns.some((items) => items.Q === next)) {
        return false;
      } else {
        correctAns.push({ Q: next, Ans: interviewQuestions[next].answer });
      }
    }
    if (isScore) {
      setScore((prev) => prev + 1);
    }
  };

  useEffect(() => {}, [score, next]);
  return (
    <>
      <div className="container-fluid bg-gradient-to-b from-yellow-400 to-red-500 flex justify-center items-center w-screen h-screen">
        <div className="row flex justify-center items-center flex-col">
          <h1 className=" text-3xl font-extrabold uppercase">
            Interview Questions
          </h1>
          <p className="mb-10 mt-4 font-bold text-gray-700">JavaScript</p>
          <div className="col w-[500px] rounded-xl h-[auto] flex justify-center bg-gradient-to-b from-gray-100 to-white">
            {next === interviewQuestions.length ? (
              <div className="card p-5 w-full">
                <div className="card-header w-full my-5 text-center">
                  <h1 className="text-2xl w-full border-b-2 border-b-gray-400 py-2 font-bold text-red-700">
                    Score Board
                  </h1>
                </div>
                <div className="card-body mt-10 text-center flex flex-col gap-2 my-5">
                  <p className="text-lg font-bold  py-5">
                    Your score is:{" "}
                    <span className="mx-3  border-green-500 border-2 rounded-lg p-5">
                      {score}
                    </span>
                  </p>
                  {correctAns.length > 0 && (
                    <h4 className="text-xl text-green-600 font-bold border-b-2 py-2">
                      Correct anwsers:
                    </h4>
                  )}
                  {correctAns?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-left text-green-800 mb-0 flex my-5 gap-5 border-b py-2"
                      >
                        <span>{item.Q}</span>
                        {item.Ans}
                      </p>
                    );
                  })}
                </div>
                <div className="card-footer flex  justify-center ">
                  <button
                    onClick={() => {
                      setNext(0),
                        setBgColor([]),
                        setCorrectAns([]),
                        setScore(0);
                    }}
                    className="bg-red-500 hover:bg-red-700 hover:text-white w-full py-1 text-white text-xl rounded-full font-bold"
                  >
                    Start again
                  </button>
                </div>
              </div>
            ) : (
              <div className="card p-5 w-full">
                <div className="card-header w-ful my-10">
                  <h1 className="text-lg w-full font-bold text-gray-700  flex gap-2">
                    <span className="px-3">{next + 1}.</span>
                    <span>{interviewQuestions[next]?.question}</span>
                  </h1>
                </div>
                <div className="card-body my-10 justify-center flex flex-col gap-5">
                  {interviewQuestions[next]?.options.map((item, index) => {
                    return (
                      <button
                        onClick={(e) => handleSelect(e, item, index)}
                        className={` py-2 text-md font-bold  ${
                          bgColor.some(
                            (item) => item.index == index && item.Q == next
                          )
                            ? bgColor.some(
                                (bgItem) =>
                                  bgItem.item == interviewQuestions[next].answer
                              )
                              ? "text-green-500"
                              : "text-red-500"
                            : "text-black-700"
                        } `}
                        key={index}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
                <div className="card-footer flex gap-5 justify-center ">
                  {next > 0 && (
                    <button
                      onClick={handlePrev}
                      className="bg-yellow-500 hover:bg-yellow-700 hover:text-white w-full py-2 rounded-full text-white text-xl font-bold"
                    >
                      Prev
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="bg-red-500 hover:bg-red-700 hover:text-white w-full py-2 rounded-full text-white text-xl font-bold"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { data, type DataItem } from "../data";

export default function Accordion() {
  const [selected, setSelected] = useState<string | null>(null);
  const [ismultiple, setisMultiple] = useState<boolean>(false);
  const [multiples, setmultiples] = useState<string[]>([]);

  function handleSingle(id: string) {
    if (id == selected) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  function enableisMultiple() {
    setisMultiple(!ismultiple);
    setSelected(null);
  }

  function handleMultiple(id: string) {
    let cpyMultiples = [...multiples];

    if (cpyMultiples.includes(id)) {
      cpyMultiples = cpyMultiples.filter((item) => item != id);
    } else {
      cpyMultiples.push(id);
    }

    setmultiples(cpyMultiples);
  }

  return (
    <>
      <button
        onClick={() => enableisMultiple()}
        className="rounded-md m-5 bg-amber-600 text-white p-2 hover:text-amber-600 hover:bg-white transition-all hover:border-amber-600 border shadow-md sm:absolute sm:bottom-5 sm:right-5 "
      >
        {ismultiple ? "Multiple" : "Single"}
      </button>
      <div className="w-80 sm:w-90 mx-10 sm:m-auto text-amber-800 space-y-2 ">
        {data && data.length > 0 ? (
          data.map((dataItem: DataItem) => (
            <>
              <div
                onClick={
                  ismultiple
                    ? () => handleMultiple(dataItem.id)
                    : () => handleSingle(dataItem.id)
                }
                className="cursor-pointer p-2 flex justify-between items-center rounded-t-md bg-amber-100 "
                key={dataItem.id}
              >
                <h3 className="p-3">{dataItem.question}</h3>
                <span className="">+</span>
              </div>
              {selected == dataItem.id || multiples.includes(dataItem.id) ? (
                <div className="text-left text-sm text-gray-800 transition-all -mt-2 rounded-b-md p-4 bg-amber-200/60">
                  {dataItem.answer}
                </div>
              ) : null}
            </>
          ))
        ) : (
          <div className="bg-amber-400/40 text-center p-4 rounded-md shadow-xl ">
            No Data found! ⛔
          </div>
        )}
      </div>
    </>
  );
}

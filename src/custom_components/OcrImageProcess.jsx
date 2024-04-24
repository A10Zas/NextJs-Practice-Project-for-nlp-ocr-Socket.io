"use client";
import converter from "@/lib/converter";
import { FileImage, MoveDown, MoveRight } from "lucide-react";

import { useRef, useState } from "react";
import TextCard from "./TextCard";

const OcrImageProcess = () => {
  const imageInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [texts, setTexts] = useState("");

  const openBrowse = () => {
    imageInputRef.current?.click();
  };

  const convert = async (url) => {
    if (url) {
      setLoading(true);
      await converter(url).then((txt) => {
        if (txt) {
          setTexts(txt);
        }
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex md:flex-row flex-col justify-between gap-4 my-4 border h-[100vh] md:h-[70vh]">
      <input
        type="file"
        ref={imageInputRef}
        hidden
        required
        onChange={(e) => {
          const url = URL.createObjectURL(e.target.files[0]);
          convert(url);
        }}
      />
      <div
        onClick={openBrowse}
        className="border m-4 bg-[#36363691] md:w-[40%] h-[50%] md:h-[90%] rounded-xl flex justify-center items-center cursor-pointer"
      >
        <div className="flex justify-center items-center flex-col">
          <div>
            <p className="text-sm md:text-4xl text-center font-[700] text-[#c7c7c781]">
              {loading
                ? "Processing Image ..."
                : "Browse Or Drop Your Image Here"}
            </p>
          </div>
          <span>
            <FileImage
              color="#8f8f8f"
              className={`${loading ? "animate-pulse" : ""}`}
            />
          </span>
        </div>
      </div>
      <div className="my-auto hidden md:block">
        <MoveRight size={50} />
      </div>
      <div className="mx-auto  md:hidden">
        <MoveDown size={30} />
      </div>
      <div className="border m-4 md:w-[50%] rounded-xl ">
        <TextCard key="text-card" text={texts} />
      </div>
    </div>
  );
};

export default OcrImageProcess;

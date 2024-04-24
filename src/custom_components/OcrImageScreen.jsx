import React from "react";
import OcrImageProcess from "@/custom_components/OcrImageProcess";

const OcrImageScreen = () => {
  return (
    <div className="h-full w-full md:w-full md:px-4 flex flex-col items-center">
      <div className="text-center text-xl py-2">Image To Text</div>
      <div className="text-center text-md ">
        Built With
        <span className="px-2 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Tesseract.Js
        </span>
      </div>
      <div className="mt-5 mb-5 w-full h-full">
        <OcrImageProcess />
      </div>
    </div>
  );
};

export default OcrImageScreen;

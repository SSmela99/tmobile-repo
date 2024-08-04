"use client";

import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="max-w-wrapper mx-auto py-12 min-h-[800px] h-screen -mt-24 pt-30">
      <div className="flex items-center justify-center h-full">
        <Oval />
      </div>
    </div>
  );
};

export default Loader;

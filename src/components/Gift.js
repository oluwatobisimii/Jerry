import React, { useState } from "react";
import wreath from "../assets/images/wreath.svg";
import quoteC from "../assets/images/quote-close.svg";
import quoteO from "../assets/images/quote-open.svg";
import { MdContentCopy } from "react-icons/md";

const Gift = () => {
  const [copy, setCopy] = useState(false);

  return (
    <section className="lg:h-screen">
      <div className="container mx-auto p-4 md:p-10 h-full grid place-items-center">
        <div className="flex flex-col items-center gap-y-10 justify-center ">
          <img src={wreath} alt="" className="" />
          <p className="text-8xl text-primary font-newYork">Gift</p>
          <div className="w-20 h-[1px] bg-primary"></div>
          <div className="flex flex-col lg:flex-row lg:items-start items-center space-y-6 lg:space-y-0 lg:space-x-[32px] xl:w-[75%] 2xl:w-[65%]">
            <img src={quoteO} alt="" />
            <div className="space-y-[36px]  flex flex-col items-center">
              <p className="font-newYork text-[20px] lg:text-[40px] text-center leading-[1.2]">
                We are immensely grateful for the thought to express your love
                towards our new life together through gifts.{" "}
              </p>
              <p className="lg:text-2xl  text-center">
                For cash gifts, kindly see bank details below. If you would
                rather give us a physical gift, we look forward to unwrapping
                your unique surprises.
              </p>
              <div className="w-full lg:w-[600px] border-[#e0a14a] border rounded-[15px] overflow-hidden text-primary font-dmSans font-medium ">
                <div className="flex">
                  <div className="w-1/2 lg:w-[300px] h-[60px] bg-[#fffdfb] border-[#e0a14a] border-r px-8 flex items-center">
                    <p>Account Name:</p>
                  </div>
                  <div className="w-1/2 lg:w-[300px] h-[60px] bg-[#fffdfb] border-[#e0a14a]  px-8 flex items-center">
                    <p>Jeremiah and Elizabeth</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 lg:w-[300px] h-[60px] bg-[#fffdfb] border-[#e0a14a] border-t border-r  px-8 flex items-center">
                    <p>Account Number:</p>
                  </div>
                  <div className="w-1/2 lg:w-[300px] h-[60px] bg-[#fffdfb] border-[#e0a14a] relative border-t justify-between  px-8 flex items-center">
                    <p>2290273649</p>
                    <MdContentCopy
                      className="cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText("2290273649");
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false);
                        }, 2000);
                      }}
                    />
                    {copy && <div className="flex bg-green-300 text-green-700 text-xs p-2 rounded-full absolute right-3">
                      <p>Copied</p>
                    </div>}
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 lg:w-[300px] h-[60px] bg-[#fffdfb] border-[#e0a14a] border-t border-r  px-8 flex items-center">
                    <p>Bank:</p>
                  </div>
                  <div className="w-1/2 lg:w-[300px] h-[60px] bg-[#fffdfb] border-[#e0a14a] border-t     px-8 flex items-center">
                    <p>Zenith Bank.</p>
                  </div>
                </div>
              </div>
            </div>
            <img src={quoteC} alt="" />
          </div>
          <div className="w-20 h-[1px] bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Gift;

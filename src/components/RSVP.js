import React from "react";
import { MdCorporateFare, MdOutlineMap } from "react-icons/md";

const RSVP = () => {
  return (
    <section className="container mx-auto grid place-items-center p-4 md:p-10 xl:pt-20">
      <div className="lg:flex lg:space-x-[60px]">
        <div className="space-y-[44px]">
          <h1 className="font-newYork text-primary text-4xl">RSVP</h1>
          <div className="w-[400px] border-[#e0a14a] border rounded-[15px] overflow-hidden text-primary font-dmSans font-medium text-xl">
            <div className="flex">
              <div className="w-[200px] h-[90px] bg-[#fffdfb] border-[#e0a14a] border-r p-8">
                <p>John:</p>
              </div>
              <div className="w-[200px] h-[90px] bg-[#fffdfb] border-[#e0a14a]  p-8">
                <p>08114140060</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[200px] h-[90px] bg-[#fffdfb] border-[#e0a14a] border-t border-r  p-8">
                <p>Nifesimi:</p>
              </div>
              <div className="w-[200px] h-[90px] bg-[#fffdfb] border-[#e0a14a] border-t     p-8">
                <p>08167889195</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-auto w-[1px] bg-primary"></div>
        <div className="h-[95px] lg:hidden"></div>
        <div className="space-y-[44px]">
          <h1 className="font-newYork text-primary text-4xl">HOTELS</h1>
          <div className="space-y-8">
            <a
              href="https://www.google.com/maps/place/Jagton+Platinum+Suites/@9.0013613,7.5595393,17z/data=!3m1!4b1!4m8!3m7!1s0x104e0fd9242d151f:0x59f26f737fc5a7f6!5m2!4m1!1i2!8m2!3d9.0013718!4d7.5617409"
              target="_blank"
              rel="noreferrer"
              className="flex p-4 hover:bg-[#feeed53d]"
            >
              <div className="flex space-x-[21px]">
                <div className="w-6 h-6 flex items-center overflow-hidden mt-2">
                  <MdCorporateFare className="text-2xl text-[#1C1B1F]" />
                </div>
                <div className="space-y-5 w-[90%] lg:w-[70%] font-dmSans">
                  <p className="text-3xl font-medium leading-normal">
                    Jagton Platinum Suites
                  </p>
                  <p className="text-base font-medium leading-normal text-gray-600">
                    Karu, FHA beside EFCC, Opposite At Donald's Catholic Church,
                    Karu. 700m from Wedding Service Venue
                  </p>
                  <p className="text-base font-medium leading-normal text-gray-600">
                    08022603918, 08164697950, 0815 557 1595
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 lg:flex hidden items-center overflow-hidden ">
                <MdOutlineMap className="text-2xl text-[#dfdfdf]" />
              </div>
            </a>
            <a
              href="https://www.google.com/maps/place/DE+GEORGE+RESORT/@8.9887026,7.5639176,17z/data=!3m1!4b1!4m8!3m7!1s0x104e0efd10faeff3:0x7e81ba3750683e9d!5m2!4m1!1i2!8m2!3d8.9887026!4d7.5661063"
              target="_blank"
              rel="noreferrer"
              className="flex p-4 hover:bg-[#feeed53d]"
            >
              <div className="flex space-x-[21px] w-full">
                <div className="w-6 h-6 flex items-center overflow-hidden mt-2">
                  <MdCorporateFare className="text-2xl text-[#1C1B1F]" />
                </div>
                <div className="space-y-5 w-[90%] lg:w-[70%] font-dmSans">
                  <p className="text-3xl font-medium leading-normal">
                    De George Grand Resort
                  </p>
                  <p className="text-base font-medium leading-normal text-gray-600">
                    XHQ8+FCQ, Jikwoyi Rd, 900101, Abuja. 2km from Wedding
                    Service Venue
                  </p>
                  <p className="text-base font-medium leading-normal text-gray-600">
                    0812 749 5555
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 lg:flex hidden items-center overflow-hidden">
                <MdOutlineMap className="text-2xl text-[#dfdfdf]" />
              </div>
            </a>
            <div className="w-auto h-[1px] bg-primary"></div>
            <a
              href="https://www.google.com/maps/place/Debbie's+upperclass+events+%26+recreation/@8.8862152,7.583281,17z/data=!3m1!4b1!4m5!3m4!1s0x104e0e57c90c240d:0x9dc16c7f046245e0!8m2!3d8.8862051!4d7.5854087"
              target="_blank"
              rel="noreferrer"
              className="space-y-[12px] block p-4 hover:bg-[#feeed53d]"
            >
              <p className="text-xs leading-normal text-red-800 uppercase">
                Reception
              </p>
              <div className="flex justify-between">
                <div className="flex space-x-[21px]">
                  <div className="w-6 h-6 flex items-center overflow-hidden mt-2">
                    <MdCorporateFare className="text-2xl text-[#1C1B1F]" />
                  </div>
                  <div className="space-y-5  font-dmSans">
                    <p className="text-3xl font-medium leading-normal">
                      Debbie's upperclass events & recreation
                    </p>
                    <p className="text-base font-medium leading-normal text-gray-600">
                      KM 7 Nyanya-Karshi Road, EXPRESSWAY 900103, Abuja
                    </p>
                    <p className="text-base font-medium leading-normal text-gray-600">
                      0809 176 6665
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 lg:flex hidden items-center overflow-hidden">
                  <MdOutlineMap className="text-2xl text-[#dfdfdf]" />
                </div>
              </div>
            </a>
            <div className="w-auto h-[1px] bg-primary"></div>
            <a
              href="https://www.google.com/maps/place/RCCG+Praise+Assembly/@9.0069436,7.5621026,17z/data=!3m1!4b1!4m5!3m4!1s0x104e0edecae21b21:0xba547d3fe55c6d7c!8m2!3d9.0069436!4d7.5642913"
              target="_blank"
              rel="noreferrer"
              className="space-y-[12px] block p-4 hover:bg-[#feeed53d]"
            >
              <p className="text-xs leading-normal text-red-800 uppercase">
                WEDDING VENUE
              </p>
              <div className="flex justify-between">
                <div className="flex space-x-[21px]">
                  <div className="w-6 h-6 flex items-center overflow-hidden mt-2">
                    <MdCorporateFare className="text-2xl text-[#1C1B1F]" />
                  </div>
                  <div className="space-y-5 font-dmSans">
                    <p className="text-3xl font-medium leading-normal">
                      RCCG Praise Assembly
                    </p>
                    <p className="text-base font-medium leading-normal text-gray-600">
                      2H47+QPF, By Karu Corner Shops, New Karu
                    </p>
                    <p className="text-base font-medium leading-normal text-gray-600">
                      0809 176 6665
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 lg:flex hidden items-center overflow-hidden">
                  <MdOutlineMap className="text-2xl text-[#dfdfdf]" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;

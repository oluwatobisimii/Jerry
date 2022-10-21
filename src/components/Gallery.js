import React, { useState, useEffect } from "react";
import img1 from "../assets/images/gallery/Frame21.png";
import img2 from "../assets/images/gallery/Frame22.png";
import img3 from "../assets/images/gallery/Frame21-1.png";
import img4 from "../assets/images/gallery/Frame24.png";
import img5 from "../assets/images/gallery/Frame23.png";
import img6 from "../assets/images/gallery/Frame21-2.png";
import img7 from "../assets/images/gallery/Frame24-1.png";
import img8 from "../assets/images/gallery/Frame22-1.png";
import img9 from "../assets/images/gallery/Frame21-3.png";
import img10 from "../assets/images/gallery/Frame23-1.png";
import img11 from "../assets/images/gallery/Frame22-2.png";
import logo from "../assets/images/logo.svg";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const Gallery = () => {
  const [toggle, setToggle] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);


  const showOverlay = (image) => {
    setCurrentImage(image);
    setToggle(!toggle);
    setOverlay(!overlay);
  };

  const closeOverlay = () => {
    setToggle(!toggle);
    setOverlay(!overlay);
  };

  useEffect(() => {
    overlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [overlay]);

  const add = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
      return;
    }
    setCurrentImage(currentImage + 1);
  };

  const subtract = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
      return;
    }
    setCurrentImage(currentImage - 1);
  };

  return (
    <section className="bg-[#640000] relative" id="photo">
      <div className="container mx-auto p-4 md:p-10">
        <div className="flex items-center gap-[32px] mb-6">
          <h1 className="font-newYork text-4xl text-white">PHOTOS</h1>
          <div className="w-full h-[1px] bg-white"></div>
        </div>
        <div className="w-full columns-2 lg:columns-3 gap-4 space-y-4 ">
          <img
            src={img1}
            alt=""
            className="grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
            onClick={() => {
              showOverlay(0);
            }}
          />
          <img
            src={img2}
            alt=""
            className="grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
            onClick={() => {
              showOverlay(1);
            }}
          />
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 overflow-hidden">
            <img
              src={img3}
              alt=""
              className="lg:w-[48%] grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
              onClick={() => {
                showOverlay(2);
              }}
            />
            <img
              src={img4}
              alt=""
              className="lg:w-[48%] grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
              onClick={() => {
                showOverlay(3);
              }}
            />
          </div>
          <img
            src={img5}
            alt=""
            className="grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
            onClick={() => {
              showOverlay(4);
            }}
          />
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 overflow-hidden">
            <img
              src={img6}
              alt=""
              className="lg:w-[48%] grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
              onClick={() => {
                showOverlay(5);
              }}
            />
            <img
              src={img7}
              alt=""
              className="lg:w-[48%] grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
              onClick={() => {
                showOverlay(6);
              }}
            />
          </div>
          <img
            src={img8}
            alt=""
            className="grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
            onClick={() => {
              showOverlay(7);
            }}
          />
          <img
            src={img9}
            alt=""
            className="grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
            onClick={() => {
              showOverlay(8);
            }}
          />
          <img
            src={img10}
            alt=""
            className="grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
            onClick={() => {
              showOverlay(10);
            }}
          />
          <img
            src={img11}
            alt=""
            className="grayscale cursor-[url('./assets/images/gallery/galleryCursor.svg'),_pointer]"
            onClick={() => {
              showOverlay(10);
            }}
          />
        </div>
      </div>

      {toggle && (
        <div
          className="fixed top-0 bottom-0 w-full h-full bg-[#640000] cursor-[url('./assets/images/gallery/galleryC.svg'),_pointer]"
          id="overlay1"
          onClick={(e) => {
            if (e.target.id === "overlay1") {
              closeOverlay();
            }
          }}
        >
          <div
            className="container mx-auto h-full"
            id="overlay2"
            onClick={(e) => {
              if (e.target.id === "overlay2") {
                closeOverlay();
              }
            }}
          >
            <div
              className="flex flex-col items-center justify-center w-full h-full"
              id="overlay3"
              onClick={(e) => {
                if (e.target.id === "overlay3") {
                  closeOverlay();
                }
              }}
            >
              <img src={logo} alt="" className="" />
              <div
                className="w-full flex flex-col lg:flex-row justify-center items-center h-[65vh] lg:h-[70vh]  gap-12 lg:gap-20"
                id="overlay4"
                onClick={(e) => {
                  if (e.target.id === "overlay4") {
                    closeOverlay();
                  }
                }}
              >
                <div
                  className="border-2 rounded-full h-[90px] w-[90px] text-white lg:grid place-items-center cursor-pointer hidden"
                  onClick={() => {
                    subtract();
                  }}
                >
                  <MdArrowBack className="text-2xl" />
                </div>
                <div
                  className="
                  h-[60%] lg:h-[70%] lg:w-[60%] overflow-hidden flex items-center justify-center cursor-default
                "
                >
                  <img src={images[currentImage]} alt="" className="" />
                </div>
                <div
                  className="border-2 rounded-full h-[90px] w-[90px] text-white lg:grid place-items-center cursor-pointer hidden"
                  onClick={() => {
                    add();
                  }}
                >
                  <MdArrowForward className="text-2xl" />
                </div>
                <div className="lg:hidden flex gap-8">
                  <div
                    className="border-2 rounded-full h-[48px] w-[48px] text-white grid place-items-center cursor-pointer"
                    onClick={() => {
                      subtract();
                    }}
                  >
                    <MdArrowBack className="text-2xl" />
                  </div>
                  <div
                    className="border-2 rounded-full h-[48px] w-[48px] text-white grid place-items-center cursor-pointer"
                    onClick={() => {
                      add();
                    }}
                  >
                    <MdArrowForward className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

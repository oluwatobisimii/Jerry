import React, { useRef, useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import logoHeader from "../assets/images/logoHeader.png";
import logoFrame2 from "../assets/images/logoFrame2.png";
import logoGold from "../assets/images/logoGold.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const text1 = text1Ref.current;
      const text2 = text2Ref.current;
      const image1 = image1Ref.current;
      const image2 = image2Ref.current;
      const image3 = ref.current;
      const image4 = ref2.current;
      const imageContainer = imageContainerRef.current;

      gsap.to(text1, {
        rotateX: 90,
        opacity: 0,
        height: -34,
        duration: 8,
        scrollTrigger: {
          scrub: 1,

          trigger: imageContainer,
          start: "top 0%",
          end: "center 70%",
        },
      });

      gsap.to(image1, {
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          scrub: 1,
          // markers: true,
          trigger: imageContainer,
          start: "top 0%",
          end: "center 70%",
        },
      });

      const tl = gsap.timeline();
      gsap.to(image2, {
        opacity: 1,
        // duration: 10,
        scrollTrigger: {
          scrub: true,
          // markers: true,
          trigger: imageContainer,
          start: "top 0%",
          end: "center 70%",
        },
      });

      tl.fromTo(
        image3,
        {
          scale: 0,
          yPercent: -120,
          borderRadius: "50%",
          scrollTrigger: {
            trigger: image4,
            start: "top bottom",
            // markers: true,
            scrub: true,
            ease: "power2",
            end: "center 50%",
            // end: () => `+=${document.querySelector(".image3").offsetHeight / 2}`,
          },
        },
        {
          yPercent: 0,
          scale: 1,
          borderRadius: 0,
          scrollTrigger: {
            trigger: image4,
            start: "top bottom",
            // markers: true,
            scrub: 2,
            end: "center 80%",
            // end: () => `+=${document.querySelector(".image3").offsetHeight / 2}`,
          },
        }
      );

      gsap.to(image2, {
        y: "100px",
        opacity: 0,
        scale: 0,
        borderRadius: 0,
        scrollTrigger: {
          trigger: image4,
          start: "top bottom",
          // markers: true,
          scrub: 2,
          end: "center 50%",
          // end: () => `+=${document.querySelector(".image3").offsetHeight / 2}`,
        },
      });

      gsap.to(text2, {
        rotateX: 0,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          scrub: 2,
          trigger: imageContainer,
          start: "top 0%",
          end: "center 10%",
        },
      });
    }

    return () => {};
  }, []);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const imageContainerRef = useRef(null);

  const ref = useRef(null);
  const ref2 = useRef(null);

  return (
    <section>
      <div className=" ">
        <LayoutGroup>
          <div className="xl:h-[176vh] relative" ref={imageContainerRef}>
            <div className="flex flex-col justify-center items-center space-y-[28px] h-[88vh]  sticky top-[12vh]">
              <div className="xl:h-[350px] relative">
                <img src={logoHeader} alt="" ref={image1Ref} />
                <div
                  layoutId="image"
                  className="absolute top-0 opacity-0"
                  ref={image2Ref}
                >
                  <img src={logoFrame2} alt="" className="" />
                </div>
              </div>
              <div className="h-[250px] overflow-y-hidden">
                <p
                  className="text-[64px] xl:text-[150px] text-red-800 font-newYork text-center"
                  ref={text1Ref}
                >
                  Lizzy & Jerrie
                </p>
                <p
                  className="text-[64px] xl:text-[150px] text-red-800 font-newYork text-center origin-bottom opacity-0"
                  style={{ rotateX: "90deg", transformOrigin: "bottom center" }}
                  ref={text2Ref}
                >
                  #HappilyEverJLO
                </p>
              </div>
              <p className="text-base tracking-widest uppercase font-inter">
                November 19,2022
              </p>
            </div>
          </div>

          <div ref={ref2}>
            <div
              className="bg-[url('./assets/images/bgImageNext.png')] h-screen bg-no-repeat bg-cover image3 p-4 md:p-10 bg-[center_10%] lg:bg-[top_center]] "
              ref={ref}
            >
              <div className="flex flex-col lg:flex-row gap-5 items-center justify-center p-5 xl:pt-16">
                <p className="text-4xl xl:text-6xl text-white font-newYork w-[80%] text-center">
                  Elizabeth Oiza
                </p>
                <img src={logoGold} alt="" />
                <p className="text-4xl xl:text-6xl text-white font-newYork w-[80%] text-center">
                  Jeremiah Oluwadara
                </p>
              </div>
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Home;

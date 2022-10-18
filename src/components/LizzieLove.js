import React, { useState, useEffect } from "react";
import wreath from "../assets/images/wreath.svg";
import quoteC from "../assets/images/quote-close.svg";
import quoteO from "../assets/images/quote-open.svg";
import lizzie from "../assets/images/lizzie-icon.png";
import lizzieLg from "../assets/images/Lizzie.png";
import { MdAdd, MdClose } from "react-icons/md";

const LizzieLove = () => {
  const [toggle, setToggle] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const toggleNotification = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setToggle(!toggle);
      setOverlay(!overlay);
    }
  };

  useEffect(() => {
    overlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [overlay]);

  return (
    <section
      className="cursor-[url('./assets/images/expand.svg'),_pointer] lg:h-auto md:h-screen xl:h-screen relative"
      onClick={toggleNotification}
    >
      <div className="container mx-auto flex flex-col items-center space-y-10 justify-center h-full p-4 md:p-10">
        <img src={wreath} alt="" />
        <p className="text-8xl text-primary font-newYork">Lizzie</p>
        <div className="w-20 h-[1px] bg-primary"></div>
        <div className="flex flex-col lg:flex-row lg:items-start items-center space-y-6 lg:space-y-0 lg:space-x-[32px] xl:w-[75%] 2xl:w-[65%]">
          <img src={quoteO} alt="" />
          <p className="lg:text-2xl  text-center">
            The words and lines blew me away. I think I read that epistle like
            100 times that day. I was pleasantly surprised! I told him I would
            get back to him. I did my consultation with Daddy God and
            interestingly in the period of my “thinking”, my eyes were opened to
            the goodness in this Man that was in my corner all the while… My
            Spec and more! Just when he was doing a follow up on my response, (I
            guess he was nervous as to what my response would be). I had my
            answer ready…Yes!
          </p>
          <img src={quoteC} alt="" />
        </div>
        <div className="w-20 h-[1px] bg-primary"></div>
        <img src={lizzie} alt="" />
        <div
          className="flex items-center bg-primary p-2 space-x-[8.5px] text-white font-dmSans rounded-full px-5 self-start lg:hidden"
          onClick={() => {
            setToggle(!toggle);
            setOverlay(!overlay);
          }}
        >
          <MdAdd className="text-2xl" />
          <p>Expand</p>
        </div>
      </div>

      {toggle && (
        <div
          className="fixed top-0 left-0 lg:w-full cursor-[url('./assets/images/close.svg'),_pointer] h-screen overflow-auto bg-white z-50 w-full"
          onClick={toggleNotification}
        >
          <div className="container mx-auto p-4 md:p-10 grid place-items-center lg:h-screen ">
            <div className="flex lg:space-x-[40px] xl:space-x-[81px] lg:flex-row items-start w-full ">
              <img src={lizzieLg} alt="" className="hidden lg:block lg:w-[30%] xl:w-auto lg:sticky xl:relative lg:top-10" />
              <div className="space-y-[43px] lg:w-[70%] pb-10">
                <div className="flex space-x-4 items-center">
                  <p className="text-[40px] font-newYork text-primary">
                    Lizzie
                  </p>
                  <div className="w-full h-[1px] bg-primary"></div>
                </div>
                <div className="w-full lg:hidden h-[270px] bg-[url('./assets/images/Lizzie.png')] bg-[center_20%]">
                </div>
                
                <div className="lg:columns-2 gap-[50px] font-dmSans lg:pb-20 xl:pb-0">
                  <div>
                    <p>
                      Jerrie and I met in 2013 during our service year (NYSC) in
                      Abuja. I was in Batch A (started in March) while he came
                      in October with Batch C. I was the NCCF Music Director for
                      Abuja at the time.
                      <br />
                      <br />
                      Jerrie joined the NCCF Choir during the Orientation Camp
                      period. As with other members of the Choir, I was quite
                      jovial with him when he and other members came for
                      rehearsals and fellowship. Jerrie’s awesome singing,
                      commitment and divine guidance led me in nominating him as
                      my successor as Music Director of NCCF. I handed over the
                      mantle of leadership to him in November and we remained
                      really good friends even after his service year although
                      he had to move back to Lagos while I remained in Abuja.
                      <br />
                      <br />
                      Through the years, we kept the line of communication open
                      and stayed supportive of each other in our different
                      endeavors. Jerrie seemed to me like my adopted brother who
                      was my listening board, business partner, relationship
                      advisor (lol) amongst other things. Jerrie has shared with
                      me now that some of our friends and NCCF colleagues back
                      then, had predicted we would become a couple and I always
                      respond with “Really? I never would have imagined!” What
                      shall we say to these things? We thank God for NYSC!
                      <br />
                      <br />
                    </p>
                  </div>
                  <div>
                    <p>
                      One fine morning in February 2020, Jerrie called and after
                      we exchanged pleasantries, he said he had sent me a
                      message on WhatsApp earlier (In this season, I was
                      contently single). I read the message afterwards and let’s
                      just say… my life did not remain the same. My Guy sent a
                      really long write-up; expressing his interest and
                      intention.
                      <br />
                      <br />
                      The words and lines blew me away. I think I read that
                      epistle like 100 times that day. I was pleasantly
                      surprised! I told him I would get back to him. I did my
                      consultation with Daddy God and interestingly in the
                      period of my “thinking”, my eyes were opened to the
                      goodness in this Man that was in my corner all the while…
                      My Spec and more! Just when he was doing a follow up on my
                      response, (I guess he was nervous as to what my response
                      would be). I had my answer ready…Yes!
                      <br />
                      <br />
                      It’s been a great journey despite the long distance and
                      It’s amazing to see God’s love expressed through our
                      relationship. I absolutely look forward to a beautiful
                      forever with Jerrie (My Sucrose), closing up all forms of
                      distance when we tie the knots (wink).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="inline-flex items-center bg-primary p-2 space-x-[8.5px] text-white font-dmSans rounded-full px-5 mt-10 lg:hidden"
              onClick={() => {
                setToggle(!toggle);
                setOverlay(!overlay);
              }}
            >
              <MdClose className="text-2xl"/>
              <p>Close</p>
            </div>
            <div className="h-20 lg:hidden"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LizzieLove;

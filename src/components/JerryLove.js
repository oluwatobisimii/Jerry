import React, { useState, useEffect } from "react";
import wreath from "../assets/images/wreath.svg";
import quoteC from "../assets/images/quote-close.svg";
import quoteO from "../assets/images/quote-open.svg";
import lizzie from "../assets/images/jerry-icon.png";
import lizzieLg from "../assets/images/Jerry.png";
import { MdAdd, MdClose } from "react-icons/md";

const JerryLove = () => {
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
        <p className="text-8xl text-primary font-newYork">Jerry</p>
        <div className="w-20 h-[1px] bg-primary"></div>
        <div className="flex flex-col lg:flex-row lg:items-start items-center space-y-6 lg:space-y-0 lg:space-x-[32px] xl:w-[75%] 2xl:w-[65%]">
          <img src={quoteO} alt="" />
          <p className="lg:text-2xl  text-center">
            The thoughts of asking Lizzie out for a relationship (marriage) became pressing in February 2020. Two days before I asked, we had shared memories of NCCF and my friend, NIfesimi amongst others was really on my matter. It wasn’t such a right time for her then and being her counsellor, I didn’t want to appear as taking advantage. Not so like me, I did anyways, in a really long write-up on Tuesday morning. I resumed work thereafter but kept checking my phone for her reply. “I have goofed”, I said to myself (lol). I wasn’t coordinated, so I called. Sighs. She only came online late that morning.

          </p>
          <img src={quoteC} alt="" />
        </div>
        <div className="w-20 h-[1px] bg-primary"></div>
        <img src={lizzie} alt="" />
        <div
          className="flex items-center bg-primary p-2 space-x-[8.5px] text-white font-dmSans rounded-full px-5 self-start lg:hidden"
          onClick={() => { setToggle(!toggle); setOverlay(!overlay); }} >
          <MdAdd className="text-2xl" />
          <p>Expand</p>
        </div>
      </div>

      {toggle && (
        <div
          className="fixed top-0 left-0 lg:w-full cursor-[url('./assets/images/close.svg'),_pointer] h-screen overflow-auto bg-white z-50 w-full"
          onClick={toggleNotification}
        >
          <div className="container mx-auto p-4 md:p-10 grid place-items-center lg:h-screen">
            <div className="flex lg:space-x-[81px] lg:flex-row items-start">
              <img src={lizzieLg} alt="" className="hidden lg:block" />
              <div className="space-y-[43px]">
                <div className="flex space-x-4 items-center">
                  <p className="text-[40px] font-newYork text-primary">
                    Jerry
                  </p>
                  <div className="w-full h-[1px] bg-primary"></div>
                </div>
                <div className="w-full lg:hidden h-[270px] bg-[url('./assets/images/Lizzie.png')] bg-[center_20%]">
                </div>

                <div className="lg:columns-2 gap-[50px] pb-10 font-dmSans text-sm">
                  <div>
                    <p>
                      Lizzie and I met in October 2013 at Kubwa Camp. She was the Music Director (MD) at the time and one of those faces we looked forward to seeing every evening at NCCF meetings. My Dad and I had plans about my PPA  but strangely, they fell through. Lizzie nominated me as her successor amidst mixed feelings about NCCF rules and procedures.
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
                      When I told Lizzie I was giving it a second thought, she said that she had made her decision and would encourage me. By God’s grace, I became the Music Director. Lizzie and I became very close especially in the family house. When in the room the ‘brothers’ would say all sort of funny things to me suspecting something deeper between us but I just smiled. Lizzie, before she left the family house, made me like the environment as I eventually stayed there till the end of my service year. She was also supportive throughout my tenure as MD (GMD of Life).

                      <br />
                      <br />
                    </p>
                  </div>
                  <div>
                    <p>
                      After Service year, I returned to Lagos, moved on with life, but we kept in touch. I did not see her again until 2017 when I came for a fieldwork in Abuja. Funnily enough, we were too serious to think of the possibility of being in a relationship with each other (lol). If that line ever came up, it was to throw bantas. Lizzie was strangely the only female friend close to me in age. I grew my savings with her even though she didn’t give me interest (well, now I have the CBN with me forever). She was also my business partner and first to support any idea I brought to the table.

                      <br />
                      <br />
                      The thoughts of asking Lizzie out for a relationship (marriage) became pressing in February 2020. Two days before I asked, we had shared memories of NCCF and my friend, NIfesimi amongst others was really on my matter. It wasn’t such a right time for her then and being her counsellor, I didn’t want to appear as taking advantage. Not so like me, I did anyways, in a really long write-up on Tuesday morning. I resumed work thereafter but kept checking my phone for her reply. “I have goofed”, I said to myself (lol). I wasn’t coordinated, so I called. Sighs. She only came online late that morning.

                      <br />
                      <br />
                      Fast forward, she made it very easy and even gave me a hint before her “official’ reply (lol) which came not too long afterwards. From that time and till now, it has  been beautiful really. I give it up to God for making this happen. He composed and conducted the symphony. When I look back at the whole Abuja thing, I say to God, “You are hilarious!” As Lizzie would say, “The Jerrie that I know would not have made any attempt.” I agree (lol). But I did! Yes! Our friendship is about everything that has kept us going amidst this north and south polarity. The journey gets sweeter by the day. Hey Lizzie, I am counting down to when I’d be sharing “my world” with you.
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
              <MdClose className="text-2xl" />
              <p>Close</p>
            </div>
            <div className="h-20 lg:hidden"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JerryLove;

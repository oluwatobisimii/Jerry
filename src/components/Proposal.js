import React, { useState, useEffect } from "react";
import wreath from "../assets/images/wreath.svg";
import quoteC from "../assets/images/quote-close.svg";
import quoteO from "../assets/images/quote-open.svg";
import lizzie from "../assets/images/proposal-icon.png";
import lizzieLg from "../assets/images/Proposal.png";
import { MdAdd, MdClose } from "react-icons/md";

const Proposal = () => {
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
      className="cursor-[url('./assets/images/expand.svg'),_pointer] xl:h-screen relative"
      onClick={toggleNotification}
    >
      <div className="container mx-auto flex flex-col items-center space-y-10 justify-center h-full p-4 py-6 md:p-10">
        <img src={wreath} alt="" />
        <p className="text-8xl text-primary font-newYork text-center">The Proposal</p>
        <div className="w-20 h-[1px] bg-primary"></div>
        <div className="flex flex-col lg:flex-row lg:items-start items-center space-y-6 lg:space-y-0 lg:space-x-[32px] xl:w-[75%] 2xl:w-[65%]">
          <img src={quoteO} alt="" />
          <p className="lg:text-2xl  text-center">
            “I don’t want the attention (senrenren) that comes with a public
            engagement proposal” This was me to Jerrie a few times in our
            relationship when the subject of engagement proposal slid into our
            conversations. I would say to him: “If I didn’t agree to marry you,
            we wouldn’t be doing this na, so please, another proposal wasn’t
            necessary”.
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
          className="fixed top-0 left-0  lg:w-screen cursor-[url('./assets/images/close.svg'),_pointer] h-screen overflow-auto bg-white z-50 w-full"
          onClick={toggleNotification}
        >
          <div className="container mx-auto p-4 md:p-10 grid place-items-center lg:h-screen">
            <div className="flex  lg:flex-row items-start">
              <div className="space-y-[43px]">
                <div className="flex space-x-4 items-center">
                  <p className="text-[30px] font-newYork text-primary">
                    LIZZIE & JERRIE’s PROPOSAL STORY
                  </p>
                  <div className="md:w-[20vw] w-[50vw] h-[1px] bg-primary"></div>
                </div>
                <div className="w-full lg:hidden h-[270px] bg-[url('./assets/images/Proposal.png')] bg-no-repeat bg-cover bg-center"></div>
                <div className="lg:columns-3 gap-[50px] font-dmSans">
                  <div>
                    <p>
                      “I don’t want the attention (senrenren) that comes with a
                      public engagement proposal” This was me to Jerrie a few
                      times in our relationship when the subject of engagement
                      proposal slid into our conversations. I would say to him:
                      “If I didn’t agree to marry you, we wouldn’t be doing this
                      na, so please, another proposal wasn’t necessary”. With
                      these subtle warnings and advice from me, I stayed
                      enjoying the relationship without any thought of the
                      subject of my writings today.
                      <br />
                      <br />
                      <div className="">
                        <img
                          src={lizzieLg}
                          alt=""
                          className="hidden lg:block"
                        />
                        <br />
                      </div>
                      To mark our 2nd year relationship anniversary in February
                      2022, we planned to have a photo session and dinner
                      afterwards. A physical meeting in Abuja in February didn’t
                      come through and so we moved the plan to the next
                      available opportunity and this led us to Friday, June 10,
                      2022. I already had conversations with our photographer
                      (Miles) and we came up with two locations for the photo
                      sessions, one of which included the restaurant where we
                      would have dinner later that evening. The photo session at
                      the outdoor venue went well.
                      <br />
                      <br />
                      We moved on to the next location; the restaurant and
                      continued taking pictures with our photography team. I was
                      a bit surprised that there was little resistance and such
                      liberty for us to take pictures at different parts of
                      their really beautiful space. Everyone seemed to be
                      cooperating and about twice when some staff tried to ask
                      questions, Jerrie and Miles (especially) quickly responded
                      to them, and image capturing continued. I shared my
                      thoughts about how easy the session was going with Jerrie
                      a few times, and he said, “Oh, when I was making
                      reservations, I already informed them about the
                      photoshoot”. At this time, my sixth sense perceived
                      something more was cooking, especially in the line of a
                      proposal but l shrugged it off because at the first
                      location of the photo session, Jerrie “apologized” for the
                      absence of a ring on my finger, in what turned out to be
                      one of our pre-wedding photos. My response: “...I am fine
                      without it.” Hearing this earlier that day, I felt in the
                      right telling my intuition, “keep quiet, nothing is
                      happening tonight.”
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
                      After pictures, we bid good night to our photography team
                      and moved on to have dinner. Before dinner commenced,
                      Miles came whispering some things in Jerrie’s ears and he
                      left. Jerrie paused for a while and asked us to swap seat
                      positions at the table, he wanted to face the entrance of
                      the space we were in. I innocently changed position. I
                      asked what the whispering of Miles was about and he made
                      up some lines about Miles informing him about some next
                      day arrangement. At this point, I reminded my sixth sense
                      that if a proposal was going to happen, the photographers
                      wouldn’t leave because the Jerrie that I know would love
                      to have memories of the event, “so please allow me eat in
                      peace” I concluded. We ate, conversed and had a good time
                      generally. When we were done eating, it was taking some
                      time for someone to attend to our bills so we could move.
                      I began nudging Jerrie as I do most of the time, “We
                      should be leaving now, it’s getting late”.
                      <br />
                      <br />
                      While waiting to settle the bill, I saw a cake moving
                      towards our direction and I said to Jerrie, “Who is
                      celebrating birthday?” …in seconds, the Cake was in front
                      of me with the words: “Will you marry me?” on it, before I
                      looked up to Jerrie, he was on his knees saying some
                      things I don’t recall. I was lost in the euphoria of the
                      moment and did not even know what exactly I was doing as
                      my eyes became teary. Looking around, I saw Miles and his
                      team again as well as our friend, Nifesimi, who we saw
                      earlier in the day and was supposedly not feeling fine.
                      Imagine my surprise to see him excited as part of a team
                      who just released a blockbuster movie. A Beautiful
                      Surprise it was and an awesome opportunity to say YES
                      again to my Sweet Love, Jerrie!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="inline-flex items-center bg-primary p-2 space-x-[8.5px] text-white font-dmSans rounded-full px-5 mt-10 lg:hidden cursor-pointer"
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

export default Proposal;

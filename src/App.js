import "./App.css";
import Gallery from "./components/Gallery";
import Gift from "./components/Gift";
import JerryLove from "./components/JerryLove";
import LizzieLove from "./components/LizzieLove";
import OurLoveCover from "./components/OurLoveCover";
import RSVP from "./components/RSVP";
import RSVPCover from "./components/RSVPCover";
import ProposalCover from "./components/ProposalCover";
import Proposal from "./components/Proposal";
import Home from "./components/Home";
import GiftCover from "./components/GiftCover";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <div className="">
        <div className="snap-start">
          <OurLoveCover />
        </div>
        <div className="snap-start">
          <LizzieLove />
        </div>
        <div className="snap-start">
          <JerryLove />
        </div>
      </div>
      <ProposalCover />
      <Proposal />
      <Gallery />
      <GiftCover />
      <Gift />
      <RSVPCover />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;

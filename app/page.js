import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsTop from "./components/NewsTop";

export default function Home() {
  return (
    <>
      <div className=" ">
        <Header />
        <Navbar />
        <div className="bg-[#E9E7E8]">
        <News/>
        <NewsTop/>

        </div>
      </div>
    </>
  );
}



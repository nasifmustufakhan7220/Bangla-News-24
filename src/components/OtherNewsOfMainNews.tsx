import { IOtherNews } from "@/types/type";
import NewsCardOfOtherNews from "./NewsCardOfOtherNews";


const OtherNewsOfMainNews = ({news}:{news:IOtherNews[]}) => {
    return (
      <div className="mt-5">
        {news
          .filter(
            (n) =>
              n.title !== "সামাজিক মাধ্যমে বিবিসি বাংলা" &&
              n.title !== "বিবিসি বাংলা এখন ইন্সটাগ্রামে!" &&
              n.title !== "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!",
          )
          .map((slectedN) => (
            <div className="text-xl font-semibold mt-5" key={slectedN.curationId}>
              {slectedN.title}
              <div className="divider"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">{slectedN.articles.map(ar=><NewsCardOfOtherNews key={ar.id} newsCard={ar}/>)}</div>
            </div>
          ))}
      </div>
    );};

export default OtherNewsOfMainNews;
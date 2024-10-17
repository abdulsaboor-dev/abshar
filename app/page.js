import Image from "next/image";
import waterSaving from "./data/waterSave";
import saveWaterIcon from "@/public/waterSavingImg/save-water.png";
import saveWaterIcon2 from "@/public/waterSavingImg/water-saving-second-icon.png";
import weatherIcon from "@/public/waterSavingImg/weather-icon.png";
import electricPolIcon from "@/public/waterSavingImg/electric-pole.png";
import equalizerIcon from "@/public/waterSavingImg/equalizer.png";
import roiWeekIcon from "@/public/waterSavingImg/roi-week-icon.png";
import airFlowIcon from "@/public/waterSavingImg/air-flow.png";


export default function Home() {

  const getImage = (imageName) => {
    return require(`./assets/${imageName}`);
  }

  return (
    <>
      <section>
        {
          waterSaving.length > 0 ? waterSaving.map((item) => {
            return (
              <div key={item.id}>
                <div className="home-container p-[4rem]">
                  <h1 className="text-center text-white text-[42px] font-medium leading-[60px] mb-[3rem]">{item.mainHeading}</h1>
                  <p className="text-center text-white text-[24px] font-medium leading-[40px]">{item.mainSubHeading}</p>
                </div>
                <div className="grid grid-cols-2 gap-14 p-[4rem] mb-[1rem]">
                  <div>
                    <Image src={getImage(item.productUrlLarge)} className="mb-[3rem] w-full" />
                    <div className="flex justify-end">
                      <Image src={getImage(item.productSmallUrl)} />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[58px] font-medium leading-[70px] mb-8">{item.productHeading}</h1>
                    <p className="text-[24px] font-medium leading-[40px]">{item.productParagraph}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-[4rem]">
                  <div>
                    <div className="flex items-center">
                      <Image src={saveWaterIcon} /> <span className="ms-4">{item.productBenefitOne}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image src={saveWaterIcon2} /> <span className="ms-4">{item.productBenefitTwo}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image src={weatherIcon} /> <span className="ms-4">{item.productBenefitThree}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image src={electricPolIcon} /> <span className="ms-4">{item.productBenefitFour}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image src={equalizerIcon} /> <span className="ms-4">{item.productBenefitFive}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image src={roiWeekIcon} /> <span className="ms-4">{item.productBenefitSix}</span>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center">
                      <Image src={airFlowIcon} /> <span className="ms-4">{item.productBenefitSeven}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 text-center mb-[1rem]">
                  <p className="flex justify-center items-center mb-[3rem]"><span className="text-PriceText text-[24px] font-medium leading-[40px] me-[2rem]">{item.unitText}</span> <span className="text-[64px] font-medium leading-[40px]">{item.UnitAmount}</span></p>
                  <button className="px-[20px] py-[12px] text-[36px] font-medium leading-[40px] bg-BuyBtn text-white w-[300px] mx-auto rounded-[46px]">Buy Now</button>
                </div>
              </div>
            )
          })
            :
            <></>
        }
      </section>

      <section>

      </section>

    </>
  );
}

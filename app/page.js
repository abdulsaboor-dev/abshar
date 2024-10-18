"use client"
import Image from "next/image";
import waterSaving from "./data/waterSave";
import productCards from "./data/productCards";
import saveWaterIcon from "@/public/waterSavingImg/save-water.png";
import saveWaterIcon2 from "@/public/waterSavingImg/water-saving-second-icon.png";
import weatherIcon from "@/public/waterSavingImg/weather-icon.png";
import electricPolIcon from "@/public/waterSavingImg/electric-pole.png";
import equalizerIcon from "@/public/waterSavingImg/equalizer.png";
import roiWeekIcon from "@/public/waterSavingImg/roi-week-icon.png";
import airFlowIcon from "@/public/waterSavingImg/air-flow.png";
import { useEffect, useState } from "react";


export default function Home() {
  const [filterRecord, setFilterRecord] = useState([]);
  const [productCard, setProductCard] = useState([]);
  const [productCardId, setProductCardId] = useState(1);

  const cardId = 1;

  const getImage = (imageName) => {
    return require(`./assets/${imageName}`);
  }

  const hiddenProductCardhandler = (itemId) => {
    setProductCardId(itemId);
  }

  useEffect(() => {
    const finalFilterProduct = waterSaving.filter((item) => item.id == productCardId);
    setFilterRecord(finalFilterProduct);
  }, [productCardId]);

  useEffect(() => {
    const removeSelectProductCard = productCards.filter((item) => item.id != productCardId);
    setProductCard(removeSelectProductCard);
  }, [productCardId]);

  return (
    <>
      <section className="mb-[5rem]">
        {
          filterRecord.length > 0 ? filterRecord.map((item) => {
            return (
              <div key={item.id}>
                <div className="home-container sm:p-[1rem] md:p-[4rem] mb-[1rem]">
                  <h1 className="text-center text-white text-[42px] font-medium leading-[60px] mb-[3rem]">{item.mainHeading}</h1>
                  <p className="text-center text-white text-[24px] font-medium leading-[40px]">{item.mainSubHeading}</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-14 sm:p-[1rem] md:p-[4rem] mb-[1rem]">
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
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:p-[1rem] md:p-[4rem]">
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

      <section className="mb-[5rem]">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 p-[4rem]">
          {
            productCard.length > 0 ? productCard.slice(0, 4).map((item) => {
              return (
                <div className="text-center shadow-card-shadow p-[15px] rounded-[10px]">
                  <Image src={getImage(item.cardImg)} className="mb-[1rem] w-[200px] mx-auto" />
                  <h1 className="mb-[1rem] text-[25px] font-bold">{item.cardHeading}</h1>
                  <p className="text-[16px] font-medium leading-[20px] mb-[1rem]">{item.cardSubHeading}</p>
                  <h1 className="text-[20px] font-bold mb-[1rem]">{item.cardPrice} PKR</h1>
                  <button className="bg-BuyBtn text-white font-medium px-[20px] py-[12px] rounded-[45px]" onClick={() => hiddenProductCardhandler(item.id)}>{item.cardBtnLabel}</button>
                </div>
              )
            })
              :
              <> </>
          }
        </div>

      </section>

    </>
  );
}

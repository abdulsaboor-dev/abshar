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
import FAQSection from "./components/productsPage/FAQSection";
import productQuestion from "./data/productsQuestion";
import Link from "next/link";

export default function Home() {
  const [filterRecord, setFilterRecord] = useState([]);
  const [productCard, setProductCard] = useState([]);
  const [productCardId, setProductCardId] = useState(1);
  const [accordions, setAccordion] = useState([]);

  const getImage = (imageName) => {
    return require(`./assets/${imageName}`);
  }

  const hiddenProductCardhandler = (itemId) => {
    setProductCardId(itemId);
  }

  useEffect(() => {
    const finalFilterProduct = waterSaving.filter((item) => item.id == productCardId);
    setFilterRecord(finalFilterProduct);
    const removeSelectProductCard = productCards.filter((item) => item.id != productCardId);
    setProductCard(removeSelectProductCard);
    setAccordion(productQuestion);
  }, [productCardId]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.id === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <>
      <section>
        {
          filterRecord.length > 0 ? filterRecord.map((item) => {
            return (
              <div key={item.id}>
                <div className="home-container sm:p-[1rem] md:p-[4rem] sm:mb-[1rem] md:mb-[5rem]">
                  <h1 className="text-center text-white sm:text-[20px] md:text-[42px] font-medium sm:leading-[25px] md:leading-[60px] sm:mb-[1rem] md:mb-[3rem]">{item.mainHeading}</h1>
                  <p className="text-center text-white sm:text-[15px] sm:leading-[20px] md:text-[24px] font-medium md:leading-[40px]">{item.mainSubHeading}</p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-6 md:gap-14 sm:px-[1rem] md:px-[4rem] sm:mb-[3rem] md:mb-[5rem]">
                  <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                    <div>
                      <Image src={getImage(item.productUrlLarge)} className="sm:mb-[1rem] md:mb-[3rem] w-full sm:h-full md:h-auto" />
                    </div>
                    <div className="flex justify-end">
                      <Image src={getImage(item.productSmallUrl)} />
                    </div>
                  </div>
                  <div>
                    <h1 className="sm:text-[30px] sm:text-subHeadingColor md:text-black md:text-[58px] font-medium sm:leading-[20px] md:leading-[70px] sm:mb-4 md:mb-8">{item.productHeading}</h1>
                    <p className="sm:text-[12px] sm:leading-[23px] md:text-[24px] font-medium md:leading-[40px]">{item.productParagraph}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:px-[1rem] md:px-[4rem] sm:mb-[3rem] md:mb-[5rem]">
                  <div className="flex items-center">
                    <Image src={saveWaterIcon} className="sm:w-[50px] md:w-auto" /> <span className="ms-4">{item.productBenefitOne}</span>
                  </div>
                  <div className="flex items-center">
                    <Image src={saveWaterIcon2} className="sm:w-[35px] md:w-auto" /> <span className="ms-4">{item.productBenefitTwo}</span>
                  </div>
                  <div className="flex items-center">
                    <Image src={weatherIcon} className="sm:w-[50px] md:w-auto" /> <span className="ms-4">{item.productBenefitThree}</span>
                  </div>
                  <div className="flex items-center">
                    <Image src={electricPolIcon} className="sm:w-[50px] md:w-auto" /> <span className="ms-4">{item.productBenefitFour}</span>
                  </div>
                  <div className="flex items-center">
                    <Image src={equalizerIcon} className="sm:w-[50px] md:w-auto" /> <span className="ms-4">{item.productBenefitFive}</span>
                  </div>
                  <div className="flex items-center">
                    <Image src={roiWeekIcon} className="sm:w-[50px] md:w-auto" /> <span className="ms-4">{item.productBenefitSix}</span>
                  </div>
                  <div className="sm:col-span-2 md:col-span-3">
                    <div className="flex items-center">
                      <Image src={airFlowIcon} className="sm:w-[100px] md:w-auto sm:ms-[0.5rem]" /> <span className="ms-4">{item.productBenefitSeven}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 text-center sm:mb-[3rem] md:mb-[5rem]">
                  <p className="sm:hidden md:flex justify-center items-center mb-[3rem]"><span className="text-PriceText text-[24px] font-medium leading-[40px] me-[2rem]">{item.unitText}</span> <span className="text-[64px] font-medium leading-[40px]">{item.UnitAmount}</span></p>
                  <div className="sm:block md:hidden">
                    <p className="text-[30px] font-medium leading-[20px] mb-[1.5rem]">{item.UnitAmount} PKR</p>
                    <p className="text-PriceText text-[16px] font-medium leading-[20px] mb-[1.5rem]">{item.unitText}</p>
                  </div>
                  <button className="sm:px-[8px] sm:py-[5px] md:px-[20px] md:py-[12px] sm:text-[20px] md:text-[36px] font-medium leading-[40px] bg-BuyBtn hover:bg-buyBtnHover text-white sm:w-[150px] md:w-[300px] mx-auto rounded-[46px]">Buy Now</button>
                </div>
              </div>
            )
          })
            :
            <></>
        }
      </section>

      <section className="sm:hidden md:block sm:mb-[3rem] md:mb-[5rem] sm:px-[1rem] md:px-[0rem]">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 sm:gap-1 md:gap-8 sm:text-center md:text-left sm:mb-[1.5rem] md:mb-[3rem]  ">
          <div></div>
          <div className="col-span-2">
            <h1 className="sm:text-[20px] md:text-[48px] sm:leading-[30px] md:leading-[60px] font-bold text-subHeadingColor sm:mb-[0.5rem] md:mb-[1rem]">
              Frequently asked questions.
            </h1>
            <p className="sm:text-[12px] md:text-[18px] sm:leading-[20px] md:leading-[28px] text-PriceText ">
              Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi
              pellentesque tincidunt at mollis facilisis. Nisl eu blandit nunc
              parturient adipiscing commodo.
            </p>
          </div>
          <div></div>
        </div>

        {
          accordions.map((accordion) => {
            return (
              <FAQSection
                key={accordion.id}
                title={accordion.title}
                data={accordion.data}
                isOpen={accordion.isOpen}
                toggleAccordion={() => toggleAccordion(accordion.id)}
              />
            )
          })
        }
      </section>

      <section>
        <h1 className="text-center mb-[2rem] font-bold text-subHeadingColor sm:text-[20px] md:text-[25px]">Relevant Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:px-4 md:px-[4rem] sm:mb-[2rem] md:mb-[5rem]">
          {
            productCard.length > 0 ? productCard.slice(0, 4).map((item) => {
              return (
                <Link href={`/product/${item.id}`}>
                  <div className="text-center shadow-card-shadow sm:px-[6px] sm:py-[10px] md:p-[15px] rounded-[10px]">
                    <Image src={getImage(item.cardImg)} className="mb-[1.5rem] sm:w-[200px] md:w-[250px] sm:min-h-[140px] md:min-h-[250px] mx-auto" />
                    <h1 className="sm:text-[15px] md:text-[25px] text-subHeadingColor sm:leading-[18px] md:leading-[40px] font-bold sm:min-h-[45px] md:min-h-[85px]">{item.cardHeading}</h1>
                    <p className="sm:text-[12px] md:text-[16px] font-medium sm:min-h-[120px] md:min-h-[135px] sm:leading-[16px] md:leading-[25px]">{item.cardSubHeading}</p>
                    <h1 className="sm:text-[15px] md:text-[20px] font-bold mb-[1rem]">{item.cardPrice} PKR</h1>
                    <button className="bg-BuyBtn hover:bg-buyBtnHover text-white font-bold sm:text-[12px] md:text-[16px] sm:px-[12px] sm:py-[5px] md:px-[20px] md:py-[12px] rounded-[45px]" onClick={() => hiddenProductCardhandler(item.id)}>{item.cardBtnLabel}</button>
                  </div>
                </Link>
              )
            })
              :
              <> </>
          }
        </div>

      </section>

      <section className="sm:block md:hidden sm:mb-[3rem] md:mb-[5rem] sm:px-[1rem] md:px-[0rem]">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 sm:gap-1 md:gap-8 sm:text-center md:text-left sm:mb-[1.5rem] md:mb-[3rem]  ">
          <div></div>
          <div className="col-span-2">
            <h1 className="sm:text-[20px] md:text-[48px] sm:leading-[30px] md:leading-[60px] font-bold text-subHeadingColor sm:mb-[0.5rem] md:mb-[1rem]">
              Frequently asked questions.
            </h1>
            <p className="sm:text-[12px] md:text-[18px] sm:leading-[20px] md:leading-[28px] text-PriceText ">
              Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi
              pellentesque tincidunt at mollis facilisis. Nisl eu blandit nunc
              parturient adipiscing commodo.
            </p>
          </div>
          <div></div>
        </div>

        {
          accordions.map((accordion) => {
            return (
              <FAQSection
                key={accordion.id}
                title={accordion.title}
                data={accordion.data}
                isOpen={accordion.isOpen}
                toggleAccordion={() => toggleAccordion(accordion.id)}
              />
            )
          })
        }
      </section>

    </>
  );
}

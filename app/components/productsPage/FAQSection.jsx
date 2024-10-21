"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FAQSection(props) {
  return (
    <section>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 sm:gap-1 md:gap-8">
        <div></div>
        <div className="col-span-2">
          <button
            className="w-full flex justify-between items-center sm:text-[14px] md:text-[16px] sm:p-3 md:p-4 text-left font-bold text-black mb-[1rem] rounded-[20px] border border-black hover:bg-gray-100 transition duration-300"
            onClick={props.toggleAccordion}
          >
            {props.title}
            <span
              className={`float-right transform transition-transform duration-300`}
            >
              {props.isOpen ? (
                <FontAwesomeIcon icon={faMinus} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </span>
          </button>
          {props.isOpen && (
            <div className="sm:text-[14px] md:text-[20px] text-black bg-fqContainer rounded-[20px] mb-[1rem] p-[20px]">
              {props.data}
            </div>
          )}
        </div>
        <div></div>
      </div>
    </section>
  );
}

"use client";
import React, { createContext, useState } from "react";
import doorWorkSample1 from "../../../public/assets/doorWorkSample1.jpg";
import closetWorkSample1 from "../../../public/assets/closetWorkSample1.jpg";
import cabinetMemberanWorkSample1 from "../../../public/assets/cabinetMemberanWorkSample1.jpg";

export const context = createContext();

function WorkSamplesContext({ children }) {
  const data = useState([
    {
      id: 1,
      imageSrc: doorWorkSample1,
      title: "ساخت درب ساختمان",
    },
    {
      id: 2,
      imageSrc: closetWorkSample1,
      title: "کمد دیواری ",
    },
    {
      id: 3,
      imageSrc: cabinetMemberanWorkSample1,
      title: "کابینت ممبران آشپزخانه",
    },

    {
      id: 4,
      imageSrc: cabinetMemberanWorkSample1,
      title: "کمد",
    },
    {
      id: 5,
      imageSrc: cabinetMemberanWorkSample1,
      title: "کمد",
    },
  ]);
  return <context.Provider value={data}>{children}</context.Provider>;
}

export default WorkSamplesContext;

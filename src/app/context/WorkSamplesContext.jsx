"use client";
import React, { createContext, useState } from "react";
import doorWorkSample1 from "../../../public/assets/doorWorkSample1.jpg";
import closetWorkSample1 from "../../../public/assets/closetWorkSample1.jpg";
import cabinetMemberanWorkSample1 from "../../../public/assets/cabinetMemberanWorkSample1.jpg";

export const WorkContext = createContext();

function WorkSamplesContext({ children }) {
  const data = useState([
    {
      cabinetMDF: [
        {
          id: 1,
          imageSrc: closetWorkSample1,
          title: "کمد دیواری ",
        },
      ],
    },
    {
      closet: [
        {
          id: 1,
          imageSrc: cabinetMemberanWorkSample1,
          title: "کمد",
        },
        {
          id: 1,
          imageSrc: cabinetMemberanWorkSample1,
          title: "کمد",
        },
      ],
    },
    {
      cabinetMemberan: [
        {
          id: 1,
          imageSrc: cabinetMemberanWorkSample1,
          title: "کابینت ممبران آشپزخانه",
        },
      ],
    },
    {
      door: [
        {
          id: 1,
          imageSrc: doorWorkSample1,
          title: "ساخت درب ساختمان",
        },
      ],
    },
    {
      mirror: [
        {
          id: 1,
          imageSrc: doorWorkSample1,
          title: "اینه",
        },
      ],
    },
    {
      stair: [
        {
          id: 1,
          imageSrc: doorWorkSample1,
          title: "اینه",
        },
      ],
    },
  ]);
  return <context.Provider value={data}>{children}</context.Provider>;
}

export default WorkSamplesContext;

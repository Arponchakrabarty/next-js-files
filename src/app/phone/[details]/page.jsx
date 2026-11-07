"use client";

import { usePhones } from "@/app/phone-hunter";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

function Phonedetails() {
  const { details } = useParams();
  const newPhn = usePhones;
  // console.log(details, newPhn);
  const phoneDetails = newPhn.find((item) => item.id === details);
  
  

  return (
    <div>
      {phoneDetails.id}
      {phoneDetails.name}
      {phoneDetails.price}
      <Image width={100} height={80} src={phoneDetails.image} alt="phone image"/>
      {phoneDetails.brand}
      {phoneDetails.rating}
      {phoneDetails.storage}
      {phoneDetails.ram}
      {phoneDetails.color}
      {phoneDetails.stock}
      {phoneDetails.featured}
    </div>
  );
}

export default Phonedetails;

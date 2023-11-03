"use client";
import Image from "next/image";
import { ImHome } from "react-icons/im";
import { MdOutlinePayment } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { BsCartCheckFill } from "react-icons/bs";
import { desp, getMonthStatus } from "@/api/api";
import { useEffect, useState } from "react";
import { MonthStatusType } from "@/types/types";
import { CirclesWithBar } from "react-loader-spinner";
import Expenses from "@/components/Expenses";

export default function Home() {
  const [month, setMonth] = useState<MonthStatusType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getmonthStatus = async () => {
      getMonthStatus()
        .then((resp) => {
          const monthStatus = resp as MonthStatusType;
          console.log("rep");
          console.log(resp);
          setMonth(monthStatus);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
          setIsLoading(false);
        });
    };
    getmonthStatus();
  }, []);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );

  return (
    <main className="grid h-screen bg-blue-950 md:w-5/12 md:m-auto">
      <div className="   grid self-start">
        <div className="bg-yellow-400 p-3 text-center rounded-b-3xl">
          <p className="text-3xl font-bold">Balburdia - Caixinha</p>
        </div>
        <p className="text-yellow-400 text-3xl font-bold text-center my-2">
          {month?.currentMonth}
        </p>

        <div className=" font-bold text-xl text-yellow-400 currency rounded-full flex items-center justify-center m-auto bg-blue-700">
          {month?.balance}
        </div>

        <div className=" text-white text-center my-3 border-b pb-2 flex justify-center gap-x-4">
          <p className="self-end">Saldo inicial do mês: </p>
          <p className="bg-green-400 rounded px-4 py-2">
            {month?.totalOfMonth}{" "}
          </p>
        </div>
        <div className="info border p-2 scroll">
          <Expenses />
        </div>
      </div>
      <div className="self-end p-2 footer bg-yellow-400 rounded-t-3xl">
        <div className="text-black flex justify-around">
          <div className="text-4xl">
            <ImHome />
          </div>

          <div className="text-4xl">
            <MdOutlinePayment />
          </div>

          <div className="text-4xl">
            <PiUsersFourFill />
          </div>

          <div className="text-4xl">
            <BsCartCheckFill />
          </div>
        </div>
      </div>
    </main>
  );
}

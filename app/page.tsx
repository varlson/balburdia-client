"use client";
import { getMonthStatus, wakeUp } from "@/api/api";
import { useEffect, useState } from "react";
import { MonthStatusType } from "@/types/types";
import Expenses from "@/components/Expenses";
import ErrorPage from "@/components/ErrorPage";
import Loader from "@/components/Loader";

export default function Home() {
  const [month, setMonth] = useState<MonthStatusType | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setInterval(async () => {
    //   wakeUp()
    //     .then((resp) => {
    //       console.log(resp + " Wake-up Operaton");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       console.log(" Wake-up Operaton failed");
    //     });
    // }, 60000);

    const getmonthStatus = async () => {
      getMonthStatus()
        .then((resp) => {
          const monthStatus = resp as MonthStatusType;
          // console.log("rep");
          // console.log(resp);
          setMonth(monthStatus);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(true);
          // console.lllog("error");
          // console.log(error);
          setIsLoading(false);
        });
    };
    getmonthStatus();
  }, []);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  if (error) return <ErrorPage />;

  return (
    <main className="">
      <div className="grid self-start">
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
    </main>
  );
}

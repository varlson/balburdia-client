"use client";
import { getExpenses } from "@/api/api";
import { ExpenseType, ExpensesType } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function page() {
  const [expenses, setExpenses] = useState<ExpenseType | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getmonthExpenses = async () => {
      getExpenses()
        .then((resp: any) => {
          const expensesResp = resp.data as ExpensesType[];
          const exp: ExpenseType = {
            expenses: expensesResp,
            total: resp.total,
          };

          console.log("expenses api");
          console.log(resp);
          setExpenses(exp);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(true);
          console.log("error");
          console.log(error);
          setIsLoading(false);
        });
    };
    getmonthExpenses();
  }, []);
  return (
    <div className="">
      <p className="text-xl text-yellow-400 underline underline-offset-4">
        Compras:
      </p>
      <div className="wrap">
        {expenses?.expenses.map((item, index) => (
          <div key={index} className="border-dashed border p-2 my-2 rounded">
            <div className="items-center text-yellow-400 gap-x-4 flex">
              <p className="font-semibold">Valor:</p>
              <p className="bg-blue-600 px-4 py-2 rounded">{item.value}</p>
            </div>
            <div className="text-white my-2">
              <p className="text-sm font-ligth text-justify">{item.desc}</p>
              <div className="gap-x-2 flex my-2 text-yellow-400 font-ligth text-sm items-end justify-around">
                <div className="flex gap-x-2 ">
                  <p className="text-xs">Compra realizada por</p>
                  <p className="text-xs font-bold">{item.author}</p>
                </div>
                <div className="flex gap-x-2">
                  <p className="text-xs">Dia:</p>
                  <p className="text-xs">{item.date}</p>
                </div>
                <div className="bg-yellow-400 text-black px-2 py-1 rounded">
                  <Link target="blank" href={item.link}>
                    Comprovante
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
"use client";
import { getExpenses } from "@/api/api";
import Loader from "@/components/Loader";
import { ExpenseType, ExpensesType } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
  const [expenses, setExpenses] = useState<ExpenseType | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getmonthExpenses = async () => {
      getExpenses()
        .then((resp: any) => {
          const expensesResp = resp.data as ExpensesType[];
          const reversed = expensesResp.reverse() as ExpensesType[];
          const exp: ExpenseType = {
            expenses: reversed,
            total: resp.total,
          };

          setExpenses(exp);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(true);
          setIsLoading(false);
        });
    };
    getmonthExpenses();
  }, []);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-">
        <Loader />
      </div>
    );
  return (
    <div className="">
      <p className="text-xl text-yellow-400 underline underline-offset-4">
        Compras:
      </p>

      {expenses?.expenses.length == 0 && (
        <div className="text-yellow-400 text-center my-4 text-2xl">
          Sem despesas do mês ainda!
        </div>
      )}

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

export default Page;

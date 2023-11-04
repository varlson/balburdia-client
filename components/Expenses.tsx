"use client";
import { desp, getExpenses } from "@/api/api";
import { ExpenseType, ExpensesType } from "@/types/types";
import React, { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
import ErrorPage from "./ErrorPage";

function Expenses() {
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

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          // ariaLabel="falling-lines-loading"
        />
      </div>
    );

  if (error) return <ErrorPage />;

  if (expenses?.expenses.length == 0)
    return (
      <div className="flex justify-center">
        <p className="text-center text-2xl text-red-400">Sem despesas</p>
      </div>
    );

  return (
    <div>
      {expenses?.expenses.map((item, index) => (
        <div key={index} className=" border p-2 flex flex-col gap-y-1 my-2">
          <div className="text-white font-bold p-2 rounded bg-red-400 self-start">
            {item.value}
          </div>
          <p className="text-center text-white">{item.desc}</p>
          <div className="flex justify-between">
            <button className="p-2  rounded m-rigth-auto bg-yellow-400">
              Ver comprovante
            </button>
            <p className="text-right font-light text-white">{`Por: ${item.author} - ${item.date}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Expenses;

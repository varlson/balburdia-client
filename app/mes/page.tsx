"use client";
import { getPayers } from "@/api/api";
import ErrorPage from "@/components/ErrorPage";
import Loader from "@/components/Loader";
import { ResidentType } from "@/types/types";
import React, { useEffect, useState } from "react";
function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [payers, setPayers] = useState<ResidentType[]>([]);
  useEffect(() => {
    const _getPayers = async () => {
      getPayers()
        .then((payers) => {
          setPayers(payers as ResidentType[]);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(true);
          setIsLoading(false);
        });
    };
    _getPayers();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center">
        <ErrorPage />
      </div>
    );

  return (
    <div>
      <p className="text-xl text-yellow-400 underline underline-offset-4">
        Mês de Novembro:
      </p>

      <div className="my-2 p-2 text-yellow-400  divide-y">
        {payers.map((item, index) => (
          <div className="p-2 grid grid-col-2 gap-x-4 " key={index}>
            <p>{item.name}</p>
            <input
              readOnly
              checked={item.status == "Sim"}
              type="checkbox"
              name=""
              id=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;

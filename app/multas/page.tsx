"use client";
import { getFinier } from "@/api/api";
import ErrorPage from "@/components/ErrorPage";
import Loader from "@/components/Loader";
import Multas from "@/components/Multas";
import { FineType } from "@/types/types";
import React, { useEffect, useState } from "react";

function Page() {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
  const [residents, setResidents] = useState<FineType[]>([]);
  useEffect(() => {
    const _getFinier = async () => {
      getFinier()
        .then((fines) => {
          setResidents(fines as FineType[]);
          setIsloading(false);
        })
        .catch((error) => {
          setError(true);
          setIsloading(false);
        });
    };
    _getFinier();
  }, []);

  if (error)
    return (
      <div className="flex items-center justify-center">
        <ErrorPage />
      </div>
    );

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div>
      <p className="-xl text-yellow-400 underline underline-offset-4 mb-4 text-2xl">
        Multas
      </p>

      {residents.length == 0 && (
        <div className="text-yellow-400 text-center my-4 text-2xl">
          Sem multas ainda!
        </div>
      )}

      {residents.map((resident, index) => (
        <div key={index}>{<Multas finier={resident} />}</div>
      ))}
    </div>
  );
}

export default Page;

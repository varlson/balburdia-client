// "use client";
import { FineType } from "@/types/types";
import React from "react";

function Multas(finier: { finier: FineType }) {
  const { resident, value, status, desc } = finier.finier;
  return (
    <div>
      <div className="my-2 grid text-white">
        <fieldset className="rounded  p-2 border-dotted border">
          <legend className="font-semibold">{resident}:</legend>
          <p className="font-ligth text-sm text-justify">{desc}</p>

          <div className="my-2 flex justify-between ">
            <div className="gap-x-2 flex">
              <p className="font-semibold">Valor</p>
              <p>{value}</p>
            </div>
            <div className="flex gap-x-4 ">
              <p className="font-semibold">Situação:</p>
              <p className="underline underline-offset-4">
                {status ? "Pago" : "Devendo"}
              </p>
              <p
                className={`self-center h-4 w-4 rounded-full ${
                  status ? "bg-green-500" : "bg-red-500"
                }`}
              ></p>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default Multas;

import Image from "next/image";
import { ImHome } from "react-icons/im";
import { MdOutlinePayment } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { BsCartCheckFill } from "react-icons/bs";
import { desp } from "@/api/api";

export default function Home() {
  return (
    <main className="grid h-screen bg-blue-950">
      <div className="   grid self-start">
        <div className="bg-yellow-400 p-3 text-center rounded-b-3xl">
          <p className="text-3xl font-bold">Balburdia - Caixinha</p>
        </div>
        <p className="text-yellow-400 text-3xl font-bold text-center my-2">
          Outubro
        </p>

        <div className=" font-bold text-xl text-yellow-400 currency rounded-full flex items-center justify-center m-auto bg-blue-700">
          230,00 R$
        </div>

        <div className=" text-white text-center my-3 border-b pb-2 flex justify-center gap-x-4">
          <p className="self-end">Saldo inicial do mês: </p>
          <p className="bg-green-400 rounded px-4 py-2">500 R$ </p>
        </div>
        <div className="info border p-2">
          {desp.map((item, index) => (
            <div className="border p-2 flex flex-col gap-y-1 my-2">
              <div className="text-white font-bold p-2 rounded bg-red-400 self-start">
                {item.price}
              </div>
              <p className="text-center text-white">{item.purchase}</p>
              <div className="flex justify-between">
                <button className="p-2  rounded m-rigth-auto bg-yellow-400">
                  Ver comprovante
                </button>
                <p className="text-right font-light text-white">{`Por: ${item.by} - ${item.date}`}</p>
              </div>
            </div>
          ))}
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

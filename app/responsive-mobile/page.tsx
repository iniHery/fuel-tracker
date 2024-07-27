"use client";

import { useEffect, useState } from "react";
// import { supabase } from "../../utils/supabase/client";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default function FuelPurchasesPage() {
  const [fuelPurchases, setFuelPurchases] = useState<any[]>([]);
  const supabase = createClient();
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [lastTransaction, setLastTransaction] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("fuel_purchases").select();
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setFuelPurchases(data);
        calculateTotalExpenses(data);
        setLastTransaction(data[0]);
      }
    };
    getData();
  }, [supabase]);

  const calculateTotalExpenses = (data: any[]) => {
    const total = data.reduce((acc, purchase) => acc + purchase.amount, 0);
    setTotalExpenses(total);
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from("fuel_purchases")
      .delete()
      .eq("id", id);
    if (error) {
      console.error("Error deleting data:", error);
    } else {
      const updatedPurchases = fuelPurchases.filter(
        (purchase) => purchase.id !== id
      );
      setFuelPurchases(updatedPurchases);
      calculateTotalExpenses(updatedPurchases);
      setLastTransaction(updatedPurchases[0]);
    }
  };

  return (
    <div className="h-full max-w-sm">
      <div className="container mx-auto p-4">
        <div className="h-auto p-4 relative">
          <div className="fixed bg-[#EAEDFF] h-auto top-0 left-0 w-full pt-10 px-4 z-50">
            <div className="flex items-center rounded-lg pb-4">
              <div className="flex-shrink-0 bg-black p-6 rounded-lg"></div>
              <div className="ml-4">
                <div className="text-xl text-black font-semibold">Gusher</div>
                <div className="text-gray-500">idabagusheryana@gmail.com</div>
              </div>
            </div>

            <div className="bg-[#2945FF] p-2 rounded-xl w-full border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8),0_0px_0px_rgba(0,0,0,0.8)]">
              <div className="font-semibold text-xs text-[#6478FF]">
                My Balance
              </div>
              <div className="text-4xl py-4 flex">
                <span className="text-sm flex justify-start pr-2">Rp</span>
                {totalExpenses.toLocaleString("id-ID")}
              </div>
              <div className="flex justify-start items-center">
                <div className="bg-[#6478FF] text-red-500 p-2 flex text-center items-center rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m12 5 6 6m-6-6-6 6m6-6v14"
                    />
                  </svg>
                </div>
                <div className="pl-2">last expenses</div>
              </div>
              <div>
                {lastTransaction
                  ? lastTransaction.amount.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })
                  : (0).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
              </div>
            </div>
            <label className="block text-black font-semibold pb-1 mt-4">
              Last transaction
            </label>
          </div>
        </div>

        <div className="container">
          <div className="w-full mt-[78%] mb-[20%]">
            {fuelPurchases.map((purchase) => (
              <div key={purchase.id} className="w-full flex-rows py-2">
                <div className="flex flex-cols-2 gap-2 p-2 text-black bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8),0_0px_0px_rgba(0,0,0,0.8)]">
                  <div className="bg-black text-red-500 p-4 flex text-center items-center rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m12 5 6 6m-6-6-6 6m6-6v14"
                      />
                    </svg>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="flex-col">
                      <p className="text-[10px] text-gray-400">
                        {purchase.liters} Liter
                      </p>
                      <p className="font-medium uppercase">
                        {purchase.category}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {purchase.date}
                      </p>
                    </div>
                  </div>
                  <div className="w-full block">
                    <div className="w-full flex justify-end items-start">
                      <button
                        className="text-red-500"
                        onClick={() => handleDelete(purchase.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 12 6 6m6 6 6 6m-6-6 6-6m-6 6-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="w-full flex justify-end items-end">
                      <p className="font-bold mt-3">{purchase.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

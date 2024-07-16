"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default function FuelPurchasesPage() {
  const [fuelPurchases, setFuelPurchases] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("fuel_purchases").select();
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setFuelPurchases(data);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from("fuel_purchases")
      .delete()
      .eq("id", id);
    if (error) {
      console.error("Error deleting data:", error);
    } else {
      setFuelPurchases(fuelPurchases.filter((purchase) => purchase.id !== id));
    }
  };

  return (
    <div className="w-full max-w-screen-md">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Transaksi Bahan Bakar</h1>

        <div className="px-4 py-2 bg-blue-500 text-white rounded-md">
          <Link href="/add-transaction">Add Transaction</Link>
        </div>

        <div className="w-full container">
          <div className="bg-[#2945FF] p-2 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8),0_0px_0px_rgba(0,0,0,0.8)]">
            <div className="font-semibold text-xs text-[#6478FF]">
              My Balance
            </div>
            <div className="text-4xl py-4 flex">
              <span className="text-sm flex justify-start pr-2">Rp</span>
              300.000
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m12 5l6 6m-6-6l-6 6m6-6v14"
                  />
                </svg>
              </div>
              <div className="pl-2">last expenses</div>
            </div>
            <div className="pt-2">30.000</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-4">
            <label className="block text-black font-semibold pb-1">
              Last transaction
            </label>
            {fuelPurchases.map((purchase) => (
              <div key={purchase.id}>
                <div className="w-full flex-rows py-2">
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m12 5l6 6m-6-6l-6 6m6-6v14"
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
                          className="text-red-500 "
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 12L6 6m6 6l6 6m-6-6l6-6m-6 6l-6 6"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

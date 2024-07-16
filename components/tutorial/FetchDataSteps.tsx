import Step from "./Step";
import Code from "./Code";

const create = `
create table fuel_purchases (
  id bigserial primary key,
  amount numeric,
  category text,
  liters numeric,
  date date
);

insert into fuel_purchases(amount, category, liters, date)
values
  (50000, 'pertamax', 10, '2024-07-01'),
  (70000, 'dexlite', 12, '2024-07-02'),
  (60000, 'pertalite', 11, '2024-07-03');
`.trim();

const server = `
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: fuelPurchases } = await supabase.from('fuel_purchases').select()

  return <pre>{JSON.stringify(fuelPurchases, null, 2)}</pre>
}
`.trim();

const client = `
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [fuelPurchases, setFuelPurchases] = useState<any[] | null>(null)
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [liters, setLiters] = useState('')
  const [date, setDate] = useState('')
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('fuel_purchases').select()
      setFuelPurchases(data)
    }
    getData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, error } = await supabase.from('fuel_purchases').insert([
      { amount, category, liters, date }
    ])
    if (error) {
      console.error('Error inserting data:', error)
    } else {
      setFuelPurchases([...fuelPurchases, ...data])
      setAmount('')
      setCategory('')
      setLiters('')
      setDate('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select Category</option>
              <option value="pertamax">Pertamax</option>
              <option value="dexlite">Dexlite</option>
              <option value="pertalite">Pertalite</option>
              <option value="pertamax_turbo">Pertamax Turbo</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Liters:
            <input
              type="number"
              value={liters}
              onChange={(e) => setLiters(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add Transaction</button>
      </form>

      <pre>{JSON.stringify(fuelPurchases, null, 2)}</pre>
    </div>
  )
}
`.trim();

export default function FetchDataSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Buat tabel dan masukkan beberapa data">
        <p>
          Pergi ke{" "}
          <a
            href="https://supabase.com/dashboard/project/_/editor"
            className="font-bold hover:underline text-foreground/80"
            target="_blank"
            rel="noreferrer"
          >
            Table Editor
          </a>{" "}
          untuk proyek Supabase Anda untuk membuat tabel dan memasukkan beberapa
          data contoh. Jika Anda kehabisan ide, Anda dapat menyalin dan menempel
          kode berikut ke{" "}
          <a
            href="https://supabase.com/dashboard/project/_/sql/new"
            className="font-bold hover:underline text-foreground/80"
            target="_blank"
            rel="noreferrer"
          >
            SQL Editor
          </a>{" "}
          dan klik RUN!
        </p>
        <Code code={create} />
      </Step>

      <Step title="Query data Supabase dari Next.js">
        <p>
          Untuk membuat klien Supabase dan mengambil data dari Komponen Server
          Async, buat file page.tsx baru di{" "}
          <span className="px-2 py-1 rounded-md bg-foreground/20 text-foreground/80">
            /app/notes/page.tsx
          </span>{" "}
          dan tambahkan yang berikut.
        </p>
        <Code code={server} />
        <p>Atau, Anda dapat menggunakan Komponen Client.</p>
        <Code code={client} />
      </Step>

      <Step title="Bangun di akhir pekan dan skalakan hingga jutaan!">
        <p>Anda siap meluncurkan produk Anda ke dunia! 🚀</p>
      </Step>
    </ol>
  );
}

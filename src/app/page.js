import Item from "@/components/Item";
import { createSupabaseClient } from '@/utils/client';

const bucketName = process.env.NEXT_PUBLIC_BUCKETNAME
const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_URL

const supabase = createSupabaseClient();
let {data: items} = await supabase.from("julia-items").select("*")
  .order('status', {ascneding: true})
  .limit(50);
// console.log(items)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-10 py-40">
      <div className="justify-center font-mono text-sm lg:flex">
        <h1>julia's garage sale!!!!!</h1>
      </div>
  
      <div className="justify-start font-mono text-sm py-10">
        <p>seller: <button className="bg-violet-100 rounded-full p-0.8">julia!</button></p>
        <p>location: {process.env.NEXT_PUBLIC_CITY} (<a className="text-violet-500" href={process.env.NEXT_PUBLIC_ZIPCODE}>map</a>)</p>
        <p>dates: <button className="bg-violet-100 rounded-full p-0.8">now - aug 2024</button></p>
      </div>

      <div className="w-full items-center justify-between font-mono text-sm my-8">
        <div className= "grid grid-cols-3 justify-items-center">
          {
            items.map(({id, name, link, description, price, status}) => {
              const url = publicUrl + name + ".png"
              return (
                <div>
                  <Item id={id} name={name} link={link} description={description} price={price} img={url} status={status}></Item>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}

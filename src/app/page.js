import Item from "@/components/Item";
import { createClient } from '@/utils/client';

const bucketName = "takewhatyouneed"

const supabase = createClient();
let {data: items} = await supabase.from("julia-items").select("*");
console.log(items)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="justify-center font-mono text-sm lg:flex">
        <h1>julia's garage sale!!!!!</h1>
      </div>
  
      <div className="justify-start font-mono text-sm py-10">
        <p>seller: <button className="bg-violet-100 rounded-full p-0.8">julia!</button></p>
        <p>location: some place (<a className="text-violet-500" href="#">map</a>)</p>
        <p>dates: <button className="bg-violet-100 rounded-full p-0.8">now - aug 2024</button></p>
      </div>

      <div className="w-full items-center justify-between font-mono text-sm">
        <div className= "grid grid-cols-5 justify-items-center">
          {
            items.map(({id, name, description, price}) => {
              const url = "<redacted>"
              console.log(url+name)
              return (
                <div>
                  <Item id={id} name={name} description={description} price={price} img={url+name+".png"}></Item>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}

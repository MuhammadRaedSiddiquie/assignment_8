
import { client } from "@/sanity/lib/client";
import Hero from "./component/Hero/Hero";
import Blogs from "./component/Blogs/Blogs";
import HistoricalPlaces from "./Historical/Historical";


// interface BlogProps{
//   title:string;
//   desc:string;
//   imageUrl:string;
// }
// async function getData(){
//   const fetchData=await client.fetch(`*[_type == 'blog']{
//     title,
//       desc,
//       "imageUrl":image.asset->url

//   }[0] `);
//    return fetchData;
// }
export default function Home() {

  return (
    <main className="w-full flex flex-col">
      <Hero></Hero>
      <Blogs
      title={'trending blogs'}
      category={'tourism'}>
      </Blogs>
      <Blogs
      title={'historical places'}
      category={'historical'}>
      </Blogs>
      <Blogs
      title={'cultural foods'}
      category={'food'}>
      </Blogs>
      
    </main>
  );
}

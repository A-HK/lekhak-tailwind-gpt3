const SingleHorizontalCardTemplateCode = `
import data from './data.json';
import imageUrls1 from './imageUrlsOne.json';
import imageUrls2 from './imageUrlsTwo.json';
import imageUrls3 from './imageUrlsThree.json';

import { HandThumbUpIcon, CheckIcon } from "@heroicons/react/24/outline";

function SingleHorizontalCardTemplate({imageUrls, idx}){
  console.log(imageUrls);
    return(
        <>
        <div className="flex font-sans max-w-4xl shadow-xl rounded-lg bg-zinc-100">
        {data.component.image
          ? imageUrls?.images?.[1]?.urls?.raw 
            ? (
                <div className="flex-none w-56 relative">
                    <img 
                      src={imageUrls.images[1].urls.raw} 
                      loading="lazy"
                      className="max-h-64 w-full h-full rounded-l-lg object-cover"
                     />
                </div>
              )
            : (
                <div className="flex-none w-56 relative">
                    <img src="https://images.unsplash.com/photo-1536566482680-fca31930a0bd" 
                    loading="lazy"
                    className="max-h-64 w-full h-full rounded-l-lg object-cover" />
                </div>
              )
          : null
        }
  
  <div className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
       {data.component.content[idx].title}
      </h1>
      <div className="text-sm bg-green-300 px-3 py-1 rounded-xl font-semibold text-white">
        Trending 
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-500 mt-2">
      {data.component.content[idx].body}
      </div>
    </div>
    <div className="flex items-baseline mb-6 pb-6 border-b border-slate-200">
    </div>
    <div className="flex space-x-4 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
        {data.component.content[idx].callsToAction[0]}
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
        {data.component.content[idx].callsToAction[1]}
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <CheckIcon className="h-5 w-5"/>
      </button>
    </div>

  </div>
</div>

        </>
    )
}

export default function GridHorizontalCardTemplate(){
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
        <SingleHorizontalCardTemplate imageUrls={imageUrls1} idx={0}/>
        <SingleHorizontalCardTemplate imageUrls={imageUrls2} idx={1}/>
        <SingleHorizontalCardTemplate imageUrls={imageUrls3} idx={2}/>
    </div>
  )
}
`

export default SingleHorizontalCardTemplateCode;
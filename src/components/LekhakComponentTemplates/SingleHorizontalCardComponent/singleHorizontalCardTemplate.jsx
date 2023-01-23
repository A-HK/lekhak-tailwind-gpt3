const SingleHorizontalCardTemplateCode = `import data from './data.json';

import { HandThumbUpIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function SingleHorizontalCardTemplate(){
    return(
        <>
        <div className="flex font-sans max-w-xl shadow-xl rounded-lg bg-zinc-100">
        {data.component.image && (
            <div className="flex-none w-48 relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-l-lg" loading="lazy" />
            </div>
        )}
  
  <div className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
       {data.component.content[0].title}
      </h1>
      <div className="text-sm bg-green-300 px-3 py-1 rounded-xl font-semibold text-white">
        Trending 
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-500 mt-2">
      {data.component.content[0].body}
      </div>
    </div>
    <div className="flex items-baseline mb-6 pb-6 border-b border-slate-200">
    </div>
    <div className="flex space-x-4 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
        {data.component.content[0].callsToAction[0]}
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
        {data.component.content[0].callsToAction[1]}
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
`

export default SingleHorizontalCardTemplateCode;
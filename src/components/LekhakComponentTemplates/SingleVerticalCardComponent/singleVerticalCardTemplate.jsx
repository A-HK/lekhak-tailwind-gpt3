const SingleVerticalCardTemplateCode = `/* code for single vertical card */
import data from './data.json';

export default function SingleVerticalCardTemplate(){
    return(
        <>
          <div className="font-sans max-w-sm shadow-xl rounded-lg bg-zinc-100">
            {/* image */}
            {data.component.image && (
                <div className="flex-none w-full relative">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg" alt="" className="w-full max-h-60 object-cover rounded-t-lg" loading="lazy" />
                </div>
            )}
            {/* card body */}
            <div className="flex-auto p-6">
              <div className="flex flex-wrap">
                {/* title */}
                {data.component.content[0].title && ( 
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {data.component.content[0].title}
                  </h1>
                )}
                {/* tag */}
                <div className="text-sm bg-green-300 px-3 py-1 rounded-xl font-semibold text-white">
                  Trending 
                </div>
                {/* text body */}
                {data.component.content[0].body && (
                  <div className="w-full flex-none text-sm font-medium text-slate-500 mt-2">
                    {data.component.content[0].body}
                  </div>
                )}
              </div>

              {/* separating line */}
              <div className="flex items-baseline mb-6 pb-6 border-b border-slate-200"></div>

              <div className="flex space-x-4 mx-auto text-sm font-medium">
                {/* calls to action */}
                <div className="flex-auto flex space-x-4">
                {data.component.content[0].callsToAction[0] && (
                  <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                    {data.component.content[0].callsToAction[0]}
                  </button>
                )}
                {data.component.content[0].callsToAction[1] && (
                  <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                    {data.component.content[0].callsToAction[1]}
                  </button>
                )}
                </div>
              </div>
            </div>

          </div>
        </>
    )
}
`

export default SingleVerticalCardTemplateCode;
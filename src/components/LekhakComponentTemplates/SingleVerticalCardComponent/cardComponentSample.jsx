import AltNavBar from "../../WebsiteComponents/NavBar/altNavBar"

const data = {"theme": "travel destination", "color": "teal", "component" : {"type": "SingleHorizontalCard",  "image": true, "content":[{"title":"Udaipur", "body":"The city of lakes, Udaipur is a lovely land around the azure water lakes, hemmed in by the lush hills of the Aravalis.", "callsToAction" : ["View Details", "See Ratings"]}]}}

function SingleVerticalCardTemplate(){
    return(
        <>
          <div className="font-sans max-w-sm mx-auto shadow-xl rounded-lg bg-zinc-100">
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

export default function CardComponentSample() {
  
    return (
      <>
      <AltNavBar />
      <div className="px-6">
      <div className="mt-2 p-6 grid grid-cols-1 lg:grid-cols-4 gap-x-6 bg-gray-800 rounded-md">
      <>
      <div className="w-full col-span-3 mx-auto p-6 flex justify-center items-center bg-gradient-to-r from-emerald-200 to-teal-400">
         <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 p-2 mx-auto">
         <SingleVerticalCardTemplate />
         <SingleVerticalCardTemplate />
         <SingleVerticalCardTemplate />
         </div>
      </div>
      </>
      <div className="bg-gray-800 mx-auto col-span-1 align-middle flex w-full h-full max-w-lg text-center">
          <div className="mt-24 py-24">
              <p className="mx-auto w-fit bg-gray-900 text-white rounded-2xl py-1.5 px-4 text-sm font-semibold">Prompt Example</p>
              <h1
              className="px-2 pt-3 pb-6 uppercase font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400"
              >
              Vertical Card Grid
              </h1>
              <div
              className="shadow-sm px-4 py-3 bg-gray-800"
              >
                  <article className="prose lg:prose-md prose-invert">
                      <div className="">
                      <blockquote>
                          <p>Grid of vertical cards for travel destinations, with images</p>
                      </blockquote>
                      </div>
                      
                  </article>
              </div>
              <a href='/playground'>
              <button
              type="button"
              className="my-4 mx-auto rounded-lg px-3 py-2 text-sm font-semibold leading-6 bg-white shadow-md"
              >
                  Try your own prompt &rarr;
              </button>
              </a>
          </div>
      </div>
      </div>
      </div>
      </>
    )
  }
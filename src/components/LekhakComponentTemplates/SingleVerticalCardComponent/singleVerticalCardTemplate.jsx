const SingleVerticalCardTemplateCode = `/* code for single vertical card */
import data from './data.json';
import imageUrls1 from './imageUrlsOne.json';
import imageUrls2 from './imageUrlsTwo.json';
import imageUrls3 from './imageUrlsThree.json';



function SingleVerticalCardTemplate({imageUrls, idx}){
  let selectedColor = data.colorScheme ? data.colorScheme : "black";
    return(
        <>
          <div className="font-sans h-full max-w-sm mx-auto shadow-xl rounded-lg bg-zinc-100">
            {/* image */}
            {data.component.image
              ? imageUrls?.images?.[1]?.urls?.raw 
                ? (
                  <div className="flex-none w-full relative">
                    <img
                      src={imageUrls.images[1].urls.raw}
                      alt=""
                      className="h-72 w-full rounded-t-lg object-cover"
                    />
                    </div>
                  )
                : (
                    <div className="flex-none w-full relative">
                      <img
                        src="https://images.unsplash.com/photo-1536566482680-fca31930a0bd"
                        alt=""
                        className="h-72 w-full rounded-t-lg object-cover"
                      />
                    </div>
                  )
              : null
              
            }
            {/* card body */}
            <div className="flex-auto p-6">
              <div className="flex flex-wrap">
                {/* title */}
                {data?.component?.content?.[idx]?.title && ( 
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {data.component.content[idx].title}
                  </h1>
                )}
               
                {/* text body */}
                {data?.component?.content?.[idx]?.body && (
                  <div className="w-full flex-none text-sm font-medium text-slate-500 mt-2">
                    {data.component.content[idx].body}
                  </div>
                )}
              </div>

              {/* separating line */}
              <div className="flex items-baseline mb-6 pb-6 border-b border-slate-200"></div>

              <div className="flex space-x-4 mx-auto place-items-end text-sm font-medium">
                {/* calls to action */}
                <div className="flex-auto flex space-x-4">
                {data?.component?.content?.[idx]?.callsToAction[0] && (
                  <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" 
                  type="submit"
                  style={{
                    backgroundColor: selectedColor
                  }}>
                    {data.component.content[idx].callsToAction[0]}
                  </button>
                )}
                {data?.component?.content?.[idx]?.callsToAction[1] && (
                  <button 
                  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" 
                  type="button"
                  >
                    {data.component.content[idx].callsToAction[1]}
                  </button>
                )}
                </div>
              </div>
            </div>

          </div>
        </>
    )
}

export default function GridVerticalCardTemplate(){
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
        <SingleVerticalCardTemplate imageUrls={imageUrls1} idx={0}/>
        <SingleVerticalCardTemplate imageUrls={imageUrls2} idx={1}/>
        <SingleVerticalCardTemplate imageUrls={imageUrls3} idx={2}/>
    </div>
  )
}
`


export default SingleVerticalCardTemplateCode;
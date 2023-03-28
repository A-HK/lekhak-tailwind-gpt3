const FeaturesTemplateCode = `
import { useState, useEffect } from 'react';
import { DocumentCheckIcon, GlobeAltIcon, ChartPieIcon, BoltIcon, CubeIcon, FlagIcon } from '@heroicons/react/24/outline';
import { validColours, pickValidImgUrl1, pickValidImgUrl2 } from './illustrations.js';
import data from './data.json';

const FeatureBlockOneIcons = [{icon: <GlobeAltIcon className="h-6 w-6" aria-hidden="true"/>}, {icon: <ChartPieIcon className="h-6 w-6" aria-hidden="true"/>}, {icon: <BoltIcon className="h-6 w-6" aria-hidden="true"/>}]
const FeatureBlockTwoIcons = [{icon: <FlagIcon className="h-6 w-6" aria-hidden="true"/>}, {icon: <CubeIcon className="h-6 w-6" aria-hidden="true"/>}, {icon: <DocumentCheckIcon className="h-6 w-6" aria-hidden="true"/>}]

export default function FeaturesTemplate() {
  const [validImgUrl1, setValidImgUrl1] = useState("");
  const [validImgUrl2, setValidImgUrl2] = useState("");

  useEffect(()=>{

      if(validColours.includes(data.colorScheme))
      {
            setValidImgUrl1('https://illustrations.popsy.co/' + data.colorScheme + pickValidImgUrl1);
            setValidImgUrl2('https://illustrations.popsy.co/' + data.colorScheme + pickValidImgUrl2);
      }
      else
      {
            setValidImgUrl1('https://illustrations.popsy.co/white' + pickValidImgUrl1);
            setValidImgUrl2('https://illustrations.popsy.co/white' + pickValidImgUrl2);
      }

      console.log('Image URL 1 sourced from:' + validImgUrl1);
      console.log('Image URL 2 sourced from:' + validImgUrl2);
    }, [])



  return (
    <div className="py-16 px-6 bg-gray-50 overflow-hidden">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          {data?.component?.content?.[0]?.header
            ? (
                <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 lg:text-5xl">
                {data.component.content[0].header}
                </h2>
              )
            : (
                <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 lg:text-5xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h2>
              )
          }
          
         {data?.component?.content?.[0]?.subHeader
          ? (
              <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-500">
              {data.component.content[0].subHeader}
              </p>
            )
          : (
              <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in,
              accusamus quisquam.
              </p>
            )
          }
        </div>
        {data?.component?.content?.[0]?.featureBlocks[0] &&
        ( <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            {data?.component?.content?.[0]?.featureBlocks?.[0]?.title
              ? (
                  <h3 className="text-xl font-extrabold text-gray-900 tracking-tight lg:text-2xl">
                    {data.component.content[0].featureBlocks[0].title}
                  </h3>
                )
              : (
                <h3 className="text-xl font-extrabold text-gray-900 tracking-tight lg:text-2xl">
                  Lorem ipsum
                </h3>
              )
            }
            
            {data?.component?.content?.[0]?.featureBlocks?.[0]?.titleDesc
              ? (
                  <p className="mt-3 text-md text-gray-500">
                  {data.component.content[0].featureBlocks[0].titleDesc}
                  </p>
                )
              : (
                <p className="mt-3 text-md text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                  officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                  Totam, velit.
                </p>
              )
            }
            
            {data?.component?.content?.[0]?.featureBlocks?.[0]?.subPoints &&
            ( <dl className="mt-10 space-y-10">
              {data.component.content[0].featureBlocks[0].subPoints.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                    {FeatureBlockOneIcons[item.id].icon}
                  </div>
                    <p className="ml-16 text-md font-semibold tracking-tight leading-6 text-gray-900">{item.point}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.pointDesc}</dd>
                </div>
              ))}
            </dl> )
              }
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src={validImgUrl1}
              alt=""
            />
          </div>
        </div>
        )}
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>
        {data?.component?.content?.[0]?.featureBlocks?.[1] &&
        ( <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
            {data?.component?.content?.[0]?.featureBlocks?.[1]?.title
              ? <h3 className="text-xl font-extrabold text-gray-900 tracking-tight lg:text-2xl">{data.component.content[0].featureBlocks[1].title}</h3>
              : <h3 className="text-xl font-extrabold text-gray-900 tracking-tight lg:text-2xl">Lorem Ipsum</h3>
            }
              
            {data?.component?.content?.[0]?.featureBlocks?.[1]?.titleDesc
              ? (
                <p className="mt-3 text-md text-gray-500">
                  {data.component.content[0].featureBlocks[1].titleDesc}
                </p>
                )
              : (
                  <p className="mt-3 text-md text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
                  cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
                  </p>
                )
              }
              
            {data?.component?.content?.[0]?.featureBlocks?.[1]?.subPoints &&
              ( <dl className="mt-10 space-y-10">
                {data.component.content[0].featureBlocks[1].subPoints.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                        {FeatureBlockTwoIcons[item.id].icon}
                      </div>
                      <p className="ml-16 text-md leading-6 font-semibold text-gray-900">{item.point}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.pointDesc}</dd>
                  </div>
                ))}
              </dl> )
            }
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src={validImgUrl2}
                alt=""
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
`

export default FeaturesTemplateCode;
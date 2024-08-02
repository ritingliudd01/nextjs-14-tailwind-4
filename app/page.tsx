"use client"
import classnames from "@/utils/classnames";

const HelloWorld = (props: {classNames: string})=> {
  const {classNames: _classNames} = props;
  const cn = classnames(_classNames, 'text-blue-600');
  console.log(cn);
  return <>
   {/* <pre>{`
  // '&' is escaped to '&amp;' in the final output
  //   1006 |   .\[\&amp\;_span\]\:text-red-500 {
  // > 1007 |     &amp; span {
  //        |     ^
  // [&_span]:text-red-500" will not take effect
  `}</pre> */}
  <h1 className={`text-3xl ${_classNames}`}>
    <span><span>你好，世界！</span></span>Hello world!</h1></>
}

const HelloWorldTwCssDecoded = ({classNames}: {classNames: string})=> {
  // console.log(classNames);
  return <h1 className={classnames("text-3xl", classNames)}>
    <span><span>你好，世界！</span></span>Hello world!</h1>
}

export default function Home() {
  return <>
  <h1 className="text-3xl font-bold text-center">Tailwind v4 Playground</h1>

  <hr className="my-8" />
  <HelloWorld classNames={classnames("[&>span>span]:text-red-500 px-3  p-4 py-3")} />
  <HelloWorldTwCssDecoded classNames={classnames("[&>span>span]:text-red-500 px-3  p-4 py-3")} />
  
  <hr className="my-8"/>
  <p className="text-extra-sm">extra sm font</p>
  <div className="grid grid-cols-1 md:grid-cols-article border border-gray-500">
    <div className="bg-gray-500 text-white h-80 flex justify-center items-center">article body</div>
    <div className="md:bg-blue-300 lg:bg-gray-50 hidden h-80 md:flex justify-center items-center">article RHS</div>
  </div>

  <hr className="my-8"/>
  <div className="relative bg-gray-500 w-72 h-72">
  <div className="absolute flex justify-center items-center inset-8 bg-white"><span>centered</span></div></div>
  

  </>
}

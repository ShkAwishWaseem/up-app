import Link from 'next/link'
import React , {useState , useEffect} from 'react'

const Cookies = () => {
     const [show , setShow] = useState(false);
     useEffect(() => {
           setShow(true)
     }, [])
  return (
    <>
    {show ? 
     <section className="z-50 fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-[80px] dark:border-gray-700 rounded-2xl">
    <h2 className="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>

    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">We use cookies to ensure that we give you the best experience on our website. <Link href="/legal/policies" className="text-blue-500 hover:underline">Read cookies policies</Link>. </p>
    
    <div className="flex items-center justify-between  mt-4 gap-x-4 shrink-0">

        <button className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"  onClick={ () => setShow(false)}>
            Reject
        </button>
        <button className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"  onClick={ () => setShow(false)}>
            Accept
        </button>
    </div>
</section> 
 : " "}
    </>
  )
}

export default Cookies

import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/3.jpg"
import Image4 from "../assets/4.jpg"


const project = () => {
  return (
    <>
    <div className="bg-indigo-800 m-20 max-w-full sm:max-w-md ">
        <div className="grid justify-items-center m-10">
            <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>
        <div>
            <div className=" grid grid-cols-1 gap-4 p-5 sm:grid-cols-2  ">
                 <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse ">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold" >
                                E-Library
                            </div>
                            <a href="#">Federal Polytechnic Nasarawa</a>
                            <p className="mt-2 text-slate-500">
                                E-books,journals made available accross the platform to be used and downloaded by students 
                            </p>
                        </div>
                        <div className="md-shrink-0 p-5">
                            <img src={Image1} alt="" className="" width={450} height={450} />
                        </div>
                    </div>
                 </div>
                 <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold" >
                                E-Library
                            </div>
                            <a href="#">Federal Polytechnic Nasarawa</a>
                            <p className="mt-2 text-slate-500">
                                E-books,journals made available accross the platform to be used and downloaded by students 
                            </p>
                        </div>
                        <div className="md-shrink-0 p-5">
                            <img src={Image2} alt="" className="" width={450} height={450} />
                        </div>
                    </div>
                 </div>
            </div>
            <hr />

            <div className="grid grid-cols-2 gap-4 p-5">
                
              </div>
        </div>
        
    </div>

    </>
  )
}

export default project
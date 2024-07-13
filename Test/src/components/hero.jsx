import { BsFacebook, BsTwitter, BsInstagram,BsPinterest,BsWhatsapp } from "react-icons/bs"
import Heropic from "../assets/Timothy.jpg";
const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
        <div className="lg:w-1/3 ssm:w-fit">
            <p className="text-4xl mb-5 text-white">I'm</p>
            <h1 className="text-6xl mb-4">Uche Timothy</h1>

            <div className="flex m-5 space-x-4 cursor-pointer">
              <a href="https://web.facebook.com/TimUchechukwu"><BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full" /></a>
              <a href="https://web.facebook.com/TimUchechukwu"><BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full" /></a>
              <a href="https://web.facebook.com/TimUchechukwu"><BsPinterest size={40} className="border-4 hover:border-indigo-800 rounded-full" /></a>
              <a href="https://web.facebook.com/TimUchechukwu"><BsWhatsapp size={40} className="border-4 hover:border-indigo-800 rounded-full" /></a>
          
              
            </div>
            <hr className="mb-4"/>
            <p>A Passionate Web developer with proficient skill in front-end technologies like HTML5,CSS,JQuery,
              ReactJs, and Backend Technologies in PHP, SQL, Iam passionate about solving real life web application
              problems and also ready to learn and collaborate with team </p>
           
        </div>
        <div className="w-1/3 items-center ssm:w-fit">
          <img src={Heropic} alt="" className="rounded-full  border-8 border-white" width={400} height={400}/>
        </div>

        <div className="w-1/3 ssm:w-fit">
            <h1 className="text-4xl mb-4">Skills</h1>
            <p>With my experiences in this web technologies below I will be able to solve real life applications</p>
            <p>i will able to use my web development skills to 
              design and develop efficient applications that will achieve desired goals for my clients</p>
    
            <ul className="flex ">
              <li className="text-white p-3">PHP</li>
              <li className="text-white p-3">SQL</li>
              <li className="text-white p-3">ReactJs</li>
              <li className="text-white p-3">Jquery</li>
              <li className="text-white p-3  ">Tailwind</li>

            </ul>
             <p> <button className="text-indigo bg-white-80 hover:bg-indigo-800 rounded-full px-5 py-2 text-xl text-white">Show more...</button></p>
        </div>
    </section>
    
  )
}

export default Hero
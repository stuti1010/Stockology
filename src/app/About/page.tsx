
import MeetOurDirectors from "../Components/Directors";
import Journey from "../Components/Journey1";
import Team from "../Components/Team";
import Timeline from "../Components/Timeline1";


const About = () => {
    return (
        <div className="container mx-auto  ">
        <div className="text-black py-12 px-6 items-center ">
  {/* Motivational Quote */}
  <div className="max-w-7xl mx-auto  text-center text-lg md:text-3xl font-semibold mb-16 shadow-2xl bg-gradient-to-r from-gray-800 via-gray-950 to-gray-800 rounded-2xl">
    <h3 className="px-8 py-8 text-white italic ">
      &ldquo;Investing is not about beating others at their game. It&apos;s about controlling yourself at your own game.&rdquo;
    </h3>
  </div>

  {/* Stockology Section */}
  <div className="max-w-7xl grid mx-auto grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Side - Stockology Info */}
    <div className="text-sm md:text-xl leading-relaxed rounded-3xl p-10 shadow-2xl bg-white transition-transform transform hover:scale-[1.02]">
      <h2 className="text-2xl md:text-5xl font-bold mb-6 underline decoration-green-400 decoration-4">
        About <span className="text-green-500">Stockology</span>
      </h2>
      <p className="font-serif text-gray-800 py-4">
        Stockology is your gateway to understanding the stock market with precision and clarity. 
        We provide in-depth insights, market trends, and the latest strategies to help you make informed decisions. 
        Whether you&apos;re a beginner or an expert trader, Stockology empowers you to navigate the financial world with confidence.
      </p>
    </div>

    {/* Right Side - Banner/Graphics */}
    <div className="flex justify-center items-center  hover:scale-[1.05] transition-transform duration-300">
      <img
        src="/about.png"
        alt="Stock Market"
        className="w-full max-w-md md:max-w-lg rounded-xl bg-transparent"
      />
    </div>
  </div>

    <div className="py-6 ">
    
      <MeetOurDirectors/>

      <Team/>

      <Timeline/>


<Journey/>


        </div>    
        </div>
        </div>
    );
};

export default About;

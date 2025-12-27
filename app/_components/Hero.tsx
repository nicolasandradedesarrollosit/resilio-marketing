import Navbar from '@/common/Navbar';

export default function Hero() {
  return (
    <div className="h-screen w-full bg-transparent overflow-hidden">
      <Navbar />
      <div className="flex flex-row h-full w-full">
        <div className="w-1/2 h-full flex justify-center items-center overflow-hidden">
          <img
            alt="Hero"
            className="w-2/3 h-2/3 object-cover block"
            src="/hero-image.png"
          />
        </div>
        <div className="w-1/2 h-full flex flex-row justify-center items-center" />
      </div>
    </div>
  );
}

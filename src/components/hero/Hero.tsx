interface HeroProps {
  title: string;
  imageName: string;
}

export function Hero({ title, imageName }: HeroProps) {
  return (

        <div className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
          <div
            className={`absolute w-full h-full block top-0 left-0 bg-cover opacity-80 z-0`}
            style={{backgroundImage: ` url('/src/assets/${imageName}')`}}
          ></div>
          <h1 className="text-center text-white text-4xl font-bold z-10">
            {title}
          </h1>
        </div>
  );
}

import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="flex justify-between items-center p-12 mx-48">
      <div className="text-center w-96">
        <h1 className="text-4xl font-bold">Virtual healthcare for you</h1>
        <p className="text-lg">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
          Consult today
        </button>
      </div>
      <Image
        src="/image.png"
        width={650}
        height={650}
        alt="Picture of the author"
      />
    </div>
  );
}

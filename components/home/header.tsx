import Image from "next/image";
import { CardDescription, CardHeader } from "../ui/card";

export default function CardHeaderX(){
    return(
        <CardHeader>
        <div className="flex justify-center items-center bg-black rounded-2xl drop-shadow-2xl shadow-blue-500/50">
          <Image
            className="w-[100px] lg:w-[150px] h-auto"
            src="/gm2.gif"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
          <h1 className="text-xl lg:text-5xl font-bold">GEOMETRYEXE</h1>
        </div>
        <CardDescription></CardDescription>
      </CardHeader>
    )
}
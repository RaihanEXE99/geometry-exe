import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home(){
    return(
        <CardHeader className="bg-black rounded-2xl drop-shadow-2xl shadow-blue-500/50 w-[350px] md:w-4/5 lg:w-3/5">
            <div className="flex flex-col justify-center items-center">
                <Image
                className="w-[150px] lg:w-[250px] h-auto"
                src="/gm2.gif"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                priority
                />
                <h1 className="text-xl lg:text-5xl font-bold">GEOMETRYEXE</h1>
                <h1 className="text-sm lg:text-sm font-semibold font-mono">Welcome to GeometryEXE</h1>
                <div className="py-4 flex justify-center gap-5">
                    <Link  href="/triangle">
                        <Button variant={"outline"}>Start Calculating</Button>
                    </Link>
                    <a href="https://github.com/RaihanEXE99">
                        <Button variant={"outline"}>Github</Button>
                    </a>
                </div>
            </div>
            <CardDescription></CardDescription>
        </CardHeader>
    )
}
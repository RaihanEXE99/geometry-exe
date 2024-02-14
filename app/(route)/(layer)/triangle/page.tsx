"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

export default function Home() {
  const [base,setBase] = useState(0);
  const [height,setHeight] = useState(0);
  const [area,setArea] = useState(0);
  const calculate = () =>{
    setArea(.5*base*height);
  }
  return (
    <Tabs defaultValue="calculate">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="calculate">Calculate</TabsTrigger>
        <TabsTrigger value="explaination">Explanation</TabsTrigger>
      </TabsList>
      <TabsContent value="calculate">
        <Card>
          <div className="block lg:flex justify-around items-center">
            <div className="flex justify-center mt-5">
              <Image
                className="relative w-auto"
                src="/triangle.png"
                alt="triangle"
                width={180}
                height={37}
                priority
              />
            </div>
            <CardHeader className="lg:w-1/3">
              <CardTitle>TRIANGLE</CardTitle>
              <CardDescription className="lg:text-lg mt-4">
                <span className="bg-primary px-1 rounded">b</span> and{" "}
                <span className="bg-primary px-1 rounded">h</span> represents
                the length of the base and height of the triangle
              </CardDescription>
            </CardHeader>
          </div>
          <CardContent className="space-y-2">
            <Separator className="my-4" />
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="name">Base</Label>
                    <Input id="base" placeholder="base" type="number" required value={base} onChange={(e)=>setBase(parseFloat(e.target.value))} />
                  </div>
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="name">Height</Label>
                    <Input id="height" placeholder="height" type="number" required value={height} onChange={(e)=>setHeight(parseFloat(e.target.value))}/>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" onClick={calculate}>Calculate</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerDescription className="flex flex-col justify-center items-center">
                      <Image
                        className="relative w-auto"
                        src="/triangle.png"
                        alt="triangle"
                        width={180}
                        height={37}
                        priority
                      />
                      <Image
                        className="relative w-[180px] h-auto"
                        src="/eq-triangle.png"
                        alt="eq triangle"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                      />
                      <h1 className="text-5xl font-bold">={area} unit</h1>
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2"></div>
                    <div className="mt-3 h-[120px]"></div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">back</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="explaination">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="space-y-2">
            <div className="text-primary font-bold text-lg">
              What is triangle?
            </div>
            <div>
              A triangle is a polygon with three edges and three vertices.
            </div>
            <div className="text-primary font-bold text-lg underline">
              Equation (Eq)
            </div>
            <Image
              className="relative w-[180px] h-auto"
              src="/eq-triangle.png"
              alt="eq triangle"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <div className="text-sm">
              Base(b): The base of a triangle is typically the side on which the
              triangle "sits" or rests. It is usually the lower side, and its
              length is often used as a reference when calculating the area of
              the triangle.
            </div>
            <div className="text-sm">
              Height(h): The height of a triangle is the perpendicular distance
              from the base to the opposite vertex (or the extension of the
              base). In a right-angled triangle, the height is also the side
              opposite the right angle. The height is essential for calculating
              the area of a triangle.
            </div>
          </CardContent>
          <CardFooter className="flex justify-center"></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

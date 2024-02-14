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
  const [width,setWidth] = useState(0);
  const [length,setLength] = useState(0);
  const [area,setArea] = useState(0);
  const calculate = () =>{
    setArea(parseFloat((width*length).toFixed(4)));
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
                className="relative w-[180px] h-auto"
                src="/rectangle.png"
                alt="rectangle"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <CardHeader className="lg:w-1/3">
              <CardTitle>RECTANGLE</CardTitle>
              <CardDescription className="lg:text-lg mt-4">
                <span className="bg-primary px-1 rounded">w</span> and{" "}
                <span className="bg-primary px-1 rounded">l</span> represents
                the width and length of the triangle
              </CardDescription>
            </CardHeader>
          </div>
          <CardContent className="space-y-2">
            <Separator className="my-4" />
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="name">Width</Label>
                    <Input id="width" placeholder="width" type="number" required value={width} onChange={(e)=>setWidth(parseFloat(e.target.value))} />
                  </div>
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="name">Length</Label>
                    <Input id="length" placeholder="length" type="number" required value={length} onChange={(e)=>setLength(parseFloat(e.target.value))}/>
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
                        className="relative"
                        src="/rectangle.png"
                        alt="rectangle"
                        width={180}
                        height={37}
                        priority
                      />
                      <Image
                        className="relative w-[180px] h-auto"
                        src="/eq-rectangle.png"
                        alt="eq-rectangle"
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
              What is Rectangle?
            </div>
            <div>
            A rectangle is a geometric shape with four sides and four right angles. 
            </div>
            <div className="text-primary font-bold text-lg underline">
              Equation (Eq)
            </div>
            <Image
              className="relative w-[180px] h-auto"
              src="/eq-rectangle.png"
              alt="eq rectangle"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <div className="text-sm">
            * A is the area,<br/>
            * Length is the length of the rectangle,<br/>
            * Width is the width of the rectangle.
            </div>
          </CardContent>
          <CardFooter className="flex justify-center"></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

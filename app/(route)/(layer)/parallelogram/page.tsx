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
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);

  const calculate = () => {
    setArea(parseFloat((base * height).toFixed(4)));
  };

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
                className="relative"
                src="/parallelogram.png"
                alt="parallelogram"
                width={180}
                height={90}
                priority
              />
            </div>
            <CardHeader className="lg:w-1/3">
              <CardTitle>PARALLELOGRAM</CardTitle>
              <CardDescription className="lg:text-lg mt-4">
                <span className="bg-primary px-1 rounded">b</span> and{" "}
                <span className="bg-primary px-1 rounded">h</span> represents
                the base and height of the parallelogram
              </CardDescription>
            </CardHeader>
          </div>
          <CardContent className="space-y-2">
            <Separator className="my-4" />
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="base">Base</Label>
                    <Input
                      id="base"
                      placeholder="base"
                      type="number"
                      required
                      value={base}
                      onChange={(e) => setBase(parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      placeholder="height"
                      type="number"
                      required
                      value={height}
                      onChange={(e) => setHeight(parseFloat(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" onClick={calculate}>
                  Calculate
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerDescription className="flex flex-col justify-center items-center">
                      <Image
                        className="relative"
                        src="/parallelogram.png"
                        alt="parallelogram"
                        width={180}
                        height={90}
                        priority
                      />
                      <div>
                        Area of parallelogram = base X height
                      </div>
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
              What is Parallelogram?
            </div>
            <div>
              A parallelogram is a four-sided figure with opposite sides
              parallel.
            </div>
            <div className="text-primary font-bold text-lg underline">
              Equation (Eq)
            </div>
            <div>
            Area of parallelogram = base X height
            </div>
            <div className="text-sm">
              * A is the area, <br />
              * b is the base, <br />
              * h is the height.
            </div>
          </CardContent>
          <CardFooter className="flex justify-center"></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

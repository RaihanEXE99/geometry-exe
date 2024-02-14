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
  const [diagonal1, setDiagonal1] = useState(0);
  const [diagonal2, setDiagonal2] = useState(0);
  const [area, setArea] = useState(0);

  const calculate = () => {
    setArea(parseFloat(((diagonal1 * diagonal2) / 2).toFixed(4)));
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
                src="/rhombus.png"
                alt="rhombus"
                width={180}
                height={180}
                priority
              />
            </div>
            <CardHeader className="lg:w-1/3">
              <CardTitle>RHOMBUS</CardTitle>
              <CardDescription className="lg:text-lg mt-4">
                <span className="bg-primary px-1 rounded">d1</span> and{" "}
                <span className="bg-primary px-1 rounded">d2</span> represents
                the diagonals of the rhombus
              </CardDescription>
            </CardHeader>
          </div>
          <CardContent className="space-y-2">
            <Separator className="my-4" />
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="diagonal1">Diagonal 1</Label>
                    <Input
                      id="diagonal1"
                      placeholder="diagonal 1"
                      type="number"
                      required
                      value={diagonal1}
                      onChange={(e) =>
                        setDiagonal1(parseFloat(e.target.value))
                      }
                    />
                  </div>
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="diagonal2">Diagonal 2</Label>
                    <Input
                      id="diagonal2"
                      placeholder="diagonal 2"
                      type="number"
                      required
                      value={diagonal2}
                      onChange={(e) =>
                        setDiagonal2(parseFloat(e.target.value))
                      }
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
                        src="/rhombus.png"
                        alt="rhombus"
                        width={180}
                        height={180}
                        priority
                      />
                      <div>
                      Area_Rhombus = (d1 * d2) / 2
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
              What is Rhombus?
            </div>
            <div>
              A rhombus is a type of polygon that is a quadrilateral (four
              sides) with all sides having equal length.
            </div>
            <div className="text-primary font-bold text-lg underline">
              Equation (Eq)
            </div>
            <div>
              Area_Rhombus = (d1 * d2) / 2
            </div>
            <div className="text-sm">
              * A is the area, <br />
              * d1 and d2 are the lengths of the diagonals.
            </div>
          </CardContent>
          <CardFooter className="flex justify-center"></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

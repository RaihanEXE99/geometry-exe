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
  const [majorAxis, setMajorAxis] = useState(0);
  const [minorAxis, setMinorAxis] = useState(0);
  const [area, setArea] = useState(0);

  const calculate = () => {
    setArea(parseFloat((Math.PI * majorAxis * minorAxis).toFixed(4)));
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
                src="/ellipse.png"
                alt="ellipse"
                width={180}
                height={90}
                priority
              />
            </div>
            <CardHeader className="lg:w-1/3">
              <CardTitle>ELLIPSE</CardTitle>
              <CardDescription className="lg:text-lg mt-4">
                <span className="bg-primary px-1 rounded">a</span> and{" "}
                <span className="bg-primary px-1 rounded">b</span> represent the
                lengths of the major and minor axes of the ellipse
              </CardDescription>
            </CardHeader>
          </div>
          <CardContent className="space-y-2">
            <Separator className="my-4" />
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="majorAxis">Major Axis</Label>
                    <Input
                      id="majorAxis"
                      placeholder="major axis"
                      type="number"
                      required
                      value={majorAxis}
                      onChange={(e) => setMajorAxis(parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="flex flex-col w-full space-y-1.5">
                    <Label htmlFor="minorAxis">Minor Axis</Label>
                    <Input
                      id="minorAxis"
                      placeholder="minor axis"
                      type="number"
                      required
                      value={minorAxis}
                      onChange={(e) => setMinorAxis(parseFloat(e.target.value))}
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
                        src="/ellipse.png"
                        alt="ellipse"
                        width={180}
                        height={90}
                        priority
                      />
                      <div>
                      Area_Ellipse = π * major axis * minor axis
                      </div>
                      <h1 className="text-5xl font-bold">={area.toFixed(2)} unit</h1>
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
              What is Ellipse?
            </div>
            <div>
              An ellipse is a geometric shape that is symmetric about its major
              and minor axes.
            </div>
            <div className="text-primary font-bold text-lg underline">
              Equation (Eq)
            </div>
            <div>
              Area_Ellipse = π * major axis * minor axis
            </div>
            <div className="text-sm">
              * A is the area, <br />
              * a is the length of the major axis, <br />
              * b is the length of the minor axis.
            </div>
          </CardContent>
          <CardFooter className="flex justify-center"></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

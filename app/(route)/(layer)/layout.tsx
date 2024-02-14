"use client"

import {
  Card,
  CardContent,

  CardFooter,

} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

import CardHeaderX from "@/components/home/header";

import { useState } from 'react';
import { useRouter } from 'next/navigation';


interface LayoutProps {
    children: React.ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string>("triangle");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    router.push('/'+value);
  };
  return (
    <Card className="w-[350px] md:w-4/5 lg:w-3/5">
      <CardHeaderX />
      <CardContent>
        <div className="flex flex-col space-y-1.5 mt-4 mb-4">
          <Label htmlFor="Select_Shape">Select Shape</Label>
          <Select value={selectedValue} onValueChange={handleChange}>
            <SelectTrigger id="shape">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="triangle">Triangle</SelectItem>
              <SelectItem value="rectangle">Rectangle</SelectItem>
              <SelectItem value="rhombus">Rhombus</SelectItem>
              <SelectItem value="parallelogram">Parallelogram</SelectItem>
              <SelectItem value="pentagon">Pentagon</SelectItem>
              <SelectItem value="ellipse">Ellipse</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {children}
      </CardContent>
      <CardFooter className="flex justify-center text-sm font-bold font-mono">
        <a href="https://github.com/raihanexe99" className="hover:text-orange-500">
          ©️ Developed by <span className="text-blue-300">/RaihanEXE99</span>🧑
        </a>
      </CardFooter>
    </Card>
  );
};

export default Layout;
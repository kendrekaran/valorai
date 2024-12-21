"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export const HeroSection = () => {
  


  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
      <div className="container px-4 sm:px-6 py-24 sm:py-32 md:py-44">
        {/* Hero content */}
        <div className="text-center flex flex-col items-center  justify-center space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#D247BF] to-primary rounded-full blur opacity-20" />
            <Badge
              variant="outline"
              className="text-sm py-2 relative bg-black/80 backdrop-blur-sm border-gray-900 rounded-full"
            >
              <span className="mr-2 text-primary">
                <Badge className="bg-orange-500 text-white rounded-full hover:bg-orange-500/70">
                  New
                </Badge>
              </span>
              <span> Design is out now! </span>
            </Badge>
          </div>

          <div className="max-w-xl flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative text-transparent bg-gradient-to-r from-[#D247BF] to-orange-500  bg-clip-text">MISSION:&nbsp;
            <span className="text-white">
            NAVIGATE <br />YOUR BENEFITS
            </span></h1>
          </div>

          <p className="max-w-xl  text-base sm:text-lg md:text-xl text-muted-foreground">
          ValorAI helps you understand and access your VA benefits with ease. Get personalized assistance and instant answers to your questions.
          </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Button className="px-4 sm:px-6 py-2 sm:py-4 rounded font-bold text-base sm:text-lg bg-orange-500 hover:opacity-90 group">
                DEPLOY NOW
                <ArrowRight className="size-4 sm:size-5  group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button className="px-4 sm:px-6 py-2 sm:py-4 rounded font-bold text-base sm:text-lg bg-gray-600/30 hover:opacity-90 group">
                RECON MISSION 
                <ArrowRight className="size-4 sm:size-5  group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
        </div>

        {/* Carousel section */}
        <div className="relative w-full max-w-5xl mx-auto mt-8">
          {/* Background blur */}
          <div className="absolute inset-x-0 -top-10 h-40 bg-primary/30 rounded-full blur-3xl"></div>

          {/* Carousel container */}
          <div className="relative rounded-lg leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 mx-auto">
            <Image
                alt="dashboard"
                src="/hero-image-dark.jpeg"
                width={1200}
                height={1200}
                className="w-full md:w-[1200px] mx-auto rounded-lg"
                loading="lazy"
                decoding="async"
                priority={false} 
                sizes="(max-width: 768px) 100vw, 1200px" 
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

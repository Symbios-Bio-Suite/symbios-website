import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import gall1 from "../assets/gall1.png"
import gall2 from "../assets/gall2.png"
import gall3 from "../assets/gall3.png"
import gall4 from "../assets/gall4.png"

const images = [gall1, gall2, gall1, gall2, gall1, gall2, gall1, gall2, gall1, gall2,]

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-7xl">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={image} className="bg-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

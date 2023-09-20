import Image from "next/image"
import { Tab } from "@headlessui/react"

import { cn } from "@/lib/utils"
import { Image as ImageType } from "@/types";


interface GalleryTabProps {
  image: ImageType;
}

export default function GalleryTab({ image }:GalleryTabProps){
  return (
    <Tab className="relative flex items-center justify-center rounded-md aspect-square cursor-pointer bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              fill
              alt="Image"
              className="object-cover object-center"
            />
          </span>
          <span className={cn(
            "absolute inset-0 rounded-md ring-2 ring-offset-2",
            selected ? 'ring-black' : 'ring-transparent'
          )} />
        </div>
      )}
    </Tab>
  )
}
import { type FC } from 'react';

interface HalfGridWithImgProps {
  image?: string;
  title?: string;
  description?: string;
}

export const HalfGridWithImg: FC<HalfGridWithImgProps> = ({ image, title, description }: HalfGridWithImgProps) => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div className="flex justify-start">
          <img
            src={image}
            className="w-full max-w-sm md:max-w-md rounded-2xl object-cover aspect-square transition duration-500 ease-in-out transform hover:scale-105"
            alt=""
          />
        </div>
        <div>
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-2xl font-semibold text-hb-gold sm:text-3xl">{title}</h2>
            <p className="mt-4 text-white/60">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

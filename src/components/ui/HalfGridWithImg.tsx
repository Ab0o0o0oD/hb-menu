import { type FC } from 'react';

interface HalfGridWithImgProps {
  image?: string;
  title?: string;
  description?: string;
}

export const HalfGridWithImg: FC<HalfGridWithImgProps> = ({ image, title, description }: HalfGridWithImgProps) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <img
              src={image}
              className="rounded-2xl transition duration-500 ease-in-out transform hover:scale-105"
              alt=""
            />
          </div>
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{title}</h2>

              <p className="mt-4 text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

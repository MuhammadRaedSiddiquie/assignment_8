import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgComment } from "react-icons/cg";
import { FaClock } from "react-icons/fa";
import { PortableText } from "@portabletext/react";

const BlogCard = ({
  imageUrl,
  title,
  desc,
  date,
  slug,
}: {
  imageUrl: string;
  title: string;
  desc: any[];
  date: string;
  slug: string;
}) => {
  return (
    <Link href={`/blogs/${slug}`} passHref>
      <div className="w-full h-auto rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer">
        {/* Image Section */}
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 p-4 md:p-5">
          <h1 className="font-semibold text-lg text-gray-800 truncate hover:text-indigo-600 transition duration-300">
            {title}
          </h1>
          <div className="text-gray-500 text-sm line-clamp-2">
            <PortableText value={desc || []} />
          </div>

          {/* Meta Info */}
          <div className="w-full flex items-center justify-between text-gray-500 text-sm mt-2">
            <div className="flex items-center gap-2">
              <FaClock />
              <p>{date.slice(0, 10)}</p>
            </div>
            <div className="flex items-center gap-2">
              <CgComment />
              <p>40</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

import BookDataType from "@/app/type/type";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

interface PropsType {
  readedBook: BookDataType;
}

const ReadListCard = ({ readedBook }: PropsType) => {
  const {
    id,
    bookName,
    author,
    image,
    rating,
    tags,
    category,
  } = readedBook;
  return (
    <Link href={`/${id}`}>
      <div className="w-full bg-white rounded-2xl border border-gray-200/80 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 font-sans flex gap-5 my-7">
        {/* Left Image */}
        <div className="bg-[#F3F3F3] rounded-xl w-32 min-w-32 h-40 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={bookName}
            width={100}
            height={120}
            className="object-contain hover:scale-110 duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold font-serif text-[#131313] mb-1 line-clamp-1">
            {bookName}
          </h2>

          {/* Author */}
          <p className="text-gray-600 font-medium text-sm mb-2">
            By: {author}
          </p>

          {/* Divider */}
          <div className="border-b border-dashed border-gray-200 my-2" />

          {/* Footer */}
          <div className="flex items-center justify-between text-gray-700 font-medium text-sm">
            <span>{category}</span>

            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-800">
                {typeof rating === "number"
                  ? rating.toFixed(2)
                  : rating}
              </span>
              <CiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReadListCard;

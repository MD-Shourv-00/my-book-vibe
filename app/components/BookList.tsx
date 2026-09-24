import { CiStar } from "react-icons/ci";
import BookDataType from "../type/type";
import Image from "next/image";
import Link from "next/link";

interface TypeOfPromise {
  singleBookData: BookDataType;
}

const BookList = ({ singleBookData }: TypeOfPromise) => {
  const {
    id,
    bookName,
    author,
    image,
    rating,
    tags,
    category,
  } = singleBookData;
  return (
    <Link href={`/${id}`}>
      <div
        className={`max-w-sm w-full bg-white rounded-[24px] border border-gray-200/80 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 font-sans mx-auto`}>
        {/* Top Image Container */}
        <div className="bg-[#F3F3F3] rounded-[16px] py-8 px-4 flex items-center justify-center min-h-[230px] mb-6">
          <Image
            src={image}
            alt={bookName}
            width={100}
            height={100}
            className="hover:scale-110 duration-[0.5s]"
          />
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold font-serif text-[#131313] mb-3 tracking-tight line-clamp-1">
          {bookName}
        </h2>

        {/* Author */}
        <p className="text-gray-600 font-medium text-base mb-4">
          By : {author}
        </p>

        {/* Dashed Border Divider */}
        <div className="border-b border-dashed border-gray-200 my-4" />

        {/* Card Footer */}
        <div className="flex items-center justify-between text-gray-700 font-medium text-base pt-1">
          <span>{category}</span>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="font-semibold text-gray-800">
              {typeof rating === "number"
                ? rating.toFixed(2)
                : rating}
            </span>
            <CiStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookList;

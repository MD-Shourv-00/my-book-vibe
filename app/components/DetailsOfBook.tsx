import Image from "next/image";
import BookDataType from "../type/type";
import ReadBtn from "./readList/ReadBtn";
import WishBtn from "./wishList/WishBtn";

interface PropsType {
    data: BookDataType;
}

const DetailsOfBook = ({data}: PropsType) => {

    const {
      bookName,
      author,
      image,
      review,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing,
      totalPages,
    } = data;
  return (
    <div className="flex flex-row items-stretch gap-8 p-6 lg:p-8 bg-white rounded-2xl max-w-5xl mx-auto shadow-sm container my-10">
      {/* Left Side: Book Image Container */}
      <div className="w-full md:w-1/2 bg-[#F3F3F3] rounded-2xl p-8 flex items-center justify-center min-h-[420px]">
        <Image
          src={image}
          alt={bookName}
          width={300}
          height={300}
          className="hover:scale-110 duration-500 ease-in"></Image>
      </div>

      {/* Right Side: Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
        <div>
          {/* Title & Author */}
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">
            {bookName}
          </h1>
          <p className="text-gray-600 font-medium text-base mb-4">
            By :
            <span className="text-gray-700">{author}</span>
          </p>

          {/* Category Divider Section */}
          <div className="py-3 border-y border-gray-100">
            <span className="text-gray-600 font-medium">
              {category}
            </span>
          </div>

          {/* Review Paragraph */}
          <p className="text-gray-500 text-sm leading-relaxed my-4">
            <strong className="text-gray-900 font-bold">
              Review :
            </strong>
            {review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 py-3 border-b border-gray-100 mb-4">
            <span className="text-gray-900 font-bold text-sm">
              Tag
            </span>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#23BE0A]/10 text-[#23BE0A] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Meta Info Grid */}
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <span className="w-40">Number of Pages:</span>
              <span className="font-semibold text-gray-900">
                {totalPages}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-40">Publisher:</span>
              <span className="font-semibold text-gray-900">
                {publisher}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-40">
                Year of Publishing:
              </span>
              <span className="font-semibold text-gray-900">
                {yearOfPublishing}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-40">Rating:</span>
              <span className="font-semibold text-gray-900">
                {rating}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-2">
         <ReadBtn data={data} />
         <WishBtn data={data}/>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfBook;

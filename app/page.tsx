import Link from "next/link";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import BookDataType from "./type/type";

// reuseable bookslist data fetching function.
export async function BookListPromise() {
  try{
    const res = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_DATA}/BooksData`,
    { next: { revalidate: 60 } },
  );

  return res.json();
  } catch(error){
    console.log(error);
    return []
  }
}

export default async function Homepage() {
  const booksData: BookDataType[] = await BookListPromise();

  // console.log(booksData)

  return (
    <div>
      <Banner />
      <div className="max-w-full">
        <h1 className="text-center text-3xl m-10">Books</h1>
        {/* books list as a card */}
        <div className="grid grid-cols-4 gap-7 mx-auto container">
          {booksData.map((singleBookData) => (
            <BookList
              key={singleBookData.bookId}
              singleBookData={singleBookData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

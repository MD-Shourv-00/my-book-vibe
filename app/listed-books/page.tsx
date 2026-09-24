"use client";

import { useContext, useState } from "react";
import { BooksContext } from "../context/book-context";
import ReadListCard from "../components/readList/ReadListCard";
import WishListCard from "../components/wishList/WishListCard";
import BookDataType from "../type/type";

const ListedBook = () => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { booksList, wishList } = context;

  const [sortedValue, setSortedValue] =
    useState<string>("");

  function sortTheList(list: BookDataType[]) {
    if (sortedValue === "rating") {
      return list.sort((a, b) => b.rating - a.rating);
    }
    if (sortedValue === "pages") {
      return list.sort(
        (a, b) => b.totalPages - a.totalPages,
      );
    }
    if (sortedValue === "year") {
      return list.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing,
      );
    }

    return list;
  }

  const sortedReadedBookList = sortTheList(booksList);
  const sortedWishList = sortTheList(wishList);

  return (
    <div className="container mx-auto">
      <h1 className="bg-gray-200 rounded-2xl my-5 text-center font-bold text-2xl py-7">
        Books
      </h1>

      <select
        defaultValue="Sort by"
        onChange={(e) =>
          setSortedValue(
            e.target.value as "rating" | "pages" | "year",
          )
        }
        className="select select-neutral bg-blue-400 text-white font-bold text-[18px] font-mono border-blue-500 outline-none mb-10 flex mx-auto rounded-[8px] w-50">
        <option disabled={true}>Sort by</option>
        <option value={"rating"}>Rating</option>
        <option value={"pages"}>Number of pages</option>
        <option value={"year"}>Number of year</option>
      </select>

      {/* showing tab of read books and wishlist book */}
      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="my_tabs_4" />
          ReadList ({booksList.length})
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadedBookList.length !== 0 ? (
            sortedReadedBookList.map(
              (readedBook: BookDataType) => (
                <ReadListCard
                  key={readedBook.bookId}
                  readedBook={readedBook}
                />
              ),
            )
          ) : (
            <p className="text-center text-gray-400 text-2xl font-mono">
              No Read Book Yet
            </p>
          )}
        </div>

        <label className="tab">
          <input
            type="radio"
            name="my_tabs_4"
            defaultChecked
          />
          WishList ({wishList.length})
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishList.length !== 0 ? (
            sortedWishList.map(
              (wishedBook: BookDataType) => (
                <WishListCard
                  key={wishedBook.bookId}
                  wishedBook={wishedBook}
                />
              ),
            )
          ) : (
            <p className="text-center text-gray-400 text-2xl font-mono">
              No wish Book Yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBook;

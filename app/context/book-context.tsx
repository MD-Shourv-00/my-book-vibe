"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

import BookDataType from "../type/type";

export interface ListStateObjType {
  booksList: BookDataType[];
  setBooksList: Dispatch<SetStateAction<BookDataType[]>>;
  wishList: BookDataType[];
  setWishList: Dispatch<SetStateAction<BookDataType[]>>;
  
}

export const BooksContext = createContext<ListStateObjType | null>(
  null,
);

const BooksProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [booksList, setBooksList] = useState<
    BookDataType[]
  >([]);
  const [wishList, setWishList] = useState<BookDataType[]>(
    [],
  );

  const listStateObj: ListStateObjType = {
    booksList,
    setBooksList,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={listStateObj}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;

"use client";

import { BooksContext } from "@/app/context/book-context";
import BookDataType from "@/app/type/type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface PropsType {
  data: BookDataType;
}
const ReadBtn = ({ data }: PropsType) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { booksList, setBooksList } = context;

  function handleReadBtnFun() {
    setBooksList([...booksList, data]);
    toast.success(
      `You added "${data.bookName}" into Read List`,
    );
  }

  return (
    <button
      onClick={handleReadBtnFun}
      className="px-6 py-2.5 rounded-lg border border-gray-300 font-bold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer">
      Read
    </button>
  );
};

export default ReadBtn;

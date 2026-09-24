"use client";

import { BooksContext } from "@/app/context/book-context";
import BookDataType from "@/app/type/type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface PropsType {
  data: BookDataType;
}
const WishBtn = ({ data }: PropsType) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { wishList, setWishList } = context;

  function handlewishListFun() {
    setWishList([...wishList, data]);
    toast.success(
      `You successfully add "${data.bookName}" into Wish List`,
    );
  }

  return (
    <button
      onClick={handlewishListFun}
      className="px-6 py-2.5 rounded-lg bg-[#50B1C9] font-bold text-white hover:bg-[#43a1b8] transition-colors cursor-pointer">
      Wishlist
    </button>
  );
};

export default WishBtn;

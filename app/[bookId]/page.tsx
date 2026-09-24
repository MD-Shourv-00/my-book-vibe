import DetailsOfBook from "../components/DetailsOfBook";

async function fetchDataFunc(getBookId: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_JSON_SERVER_DATA}/BooksData/${getBookId}`,
    );

    return res.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}

const BookInformation = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
  const { bookId } = await params;

  const data = await fetchDataFunc(bookId);

  return (
    <div>
      <DetailsOfBook data={data}/>
    </div>
  );
};

export default BookInformation;

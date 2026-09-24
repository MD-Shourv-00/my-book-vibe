import DetailsOfBook from "../components/DetailsOfBook";

const BookInformation = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
  const { bookId } = await params;

  const res = await fetch(
    `http://localhost:5000/BooksData/${bookId}`,
  );

  const data = await res.json();

  return (
    <div>
      <DetailsOfBook data={data}/>
    </div>
  );
};

export default BookInformation;

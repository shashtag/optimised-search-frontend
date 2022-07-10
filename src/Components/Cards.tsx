import { useContext } from "react";
import { UIContext } from "../Context/UIContext";
import Card from "./Card";
import Pagination from "./Page";


type CardData = {
  name: string;
  sector: string;
  symbol: string;
  _id: string;
};

const Cards = () => {
  const { state } = useContext(UIContext);
  return (
    <div className='px-4 md:px-10 py-6 animate-bottomSlide'>
      <h2 className='animate-leftSlide mb-4 text-xl font-med text-h2'>
        Stocks Result
      </h2>
      {state.data ? (
        state.data.total !== 0 ? (
          <Pagination />
        ) : (
          <>
            <hr />
            <div className='grid place-items-center h-[80vh] opacity-30'>
              <p className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center'>
                No Stocks Found
              </p>
            </div>
          </>
        )
      ) : null}

      {state.loading ? (
        <div className='flex justify-center items-center h-[80vh]'>
          <div
            className='spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-blue-600'
            role='status'>
            <span className='sr-only'>Loading</span>
          </div>
        </div>
      ) : (
        <div className='flex flex-wrap justify-around'>
          {state?.data?.docs?.map((data: CardData, i: number) => (
            <Card
              name={data.name}
              key={i}
              sector={data.sector}
              symbol={data.symbol}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;

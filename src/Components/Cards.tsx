import { useContext } from "react";
import { UIContext } from "../Context/UIContext";
import Card from "./Card";
import Pagination from "./Page";

const Cards = () => {
  const { state } = useContext(UIContext);
  return (
    <div className='px-4 py-6'>
      <h2 className=' mb-4 text-xl font-med text-h2'>Stocks Result</h2>
      {state.data ? <Pagination /> : null}
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
          {state?.data?.docs?.map((data: any, i: number) => (
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

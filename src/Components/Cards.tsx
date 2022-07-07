import { useContext } from "react";
import { UIContext } from "../Context/UIContext";
import Card from "./Card";

const Cards = () => {
  const { state } = useContext(UIContext);
  return (
    <div className='px-4 py-6'>
      <h2 className=' mb-4 text-xl font-med text-h2'>Stocks result</h2>
      <div className='flex flex-wrap justify-center'>
        {state?.data?.docs?.map((data: any) => (
          <Card
            name={data.name}
            key={data.id}
            sector={data.sector}
            symbol={data.symbol}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;

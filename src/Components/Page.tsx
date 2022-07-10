/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { UIContext } from "../Context/UIContext";

const Page = () => {
  const { state, dispatch } = useContext(UIContext);
  return (
    <div className='bg-white transition-all  py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        <button
          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          disabled={state.page === 1}
          onClick={() => dispatch({ type: "prev" })}>
          Previous
        </button>
        <button
          className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          disabled={state?.data?.pages === state.page}
          onClick={() => dispatch({ type: "next" })}>
          Next
        </button>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing{" "}
            <span className='font-medium'>{(state.page - 1) * 5 + 1}</span> to{" "}
            <span className='font-medium'>{(state.page - 1) * 5 + 5}</span> of{" "}
            <span className='font-medium'>{state?.data?.total}</span> results
          </p>
        </div>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'>
            <button
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              disabled={state.page === 1}
              onClick={() => dispatch({ type: "prev" })}>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              Previous
            </button>
            <button
              aria-current='page'
              className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
              {state.page}
            </button>
            {state?.data?.pages > state.page ? (
              <button
                onClick={() =>
                  dispatch({ type: "setPage", payload: state.page + 1 })
                }
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
                {state.page + 1}
              </button>
            ) : null}
            {state?.data?.pages > state.page + 1 ? (
              <button
                onClick={() =>
                  dispatch({ type: "setPage", payload: state.page + 2 })
                }
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'>
                {state.page + 2}
              </button>
            ) : null}
            {state?.data?.pages - state.page > 5 ? (
              <span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'>
                ...
              </span>
            ) : null}
            {state?.data?.pages - state.page > 4 ? (
              <button
                onClick={() =>
                  dispatch({ type: "setPage", payload: state?.data?.pages - 2 })
                }
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'>
                {state?.data?.pages - 2}
              </button>
            ) : null}
            {state?.data?.pages - state.page > 3 ? (
              <button
                onClick={() =>
                  dispatch({ type: "setPage", payload: state?.data?.pages - 1 })
                }
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
                {state?.data?.pages - 1}
              </button>
            ) : null}
            {state?.data?.pages - state.page > 2 ? (
              <button className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
                {state?.data?.pages}
              </button>
            ) : null}
            <button
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              disabled={state?.data?.pages === state.page}
              onClick={() => dispatch({ type: "next" })}>
              Next
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Page;

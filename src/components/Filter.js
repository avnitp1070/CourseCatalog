import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="filter">
      {/* {
         filterData.map((data)=>{
            return(
                <button className='btn-filter' key={data.id} onClick={()=>filterHandler(data.title)}>{data.title}</button>
            );
         })
        } */}
      {filterData.map((data) => {
        const btnFilterStyles = {
          fontSize: "1.125rem", // text-lg
          padding: "0.5rem 1rem", // px-2 py-1
          borderRadius: "0.25rem", // rounded-md
          fontWeight: "500", // font-medium
          color: "#fff", // text-white
          backgroundColor: "#000", // bg-black
          border: "2px solid #000", // border-2
          transition: "all 300ms",
          ...(category === data.title
            ? {
                background: "rgba(0, 0, 0, 0.6)", // bg-opacity-60
                borderColor: "#fff", // border-white
              }
            : {
                background: "rgba(0, 0, 0, 0.4)", // bg-opacity-40
                borderColor: "transparent", // border-transparent
              }),
        };

        return (
          <button
            key={data.id}
            style={btnFilterStyles}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;

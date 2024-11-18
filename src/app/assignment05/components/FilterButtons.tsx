import React from "react";

// Define the types for the props
type FilterButtonsProps = {
  setFilter: (filter: string) => void; // Function that takes a string and returns nothing
  filter: string; // The current filter value, assumed to be a string
};

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter, filter }) => {
  return (
    <div className="flex justify-evenly w-3/4">
      <button
        className="border border-gray-700"
        onClick={() => setFilter("All")}
        style={{ opacity: filter === "All" ? 0.7 : 1 }}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Completed")}
        style={{
          opacity: filter === "Completed" ? 0.7 : 1,
          backgroundColor: "lightgreen",
        }}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("Pending")}
        style={{
          opacity: filter === "Pending" ? 0.7 : 1,
          backgroundColor: "pink",
        }}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterButtons;

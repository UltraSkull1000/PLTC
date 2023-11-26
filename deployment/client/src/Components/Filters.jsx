import TeamFilter from "./TeamFilter";
import RarityFilter from "./RarityFilter";
import Input from "./Input";
const Filters = (props) => {
  return (
    <>
      <div className="inline-flex w-full md: mx-4 lg:mx-8">
        <TeamFilter />
        <RarityFilter />
        <Input />
      </div>
    </>
  );
};
export default Filters;

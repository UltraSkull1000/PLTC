import TeamFilter from "./TeamFilter";
import RarityFilter from "./RarityFilter";
import Input from "./Input";
export default function Filters() {
  return (
    <>
      <div className="inline-flex w-full md: mx-4 lg:mx-8">
        <TeamFilter />
        <RarityFilter />
        <Input />
      </div>
    </>
  );
}

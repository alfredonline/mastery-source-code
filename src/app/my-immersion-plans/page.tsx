import AddCard from "@/components/Cards/AddCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Title from "@/components/Title";

const Page = () => {
  return (
    <MaxWidthWrapper className="flex flex-col mt-10">
      <Title text="Your immersion plans!" emoji="🎯" />
      <AddCard />
    </MaxWidthWrapper>
  );
};

export default Page;

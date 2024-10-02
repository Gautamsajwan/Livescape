'use client'
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {};

function Search({}: Props) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const params = new URLSearchParams();
    params.set('term', value);

    router.push(`/search?${params.toString()}`);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full lg:w-[500px] flex items-center"
    >
      <div className="w-full relative">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          className="rounded-r-none h-10 bg-gray focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
        {value && (
          <X
            className="absolute top-2 right-2 h-6 w-6 text-muted-foreground cursor-pointer hover:opacity-75 transition"
            onClick={onClear}
          />
        )}
      </div>
      <Button
        type="submit"
        variant="default"
        className="rounded-l-none px-2 h-[37.5px] bg-[rgb(45,50,56)]"
      >
        <SearchIcon className="text-muted-foreground hover:text-white hover:scale-110 transition-all duration-200" />
      </Button>
    </form>
  );
}

export default Search;

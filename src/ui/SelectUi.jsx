import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectUi({
  select,
  setSelect,
  placeholder,
  selectContent,
  className,
}) {
  /*
    select & setSelect: for controlling the select
    placeholder: for the name of the select
    selectContent: an arraw of group objects 
    className: for applying style to the select.
    [{
    group: "Select Hour",
    item: ["AM", "PM"],
    }]
  */

  return (
    <Select
      className={className}
      onValueChange={(value) => setSelect(value)}
      value={select}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectContent?.map((group) => (
          <SelectGroup>
            <SelectLabel>{group.group}</SelectLabel>
            {group.item.map((item) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectUi;

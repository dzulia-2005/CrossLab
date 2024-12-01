import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface SearchByTagNameProps {
  className?: string; // Add className prop to accept custom styles
}
const SearchByTagName: React.FC<SearchByTagNameProps> = ({ className }) => {
  return (
    <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Choose Tag" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="Angular">Angular</SelectItem>
        <SelectItem value="Vue">Vue</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SearchByTagName;

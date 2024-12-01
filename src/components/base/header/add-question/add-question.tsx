import { Link } from "react-router-dom";
interface AddQuestionProps {
  className: string;
}
const AddQuestion: React.FC<AddQuestionProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 md:w-16 md:h-16 cursor-pointer"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M256 112v288M400 256H112"
          />
        </svg>
      </Link>
    </div>
  );
};

export default AddQuestion;

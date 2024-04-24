import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const TextCard = ({ text }) => {
  const copyToClipBoard = (txt) => {
    navigator.clipboard.writeText(txt);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-between items-center mx-4 pt-2">
        <p className="text-sm">{text ? new Date().toUTCString() : ""}</p>
        <Button
          onClick={() => {
            copyToClipBoard(text);
          }}
        >
          Copy
        </Button>
      </div>
      <div className="md:mx-4 my-4 md:my-0">
        <Textarea
          defaultValue={text}
          className="resize-none h-[25rem] md:h-[20rem]"
          disabled
        />
      </div>
    </div>
  );
};

export default TextCard;

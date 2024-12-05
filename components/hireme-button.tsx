import React from "react";
import AnimatedBorder from "./ui/animated-border";
import { Mail } from "lucide-react";
import Link from "next/link";

const HireMeButton = () => {
  // const [mailButtonClicked, setMailButtonClicked] = useState<boolean>(false);
  // function changeMailIcon(){
  //     setMailButtonClicked((prevState)=> !prevState);
  // }
  return (
    <AnimatedBorder className="sm:mr-10">
      <Link
        href="mailto:sahillamba003@gmail.com?subject=Hiring Inquiry&body=Hello,%20I%20would%20like%20to%20discuss%20a%20job%20opportunity&cc=19bcs1922@gmail.com&bcc=someone@example.com"
        // onClick={() => changeMailIcon()}
      >
        <button className="flex h-10 cursor-pointer items-center gap-4 whitespace-nowrap p-4">
          Hire Me <Mail size={15} />
          {/* {!mailButtonClicked ? (
                        <Mail size={15} />
                    ) : (
                        <MailCheck size={15} />
                    )} */}
        </button>
      </Link>
    </AnimatedBorder>
  );
};

export default HireMeButton;

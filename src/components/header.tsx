import { FaGlobe, FaBlog, FaCircleCheck } from "react-icons/fa6"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

import coderaveLogoDark from "@/assets/coderave-dark.svg"
import coderaveLogoLight from "@/assets/coderave-light.svg"

function Header() {
  return (
    <>
      {/* Avatar Section */}
      <Avatar className="w-32 h-32 mb-4">
        <AvatarImage src={coderaveLogoDark} className="dark:hidden" />
        <AvatarImage src={coderaveLogoLight} className="hidden dark:block" />
        <AvatarFallback>coderave logo</AvatarFallback>
      </Avatar>

      {/* Info Text */}
      <h2 className="text-3xl font-bold mb-2 flex items-center text-neutral-900 dark:text-neutral-100">
        coderave
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaCircleCheck className="ml-2 h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Verified</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

      </h2>
      <p className="mb-6 text-center max-w-md text-neutral-700 dark:text-neutral-300">
        We are a team of developers who love to code and share our knowledge with the world.
      </p>

      {/* Website and Blog Links */}
      <div className="flex flex-row max-w-md mb-6 text-neutral-950 dark:text-neutral-50">
        <Button variant="outline" className="flex items-center justify-center w-full mr-4">
          <FaGlobe className="mr-2 h-4 w-4" /> Website
        </Button>
        <Button variant="outline" className="flex items-center justify-center w-full">
          <FaBlog className="mr-2 h-4 w-4" /> Blog
        </Button>
      </div>
    </>
  );
}

export default Header

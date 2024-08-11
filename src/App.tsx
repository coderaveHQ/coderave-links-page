import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaGlobe, FaBlog } from 'react-icons/fa';

import coderaveLogoDark from './assets/coderave-dark.svg'
import coderaveLogoLight from './assets/coderave-light.svg'

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-950 p-4">
        {/* Avatar Section */}
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src={coderaveLogoDark} className="dark:hidden" />
          <AvatarImage src={coderaveLogoLight} className="hidden dark:block" />
          <AvatarFallback>coderave logo</AvatarFallback>
        </Avatar>

        {/* Info Text */}
        <h1 className="text-2xl font-bold mb-2 text-neutral-950 dark:text-neutral-50">coderaveHQ</h1>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 text-center max-w-md">
          Welcome to coderaveHQ! We are a team of developers who love to code and share our knowledge with the world.
        </p>

        {/* Website and Blog Links */}
        <div className="flex flex-row max-w-md mb-6 text-neutral-950 dark:text-neutral-50">
          <Button variant="outline" className="flex items-center justify-center w-full mr-4">
            <FaGlobe className="mr-2" /> Website
          </Button>
          <Button variant="outline" className="flex items-center justify-center w-full">
            <FaBlog className="mr-2" /> Blog
          </Button>
        </div>

        {/* Socials Section */}
        <Card className="w-full max-w-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-neutral-950 dark:text-neutral-50">Socials</h2>
          <div className="flex flex-col space-y-3">
            <Button className="flex items-center justify-center w-full">
              <FaInstagram className="mr-2" /> Instagram
            </Button>
            <Button className="flex items-center justify-center w-full">
              <FaTwitter className="mr-2" /> Twitter
            </Button>
            <Button className="flex items-center justify-center w-full">
              <FaGithub className="mr-2" /> GitHub
            </Button>
            <Button className="flex items-center justify-center w-full">
              <FaLinkedin className="mr-2" /> LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default App

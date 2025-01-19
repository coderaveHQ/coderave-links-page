import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function SocialsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Socials</CardTitle>
        <CardDescription>Follow us on social media to stay up to date with our latest projects and news.</CardDescription>
      </CardHeader>
      <CardContent>
        <a href="https://instagram.com/coderave.dev/" target="_blank" rel="noopener noreferrer">
          <Button id="instagram-button" className="flex items-center justify-center w-full mb-4">
            <FaInstagram className="mr-2 h-4 w-4" /> Instagram
          </Button>
        </a>
        <a href="https://x.com/coderavedev/" target="_blank" rel="noopener noreferrer">
          <Button id="twitter-button" className="flex items-center justify-center w-full">
            <FaXTwitter className="mr-2 h-4 w-4" /> Twitter
          </Button>
        </a>
      </CardContent>
    </Card>
  )
}

export default SocialsCard

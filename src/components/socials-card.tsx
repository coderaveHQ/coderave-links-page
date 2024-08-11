import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function SocialsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Socials</CardTitle>
        <CardDescription>Follow us on social media to stay up to date with our latest projects and news.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="flex items-center justify-center w-full">
          <FaInstagram className="mr-2 h-4 w-4" /> Instagram
        </Button>
        <Button className="flex items-center justify-center w-full">
          <FaXTwitter className="mr-2 h-4 w-4" /> Twitter
        </Button>
        <Button className="flex items-center justify-center w-full">
          <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
        </Button>
      </CardContent>
    </Card>
  )
}

export default SocialsCard

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-950 p-4">
        {/* Avatar Section */}
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src="/coderave.svg" />
          <AvatarFallback>coderave logo</AvatarFallback>
        </Avatar>
      </div>
    </>
  )
}

export default App

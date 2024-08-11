import Header from "@/components/header";
import SocialsCard from "@/components/socials-card"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-950 p-4">
        {/* Header Section */}
        <Header />

        {/* Socials Section */}
        <SocialsCard />
      </div>
    </>
  )
}

export default App

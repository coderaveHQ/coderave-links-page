import Header from "@/components/header";
import SocialsCard from "@/components/socials-card"

function App() {
  return (
    <>
      <div className="h-[50rem] -z-20 min-h-screen w-full dark:bg-neutral-950 bg-neutral-50  dark:bg-dot-neutral-50/[0.2] bg-dot-neutral-950/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute -z-10 pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-neutral-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Header Section */}
        <Header />

        {/* Socials Section */}
        <SocialsCard />
      </div>
    </>
  )
}

export default App

import Header from "@/components/header";
import Footer from "@/components/footer";
import SocialsCard from "@/components/socials-card"

function App() {
  return (
    <>
      <div className="h-[50rem] min-h-screen w-full dark:bg-neutral-950 bg-neutral-50  dark:bg-dot-neutral-50/[0.2] bg-dot-neutral-950/[0.2]">
        <div className="absolute min-h-screen inset-0 dark:bg-neutral-950 bg-neutral-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-20 min-h-screen relative flex flex-col items-center justify-center p-4">
          {/* Header Section */}
          <Header />

          {/* Socials Section */}
          <SocialsCard />

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

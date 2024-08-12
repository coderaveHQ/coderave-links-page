import Header from "@/components/header";
import SocialsCard from "@/components/socials-card"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

function App() {
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center min-h-screen p-4">
          {/* Header Section */}
          <Header />

          {/* Socials Section */}
          <SocialsCard />
        </div>
      </BackgroundGradientAnimation>
    </>
  )
}

export default App

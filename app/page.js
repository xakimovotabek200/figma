import AboutUs from "@/src/PageComponents/AboutUs";
import Card from "@/src/PageComponents/Card";
import Hero from "@/src/PageComponents/Hero";
import Testimonials from "@/src/PageComponents/Testimonials";
import Text from "@/src/PageComponents/Text";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Text />
      <Card />
      <Testimonials />
    </main>
  )
}

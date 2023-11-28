import ContactUs from "@/components/ContactsUs";
import DataAnalytics from "@/components/DataAnalytics";
import FeatureServices from "@/components/FeatureServices";
import Footer from "@/components/Footer";
import HeroArea from "@/components/HeroArea";
import InboxMail from "@/components/InboxMail";
import Navbar from "@/components/Navbar";
import OurBranch from "@/components/OurBranch";
import WhoWeAre from "@/components/WhoWeAre";



export default function Home() {
  return (
    <div className='w-full h-full'>

{ /* NAVBAR */ }
    <Navbar />

    { /* HEROAREA */ }
    <HeroArea />

    { /* WhoWeAre */ }
    <WhoWeAre />

    { /* OurBranch */ }
    <OurBranch />

    { /* Data Analytics */ }
    <DataAnalytics />

    { /* FeatureServices */ }
    <FeatureServices />

    { /* ContactUs */ }
    <ContactUs />

    { /* InboxMail */ }
    <InboxMail />

    { /* Footer */ }
    <Footer />
  
  </div>
  )
}

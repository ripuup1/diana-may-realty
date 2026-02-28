import VideoHero from "@/components/VideoHero";
import ActionCards from "@/components/ActionCards";
import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/ImageGallery";
import TeamSection from "@/components/TeamSection";
import AlertsSection from "@/components/AlertsSection";
import CTABanner from "@/components/CTABanner";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  return (
    <>
      <VideoHero />
      <ActionCards />
      <AboutSection />
      <ImageGallery />
      <TeamSection />
      <AlertsSection />
      <SocialSection />
      <CTABanner />
    </>
  );
}

import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DownloadSection from '@/components/DownloadSection';
import SupportSection from '@/components/SupportSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <DownloadSection />
      <SupportSection />
    </div>
  );
}

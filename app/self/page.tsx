import AboundMeCard from "../../components/AboundMeCard";
import ContactCard from "../../components/ContactCard";
import ExperienceAndEducationsCard from "../../components/ExperienceAndEducationsCard";
import PhotoSelfCard from "../../components/PhotoSelfCard";
import SkillsCard from "../../components/SkillsCard";
import { Section } from "../../components/ui/page/Section";

export default function Self() {
  return (
    <Section container={{ withLateralDetails: false }}>
      <div className="grid h-full grid-cols-[2fr_2fr_3fr] gap-5">
        <PhotoSelfCard />
        <ExperienceAndEducationsCard />
        <SkillsCard />
        <AboundMeCard />
        <ContactCard />
      </div>
    </Section>
  );
}

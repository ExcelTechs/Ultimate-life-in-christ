import stripWorship from "@/assets/strip-worship.jpg";
import stripPreaching from "@/assets/strip-preaching.jpg";
import stripSchool from "@/assets/strip-school.jpg";
import stripFarming from "@/assets/strip-farming.jpg";
import stripLeadership from "@/assets/strip-leadership.jpg";
import stripChurch from "@/assets/strip-church.jpg";
import stripSkills from "@/assets/strip-skills.jpg";
import communityWorship from "@/assets/community-worship.jpg";
import farmingProject from "@/assets/farming-project.jpg";
import schoolEducation from "@/assets/school-education.jpg";

const images = [
  { src: stripWorship, alt: "Congregation in worship" },
  { src: stripPreaching, alt: "Pastor preaching the Word" },
  { src: stripSchool, alt: "Children in school" },
  { src: stripFarming, alt: "Community farming project" },
  { src: stripLeadership, alt: "Youth leadership training" },
  { src: stripChurch, alt: "Church building and community" },
  { src: stripSkills, alt: "Women skills training" },
  { src: communityWorship, alt: "Community worship gathering" },
  { src: farmingProject, alt: "Farming project" },
  { src: schoolEducation, alt: "School education program" },
];

export default function ImageScrollStrip() {
  return (
    <section className="py-0 overflow-hidden bg-secondary/50">
      <div className="relative flex gap-0 overflow-hidden">
        {/* Two sets of images side by side for seamless loop */}
        <div className="flex gap-2 animate-marquee shrink-0 py-3 px-1">
          {images.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-56 md:w-64 h-44 md:h-52 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-2 animate-marquee shrink-0 py-3 px-1" aria-hidden="true">
          {images.map((img, i) => (
            <div
              key={`dup-${i}`}
              className="shrink-0 w-56 md:w-64 h-44 md:h-52 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

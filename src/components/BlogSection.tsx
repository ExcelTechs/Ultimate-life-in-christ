import { ArrowRight } from "lucide-react";
import blogChurchPlant from "@/assets/blog-church-plant.jpg";
import blogGraduation from "@/assets/blog-graduation.jpg";
import blogEntrepreneurship from "@/assets/blog-entrepreneurship.jpg";
import blogPastors from "@/assets/blog-pastors.jpg";

const posts = [
  {
    id: 1,
    image: blogChurchPlant,
    day: "12",
    month: "Jan",
    year: "2025",
    title: "New Church Established in the Northern Region",
    excerpt:
      "Glory to God! Our ministry successfully planted its 54th church in the northern region, bringing the Gospel to a new community and changing lives for eternity.",
    category: "Church Planting",
  },
  {
    id: 2,
    image: blogGraduation,
    day: "05",
    month: "Mar",
    year: "2025",
    title: "Skills Training Academy Graduates First Class",
    excerpt:
      "Over 80 young men and women graduated from our inaugural Skills Training & Leadership Academy, equipped with practical knowledge and God's wisdom for life.",
    category: "Education",
  },
  {
    id: 3,
    image: blogEntrepreneurship,
    day: "18",
    month: "Apr",
    year: "2025",
    title: "Entrepreneurship Academy Launches Across Four Centres",
    excerpt:
      "Our Entrepreneurship Academy has officially expanded to four ministry centres, empowering believers to create Kingdom-driven businesses and sustainable livelihoods.",
    category: "Entrepreneurship",
  },
  {
    id: 4,
    image: blogPastors,
    day: "02",
    month: "Jun",
    year: "2025",
    title: "Annual Pastors' Leadership Summit Convenes",
    excerpt:
      "Church leaders from across our network gathered for the Annual Leadership Summit — a powerful time of prayer, teaching, strategy, and unity in building God's Kingdom.",
    category: "Leadership",
  },
];

function DateBadge({ day, month }: { day: string; month: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-14 h-14 bg-primary rounded-lg shadow-md flex-shrink-0">
      <span className="font-display font-black text-xl leading-none text-gold">{day}</span>
      <span className="font-body text-[10px] uppercase tracking-widest text-primary-foreground/80 leading-none mt-0.5">
        {month}
      </span>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-body text-sm uppercase tracking-widest text-gold mb-2">
            Ministry Updates
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-4">
            Latest News
          </h2>
          {/* Cross divider — inspired by reference */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gold/50" />
            <div className="text-gold text-xl font-bold">✝</div>
            <div className="h-px w-16 bg-gold/50" />
          </div>
        </div>

        {/* Grid — Featured (large) + 3 supporting */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured post — spans 2 cols on left */}
          <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block font-body text-xs uppercase tracking-widest text-gold border border-gold/40 rounded-full px-3 py-0.5 mb-3">
                {posts[0].category}
              </span>
              <div className="flex items-start gap-4">
                <DateBadge day={posts[0].day} month={posts[0].month} />
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground leading-snug mb-2">
                    {posts[0].title}
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/75 line-clamp-2">
                    {posts[0].excerpt}
                  </p>
                </div>
              </div>
              <button className="mt-4 flex items-center gap-2 font-body text-sm font-bold text-gold hover:text-gold-light transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right column — 2 stacked cards */}
          <div className="flex flex-col gap-6">
            {posts.slice(1, 3).map((post) => (
              <article
                key={post.id}
                className="card-ministry flex flex-col overflow-hidden cursor-pointer group"
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 font-body text-xs uppercase tracking-widest text-navy bg-gold rounded-full px-3 py-0.5">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <DateBadge day={post.day} month={post.month} />
                    <h3 className="font-display font-bold text-primary text-base leading-snug">
                      {post.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <button className="self-start flex items-center gap-2 font-body text-sm font-bold text-gold hover:text-primary transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom row — 1 wide card */}
        <div className="mt-6">
          <article className="card-ministry grid md:grid-cols-2 gap-0 overflow-hidden cursor-pointer group">
            <div className="relative overflow-hidden h-56 md:h-auto">
              <img
                src={posts[3].image}
                alt={posts[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-body text-xs uppercase tracking-widest text-gold border border-gold/40 rounded-full px-3 py-0.5 mb-4 self-start">
                {posts[3].category}
              </span>
              <div className="flex items-start gap-4 mb-4">
                <DateBadge day={posts[3].day} month={posts[3].month} />
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary leading-snug">
                  {posts[3].title}
                </h3>
              </div>
              <p className="font-body text-muted-foreground mb-6">{posts[3].excerpt}</p>
              <button className="self-start px-6 py-2.5 gradient-gold text-navy font-display font-bold text-sm rounded-full shadow-gold hover:brightness-110 transition-all duration-200 flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-primary text-primary font-display font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

import heroChurch from "@/assets/hero-church.jpg";
import farmingProject from "@/assets/farming-project.jpg";
import schoolEducation from "@/assets/school-education.jpg";
import communityWorship from "@/assets/community-worship.jpg";
import stripLeadership from "@/assets/strip-leadership.jpg";
import stripWorship from "@/assets/strip-worship.jpg";

const blogPosts = [
  {
    id: 1,
    title: "How Church Planting Is Transforming Rural Communities",
    excerpt: "Discover how our church planting initiative has brought hope, healing, and sustainable development to over 50 rural communities across the region.",
    category: "Church Ministry",
    author: "Bishop Emmanuel",
    date: "February 10, 2026",
    readTime: "5 min read",
    image: heroChurch,
    featured: true,
  },
  {
    id: 2,
    title: "Faith & Farming: How Our Agricultural Projects Are Feeding Families",
    excerpt: "Our farming enterprise projects combine faith-driven purpose with practical agricultural skills to create food security and income for hundreds of families.",
    category: "Farming Projects",
    author: "Elder David Chirwa",
    date: "January 28, 2026",
    readTime: "4 min read",
    image: farmingProject,
    featured: false,
  },
  {
    id: 3,
    title: "Empowering the Next Generation Through Vocational Education",
    excerpt: "Our skills training programs are equipping young people with marketable trades — giving them a foundation for life.",
    category: "Education",
    author: "Pastor Sarah Moyo",
    date: "January 15, 2026",
    readTime: "6 min read",
    image: schoolEducation,
    featured: false,
  },
  {
    id: 4,
    title: "Women Rising: Stories of Transformation from Our Women's Ministry",
    excerpt: "Through discipleship, mentorship, and practical skills training, women are stepping into leadership and changing their communities.",
    category: "Women's Ministry",
    author: "Minister Ruth Banda",
    date: "December 30, 2025",
    readTime: "5 min read",
    image: communityWorship,
    featured: false,
  },
  {
    id: 5,
    title: "Leadership Development: Raising the Next Generation of Kingdom Leaders",
    excerpt: "Our leadership academy is producing men and women of integrity, vision, and faith — equipped to serve with excellence.",
    category: "Leadership",
    author: "Bishop Emmanuel",
    date: "December 12, 2025",
    readTime: "4 min read",
    image: stripLeadership,
    featured: false,
  },
  {
    id: 6,
    title: "Prayer, Purpose & Partnership: 20 Years of Ministry Milestones",
    excerpt: "We reflect on the faithfulness of God and the impact of partnership — from 2 churches to 50+, and thousands of lives changed.",
    category: "Testimony",
    author: "The ULIC Team",
    date: "November 25, 2025",
    readTime: "7 min read",
    image: stripWorship,
    featured: false,
  },
];

const categories = ["All", "Church Ministry", "Farming Projects", "Education", "Women's Ministry", "Leadership", "Testimony"];

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(120deg, hsl(285 65% 14%) 0%, hsl(310 80% 22%) 60%, hsl(330 100% 35%) 100%)",
        }}
      >
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="font-body text-white/60 text-xs tracking-[0.25em] uppercase mb-4">News & Insights</p>
          <h1 className="font-display font-black text-white text-5xl md:text-6xl mb-6">Ministry Blog</h1>
          <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
            Stories of faith, transformation, and kingdom impact from our ministry family.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="border-b border-border bg-background sticky top-[72px] z-30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`font-body text-sm px-4 py-1.5 rounded-full border whitespace-nowrap transition-all ${
                  cat === "All"
                    ? "bg-gold text-white border-gold"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <p className="font-body text-gold text-xs tracking-widest uppercase font-bold mb-6">Featured Story</p>
          <Link to={`/blog/${featured.id}`} className="card-ministry overflow-hidden grid md:grid-cols-2 group cursor-pointer block">
            <div className="h-72 md:h-auto min-h-[300px] overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <span className="inline-block font-body text-xs text-gold uppercase tracking-widest font-bold mb-4 px-3 py-1 bg-gold/10 rounded-full w-fit">
                {featured.category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-6">
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {featured.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <span className="inline-flex items-center gap-2 font-display font-bold text-gold text-sm group-hover:gap-3 transition-all">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>

        {/* Grid Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="card-ministry overflow-hidden flex flex-col group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-3 h-3 text-gold" />
                  <span className="font-body text-xs text-gold uppercase tracking-widest font-bold">{post.category}</span>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-3 group-hover:text-gold transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-body pt-4 border-t border-border">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span className="flex items-center gap-1 ml-auto"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

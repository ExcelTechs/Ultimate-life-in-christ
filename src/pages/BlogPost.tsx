import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react";

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
    excerpt: "Discover how our church planting initiative has brought hope, healing, and sustainable development to over 50 rural communities across the region in the past two decades.",
    content: `Church planting has been at the very heart of The Ultimate Life In Christ Ministries since its founding over 20 years ago. What started as a small gathering of believers has blossomed into a network of over 50 thriving churches across rural communities.

Each church plant begins with prayer, community engagement, and a deep understanding of local needs. Our teams spend months building relationships before establishing a formal gathering place. This approach ensures that each church is deeply rooted in its community.

The impact goes far beyond Sunday services. Our churches serve as community hubs — offering literacy programs, health education, agricultural training, and youth mentorship. They become catalysts for holistic transformation.

We've seen entire villages transformed: clean water projects initiated by church members, community gardens feeding hundreds of families, and youth groups that have become the backbone of local development efforts.

Our vision is to plant 100 churches by 2030, each one a beacon of hope and a center of community transformation. With your partnership, we believe this goal is not only achievable but inevitable.`,
    category: "Church Ministry",
    author: "Bishop Emmanuel",
    date: "February 10, 2026",
    readTime: "5 min read",
    image: heroChurch,
  },
  {
    id: 2,
    title: "Faith & Farming: How Our Agricultural Projects Are Feeding Families",
    excerpt: "Our farming enterprise projects combine faith-driven purpose with practical agricultural skills to create food security and income for hundreds of families.",
    content: `In many of the communities we serve, food insecurity is a daily reality. That's why our farming projects are more than just agriculture — they are acts of faith and love in action.

Our agricultural initiatives began with a simple conviction: God has given us the land, and we have a responsibility to steward it well. Today, our farming projects span multiple regions and employ hundreds of community members.

We focus on sustainable farming practices that respect the environment while maximizing yield. From maize and soybean cultivation to poultry and fish farming, our projects are diverse and responsive to local needs.

Training is at the center of everything we do. We don't just provide seeds and tools — we teach farming techniques, business skills, and financial management. This ensures that the impact of our projects extends far beyond a single harvest.

The results speak for themselves: families that once struggled to eat one meal a day are now food secure and generating income from surplus produce. Children are staying in school because their parents can afford fees. Communities are being transformed from the ground up.`,
    category: "Farming Projects",
    author: "Elder David Chirwa",
    date: "January 28, 2026",
    readTime: "4 min read",
    image: farmingProject,
  },
  {
    id: 3,
    title: "Empowering the Next Generation Through Vocational Education",
    excerpt: "Our skills training programs are equipping young people with marketable trades — from welding and tailoring to ICT and hospitality — giving them a foundation for life.",
    content: `Youth unemployment is one of the greatest challenges facing our communities. Too many young people finish school with no clear path to a livelihood. Our vocational education programs are changing that narrative.

Through our skills training centers, young men and women are learning practical trades that give them a competitive edge in the job market. Our programs cover welding, carpentry, tailoring, ICT, hospitality, and more.

But we don't stop at skills. We integrate character development, entrepreneurship training, and spiritual formation into every program. Our graduates leave not just with a trade, but with the values and vision to build meaningful careers and contribute to their communities.

The success stories are inspiring: a young woman who learned tailoring and now runs a clothing business employing five others. A young man who trained in welding and now contracts for construction projects across the region.

We believe that every young person deserves a chance to thrive. Through vocational education, we're turning potential into productivity and dreams into reality.`,
    category: "Education",
    author: "Pastor Sarah Moyo",
    date: "January 15, 2026",
    readTime: "6 min read",
    image: schoolEducation,
  },
  {
    id: 4,
    title: "Women Rising: Stories of Transformation from Our Women's Ministry",
    excerpt: "Through discipleship, mentorship, and practical skills training, women across our ministry network are stepping into leadership and changing their communities.",
    content: `The women's ministry of ULIC is a powerful force for change. Across our network, women are rising — not just spiritually, but economically, socially, and in leadership.

Our women's programs combine deep discipleship with practical empowerment. Weekly Bible studies, prayer groups, and mentorship circles provide spiritual nourishment. Meanwhile, skills training in areas like sewing, baking, and financial literacy give women the tools to support their families.

We've seen remarkable transformations. Women who once depended entirely on others are now running small businesses. Mothers who felt voiceless in their communities are now leading church groups and community development committees.

One of our most impactful initiatives is the micro-loan program, which provides small amounts of capital to women starting businesses. The repayment rate is over 95%, and the ripple effects are extraordinary — children are educated, homes are improved, and communities are strengthened.

We believe that when you empower a woman, you empower an entire community. Our women's ministry is living proof of that truth.`,
    category: "Women's Ministry",
    author: "Minister Ruth Banda",
    date: "December 30, 2025",
    readTime: "5 min read",
    image: communityWorship,
  },
  {
    id: 5,
    title: "Leadership Development: Raising the Next Generation of Kingdom Leaders",
    excerpt: "Our leadership academy is producing men and women of integrity, vision, and faith — equipped to serve their communities and advance God's Kingdom with excellence.",
    content: `Leadership is the multiplier of ministry impact. That's why ULIC has invested heavily in developing leaders at every level — from youth group leaders to senior pastors, from community organizers to institutional administrators.

Our Leadership Academy offers structured training programs that combine biblical foundations with practical leadership skills. Participants learn strategic planning, conflict resolution, team building, financial stewardship, and public speaking.

But more than skills, we develop character. Our curriculum is built on the conviction that true leadership flows from integrity, humility, and a servant heart. We don't just teach people how to lead — we help them understand why godly leadership matters.

The fruits of this investment are visible across our network. Graduates of our academy are leading churches, managing schools, directing farming projects, and serving in government and civic organizations.

We're also investing in the next generation through our youth leadership pipeline, which identifies and mentors young leaders from an early age. These future leaders are already making an impact in their schools and communities.`,
    category: "Leadership",
    author: "Bishop Emmanuel",
    date: "December 12, 2025",
    readTime: "4 min read",
    image: stripLeadership,
  },
  {
    id: 6,
    title: "Prayer, Purpose & Partnership: 20 Years of Ministry Milestones",
    excerpt: "As we mark over two decades of ministry, we reflect on the faithfulness of God and the impact of partnership — from 2 churches to 50+, and thousands of lives changed.",
    content: `Twenty years ago, The Ultimate Life In Christ Ministries began with a prayer, a purpose, and a handful of faithful believers. Today, as we look back, we are overwhelmed by God's faithfulness and the power of partnership.

From 2 churches to over 50. From a single community project to a network of farming, education, and leadership initiatives. From a small team to hundreds of dedicated workers across multiple regions.

None of this would have been possible without our partners — individuals, churches, and organizations who believed in the vision and invested their prayers, time, and resources. Every church planted, every child educated, every family fed is a testament to the power of partnership.

As we celebrate this milestone, we're not resting on our achievements. We're pressing forward with renewed vision and greater faith. Our goals for the next decade include planting 50 more churches, expanding our farming projects to new regions, and establishing a full university.

We invite you to be part of the next chapter. Together, we can continue to transform lives and communities for the glory of God.`,
    category: "Testimony",
    author: "The ULIC Team",
    date: "November 25, 2025",
    readTime: "7 min read",
    image: stripWorship,
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-36 pb-20 text-center container mx-auto px-6">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <button onClick={() => navigate("/blog")} className="text-gold font-body hover:underline">
            ← Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(285 65% 10% / 0.85) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-10">
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-3 h-3 text-gold" />
              <span className="font-body text-xs text-gold uppercase tracking-widest font-bold">{post.category}</span>
            </div>
            <h1 className="font-display font-black text-white text-3xl md:text-5xl max-w-3xl">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Meta + Content */}
      <article className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-6 text-sm text-muted-foreground font-body mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-body text-lg text-muted-foreground italic mb-8 leading-relaxed">{post.excerpt}</p>
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="font-body text-foreground/85 leading-[1.9] mb-6">{para}</p>
          ))}
        </div>

        {/* Back */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 font-display font-bold text-gold text-sm hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Stories
          </button>
        </div>
      </article>

      <Footer />
    </div>
  );
}

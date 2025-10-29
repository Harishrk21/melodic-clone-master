import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    { title: "Shredding for beginners", category: "Others", author: "Mayank Katare" },
    { title: "An overview- One to one singing classes", category: "Singing", author: "Annie Jennifer" },
    { title: "12 Reasons For Singing", category: "Singing", author: "Annie Jennifer" },
    { title: "Top 10 Hindi male songs", category: "General", author: "Mayank Katare" },
  ];
  const categories = [
    "Carnatic", "Buying Guide", "Flute", "General", "Grade Exams", "Guitar", "Hindustani", "Music Theory", "Piano", "Singing"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-12 space-y-12">
        <section className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold">One stop spot for a repository of music blogs.</h1>
          <p className="text-muted-foreground">Indulge in Music, indulge in life</p>
          <div className="flex items-center justify-center gap-8 pt-4 text-sm text-muted-foreground">
            <div><span className="text-foreground font-bold">37000+</span> Monthly Blog Readers</div>
            <div><span className="text-foreground font-bold">16+</span> Qualified Music Writers</div>
            <div><span className="text-foreground font-bold">330+</span> Free Music Blogs</div>
          </div>
        </section>

        <section className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="rounded-xl border p-4">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {categories.map((c) => (
                  <a key={c} href="#" className="rounded-md border px-3 py-2 hover:bg-accent hover:text-accent-foreground">{c}</a>
                ))}
              </div>
            </div>
          </aside>
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <Card key={p.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-2">
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.author}</p>
                  <a className="text-primary text-sm" href="#">Read More</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;



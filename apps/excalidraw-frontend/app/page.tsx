import { Button } from "@repo/ui/button";
import { Card, } from "@repo/ui/card";
import { Pencil, Zap, Users, Download, Palette, Share2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-scale-in">
              <Zap className="w-4 h-4" />
              Now Available
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Draw, Create, 
              <br />
              <span className="text-primary">Collaborate</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A powerful drawing and diagramming tool that makes visual collaboration effortless. 
              Create beautiful diagrams, wireframes, and illustrations with ease.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 hover-scale">
                <Pencil className="w-5 h-5 mr-2" />
                Start Drawing
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 hover-scale">
                View Examples
              </Button>
            </div>
            
            {/* Hero Visual */}
            <div className="relative max-w-4xl mx-auto animate-fade-in">
              <div className="bg-card border rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="h-16 bg-primary/20 rounded-lg animate-pulse"></div>
                  <div className="h-16 bg-secondary/40 rounded-lg animate-pulse delay-100"></div>
                  <div className="h-16 bg-accent/30 rounded-lg animate-pulse delay-200"></div>
                  <div className="h-16 bg-muted rounded-lg animate-pulse delay-300"></div>
                </div>
                <div className="mt-6 h-24 bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything you need to create
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make your creative process smooth and enjoyable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Pencil,
                title: "Intuitive Drawing",
                description: "Natural drawing experience with pressure-sensitive strokes and smooth curves"
              },
              {
                icon: Users,
                title: "Real-time Collaboration",
                description: "Work together with your team in real-time, see changes as they happen"
              },
              {
                icon: Palette,
                title: "Rich Styling Options",
                description: "Customize colors, fonts, and shapes to match your creative vision"
              },
              {
                icon: Share2,
                title: "Easy Sharing",
                description: "Share your creations instantly with a simple link or export to various formats"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance ensures smooth drawing even with complex diagrams"
              },
              {
                icon: Download,
                title: "Export Anywhere",
                description: "Export to PNG, SVG, PDF, or save to your favorite cloud storage"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to start creating?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of creators who use our platform to bring their ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover-scale">
                <Pencil className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-scale">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

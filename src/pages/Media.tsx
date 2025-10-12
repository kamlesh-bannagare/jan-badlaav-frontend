import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video, Newspaper } from "lucide-react";

const Media = () => {
  const { t } = useLanguage();

  const images = [
    { id: 1, title: t('mediaImage1'), url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop" },
    { id: 2, title: t('mediaImage2'), url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop" },
    { id: 3, title: t('mediaImage3'), url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop" },
    { id: 4, title: t('mediaImage4'), url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&auto=format&fit=crop" },
    { id: 5, title: t('mediaImage5'), url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop" },
    { id: 6, title: t('mediaImage6'), url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop" },
  ];

  const videos = [
    { id: 1, title: t('videoTitle1'), thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop", duration: "5:30" },
    { id: 2, title: t('videoTitle2'), thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop", duration: "8:15" },
    { id: 3, title: t('videoTitle3'), thumbnail: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=800&auto=format&fit=crop", duration: "12:45" },
  ];

  const news = [
    { id: 1, title: t('newsTitle1'), date: "2025-01-15", excerpt: t('newsExcerpt1') },
    { id: 2, title: t('newsTitle2'), date: "2025-01-10", excerpt: t('newsExcerpt2') },
    { id: 3, title: t('newsTitle3'), date: "2025-01-05", excerpt: t('newsExcerpt3') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('mediaTitle')}
            </h1>
            <p className="text-xl opacity-90">
              {t('mediaDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="images" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="images" className="flex items-center gap-2">
                <Image className="w-4 h-4" />
                {t('images')}
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                {t('videos')}
              </TabsTrigger>
              <TabsTrigger value="news" className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                {t('news')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="images" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <Card key={image.id} className="overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-0">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold">{image.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <Card key={video.id} className="overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                            <Video className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{video.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="mt-0">
              <div className="max-w-4xl mx-auto space-y-6">
                {news.map((article, index) => (
                  <Card key={article.id} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                      <button className="mt-4 text-primary hover:underline font-semibold">
                        {t('readMore')}
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Media;
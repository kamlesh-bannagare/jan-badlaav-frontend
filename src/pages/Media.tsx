import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Image, Video, Newspaper, Calendar, Clock, Play } from "lucide-react";
import { useState } from "react";

const Media = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const images = [
    { id: 1, title: t('mediaImage1'), url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop", category: "Campaign Rally" },
    { id: 2, title: t('mediaImage2'), url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop", category: "Community Event" },
    { id: 3, title: t('mediaImage3'), url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop", category: "Public Meeting" },
    { id: 4, title: t('mediaImage4'), url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&auto=format&fit=crop", category: "Youth Program" },
    { id: 5, title: t('mediaImage5'), url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop", category: "Leadership" },
    { id: 6, title: t('mediaImage6'), url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop", category: "Party Meeting" },
    { id: 7, title: "Policy Discussion", url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&auto=format&fit=crop", category: "Conference" },
    { id: 8, title: "Community Service", url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop", category: "Social Work" },
    { id: 9, title: "Press Conference", url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop", category: "Media" },
  ];

  const videos = [
    { id: 1, title: t('videoTitle1'), thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop", duration: "5:30", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Annual party convention highlights" },
    { id: 2, title: t('videoTitle2'), thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop", duration: "8:15", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Community outreach program" },
    { id: 3, title: t('videoTitle3'), thumbnail: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=800&auto=format&fit=crop", duration: "12:45", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Policy announcement speech" },
    { id: 4, title: "Leadership Interview", thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop", duration: "15:20", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Exclusive interview with party leader" },
    { id: 5, title: "Youth Rally", thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop", duration: "6:45", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Youth wing rally highlights" },
    { id: 6, title: "Development Projects", thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop", duration: "10:30", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Recent development initiatives" },
  ];

  const news = [
    { id: 1, title: t('newsTitle1'), date: "2025-01-15", excerpt: t('newsExcerpt1'), fullContent: "Detailed coverage of the major policy announcement including comprehensive reforms in healthcare, education, and infrastructure development. The party leadership outlined a vision for sustainable growth and inclusive development.", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop" },
    { id: 2, title: t('newsTitle2'), date: "2025-01-10", excerpt: t('newsExcerpt2'), fullContent: "Community leaders and party members came together to celebrate successful community development initiatives. The event highlighted the importance of grassroots participation in democratic processes.", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop" },
    { id: 3, title: t('newsTitle3'), date: "2025-01-05", excerpt: t('newsExcerpt3'), fullContent: "The youth wing organized a massive rally attended by thousands of young supporters. The event focused on climate action, digital innovation, and employment opportunities for the youth.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop" },
    { id: 4, title: "Economic Policy Forum", date: "2025-01-03", excerpt: "Party experts discuss economic revival strategies", fullContent: "Leading economists and party strategists gathered to discuss comprehensive economic reforms aimed at boosting growth, creating jobs, and reducing inequality.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop" },
    { id: 5, title: "Women Empowerment Summit", date: "2024-12-28", excerpt: "Special summit focused on women's leadership and rights", fullContent: "The party hosted a landmark summit on women's empowerment, featuring prominent women leaders and activists discussing policies for gender equality and women's safety.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-yellow-400 text-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTEyIDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0yNC0yNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t('mediaTitle')}
            </h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              {t('mediaDescription')}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Image className="w-5 h-5" />
                <span>{images.length} Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                <span>{videos.length} Videos</span>
              </div>
              <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5" />
                <span>{news.length} Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="images" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-yellow-400">
              <TabsTrigger 
                value="images" 
                className="flex items-center gap-2 data-[state=active]:bg-black data-[state=active]:text-yellow-400"
              >
                <Image className="w-4 h-4" />
                {t('images')}
              </TabsTrigger>
              <TabsTrigger 
                value="videos" 
                className="flex items-center gap-2 data-[state=active]:bg-black data-[state=active]:text-yellow-400"
              >
                <Video className="w-4 h-4" />
                {t('videos')}
              </TabsTrigger>
              <TabsTrigger 
                value="news" 
                className="flex items-center gap-2 data-[state=active]:bg-black data-[state=active]:text-yellow-400"
              >
                <Newspaper className="w-4 h-4" />
                {t('news')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="images" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <Card 
                    key={image.id} 
                    className="group overflow-hidden hover-scale animate-fade-in cursor-pointer border-2 border-yellow-400 hover:border-black transition-all duration-300 bg-white" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={image.url} 
                          alt={image.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">{image.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-black">{image.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{image.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <Card 
                    key={video.id} 
                    className="group overflow-hidden hover-scale animate-fade-in cursor-pointer border-2 border-yellow-400 hover:border-black transition-all duration-300 bg-white" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedVideo(video)}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 text-black">{video.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="mt-0">
              <div className="max-w-4xl mx-auto space-y-6">
                {news.map((article, index) => (
                  <Card 
                    key={article.id} 
                    className="group hover-scale animate-fade-in cursor-pointer border-2 border-yellow-400 hover:border-black transition-all duration-300 overflow-hidden bg-white" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedNews(article)}
                  >
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="md:w-1/3 relative overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Newspaper className="w-4 h-4" />
                              News Article
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-yellow-600 transition-colors">{article.title}</h3>
                          <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                          <div className="mt-4 flex items-center text-yellow-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                            <span>{t('readMore')}</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-white border-2 border-yellow-400">
          <img 
            src={selectedImage || ""} 
            alt="Full size" 
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl bg-white border-2 border-yellow-400">
          <DialogHeader>
            <DialogTitle className="text-2xl text-black">{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full mt-4">
            <iframe
              className="w-full h-full rounded-lg border-2 border-yellow-400"
              src={selectedVideo?.embedUrl}
              title={selectedVideo?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-gray-600 mt-4">{selectedVideo?.description}</p>
        </DialogContent>
      </Dialog>

      {/* News Modal */}
      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-2 border-yellow-400">
          <DialogHeader>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar className="w-4 h-4" />
              {selectedNews && new Date(selectedNews.date).toLocaleDateString()}
            </div>
            <DialogTitle className="text-3xl text-black">{selectedNews?.title}</DialogTitle>
          </DialogHeader>
          <img 
            src={selectedNews?.image} 
            alt={selectedNews?.title}
            className="w-full h-64 object-cover rounded-lg my-4 border-2 border-yellow-400"
          />
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">{selectedNews?.fullContent}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Media;
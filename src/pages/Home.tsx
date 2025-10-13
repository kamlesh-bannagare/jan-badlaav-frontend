import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Target, Heart, BookOpen, Handshake, Award, 
  TrendingUp, MessageSquare, CheckCircle2, Building2, GraduationCap,
  MapPin, Calendar, Clock, DollarSign, PieChart, BarChart3, 
  LineChart, Activity, Globe, Phone, Mail, Map, Vote, Shield,
  Flag, Mic, Megaphone, Scale, Landmark, Globe2, Users2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBanner from '@/assets/hero-banner.jpg';
import founder from '@/assets/founder.png';
import logo from '@/assets/logo.jpg';
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';
import img3 from '@/assets/img3.png';
import img4 from '@/assets/img4.png';
import img5 from '@/assets/img5.png';
import img6 from '@/assets/img6.jpeg';
import img7 from '@/assets/img7.png';
import img8 from '@/assets/img8.png';
import img9 from '@/assets/img9.png';
import img10 from '@/assets/img10.png';
import img11 from '@/assets/img11.png';
import indiaMap from '@/assets/india-map.png'; // Add India map image
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const { t } = useLanguage();

  const heroImages = [heroBanner, founder, logo, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  // Political values with metrics
  const values = [
    {
      icon: Shield,
      title: "Good Governance",
      description: "Transparent, accountable and responsive governance system",
      metrics: "85% Trust Rate",
      progress: 85
    },
    {
      icon: Scale,
      title: "Social Justice",
      description: "Equal opportunities and rights for all citizens",
      metrics: "45 Policies Passed",
      progress: 92
    },
    {
      icon: Heart,
      title: "Public Welfare",
      description: "People-first approach in all government initiatives",
      metrics: "98% Satisfaction",
      progress: 98
    },
  ];

  // Political focus areas
  const focusAreas = [
    {
      icon: GraduationCap,
      title: "Education Reform",
      description: "Quality education and skill development for all",
      stats: {
        schools: "15,000+",
        budget: "₹2,500 Cr",
        enrollment: "25 Lakh+",
        successRate: "94%"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Infrastructure",
      description: "Modern infrastructure for sustainable development",
      stats: {
        projects: "275+",
        investment: "₹15,200 Cr",
        completion: "88%",
        jobs: "2.5 Lakh+"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Handshake,
      title: "Employment",
      description: "Job creation and entrepreneurship opportunities",
      stats: {
        jobs: "15 Lakh+",
        startups: "5,000+",
        growth: "35%",
        skillTraining: "8 Lakh+"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Affordable and accessible healthcare for all",
      stats: {
        hospitals: "500+",
        patients: "50 Lakh+",
        recovery: "96%",
        budget: "₹4,100 Cr"
      },
      color: "from-pink-500 to-rose-500"
    },
  ];

  // Political achievements
  const achievements = [
    {
      icon: Vote,
      number: "45+",
      title: "Seats Won",
      growth: "+15%",
      trend: "up",
      description: "Last election performance"
    },
    {
      icon: Users,
      number: "2.5M+",
      title: "Party Members",
      growth: "+28%",
      trend: "up",
      description: "Active membership"
    },
    {
      icon: Landmark,
      number: "12",
      title: "States Presence",
      growth: "+42%",
      trend: "up",
      description: "Political influence"
    },
    {
      icon: Award,
      number: "150+",
      title: "Projects Completed",
      growth: "+33%",
      trend: "up",
      description: "Public welfare projects"
    },
  ];

  // How to join political party
  const wayToJoin = [
    {
      icon: CheckCircle2,
      title: "Membership Form",
      description: "Fill the online membership form with basic details",
      step: "01",
      duration: "5 min"
    },
    {
      icon: MessageSquare,
      title: "Verification",
      description: "Background verification and approval process",
      step: "02",
      duration: "48 hours"
    },
    {
      icon: BookOpen,
      title: "Active Participation",
      description: "Start participating in party activities and meetings",
      step: "03",
      duration: "Immediate"
    },
  ];

  // Political impact stats
  const impactStats = [
    { label: "Districts Covered", value: "350+", icon: MapPin },
    { label: "Active Volunteers", value: "50,000+", icon: Users2 },
    { label: "Years in Service", value: "25+", icon: Calendar },
    { label: "Rallies Conducted", value: "5,000+", icon: Megaphone }
  ];

  // Budget allocation for political party
  const financialData = {
    allocation: [
      { category: "Public Campaigns", percentage: 35, amount: "₹85 Cr", color: "bg-blue-500" },
      { category: "Social Welfare", percentage: 25, amount: "₹61 Cr", color: "bg-green-500" },
      { category: "Infrastructure", percentage: 20, amount: "₹49 Cr", color: "bg-orange-500" },
      { category: "Research & Development", percentage: 15, amount: "₹37 Cr", color: "bg-purple-500" },
      { category: "Administration", percentage: 5, amount: "₹12 Cr", color: "bg-gray-500" }
    ],
    yearlyGrowth: [
      { year: "2019", growth: 15, seats: 35 },
      { year: "2020", growth: 22, seats: 38 },
      { year: "2021", growth: 35, seats: 42 },
      { year: "2022", growth: 42, seats: 45 },
      { year: "2023", growth: 28, seats: 48 }
    ]
  };

  // Political events
  const upcomingEvents = [
    {
      title: "Public Rally - Delhi",
      date: "2024-03-15",
      location: "Ram Lila Maidan, Delhi",
      attendees: 50000,
      type: "Rally"
    },
    {
      title: "Youth Conference",
      date: "2024-03-22",
      location: "Convention Center",
      attendees: 5000,
      type: "Conference"
    },
    {
      title: "Policy Discussion Forum",
      date: "2024-04-05",
      location: "Party Headquarters",
      attendees: 300,
      type: "Meeting"
    }
  ];

  // Real-time political stats
  const realTimeStats = {
    members: { current: 850000, goal: 1000000 },
    volunteers: { current: 50000, goal: 75000 },
    campaigns: { current: 45, goal: 60 }
  };

  // India states where party has presence
  const partyPresence = {
    strongHold: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal", "Madhya Pradesh"],
    growing: ["Karnataka", "Telangana", "Gujarat", "Rajasthan", "Punjab"],
    emerging: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Odisha", "Assam"]
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section for Political Party */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <Carousel 
          className="absolute inset-0"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent className="h-[700px]">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-[700px] p-0">
                <div className="relative h-full w-full">
                  <img 
                    src={image} 
                    alt={`Hero ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-red-900/50" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="right-4 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20" />
        </Carousel>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-white/20 backdrop-blur text-white border-0">
            🗳️ {t('featuredInitiative') || "Leading Political Movement"}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('heroTitle') || "New India Party"}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold animate-fade-in">
            {t('heroSubtitle') || "Building a Stronger, Prosperous India"}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            {t('heroDescription') || "Committed to transparent governance, social justice, and economic development for all citizens."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/join">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                Join Our Movement <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/manifesto">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20">
                Read Manifesto
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Political Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 mr-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Political Progress Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Political Growth Tracker</h2>
            <p className="text-xl text-muted-foreground">Real-time progress towards our political goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-8 w-8 text-green-500" />
                  <span className="text-2xl font-bold">{(realTimeStats.members.current / 1000).toFixed(0)}K</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Party Members</span>
                    <span>{((realTimeStats.members.current / realTimeStats.members.goal) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(realTimeStats.members.current / realTimeStats.members.goal) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <Users2 className="h-8 w-8 text-blue-500" />
                  <span className="text-2xl font-bold">{(realTimeStats.volunteers.current / 1000).toFixed(0)}K</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active Volunteers</span>
                    <span>{((realTimeStats.volunteers.current / realTimeStats.volunteers.goal) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(realTimeStats.volunteers.current / realTimeStats.volunteers.goal) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <Megaphone className="h-8 w-8 text-orange-500" />
                  <span className="text-2xl font-bold">{realTimeStats.campaigns.current}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active Campaigns</span>
                    <span>{((realTimeStats.campaigns.current / realTimeStats.campaigns.goal) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(realTimeStats.campaigns.current / realTimeStats.campaigns.goal) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Political Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Political Values</h2>
            <p className="text-xl text-muted-foreground">Core principles that guide our political journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {value.metrics}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground mb-6">{value.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Public Support</span>
                      <span>{value.progress}%</span>
                    </div>
                    <Progress value={value.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* India Map Section - Political Presence */}
      <section className="py-20 bg-gradient-to-br from-saffron to-white to-green-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our National Presence</h2>
            <p className="text-xl text-muted-foreground">Growing political influence across India</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-xl opacity-20"></div>
              <Card className="relative">
                <CardContent className="p-8">
                  <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={indiaMap} 
                      alt="India Map - Party Presence"
                      className="w-full h-full object-contain"
                    />
                    {/* Map markers could be added here */}
                    <div className="absolute top-1/4 left-1/4">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute top-1/3 right-1/3">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-1/3 left-1/3">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Map className="h-6 w-6 mr-2 text-blue-600" />
                  Political Footprint
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-700">Strong Hold States</span>
                      <Badge className="bg-green-100 text-green-800">5 States</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {partyPresence.strongHold.map((state, index) => (
                        <Badge key={index} variant="outline" className="bg-green-50">
                          {state}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-700">Growing Presence</span>
                      <Badge className="bg-blue-100 text-blue-800">5 States</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {partyPresence.growing.map((state, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50">
                          {state}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-orange-700">Emerging Presence</span>
                      <Badge className="bg-orange-100 text-orange-800">5 States</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {partyPresence.emerging.map((state, index) => (
                        <Badge key={index} variant="outline" className="bg-orange-50">
                          {state}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">Election Performance</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Lok Sabha Seats</span>
                      <span className="font-bold text-blue-600">45+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>State Assembly Seats</span>
                      <span className="font-bold text-blue-600">150+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Local Body Representatives</span>
                      <span className="font-bold text-blue-600">2,500+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Focus Areas for Political Party */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key sectors where we are driving meaningful change and development
            </p>
          </div>
          
          <Tabs defaultValue="education" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {focusAreas.map((area, index) => (
                <TabsTrigger key={index} value={area.title.toLowerCase().replace(/\s+/g, '-')}>
                  <area.icon className="h-4 w-4 mr-2" />
                  {area.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {focusAreas.map((area, index) => (
              <TabsContent key={index} value={area.title.toLowerCase().replace(/\s+/g, '-')}>
                <Card>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-3xl font-bold mb-4">{area.title}</h3>
                        <p className="text-muted-foreground mb-6">{area.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(area.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-background rounded-lg">
                              <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                              <div className="text-sm text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center text-white`}>
                          <div className="text-center">
                            <div className="text-4xl font-bold">{area.stats.successRate || area.stats.completion}</div>
                            <div className="text-sm">Success Rate</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                    <area.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                  <div className="text-2xl font-bold text-blue-600">
                    {area.stats.budget}
                  </div>
                  <div className="text-xs text-muted-foreground">Budget Allocated</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Political Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Political Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Milestones in our journey of public service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center mx-auto">
                      <achievement.icon className="h-10 w-10 text-white" />
                    </div>
                    <Badge className={`absolute -top-2 -right-2 ${
                      achievement.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {achievement.growth}
                    </Badge>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-lg font-semibold mb-2">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Political Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Political Events</h2>
            <p className="text-xl text-muted-foreground">Join us in our upcoming political activities and rallies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={
                      event.type === 'Rally' ? 'bg-red-100 text-red-800' :
                      event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }>
                      {event.type}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees.toLocaleString()} expected
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section for Political Party */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-0">Join the Movement</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of citizens working towards a better, stronger India. Your participation can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/join">
              <Button size="lg" variant="secondary" className="shadow-lg">
                Become a Member <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20">
                <DollarSign className="h-4 w-4 mr-2" />
                Donate to Cause
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm">
            <div>✓ Make Impact</div>
            <div>✓ Shape Policy</div>
            <div>✓ Network Leaders</div>
            <div>✓ Serve Nation</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
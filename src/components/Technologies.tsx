
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Activity, Zap, ArrowRight } from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      icon: Brain,
      name: "ExoMind",
      subtitle: "Neurostimulation Technology",
      description: "Advanced brain optimization through targeted neurostimulation. Enhance cognitive function, improve focus, elevate mood, and optimize mental performance with our cutting-edge ExoMind technology.",
      benefits: [
        "Enhanced cognitive function",
        "Improved focus and concentration", 
        "Mood enhancement and stress reduction",
        "Optimized brain performance",
        "Non-invasive treatment"
      ],
      gradient: "from-purple-500 to-blue-600",
      bgGradient: "from-purple-50 to-blue-50"
    },
    {
      icon: Activity,
      name: "Emsella Chair",
      subtitle: "Pelvic Floor Strengthening",
      description: "Revolutionary non-invasive solution for pelvic floor strengthening. The Emsella Chair provides effective treatment for incontinence and pelvic floor dysfunction through electromagnetic stimulation.",
      benefits: [
        "Strengthens pelvic floor muscles",
        "Treats urinary incontinence",
        "Non-invasive and comfortable",
        "Fully clothed treatment",
        "Immediate results"
      ],
      gradient: "from-teal-500 to-green-600",
      bgGradient: "from-teal-50 to-green-50"
    },
    {
      icon: Zap,
      name: "Emsculpt NEO",
      subtitle: "Body Contouring Technology",
      description: "The ultimate body contouring solution combining muscle building and fat reduction. Emsculpt NEO simultaneously burns fat and builds muscle for comprehensive body transformation.",
      benefits: [
        "Builds muscle and burns fat",
        "Non-surgical body contouring",
        "Targets multiple areas",
        "FDA-cleared technology",
        "Visible results in weeks"
      ],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Revolutionary Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of wellness with our advanced, FDA-cleared technologies 
              designed to optimize your body and mind for peak performance.
            </p>
          </div>
          
          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-r ${tech.bgGradient}`}>
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Side */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${tech.gradient} rounded-full flex items-center justify-center mb-6`}>
                        <tech.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                        {tech.name}
                      </h3>
                      <p className={`text-lg font-medium bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent mb-4`}>
                        {tech.subtitle}
                      </p>
                      
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {tech.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {tech.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-slate-700">
                            <div className={`w-2 h-2 bg-gradient-to-r ${tech.gradient} rounded-full mr-3`}></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className={`bg-gradient-to-r ${tech.gradient} hover:opacity-90 text-white self-start px-6 py-3 rounded-full font-semibold transition-all duration-300`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Image/Visual Side */}
                    <div className={`bg-gradient-to-br ${tech.gradient} flex items-center justify-center p-8 lg:p-12 min-h-[400px] ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="w-48 h-48 lg:w-64 lg:h-64 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <tech.icon className="h-24 w-24 lg:h-32 lg:w-32 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

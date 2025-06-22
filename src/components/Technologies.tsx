import { Zap, Shield, Heart, Users } from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      title: "Emsculpt NEO",
      subtitle: "Build Muscle & Burn Fat",
      description: "Revolutionary technology that simultaneously builds muscle and burns fat using HIFEM+ and radiofrequency energy.",
      features: ["30% fat reduction", "25% muscle increase", "Non-invasive", "No downtime"],
      image: "/lovable-uploads/2d5a883c-5ec8-4bca-ba33-2f026b36d978.png",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "CoolSculpting",
      subtitle: "Freeze Away Fat",
      description: "FDA-cleared fat freezing technology that permanently eliminates stubborn fat cells through controlled cooling.",
      features: ["Permanent fat reduction", "No surgery required", "Minimal discomfort", "Proven results"],
      image: "/lovable-uploads/be0bfaf1-3813-4f2a-8ce7-8ae3d4c39040.png",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "IV Therapy",
      subtitle: "Immediate Wellness Boost",
      description: "Customized intravenous vitamin and nutrient therapy for enhanced energy, immunity, and overall wellness.",
      features: ["Custom formulations", "Immediate absorption", "Enhanced energy", "Immune support"],
      image: "/lovable-uploads/fc069f6c-d1b8-4276-8d5a-570f45a297cd.png",
      icon: Heart,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Cutting-Edge Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We utilize the most advanced, FDA-cleared technologies to provide safe, effective, and personalized wellness solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={tech.title} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-56 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${tech.gradient} opacity-20`}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <tech.icon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-2xl font-bold text-slate-900">{tech.title}</h3>
                </div>
                <h4 className="text-lg font-semibold text-slate-700 mb-2">{tech.subtitle}</h4>
                <p className="text-slate-600 leading-relaxed mb-4">{tech.description}</p>
                <ul>
                  {tech.features.map((feature, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-center mb-1">
                      <svg className="h-4 w-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;


import { Shield, MapPin, Users, Settings } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Users,
      title: "Board-Certified Team",
      description: "Our experienced medical professionals are board-certified and specialize in advanced wellness treatments."
    },
    {
      icon: Shield,
      title: "FDA-Cleared Devices",
      description: "All our technologies are FDA-cleared, ensuring the highest standards of safety and efficacy."
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "Easily accessible location with comfortable facilities designed for your wellness journey."
    },
    {
      icon: Settings,
      title: "Tailored Treatment Plans",
      description: "Personalized approaches based on your unique health goals and individual needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Arise Medical & Wellness?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with compassionate care to deliver exceptional results 
              in a comfortable, professional environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <reason.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-slate-600 font-medium">Satisfied Patients</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p className="text-slate-600 font-medium">Success Rate</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <p className="text-slate-600 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

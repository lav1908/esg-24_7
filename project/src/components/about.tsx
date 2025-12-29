import {
  CheckCircle,
  Globe,
  TrendingUp,
  Shield,
  BookOpen,
  Users,
  Target,
  Award,
  Lightbulb,
} from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

/* ================= CONTENT ================= */
const CONTENT = {
  hero: {
    title: "About TNOVA ESG",
    subtitle:
      "A comprehensive ESG reporting and training platform designed to support businesses of all sizes globally.",
  },

  overview: {
    title: "Who We Are",
    text: [
      "TNOVA ESG is a one-stop platform built to meet ESG reporting and training needs, regardless of business size, location, or ESG maturity.",
      "Powered by innovative and interactive technology, the platform offers affordable ESG solutions that traditionally cost significantly more.",
      "Developed by experienced ESG consultants, TNOVA ESG empowers SMBs to begin their ESG journey, stay compliant, and meet growing stakeholder expectations.",
    ],
    stats: [
      { value: "25+", label: "Companies Served" },
      { value: "150+", label: "Countries Reached" },
      { value: "85%", label: "Cost Savings" },
    ],
  },

  values: [
    {
      title: "Transparency",
      desc: "Providing clear, reliable, and data-driven ESG insights to support confident business decisions.",
      icon: Target,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Innovation",
      desc: "Using modern technology to make ESG reporting simple, accessible, and affordable.",
      icon: Lightbulb,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Excellence",
      desc: "Delivering high-quality reporting, user experience, and expert support across the platform.",
      icon: Award,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
  ],

  services: [
    {
      title: "ESG Assessment",
      desc: "Free ESG health checks, internal risk assessments, and supplier ESG risk management.",
      icon: TrendingUp,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Reporting Tools",
      desc: "Unlimited ESG reports including carbon footprint, SDGs, supply chain risk, and annual ESG reports.",
      icon: BookOpen,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Training & Education",
      desc: "Role-based ESG training, workshops, and step-by-step implementation guides.",
      icon: Users,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      title: "Compliance Management",
      desc: "Governance, policy management, and support for evolving global ESG regulations.",
      icon: Shield,
      bg: "bg-red-100",
      color: "text-red-600",
    },
  ],

  locations: [
    { name: "Chennai, India", coords: [80.3, 13.1] },
    { name: "Muscat, Oman", coords: [58.4, 23.6] },
    { name: "The Hague, Netherlands", coords: [4.3, 52.1] },
    { name: "Texas, USA", coords: [-96.8, 32.8] },
  ],

  mission:
    "TNOVA ESG acts as a digital compass, guiding businesses through the complex sustainability landscape with clarity, transparency, and data-driven insights.",

  note:
    "TNOVA ESG is powered by MindSmithExecutives and provides general ESG information only. It is not a financial service provider or law firm and does not offer legal or financial advice.",
};
/* ================= END CONTENT ================= */

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">{CONTENT.hero.title}</h1>
        <p className="text-xl text-blue-100 max-w-4xl mx-auto">
          {CONTENT.hero.subtitle}
        </p>
      </section>

      {/* Overview */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">
          {CONTENT.overview.title}
        </h2>

        {CONTENT.overview.text.map((t, i) => (
          <p key={i} className="text-lg text-gray-600 mb-4">
            {t}
          </p>
        ))}

        <div className="grid grid-cols-3 gap-6 mt-10">
          {CONTENT.overview.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {s.value}
              </div>
              <div className="text-sm text-gray-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {CONTENT.values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div
                  className={`w-16 h-16 ${v.bg} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className={`w-8 h-8 ${v.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTENT.services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div
                  className={`w-12 h-12 ${s.bg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 flex items-center justify-center">
            <Globe className="w-8 h-8 text-blue-600 mr-3" />
            Global Presence
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
            <ComposableMap projection="geoMercator" className="w-full h-full">
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#e5e7eb"
                      stroke="#d1d5db"
                      strokeWidth={0.5}
                    />
                  ))
                }
              </Geographies>

              {CONTENT.locations.map((l, i) => (
                <Marker key={i} coordinates={l.coords}>
                  <g>
                    <circle r={7} fill="#dc2626" stroke="#fff" strokeWidth={2} />
                    <text
                      y={-12}
                      textAnchor="middle"
                      className="text-xs font-bold fill-red-600"
                    >
                      {l.name}
                    </text>
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
          {CONTENT.mission}
        </p>

        <div className="bg-white/10 rounded-xl p-6 max-w-4xl mx-auto">
          <p className="text-blue-100">
            <strong className="text-white">Important Note: </strong>
            {CONTENT.note}
          </p>
        </div>
      </section>
    </div>
  );
}

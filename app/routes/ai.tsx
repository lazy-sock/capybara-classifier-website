import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const data = [
    {
      class: 'Amsel',
      count: 50,
      lat: 'Turdus merula',
      description: 'Die Amsel ist ein weit verbreiteter Singvogel in Europa, bekannt für ihren melodischen Gesang. Ursprünglich ein Waldbewohner, hat sie sich gut an städtische Lebensräume angepasst.'
    },
    {
      class: 'Blaumeise',
      count: 50,
      lat: 'Cyanistes caeruleus',
      description: 'Die Blaumeise ist eine kleine, lebhafte Meise mit auffallend blau-gelbem Gefieder. Sie lebt häufig in Gärten, Wäldern und Parks und ist für ihre Verspieltheit bekannt.'
    },
    {
      class: 'Buchfink',
      count: 50,
      lat: 'Fringilla coelebs',
      description: 'Der Buchfink zählt zu den häufigsten Vögeln Mitteleuropas. Männchen haben ein auffällig rotbraunes Brustgefieder und lassen ihren charakteristischen Ruf erklingen.'
    },
    {
      class: 'Buntspecht',
      count: 50,
      lat: 'Dendrocopos major',
      description: 'Der Buntspecht ist ein mittelgroßer Specht mit schwarz-weißem Gefieder und rotem Unterbauch. Er ist bekannt für sein Trommeln auf Baumstämmen und seine Höhlenbaukunst.'
    },
    {
      class: 'Elster',
      count: 50,
      lat: 'Pica pica',
      description: 'Die Elster ist ein intelligenter, schwarz-weißer Rabenvogel mit langem Schwanz. Sie lebt meist in offenen Landschaften und zeigt ein neugieriges, soziales Verhalten.'
    },
    {
      class: 'Feldsperling',
      count: 50,
      lat: 'Passer montanus',
      description: 'Der Feldsperling ist kleiner als der Haussperling und leicht an seinem schwarzen Wangenfleck zu erkennen. Er bevorzugt ländliche Gebiete und ist oft in Gruppen unterwegs.'
    },
    {
      class: 'Gimpel',
      count: 50,
      lat: 'Pyrrhula pyrrhula',
      description: 'Auch Dompfaff genannt, fällt der Gimpel durch seine leuchtend rote Brust beim Männchen auf. Er lebt meist zurückgezogen in Wäldern und Heckenlandschaften.'
    },
    {
      class: 'Kohlmeise',
      count: 50,
      lat: 'Parus major',
      description: 'Die Kohlmeise ist die größte heimische Meisenart mit markantem schwarzem Kopf und gelber Unterseite. Sie ist anpassungsfähig und in fast allen Lebensräumen zu finden.'
    },
    {
      class: 'Rabe',
      count: 50,
      lat: 'Corvus corax',
      description: 'Der Kolkrabe ist der größte Singvogel Europas und gilt als äußerst intelligent. Mit seinem kräftigen Schnabel und tiefen Rufen ist er in Gebirgen und Wäldern anzutreffen.'
    },
    {
      class: 'Rotkehlchen',
      count: 50,
      lat: 'Erithacus rubecula',
      description: 'Das Rotkehlchen ist ein vertrauter Singvogel mit oranger Brust, der oft in Gärten zu sehen ist. Es zeigt wenig Scheu gegenüber Menschen und singt auch in der Dämmerung.'
    },
    {
      class: 'Eichhoernchen',
      count: 50,
      lat: 'Sciurus vulgaris',
      description: 'Das Europäische Eichhörnchen ist ein tagaktives Nagetier mit buschigem Schwanz, das sich geschickt durch Bäume bewegt. Es sammelt Nüsse und ist vor allem im Herbst sehr aktiv.'
    }
  ]
export default function HowItWorks() {
  return (
    <div>
      <NavBar />
      <main className="mx-auto w-full max-w-[1000px] pt-30">
        <h1 className="text-center text-[3rem] font-bold">
          Artificial Intelligence
        </h1>
        <h2 className="text-[2rem] font-bold">Architecture</h2>
        <div className="flex flex-wrap gap-8 font-semibold">
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Input Image (224×224×3)
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            ResNet50 Backbone
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Attention Module 1
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Attention Module 2
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Global Average Pooling
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Feature Enhancement Layers
          </div>
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center">
            Classification Head
          </div>
        </div>
        <h2 className="text-[2rem] font-bold">Dataset</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item) => (
            <div className="relative group" key={item.class}>
              <div className="rounded-xl shadow-lg p-4 bg-white hover:shadow-2xl">
                <img src={`/images/${item.class.toLowerCase()}.jpg`} alt={item.class} className="w-full h-50 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-medium">{item.class}</h3>
                <p className="text-sm text-gray-500">{item.count} Bilder</p>
              </div>
              <div className=" absolute mt-3 p-4 bg-white shadow-md rounded-xl border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-100">
                <h4 className="font-semibold text-gray-800 mb-1">{item.lat}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-[2rem] font-bold">Training</h2>
        <h2 className="text-[2rem] font-bold">Accuracy</h2>
      </main>
      <Footer />
    </div>

  );
}

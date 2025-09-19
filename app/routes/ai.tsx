import type { Route } from "./+types/home";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import NetworkVisualization from "~/components/NetworkVisualization";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "AI von Capybara erklärt" },
  ];
}

const data = [
  {
    class: "Amsel",
    count: 50,
    lat: "Turdus merula",
    description:
      "Die Amsel ist ein weit verbreiteter Singvogel in Europa, bekannt für ihren melodischen Gesang. Ursprünglich ein Waldbewohner, hat sie sich gut an städtische Lebensräume angepasst.",
  },
  {
    class: "Blaumeise",
    count: 50,
    lat: "Cyanistes caeruleus",
    description:
      "Die Blaumeise ist eine kleine, lebhafte Meise mit auffallend blau-gelbem Gefieder. Sie lebt häufig in Gärten, Wäldern und Parks und ist für ihre Verspieltheit bekannt.",
  },
  {
    class: "Buchfink",
    count: 50,
    lat: "Fringilla coelebs",
    description:
      "Der Buchfink zählt zu den häufigsten Vögeln Mitteleuropas. Männchen haben ein auffällig rotbraunes Brustgefieder und lassen ihren charakteristischen Ruf erklingen.",
  },
  {
    class: "Buntspecht",
    count: 50,
    lat: "Dendrocopos major",
    description:
      "Der Buntspecht ist ein mittelgroßer Specht mit schwarz-weißem Gefieder und rotem Unterbauch. Er ist bekannt für sein Trommeln auf Baumstämmen und seine Höhlenbaukunst.",
  },
  {
    class: "Elster",
    count: 50,
    lat: "Pica pica",
    description:
      "Die Elster ist ein intelligenter, schwarz-weißer Rabenvogel mit langem Schwanz. Sie lebt meist in offenen Landschaften und zeigt ein neugieriges, soziales Verhalten.",
  },
  {
    class: "Feldsperling",
    count: 50,
    lat: "Passer montanus",
    description:
      "Der Feldsperling ist kleiner als der Haussperling und leicht an seinem schwarzen Wangenfleck zu erkennen. Er bevorzugt ländliche Gebiete und ist oft in Gruppen unterwegs.",
  },
  {
    class: "Gimpel",
    count: 50,
    lat: "Pyrrhula pyrrhula",
    description:
      "Auch Dompfaff genannt, fällt der Gimpel durch seine leuchtend rote Brust beim Männchen auf. Er lebt meist zurückgezogen in Wäldern und Heckenlandschaften.",
  },
  {
    class: "Kohlmeise",
    count: 50,
    lat: "Parus major",
    description:
      "Die Kohlmeise ist die größte heimische Meisenart mit markantem schwarzem Kopf und gelber Unterseite. Sie ist anpassungsfähig und in fast allen Lebensräumen zu finden.",
  },
  {
    class: "Rabe",
    count: 50,
    lat: "Corvus corax",
    description:
      "Der Kolkrabe ist der größte Singvogel Europas und gilt als äußerst intelligent. Mit seinem kräftigen Schnabel und tiefen Rufen ist er in Gebirgen und Wäldern anzutreffen.",
  },
  {
    class: "Rotkehlchen",
    count: 50,
    lat: "Erithacus rubecula",
    description:
      "Das Rotkehlchen ist ein vertrauter Singvogel mit oranger Brust, der oft in Gärten zu sehen ist. Es zeigt wenig Scheu gegenüber Menschen und singt auch in der Dämmerung.",
  },
  {
    class: "Eichhoernchen",
    count: 50,
    lat: "Sciurus vulgaris",
    description:
      "Das Europäische Eichhörnchen ist ein tagaktives Nagetier mit buschigem Schwanz, das sich geschickt durch Bäume bewegt. Es sammelt Nüsse und ist vor allem im Herbst sehr aktiv.",
  },
];
export default function HowItWorks() {
  return (
    <div>
      <NavBar />
      <main className="mx-auto w-full max-w-[1100px] pt-30 pb-30">
        <h1 className="text-center text-[5rem] font-bold">
          Künstliche Intelligenz
        </h1>
        <div className="bg-secondary dark:bg-dark-secondary mt-6 rounded-4xl p-5">
          <h2 className="text-[2rem] font-bold">Architecture</h2>
          <div className="flex flex-wrap gap-8 font-semibold">
            <div className="dark:border-dark-white flex h-[120px] w-[120px] items-center justify-center rounded-lg border-3 border-black p-2 text-center text-[1.15rem]">
              Input Bild (224×224×3)
            </div>
            <div className="dark:border-dark-white flex h-[120px] w-[120px] items-center justify-center rounded-lg border-3 border-black p-2 text-center text-[1.15rem]">
              ResNet50 Backbone
            </div>
            <div className="dark:border-dark-white flex h-[120px] w-[120px] items-center justify-center rounded-lg border-3 border-black p-2 text-center text-[1.15rem]">
              Attention Module 1
            </div>
            <div className="dark:border-dark-white flex h-[120px] w-[120px] items-center justify-center rounded-lg border-3 border-black p-2 text-center text-[1.15rem]">
              Attention Module 2
            </div>
            <div className="dark:border-dark-white flex h-[120px] w-[120px] items-center justify-center rounded-lg border-3 border-black p-2 text-center text-[1.15rem]">
              Global Average Pooling
            </div>
            <div className="dark:border-dark-white flex h-[120px] w-[120px] items-center justify-center rounded-lg border-3 border-black p-2 text-center text-[1.15rem]">
              Feature Enhancement Layers
            </div>
            <div className="dark:border-dark-white flex h-[120px] w-[110px] items-center justify-center rounded-lg border-3 border-black p-2 text-center text-[1.15rem]">
              Klassifikations Kopf
            </div>
          </div>
        </div>
        <p className="mt-12 text-[1.25rem]">
          The Network is a CNN with a resnet50 backbone and two attention
          modules. The attention modules help identify important features in the
          image. The input images are 224x224, which is pretty high for an AI.
          The resulting accuracy is 90%. The network also has the option to
          output that the image contains a bird of another species which isn't
          part of the database's classes. Additionally it can also decide how
          confident it is with it's prediction.
        </p>
      </main>
      <svg
        className="h-[100px] w-full"
        viewBox="0 460 960 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 475L26.7 480.8C53.3 486.7 106.7 498.3 160 501.5C213.3 504.7 266.7 499.3 320 489.7C373.3 480 426.7 466 480 464C533.3 462 586.7 472 640 483.2C693.3 494.3 746.7 506.7 800 503.2C853.3 499.7 906.7 480.3 933.3 470.7L960 461L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
          fill="#204116"
        />
      </svg>
      <section id="dataset" className="bg-primary">
        <main className="mx-auto w-full max-w-[1100px] pt-10">
          <h2 className="pb-5 text-left text-[3rem] font-bold text-white">
            Dataset
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {data.map((item) => (
              <div className="group relative" key={item.class}>
                <div className="rounded-xl bg-white p-4 shadow-lg hover:shadow-2xl">
                  <img
                    src={`/images/${item.class.toLowerCase()}.jpg`}
                    alt={item.class}
                    className="mb-2 h-50 w-full rounded-md object-cover"
                  />
                  <h3 className="text-darker-black text-lg font-medium">
                    {item.class}
                  </h3>
                  <p className="text-sm text-gray-500">{item.count} Bilder</p>
                </div>
                <div className="absolute z-100 mt-3 rounded-xl border border-gray-200 bg-white p-4 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                  <h4 className="mb-1 font-semibold text-gray-800">
                    {item.lat}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
      <svg
        className="h-[100px] w-full rotate-180"
        viewBox="0 460 960 60"
        width="100%"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 503L26.7 499.5C53.3 496 106.7 489 160 480.8C213.3 472.7 266.7 463.3 320 469C373.3 474.7 426.7 495.3 480 495.8C533.3 496.3 586.7 476.7 640 472.8C693.3 469 746.7 481 800 487C853.3 493 906.7 493 933.3 493L960 493L960 540L933.3 540C906.7 540 853.3 540 800 540C746.7 540 693.3 540 640 540C586.7 540 533.3 540 480 540C426.7 540 373.3 540 320 540C266.7 540 213.3 540 160 540C106.7 540 53.3 540 26.7 540L0 540Z"
          fill="#204116"
        />
      </svg>
      <section className="mx-auto mt-12 w-full max-w-[1250px] flex flex-col justify-center">
        <h2 className="mb-[10px] text-[3rem] font-bold flex items-center justify-center">Visualisierung</h2>
        <p className="mb-[100px] text-[1.25rem] flex items-center justify-center text-center">
          Hier siehst du die Visualisierung unseres Netzwerkes. Es zeigt vereinfacht alle wichtigen Layer und Operationen eines Convolutional neuronalen Netzwerkes.
          Ausgehend von den drei Farbkanälen eines Input Bildes "entscheidet" das Netzwerk welche Art das Bild am wahrscheinlichsten abbildet. 
        </p>
        <div className="relative rounded-lg shadow-md p-8 origin-top-left m-5">
          <NetworkVisualization />
        </div>
      </section>
      <Footer />
    </div>
  );
}

import CodeBlock from "../components/CodeBlock";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import type { Route } from "./+types/home";

const ResNet = `
        # Use ResNet50 as backbone
        self.backbone = models.resnet50(pretrained=pretrained)
        
        # Remove the final fully connected layer
        self.backbone = nn.Sequential(*list(self.backbone.children())[:-2])

`;

const Attention = `
        # Add attention modules
        self.attention = CBAM()#AttentionModule(2048)

`

const ChannelAttention = `
        self.channelAttention = nn.Sequential(
          nn.AdaptiveAvgPool2d(1),
          nn.Conv2d(channels, channels // reduction, 1, bias=False),
          nn.ReLU(),
          nn.Conv2d(channels // reduction, channels, 1, bias=False),
          nn.Sigmoid()
        )

`

const SpatialAttention = `
        self.spatialAttention = nn.Sequential(
                    nn.Conv2d(2, 1, kernel_size=3, padding=1, bias=False),
                    nn.Sigmoid()
                )

`

const Pooling = `
        self.global_avg_pool = nn.AdaptiveAvgPool2d(1)

`

const FeatureEnhancement = `
        self.feature_enhance = nn.Sequential(
            nn.Linear(2048, 1024),
            nn.BatchNorm1d(1024),
            nn.ReLU(inplace=True),
            nn.Dropout(dropout_rate),
            
            nn.Linear(1024, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(inplace=True),
            nn.Dropout(dropout_rate),
            
        )

`

const Classificationhead = `
        self.classifier = nn.Linear(512, num_classes)

`


export default function HowItWorks() {
    return (
        <div>
            <NavBar />
            <main className="mx-auto w-full max-w-[1000px] pt-30">
              <div className="flex flex-col space-y-12 p-5 text-black dark:text-dark-white">

                <div className="flex flex-col space-y-5">                
                  <h1 className="text-center text-[3rem] font-bold">How it works</h1>
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.5rem] font-bold">1. Feature-Extraktion mit ResNet50</h1>
                    <p>Als Basis der Architektur dient ein vortrainiertes ResNet50, ein bewährtes Backbone im Bereich der Bildklassifikation. Das ResNet50 extrahiert hochgradig informative visuelle Merkmale aus den Eingabebildern. Die letzten Layer des ResNet (insbesondere der Fully-Connected-Classifier sowie das finale Global Average Pooling) werden entfernt, sodass ausschließlich die hochauflösenden konvolutionalen Feature-Maps erhalten bleiben. Diese Repräsentationen bilden das Fundament für alle weiteren Verarbeitungsschritte.</p>
                    <CodeBlock code={ResNet}/>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">2. Attention-Module: CBAM (Convolutional Block Attention Module)</h1>
                  <p>Das CBAM (Convolutional Block Attention Module) ist ein leichtgewichtiges und zugleich äußerst effektives Modul, das speziell entwickelt wurde, um neuronale Netze in ihrer Fähigkeit zu unterstützen, relevante Merkmale innerhalb von Bilddaten hervorzuheben. In der vorliegenden Architektur wird CBAM genutzt, um den von ResNet50 extrahierten Feature-Maps eine zusätzliche Fokussierung auf wichtige Bildbereiche und -kanäle zu ermöglichen. Das Modul arbeitet sequentiell in zwei Phasen:</p>
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.2rem] font-bold">2.1. Channel Attention (Kanalaufmerksamkeit):</h1>
                    <p>Das Channel Attention Modul bewertet die Wichtigkeit einzelner Kanäle, indem es globale Durchschnittswerte über die räumlichen Dimensionen berechnet. Diese kompakten Kanalinformationen werden durch zwei 1x1 Convolutions mit Zwischenschritt der Reduktion und einer ReLU-Aktivierung verarbeitet. Eine abschließende Sigmoid-Aktivierung liefert Gewichtungen zwischen 0 und 1, mit denen die ursprünglichen Feature-Maps skaliert werden. So verstärkt das Modul relevante Kanäle und unterdrückt irrelevante.</p>
                    <CodeBlock code={ChannelAttention}/>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.2rem] font-bold">2.2. Spatial Attention (Räumliche Aufmerksamkeit):</h1>
                    <p>Das Spatial Attention Modul berechnet die Wichtigkeit einzelner räumlicher Positionen in den Feature-Maps. Dazu werden zunächst pro Pixel der Mittelwert und Maximalwert über alle Kanäle berechnet und als zwei Kanäle zusammengeführt. Ein 3x3 Faltungsfilter extrahiert daraus relevante räumliche Zusammenhänge. Die anschließende Sigmoid-Aktivierung liefert eine räumliche Gewichtungsmaske, die die ursprünglichen Features positionsabhängig verstärkt oder abschwächt.                    </p>
                    <CodeBlock code={SpatialAttention}/>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">3. Global Average Pooling</h1>
                  <p>Anschließend werden die aufbereiteten Feature-Maps mittels adaptive average pooling auf eine feste Größe von 1x1 pro Kanal reduziert. Das Resultat ist ein kompakter Feature-Vektor mit 2048 Dimensionen, der eine globale Zusammenfassung der wichtigsten Bildmerkmale darstellt.</p>
                  <CodeBlock code={Pooling}/>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">4. Feature-Enhancement durch Fully-Connected Layers</h1>
                  <p>
                    Der 2048-dimensionale Feature-Vektor wird im Anschluss durch zwei aufeinanderfolgende Fully-Connected-Blöcke weiterverarbeitet und verdichtet:
                    Zunächst erfolgt eine Reduktion von 2048 auf 1024 Dimensionen, anschließend von 1024 auf 512 Dimensionen.
                    Jede dieser Reduktionsstufen wird durch Batch Normalization, ReLU-Aktivierungen und Dropout ergänzt.
                    Diese Schritte dienen der Normalisierung, Stabilisierung und Regularisierung des Trainingsprozesses sowie der Erhöhung der Modellkapazität für komplexe Muster.
                  </p>
                  <CodeBlock code={FeatureEnhancement}/>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">5. Klassifikationskopf</h1>
                  <p>
                    Nach der Verdichtung der Merkmale erfolgt die finale Klassifikation über eine einfache Linear-Schicht, welche den 512-dimensionalen Feature-Vektor auf die Anzahl der Zielklassen (Anzahl der Vogelarten) projiziert. Die Ausgaben dieser Schicht bilden die sogenannten Logits, die im Trainings- bzw. Inferenzprozess für die Berechnung der Klassenwahrscheinlichkeiten herangezogen werden.
                  </p>
                  <CodeBlock code={Classificationhead}/>
                </div>
              </div>
            </main>
            <Footer />
        </div>
    );
}
import CodeBlock from "../components/CodeBlock";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import type { Route } from "./+types/home";

const Network = [
    `
    # Use ResNet50 as backbone
    self.backbone = models.resnet50(pretrained=pretrained)
    
    # Remove the final fully connected layer
    self.backbone = nn.Sequential(*list(self.backbone.children())[:-2])
    `,


    `
    self.spatialAttention = nn.Sequential(
        nn.Conv2d(2, 1, kernel_size=3, padding=1, bias=False),
        nn.Sigmoid()
    )
    `,

        `
    self.channelAttention = nn.Sequential(
      nn.AdaptiveAvgPool2d(1),
      nn.Conv2d(channels, channels // reduction, 1, bias=False),
      nn.ReLU(),
      nn.Conv2d(channels // reduction, channels, 1, bias=False),
      nn.Sigmoid()
    )
    `,

    `
    self.global_avg_pool = nn.AdaptiveAvgPool2d(1)
    `,

    `
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
    `,

    `
    self.classifier = nn.Linear(512, num_classes)
    `
]

const TrainingTransforms = [`transforms.Resize((input_size + 32, input_size + 32))`, `transforms.RandomCrop(input_size)`, `transforms.RandomHorizontalFlip(p=0.5)`, `transforms.RandomRotation(degrees=15)`, `transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2, hue=0.1)`, `transforms.RandomAffine(degrees=0, translate=(0.1, 0.1), scale=(0.9, 1.1))`, `transforms.ToTensor()`, `transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])`]

const Training = `
          for batch_idx, (data, target) in enumerate(train_loader):
            data, target = data.to(self.device), target.to(self.device)
            
            optimizer.zero_grad()
            output, _, _ = self.model(data)
            loss = criterion(output, target)
            loss.backward()
            optimizer.step()
            
            running_loss += loss.item()
            _, predicted = torch.max(output.data, 1)
            total += target.size(0)
            correct += (predicted == target).sum().item()

`

export default function network() {
    return (
        <div>
            <NavBar />
            <main className="mx-auto w-full max-w-[1000px] pt-30">
              <div className="flex flex-col space-y-12 p-5 text-black dark:text-dark-white">
                <h1 className="text-center text-[3rem] font-bold">Das Netzwerk</h1>
                <div className="flex flex-col space-y-5">                
                  
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.5rem] font-bold">1. Feature-Extraktion mit ResNet50</h1>
                    <p>Als Basis der Architektur dient ein vortrainiertes ResNet50, ein bewährtes Backbone im Bereich der Bildklassifikation. Das ResNet50 extrahiert hochgradig informative visuelle Merkmale aus den Eingabebildern. Die letzten Layer des ResNet (insbesondere der Fully-Connected-Classifier sowie das finale Global Average Pooling) werden entfernt, sodass ausschließlich die hochauflösenden konvolutionalen Feature-Maps erhalten bleiben. Diese Repräsentationen bilden das Fundament für alle weiteren Verarbeitungsschritte.</p>
                    <CodeBlock code={Network[0]}/>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">2. Attention-Module: CBAM (Convolutional Block Attention Module)</h1>
                  <p>Das CBAM (Convolutional Block Attention Module) ist ein leichtgewichtiges und zugleich äußerst effektives Modul, das speziell entwickelt wurde, um neuronale Netze in ihrer Fähigkeit zu unterstützen, relevante Merkmale innerhalb von Bilddaten hervorzuheben. In der vorliegenden Architektur wird CBAM genutzt, um den von ResNet50 extrahierten Feature-Maps eine zusätzliche Fokussierung auf wichtige Bildbereiche und -kanäle zu ermöglichen. Das Modul arbeitet sequentiell in zwei Phasen:</p>
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.2rem] font-bold">2.1. Channel Attention (Kanalaufmerksamkeit):</h1>
                    <p>Das Channel Attention Modul bewertet die Wichtigkeit einzelner Kanäle, indem es globale Durchschnittswerte über die räumlichen Dimensionen berechnet. Diese kompakten Kanalinformationen werden durch zwei 1x1 Convolutions mit Zwischenschritt der Reduktion und einer ReLU-Aktivierung verarbeitet. Eine abschließende Sigmoid-Aktivierung liefert Gewichtungen zwischen 0 und 1, mit denen die ursprünglichen Feature-Maps skaliert werden. So verstärkt das Modul relevante Kanäle und unterdrückt irrelevante.</p>
                    <CodeBlock code={Network[1]}/>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.2rem] font-bold">2.2. Spatial Attention (Räumliche Aufmerksamkeit):</h1>
                    <p>Das Spatial Attention Modul berechnet die Wichtigkeit einzelner räumlicher Positionen in den Feature-Maps. Dazu werden zunächst pro Pixel der Mittelwert und Maximalwert über alle Kanäle berechnet und als zwei Kanäle zusammengeführt. Ein 3x3 Faltungsfilter extrahiert daraus relevante räumliche Zusammenhänge. Die anschließende Sigmoid-Aktivierung liefert eine räumliche Gewichtungsmaske, die die ursprünglichen Features positionsabhängig verstärkt oder abschwächt.                    </p>
                    <CodeBlock code={Network[2]}/>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">3. Global Average Pooling</h1>
                  <p>Anschließend werden die aufbereiteten Feature-Maps mittels adaptive average pooling auf eine feste Größe von 1x1 pro Kanal reduziert. Das Resultat ist ein kompakter Feature-Vektor mit 2048 Dimensionen, der eine globale Zusammenfassung der wichtigsten Bildmerkmale darstellt.</p>
                  <CodeBlock code={Network[3]}/>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">4. Feature-Enhancement durch Fully-Connected Layers</h1>
                  <p>
                    Der 2048-dimensionale Feature-Vektor wird im Anschluss durch zwei aufeinanderfolgende Fully-Connected-Blöcke weiterverarbeitet und verdichtet:
                    Zunächst erfolgt eine Reduktion von 2048 auf 1024 Dimensionen, anschließend von 1024 auf 512 Dimensionen.
                    Jede dieser Reduktionsstufen wird durch Batch Normalization, ReLU-Aktivierungen und Dropout ergänzt.
                    Diese Schritte dienen der Normalisierung, Stabilisierung und Regularisierung des Trainingsprozesses sowie der Erhöhung der Modellkapazität für komplexe Muster.
                  </p>
                  <CodeBlock code={Network[4]}/>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">5. Klassifikationskopf</h1>
                  <p>
                    Nach der Verdichtung der Merkmale erfolgt die finale Klassifikation über eine einfache Linear-Schicht, welche den 512-dimensionalen Feature-Vektor auf die Anzahl der Zielklassen (Anzahl der Vogelarten) projiziert. Die Ausgaben dieser Schicht bilden die sogenannten Logits, die im Trainings- bzw. Inferenzprozess für die Berechnung der Klassenwahrscheinlichkeiten herangezogen werden.
                  </p>
                  <CodeBlock code={Network[5]}/>
                </div>
              </div>
              <div className="flex flex-col space-y-12 p-5 text-black dark:text-dark-white">
                <h1 className="text-center text-[3rem] font-bold">Die Transformationen</h1>
                <p>
                  Dieser Code definiert eine Reihe von Bild-Transformationsschritten zur Datenaugmentation im Training eines neuronalen Netzes, um die Robustheit des Modells zu verbessern. Die Transformationen besteht im Einzelnen aus:
                  <br/>
                  1.  Resize: Das Bild wird zunächst vergrößert, um später ein zentriertes Zuschneiden zu ermöglichen.
                  <CodeBlock code={TrainingTransforms[0]}/>
                  2.  RandomCrop: Ein zufälliger Bildausschnitt der Zielgröße wird gewählt, um unterschiedliche Bildbereiche zu betrachten.
                  <CodeBlock code={TrainingTransforms[1]}/>
                  3.  RandomHorizontalFlip: Mit einer Wahrscheinlichkeit von 50 % wird das Bild horizontal gespiegelt, um Symmetrien auszunutzen.
                  <CodeBlock code={TrainingTransforms[2]}/>
                  4.  RandomRotation: Das Bild wird zufällig um bis zu 15° gedreht, um Rotationsinvarianz zu fördern.
                  <CodeBlock code={TrainingTransforms[3]}/>
                  5.  ColorJitter: Helligkeit, Kontrast, Sättigung und Farbton werden leicht variiert, um unterschiedliche Lichtverhältnisse zu simulieren.
                  <CodeBlock code={TrainingTransforms[4]}/>
                  6.  RandomAffine: Leichte Translationen und Skalierungen simulieren weitere Variationen in Position und Größe der Objekte.
                  <CodeBlock code={TrainingTransforms[5]}/>
                  7.  ToTensor: Das Bild wird in ein Tensor-Format umgewandelt, das von PyTorch verarbeitet werden kann.
                  <CodeBlock code={TrainingTransforms[6]}/>
                  8.  Normalize: Die Pixelwerte werden normalisiert, um den Mittelwert und die Standardabweichung der ImageNet-Daten nachzubilden und das Training zu stabilisieren.
                  <CodeBlock code={TrainingTransforms[7]}/>
                </p>
              </div>
              <div className="flex flex-col space-y-12 p-5 text-black dark:text-dark-white">
                <h1 className="text-center text-[3rem] font-bold">Das Training</h1>
                <p>
                  Der gezeigte Code beschreibt eine Trainingsschleife für ein neuronales Netzwerk mit PyTorch. Dabei werden in jeder Iteration des Trainingsdatenladers ein Batch von Eingabedaten und den dazugehörigen Zielwerten auf das entsprechende Gerät (CPU oder GPU) verschoben. Anschließend werden die zuvor berechneten Gradienten im Optimierer zurückgesetzt, um eine korrekte Aktualisierung der Gewichte zu gewährleisten. Das Modell verarbeitet die Eingabedaten und liefert Vorhersagen, anhand derer der Verlust mithilfe einer Verlustfunktion berechnet wird. Danach wird der Verlust rückwärts propagiert, um die Gradienten zu ermitteln, und der Optimierer passt die Modellparameter entsprechend an. Zusätzlich wird der Verlustwert akkumuliert, um den Trainingsfortschritt zu verfolgen. Die Vorhersagen werden ausgewertet, indem für jede Eingabe die Klasse mit der höchsten Wahrscheinlichkeit bestimmt und mit den tatsächlichen Zielwerten verglichen wird, um die Anzahl der korrekten Vorhersagen zu zählen. Schließlich wird alle 50 Batches der aktuelle Verlustwert ausgegeben, um eine laufende Überwachung des Trainings zu ermöglichen.                </p>
                <CodeBlock code={Training}/>
              </div>
            </main>
            <Footer />
        </div>
    );
}
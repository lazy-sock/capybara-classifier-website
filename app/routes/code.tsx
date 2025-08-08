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

const TrainingTransforms = [`transforms.Resize((input_size + 32, input_size + 32))`, `transforms.RandomCrop(input_size=224)`, `transforms.RandomHorizontalFlip(p=0.5)`, `transforms.RandomRotation(degrees=15)`, `transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2, hue=0.1)`, `transforms.RandomAffine(degrees=0, translate=(0.1, 0.1), scale=(0.9, 1.1))`, `transforms.ToTensor()`, `transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])`]

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
        <main>
            <NavBar />
            <div className="mx-auto w-full max-w-[1000px] pt-30">
              <div className="flex flex-col space-y-12 p-5 text-black dark:text-dark-white">
                <h1 className="text-center text-[3rem] font-bold">Das Netzwerk</h1>
                <div className="flex flex-col space-y-5">                
                  
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.5rem] font-bold">1. Feature-Extraktion mit ResNet50</h1>
                    <p>Als Basis der Architektur dient ein vortrainiertes ResNet50, ein bewährtes Backbone im Bereich der Bildklassifikation. 
                      Das ResNet50 extrahiert hochgradig informative visuelle Merkmale, die sogenannten Feature-Maps, aus den Eingabebildern. 
                      Die letzten Layer des ResNet (Also der Fully-Connected-Classifier sowie das finale Global Average Pooling) werden entfernt, 
                      sodass ausschließlich die konvolutionalen Feature-Maps erhalten bleiben. 
                      Diese Feature-Maps bilden das Fundament für alle weiteren Verarbeitungsschritte.</p>
                    <CodeBlock code={Network[0]}/>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">2. Attention-Module: CBAM (Convolutional Block Attention Module)</h1>
                  <p>Das CBAM (Convolutional Block Attention Module) ist ein leichtgewichtiges und zugleich äußerst effektives Modul, das speziell entwickelt wurde, 
                    um neuronale Netze in ihrer Genauigkeit zu verbessern und relevante Merkmale innerhalb von Bilddaten hervorzuheben. 
                    In unserer Architektur wird CBAM genutzt, um den von ResNet50 
                    extrahierten Feature-Maps eine zusätzliche Fokussierung auf wichtige Bildbereiche und -kanäle zu ermöglichen. 
                    Das Modul arbeitet sequentiell in zwei Phasen:</p>
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.2rem] font-bold">2.1. Channel Attention (Kanalaufmerksamkeit):</h1>
                    <p>Das Channel Attention Modul bewertet die "Wichtigkeit" einzelner Kanäle, indem es globale Durchschnittswerte über die räumlichen Dimensionen berechnet. 
                      Diese Kanalinformationen werden durch zwei 1x1 Convolutions mit Zwischenschritt der Reduktion und einer ReLU-Aktivierung verarbeitet. 
                      Eine abschließende Sigmoid-Aktivierung liefert Gewichtungen zwischen 0 und 1, mit denen die ursprünglichen Feature-Maps skaliert werden. 
                      So verstärkt das Modul relevante Kanäle und unterdrückt irrelevante.</p>
                    <CodeBlock code={Network[2]}/>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <h1 className="text-[1.2rem] font-bold">2.2. Spatial Attention (Räumliche Aufmerksamkeit):</h1>
                    <p>Das Spatial Attention Modul berechnet die Wichtigkeit einzelner räumlicher Positionen in den Feature-Maps. 
                      Dazu werden zunächst pro Pixel der Mittelwert und Maximalwert über alle Kanäle berechnet und als zwei Kanäle zusammengeführt. 
                      Ein 3x3 Faltungsfilter extrahiert daraus relevante räumliche Zusammenhänge. 
                      Die anschließende Sigmoid-Aktivierung liefert eine räumliche Gewichtungsmaske, die die ursprünglichen Features positionsabhängig verstärkt oder abschwächt.                    </p>
                    <CodeBlock code={Network[1]}/>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <h1 className="text-[1.5rem] font-bold">3. Global Average Pooling</h1>
                  <p>Anschließend werden die aufbereiteten Feature-Maps mittels adaptive average pooling auf eine feste Größe von 1x1 pro Kanal reduziert. 
                    Das Resultat ist ein kompakter Feature-Vektor mit 2048 Dimensionen, der eine globale Zusammenfassung der wichtigsten Bildmerkmale darstellt und die richtige Dimension für die folgenden Dense Layer hat.</p>
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
                    Nach der Verdichtung der Merkmale erfolgt die finale Klassifikation über eine einfache Linear-Schicht, 
                    welche den 512-dimensionalen Feature-Vektor auf die Anzahl der Zielklassen (Anzahl der Vogelarten) projiziert. 
                    Die Ausgaben dieser Schicht bilden die sogenannten Logits, die im Trainings- bzw. Inferenzprozess für die Berechnung der Klassenwahrscheinlichkeiten herangezogen werden.
                  </p>
                  <CodeBlock code={Network[5]}/>
                </div>
              </div>
            </div>
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
            <div className="bg-primary">
              <div className="mx-auto w-full max-w-[1000px] pt-10 ">
                <div className="flex flex-col space-y-12 p-5 text-white dark:text-dark-white">
                  <h1 className="text-center text-[3rem] font-bold">Die Transformationen</h1>
                  <p>
                    Die folgenden Transformationsschritte zur Datenaugmentation im Training wurden genutzt, um die Robustheit des Modells zu verbessern.
                    Die Transformationen besteht im Einzelnen aus:
                    <br/>
                    1.  Resize: Das Bild wird zunächst vergrößert, um später ein zufälliges Zuschneiden zu ermöglichen.
                    <CodeBlock code={TrainingTransforms[0]}/>
                    2.  RandomCrop: Ein zufälliger Bildausschnitt von 224x224 Pixeln wird gewählt, um unterschiedliche Bildbereiche zu betrachten.
                    <CodeBlock code={TrainingTransforms[1]}/>
                    3.  RandomHorizontalFlip: Mit einer Wahrscheinlichkeit von 50 % wird das Bild horizontal gespiegelt, um eine Richtungsabhängigkeit zu vermeiden.
                    <CodeBlock code={TrainingTransforms[2]}/>
                    4.  RandomRotation: Das Bild wird zufällig um bis zu 15° gedreht, um die Rotationsinvarianz zu fördern.
                    <CodeBlock code={TrainingTransforms[3]}/>
                    5.  ColorJitter: Helligkeit, Kontrast, Sättigung und Farbton werden leicht variiert, um unterschiedliche Lichtverhältnisse zu simulieren.
                    <CodeBlock code={TrainingTransforms[4]}/>
                    6.  RandomAffine: Leichte Translationen und Skalierungen simulieren weitere Variationen in Position und Größe der Tiere.
                    <CodeBlock code={TrainingTransforms[5]}/>
                    7.  ToTensor: Das Bild wird in ein Tensor-Format umgewandelt, das von PyTorch verarbeitet werden kann.
                    <CodeBlock code={TrainingTransforms[6]}/>
                    8.  Normalize: Die Pixelwerte werden normalisiert, um den Mittelwert und die Standardabweichung der ImageNet-Daten nachzubilden und das Training zu stabilisieren.
                    <CodeBlock code={TrainingTransforms[7]}/>
                  </p>
                </div>
              </div>
            </div>
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
            <div className="mx-auto w-full max-w-[1000px] pt-10">
              <div className="flex flex-col space-y-10 p-5 text-black dark:text-dark-white">
                <h1 className="text-center text-[4rem] font-bold">Das Training</h1>
                <p>
                  Dies ist die Trainingsschleife für unser neuronales Netzwerk. 
                  Dabei werden in jeder Iteration des Trainingsdatenladers ein Batch von Eingabedaten und den dazugehörigen Zielwerten auf das entsprechende Gerät (CPU oder GPU) verschoben. 
                  Anschließend werden die zuvor berechneten Gradienten im Optimizer zurückgesetzt, um eine korrekte Aktualisierung der Gewichte zu gewährleisten. 
                  Das Modell verarbeitet die Eingabedaten und liefert Vorhersagen, anhand derer der Verlust mithilfe einer Verlustfunktion berechnet wird. 
                  Danach wird der Verlust rückwärts propagiert, um die Gradienten zu ermitteln, bevor der Optimizer die Modellparameter entsprechend der Tiefpunkte anpasst. 
                  Zusätzlich wird der Verlustwert zusammenaddiert, um den Trainingsfortschritt zu verfolgen. Die Vorhersagen werden dann ausgewertet, 
                  indem für jede Eingabe die Klasse mit der höchsten Wahrscheinlichkeit bestimmt und mit den tatsächlichen Zielwerten verglichen wird, 
                  um die Anzahl der korrekten Vorhersagen zu zählen.</p>
                <CodeBlock code={Training}/>
              </div>
            </div>
            <Footer />
        </main>
    );
}
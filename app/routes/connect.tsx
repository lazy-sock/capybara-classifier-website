import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function App() {
  return (
    <div>
      <main className="mx-auto mt-12 w-full max-w-[1000px] p-2">
        <h1 className="text-center text-[3rem] leading-[3rem] font-bold">
          Connecting to a Microcontroller
        </h1>
        <h2 className="text-center text-[2rem]">
          Setting up the Microcontroller
        </h2>
        <p className="text-[1.25rem]">
          <h3 className="text-[1.5rem]">One-Time Setup</h3> Method 1. Download
          Arduino IDE 2. Install ESP32 Board Package - Open Arduino IDE - Go to
          File &gt; Preferences - Add URL:
          `https://dl.espressif.com/dl/package_esp32_index.json` - Go to Tools
          &gt; Board Manager - Install ESP32 package{" "}
          <h3 className="text-[1.5rem]">Firmware Upload</h3>
          1. Download Pre-Built Firmware - Use pre-configured web server sketch
          - No manual coding required
          <h3 className="text-[1.5rem]">Hardware Connection</h3>
          1. Connect USB to Serial Converter: - RX to TX - TX to RX - GND to GND
          - Set to 3.3V <h3 className="text-[1.5rem]">Uploading Steps</h3> 1.
          Put ESP32-CAM in Download Mode: - Connect GPIO0 to GND - Power/connect
          the board 2. Select in Arduino: - Board: "AI Thinker ESP32-CAM" -
          Upload Pre-Built Firmware 3. Disconnect GPIO0 from GND{" "}
          <h3 className="text-[1.5rem]">Accessing Camera</h3> 1. Open Serial
          Monitor 2. Note the displayed IP address 3. Enter IP in web browser 4.
          View live camera stream instantly{" "}
          <h3 className="text-[1.5rem]">No Coding Required!</h3> - Built-in web
          server - Automatic WiFi setup - Instant camera access
        </p>
        <h2 className="text-center text-[2rem]">Connecting through WIFI</h2>
        <p className="text-[1.25rem]">
          <h3 className="text-[1.5rem]">What You'll Need</h3> - ESP32-CAM - USB
          to Serial Converter - Computer - WiFi Network{" "}
          <h3 className="text-[1.5rem]">Simple Connection Steps</h3>{" "}
          <h4 className="font-bold">1. Power Up Your ESP32-CAM</h4> 1. Connect
          the USB to Serial Converter 2. Open Arduino IDE 3. Upload the default
          firmware <h4 className="font-bold">2. Find the Camera's Network</h4>
          1. Open Serial Monitor 2. Look for a network name like "ESP32-CAM" 3.
          Note the network password (usually displayed){" "}
          <h4 className="font-bold">3. Connect to the Camera's Network</h4> 1.
          On your phone or computer 2. Go to WiFi settings 3. Select the
          "ESP32-CAM" network 4. Enter the password from Serial Monitor{" "}
          <h4 className="font-bold">4. Configure WiFi</h4> 1. Open a web browser
          2. Go to `192.168.4.1` 3. Find "WiFi Configuration" section 4. Enter
          your home WiFi: - Network Name (SSID) - Password 5. Save settings{" "}
          <h4 className="font-bold">5. Access Your Camera</h4> 1. Camera will
          restart 2. Check Serial Monitor for new IP address 3. Enter this IP in
          web browser 4. View your camera stream!{" "}
          <h3 className="text-[1.5rem]">Troubleshooting Tips</h3> - Camera won't
          connect? Double-check WiFi password - No IP address? Reset the device
          - Weak signal? Move closer to router{" "}
          <h3 className="text-[1.5rem]">Pro Tips</h3> - Use 2.4 GHz WiFi -
          Simple passwords work best - Keep router nearby
        </p>
        <h2 className="text-center text-[2rem]">
          Connecting through Bluetooth
        </h2>
        <p className="text-[1.25rem]">
          <h3
            className="text-[1.5rem] font-bold"
            id="bluetooth-connection-overview"
          >
            Bluetooth Connection Overview
          </h3>
          <ul>
            <li>ESP32-CAM supports Bluetooth Low Energy (BLE)</li>
            <li>Allows wireless connection without WiFi</li>
            <li>Simple pairing process</li>
          </ul>
          <h3 className="text-[1.5rem] font-bold" id="what-you-ll-need">
            What You&#39;ll Need
          </h3>
          <ul>
            <li>ESP32-CAM module</li>
            <li>Smartphone or computer with Bluetooth</li>
            <li>Arduino IDE (for initial setup)</li>
          </ul>
          <h3 className="text-[1.5rem] font-bold" id="connection-steps">
            Connection Steps
          </h3>
          <h3 className="text-[1.5rem] font-bold" id="1-prepare-esp32-cam">
            1. Prepare ESP32-CAM
          </h3>
          <ol>
            <li>Upload Bluetooth-enabled firmware</li>
            <li>Use Arduino IDE to add Bluetooth support</li>
            <li>Include BLE libraries in your code</li>
          </ol>
          <h3 className="text-[1.5rem] font-bold" id="2-bluetooth-pairing">
            2. Bluetooth Pairing
          </h3>
          <ol>
            <li>Enable Bluetooth on your device</li>
            <li>Search for &quot;ESP32-CAM&quot; in Bluetooth devices</li>
            <li>Select and pair with the device</li>
            <li>Enter pairing code if prompted</li>
          </ol>
          <h3 className="text-[1.5rem] font-bold" id="sample-connection-code">
            Sample Connection Code
          </h3>
          <h3 className="text-[1.5rem] font-bold" id="troubleshooting">
            Troubleshooting
          </h3>
          <ul>
            <li>
              No Bluetooth connection?
              <ul>
                <li>Check device compatibility</li>
                <li>Ensure Bluetooth is enabled</li>
                <li>Restart ESP32-CAM</li>
                <li>Verify firmware supports BLE</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-[1.5rem] font-bold" id="limitations">
            Limitations
          </h3>
          <ul>
            <li>Shorter range compared to WiFi</li>
            <li>Slower data transfer</li>
            <li>Limited to paired devices</li>
          </ul>
          <h3 className="text-[1.5rem] font-bold" id="pro-tips">
            Pro Tips
          </h3>
          <ul>
            <li>Keep devices close during pairing</li>
            <li>Use latest ESP32 firmware</li>
            <li>Ensure Bluetooth is fully supported</li>
          </ul>
        </p>
      </main>
      <nav className="bg-primary fixed bottom-0 left-0 flex h-12 w-screen items-center gap-2 px-2 lg:hidden">
        <div>Camera</div>
        <div>Animal Wiki</div>
        <div>Connected_Bool</div>
      </nav>
      <Footer />
    </div>
  );
}

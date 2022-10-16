import { useRef, useCallback, useState, useEffect } from "react";
import SelectId from "./components/SelectId";
import "./App.css";
import WebCam from "./components/WebCam";
interface Device {
  label?: string;
  kind: string;
  deviceId: string;
}
function App() {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [devices, setDevices] = useState<Device[]>([]);

  const onCamSelect = (id: string) => {
    setSelectedDevice(id);
  };
  const handleDevices = useCallback(
    (mediaDevices: any) => {
      const data = mediaDevices.filter(
        ({ kind }: Device) => kind === "videoinput"
      );
      setDevices(data);
    },
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      handleDevices(devices);
      setSelectedDevice(devices[0].deviceId);
    });
  }, [handleDevices]);
  return (
    <div className="App">
      
        <WebCam selectedDevice={selectedDevice} />
      
      {devices && (
        <SelectId options={devices} onSelect={onCamSelect}></SelectId>
      )}
    </div>
  );
}

export default App;

import Draggable from "react-draggable";
import Webcam from "react-webcam";

interface FcProp {
  selectedDevice: string;
}

const WebCam = (props: FcProp) => {
  const videoConstraints = () => {
    return {
      height: 150,
      width: 150,
      facingMode: "environment",
      deviceId: props.selectedDevice,
    };
  };
 
  return (
    <>
      <Draggable>
          <Webcam 
          audio={false} 
          videoConstraints={videoConstraints()}
          style={{ borderRadius: '50%' }}

          />              
      </Draggable>
    </>
  );
};

export default WebCam;

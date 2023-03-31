import { useState } from "react";
import QRCode from "qrcode";
import styles from "./QrGenerator.module.css";

function QrGenerator() {
  const [url, setUrl] = useState("");
  const [qrCodeImage, setQrCodeImage] = useState(null);

  const generateQrCode = async () => {
    try {
      const imageDataUrl = await QRCode.toDataURL(url);
      setQrCodeImage(imageDataUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Your URL Here..."
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        className={styles.input}
      />
      <button onClick={generateQrCode} className={styles.button}>
        Generate
      </button>
      {qrCodeImage && (
        <img src={qrCodeImage} alt="QR Code" className={styles.image} />
      )}
    </div>
  );
}

export default QrGenerator;

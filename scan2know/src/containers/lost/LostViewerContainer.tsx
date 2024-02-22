import Image from "next/image";
import styles from "./LostViewerContainer.module.css"

type LostViewerContainerProps = {
  userCode: string;
}

export default function LostViewerContainer({ userCode } : LostViewerContainerProps) {
  return (
    <>
      <div className={styles.title}>분실방지본부</div>
      <div className={styles.image}>
        <Image src='/airpod_image.jpg' alt="airpod_image" width={500} height={500}/>
      </div>
      <div className={styles.info}>
        <div>User : { userCode } </div>
        <div>Phone : 010-9999-9999</div>
        <div>Item : AirPod</div>
      </div>
    </>
  );
};
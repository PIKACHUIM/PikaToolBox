import { useEffect, useState } from "react";
import utils, { Soft } from "../../utils/getSoft";
import SoftItem from "./RightItem";

function RightGroup(props: { typeIndex: number }) {
  const [softs, setSofts] = useState<Soft[]>([]);
  useEffect(() => {
    utils.getSoftsByType(props.typeIndex).then((data) => {
      return setSofts(data);
    }).catch((err) => {
      console.log("获取软件列表时候发生意外", err);
    });
  }, []);
  return (
    <div>
      {softs.map((soft, index) => (
        <SoftItem soft={soft} key={`${soft.typeIndex}-${index}`} />
      ))}
    </div>
  );
}

export default RightGroup;

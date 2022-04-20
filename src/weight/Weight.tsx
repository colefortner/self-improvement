import React, { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";

import DailyWeightForm from "./DailyWeightForm";
import Graph from "../shared/Graph";

const Weight: React.FC = () => {
  const [weights, setWeights] = useState<number[] | number[][]>();
  const [days, setDays] = useState<number[]>();
  // const weights = [200, 205, 203, 200, 199, 197];
  // const days = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "days"));
      const snapshotDocs: { weight: number; day: number }[] = [];

      querySnapshot.forEach((doc: any) => {
        snapshotDocs.push({ ...doc.data() });
      });

      const weightsArray = snapshotDocs.map((doc) => {
        return doc.weight;
      });

      console.log(weightsArray);
      setWeights(weightsArray.reverse());

      const daysArray = snapshotDocs.map((doc) => {
        return doc.day;
      });
      console.log(daysArray);
      setDays(daysArray.reverse());
      console.log(snapshotDocs);
    };
    getData();
  }, []);

  return (
    <div style={{ border: "1px solid black", display: "inline-block" }}>
      <h1>Weight Progress</h1>
      <Graph
        xaxis={days!}
        yaxis={weights!}
        markerColor={"blue"}
        title={"Weights"}
      />
      <DailyWeightForm />
    </div>
  );
};

export default Weight;

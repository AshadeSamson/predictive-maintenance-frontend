import React, { useEffect, useState } from "react";
import {
  getMachineReadingById,
  getPrediction,
  getAllPredictions,
} from "../placholders/endpoints-1";
import { useParams } from "react-router-dom";
import { Section, DivBox } from "../styles/machineInfo.styled";
import LChart from "../components/lineChart";
import BChart from "../components/barChart";
import { theme } from "../styles/theme";
import { Tabs, Tab, Box } from "@mui/material";
import {
  getCurrentPreds,
  getMachineDetail,
  getPreviousPreds,
  makePrediction,
} from "../utils/utils";

function MachineInfo() {
  const { id } = useParams();
  // const machine = getMachineReadingById(id).data;
  // const prevMachinePred = getAllPredictions(parseInt(id)).data;
  // const currentMachinePred = getPrediction(parseInt(id)).data;

  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [machine, setMachine] = useState();
  const [prevMachinePred, setPrevMachinePred] = useState();
  const [currentMachinePred, setCurrentMachinePred] = useState();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [c_preds_result, p_preds_result, m_result] = await Promise.all([
          getCurrentPreds(id),
          getPreviousPreds(id),
          getMachineDetail(id),
        ]);

        if (c_preds_result.success) {
          // console.log("current: ", c_preds_result.data);
          const currentPrediction = [];
          if (c_preds_result.data.length) {
            Object.entries(c_preds_result?.data[0]).forEach(([name, value]) => {
              if (name == "no_failure" || name == "predicted_failure")
                currentPrediction.push({
                  name,
                  value: parseFloat(value),
                });
            });
          }
          // console.log(currentPrediction);
          setCurrentMachinePred(currentPrediction);
        }
        if (p_preds_result.success) {
          // console.log("previous: ", p_preds_result.data);
          setPrevMachinePred(p_preds_result?.data);
        }

        if (m_result.success) {
          // console.log("machine: ", m_result.data);
          setMachine(m_result?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "16px" }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="machine info tabs"
          centered
        >
          <Tab label="Probability of Failure" />
          <Tab label="Previous Predictions" />
          <Tab label="Volts Readings" />
          <Tab label="Rotation Readings" />
          <Tab label="Temperature Readings" />
          <Tab label="Pressure Readings" />
        </Tabs>
      </Box>

      {selectedTab === 0 && (
        <DivBox>
          <h4>Probability of Failure (Machine {id})</h4>
          {!currentMachinePred?.length ? (
            <BChart
              barData={currentMachinePred}
              height={300}
              width={500}
              defaultKey="name"
              dataKey="value"
              barColor={theme.colors.secondary}
            />
          ) : (
            <div>
              <p>No Current Prediction</p>
              <button style={{ padding: 10 }} onClick={() => makePrediction()}>
                Make Predict
              </button>
            </div>
          )}
        </DivBox>
      )}

      {selectedTab === 1 && (
        <DivBox>
          <h4>Previous Predictions for Failure (Machine {id})</h4>
          <LChart
            width={500}
            height={300}
            data={prevMachinePred}
            defaultKey="datetime"
            keyOne="failure"
            keyTwo="no_failure"
            keys={["failure", "no_failure"]}
            strokeOne={theme.colors.colorOne}
            strokeTwo={theme.colors.colorTwo}
          />
        </DivBox>
      )}

      {selectedTab === 2 && (
        <DivBox>
          <h4>Volts Readings (TimeStamps)</h4>
          <LChart
            width={50000}
            height={300}
            data={machine}
            defaultKey="datetime"
            keys={["volt"]}
            stroke={theme.colors.color1}
          />
        </DivBox>
      )}

      {selectedTab === 3 && (
        <DivBox>
          <h4>Rotation Readings (TimeStamps)</h4>
          <LChart
            width={50000}
            height={300}
            data={machine}
            defaultKey="datetime"
            keys={["rotation"]}
            stroke={theme.colors.color3}
          />
        </DivBox>
      )}

      {selectedTab === 4 && (
        <DivBox>
          <h4>Temperature Readings (TimeStamps)</h4>
          <LChart
            width={50000}
            height={300}
            data={machine}
            defaultKey="datetime"
            keys={["temperature"]}
            stroke={theme.colors.temp_color}
          />
        </DivBox>
      )}

      {selectedTab === 5 && (
        <DivBox>
          <h4>Pressure Readings (TimeStamps)</h4>
          <LChart
            width={50000}
            height={300}
            data={machine}
            defaultKey="datetime"
            keys={["pressure"]}
            stroke={theme.colors.color2}
          />
        </DivBox>
      )}
    </Section>
  );
}

export default MachineInfo;

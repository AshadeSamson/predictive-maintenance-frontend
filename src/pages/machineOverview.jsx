import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography, Tabs, Tab, Paper, Container } from "@mui/material";
import LChart from "../components/lineChart";
import {
  getAllMachineReadings,
  getAllMachineChartReadings,
} from "../utils/utils";
import AllMachineDataTable from "../components/AllMachineDataTable";

function MachineOverview() {
  const [selectedChart, setSelectedChart] = useState("Voltage");
  const [machineData, setMachineData] = useState({});
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [result, d_result] = await Promise.all([
          getAllMachineChartReadings(),
          getAllMachineReadings(),
        ]);

        if (result.success) {
          setMachineData(result.data);
        }
        if (d_result.success) {
          setGridData(d_result.data);
        }
      } catch (error) {
        console.error("Error fetching machine data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartConfig = useMemo(() => {
    if (!machineData || !Object.keys(machineData).length) return null;

    const charts = {
      Voltage: { data: machineData.volt, domain: machineData.domain.volt },
      Temperature: {
        data: machineData.temperature,
        domain: machineData.domain.temperature,
      },
      Pressure: {
        data: machineData.pressure,
        domain: machineData.domain.pressure,
      },
      Rotation: {
        data: machineData.rotation,
        domain: machineData.domain.rotation,
      },
    };

    return charts[selectedChart] || null;
  }, [machineData, selectedChart]);

  const handleChartSelection = (event, newValue) => {
    setSelectedChart(newValue);
  };

  const renderChart = () => {
    if (!chartConfig) {
      return <Typography>No data available</Typography>;
    }

    return (
      <LChart
        width="100%"
        height={400}
        data={chartConfig.data}
        domain={chartConfig.domain}
        datetime={machineData.datetime}
      />
    );
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Overview of Machines Readings (TimeStamps)
        </Typography>
        <Typography variant="body1" color="textSecondary">
          N.B: Each Line Corresponds to a Machine
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <button onClick={() => setShowChart(false)} style={buttonStyle}>
          Show Grid
        </button>
        <button onClick={() => setShowChart(true)} style={buttonStyle}>
          Show Charts
        </button>
      </Box>

      {!showChart ? (
        <Box sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <AllMachineDataTable data={gridData} isLoading={loading} />
          </Paper>
        </Box>
      ) : (
        <Box sx={{ mt: 4 }}>
          <Tabs
            value={selectedChart}
            onChange={handleChartSelection}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Voltage" value="Voltage" />
            <Tab label="Temperature" value="Temperature" />
            <Tab label="Pressure" value="Pressure" />
            <Tab label="Rotation" value="Rotation" />
          </Tabs>

          <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
            {loading ? <p>Loading data...</p> : renderChart()}
          </Paper>
        </Box>
      )}
    </Container>
  );
}

const buttonStyle = {
  padding: 10,
  cursor: "pointer",
  fontWeight: "bold",
  textTransform: "capitalize",
};

export default MachineOverview;

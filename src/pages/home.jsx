import React, { useEffect, useState } from "react";
import {
  Section,
  StatBox,
  ChartBox,
  FloatingCalendar,
} from "../styles/home.styled";
import { theme } from "../styles/theme";
import HeatMap from "../components/heatMap";
import { getAllMachineReadings } from "../placholders/endpoints-1";

import Calendar from "react-calendar"; // Assuming you're using a calendar library
import "react-calendar/dist/Calendar.css"; // Default styles for the calenda
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
//////////////// recharts//////////////////////////////////
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

////////////////////////////////////////////////////////
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
//Material UI Icons
import AllInboxIcon from "@mui/icons-material/AllInbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { getHomeInfo } from "../utils/utils";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
function Home() {
  const [selectedDateRange, setSelectedDateRange] = useState([
    new Date(),
    new Date(),
  ]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMachine, setSelectedMachine] = useState("All");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  //////
  const machines = getAllMachineReadings().data;
  const machineIds = machines.map((d) => d.machineID);
  const datetimes = machines[0].datetime;
  ////////////////////////////////
  const filteredMachines = machines
    .filter((machine) =>
      datetimes.some(
        (date) =>
          new Date(date) >= selectedDateRange[0] &&
          new Date(date) <= selectedDateRange[1]
      )
    )
    .filter(
      (machine) =>
        selectedMachine === "All" || machine.machineID === selectedMachine
    );

  ///////////////
  const voltData = machines.map((machine) => machine.volt.map(parseFloat));
  const pressureData = machines.map((machine) =>
    machine.pressure.map(parseFloat)
  );
  const rotationData = machines.map((machine) =>
    machine.rotation.map(parseFloat)
  );
  const vibrationData = machines.map((machine) =>
    machine.vibration.map(parseFloat)
  );

  // Example data for charts
  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  // Date range state
  //const [state, setState] = useState([
  // {
  //    startDate: new Date(),
  // endDate: addDays(new Date(), 7),
  // key: "selection",
  // },
  //]);
  const handleDateChange = (date) => {
    setSelectedDateRange(date);
  };

  const handleMachineClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (machineId) => {
    setSelectedMachine(machineId);
    setAnchorEl(null);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await getHomeInfo();
        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <Section>
      <StatBox textColor="#000">
        <h3>
          <AllInboxIcon /> Total Machines
        </h3>
        <p>{!loading ? data?.total_machines : "..."}</p>
        <h5>Machines</h5>
      </StatBox>
      <StatBox textColor="#4CAF50">
        <h3>
          <CheckCircleOutlineIcon /> Normal Machines
        </h3>
        <p>{!loading ? data?.normal_machines : "..."}</p>
        <h5>Machines</h5>
      </StatBox>
      <StatBox textColor="#FFC107">
        <h3>
          <WarningAmberIcon /> Warning Machines
        </h3>
        <p>{!loading ? data?.warning_machines : "..."}</p>
        <h5>Machines</h5>
      </StatBox>
      <StatBox textColor="#F00">
        <h3>
          <ErrorOutlineIcon /> Critical Machines
        </h3>
        <p>{!loading ? data?.critical_machines : "..."}</p>
        <h5>Machines</h5>
      </StatBox>

      <ChartBox>
        <h4>Average Machines Voltage Distribution</h4>
        {data?.machines_voltage_distribution && (
          <PieChart width={300} height={200}>
            <Pie
              data={data?.machines_voltage_distribution}
              cx={150}
              cy={100}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data?.machine_voltage_distribution &&
                data?.machines_voltage_distribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
            </Pie>

            <Tooltip />
          </PieChart>
        )}
      </ChartBox>
      <ChartBox>
        <h4>Average Machines Pressure Distribution</h4>
        {data?.machines_pressure_distribution && (
          <BarChart
            width={300}
            height={200}
            data={data?.machines_pressure_distribution}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="average_pressure" fill="#82ca9d" />
            {/* <Bar dataKey="uv" fill="#8884d8" /> */}
          </BarChart>
        )}
      </ChartBox>
      <ChartBox>
        <h4>Average Machines Rotation Speed</h4>
        {data?.machines_rotate_distribution && (
          <LineChart
            width={300}
            height={200}
            data={data?.machines_rotate_distribution}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="average_rotate"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        )}
      </ChartBox>
      <ChartBox>
        <h4>Average Machines Temperature </h4>
        {data?.machines_temperature_distribution && (
          <LineChart
            width={300}
            height={200}
            data={data?.machines_temperature_distribution}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="average_temperature"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        )}
      </ChartBox>
    </Section>
  );
}

export default Home;

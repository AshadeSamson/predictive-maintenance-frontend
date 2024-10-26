const API_URL = "http://localhost:5000";

export function getDomain(data, key, padding = 5) {
  const values = data.map((item) => parseFloat(item[key]));
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  return [minValue - padding, maxValue + padding];
}

export function processData(data) {
  const length = data[0].datetime.length;
  let chartData = [];

  for (let i = 0; i < length; i++) {
    let obj = { datetime: data[0].datetime[i] };

    data.forEach((machine) => {
      obj[`volt_${machine.machineID}`] = parseFloat(machine.volt[i]);
      obj[`rotation_${machine.machineID}`] = parseFloat(machine.rotation[i]);
      obj[`pressure_${machine.machineID}`] = parseFloat(machine.pressure[i]);
      obj[`vibration_${machine.machineID}`] = parseFloat(machine.vibration[i]);
    });

    chartData.push(obj);
  }

  return chartData;
}

export const getMachineDetail = async (id) => {
  if (!id) return { success: false, message: "Machine ID must be provided" };
  try {
    const response = await fetch(API_URL + "/api/get-readings/" + id, {
      method: "GET",
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const getAllMachineReadings = async () => {
  try {
    const response = await fetch(API_URL + "/api/get-readings", {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const getAllMachineChartReadings = async () => {
  try {
    const response = await fetch(API_URL + "/api/get-chart-readings", {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const getHomeInfo = async () => {
  try {
    const response = await fetch(API_URL + "/api/get-home-info", {
      method: "GET",
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const getAllMachines = async () => {
  try {
    const response = await fetch(API_URL + "/api/get-machines", {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const getPreviousPreds = async (machineID) => {
  if (!machineID) return;
  try {
    const response = await fetch(
      API_URL + "/api/get-previous-predictions/" + machineID,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const getCurrentPreds = async (machineID) => {
  if (!machineID) return;
  try {
    const response = await fetch(
      API_URL + "/api/get-current-predictions/" + machineID,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const getNotifications = async () => {
  try {
    const response = await fetch(API_URL + "/api/notifications", {
      method: "GET",
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const deleteNotification = async (id) => {
  try {
    const response = await fetch(API_URL + "/api/notification/" + id, {
      method: "DELETE",
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

export const makePrediction = async () => {
  try {
    const response = await fetch(API_URL + "/api/predict", {
      method: "GET",
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error Making Request" };
  }
};

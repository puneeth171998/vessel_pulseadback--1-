const vesselReg = require('../server/model/vesselReg');
async function UpdateAISData() {
  console.log("Inside");
  const API_KEY = process.env.AISSTREAM_API_KEY;

  const WebSocket = require('ws');
  const socket = new WebSocket("wss://stream.aisstream.io/v0/stream");

  let storedData = [];

 

  socket.on('open', () => {
    let subscriptionMessage = {
      Apikey: API_KEY,
      BoundingBoxes: [[[-180, -90], [180, 90]]],
      FiltersShipMMSI:["228392900","226324000","244780123"]
    };
    socket.send(JSON.stringify(subscriptionMessage));
  });

  socket.on('message', (data) => {
    processData(JSON.parse(data));
    

  });

  function processData(data) {
    let aisMessage = data;
    if (aisMessage["MessageType"] === "PositionReport") {
      let positionReport = aisMessage["Message"]["PositionReport"];
      storedData.push(aisMessage);
      console.log(storedData)
      console.log("This is data",data)
      console.log(`ShipId: ${positionReport["UserID"]} Latitude: ${positionReport['Latitude']} Longitude: ${positionReport['Longitude']}`);
    }
  }

 
  async function saveToDB(data) {
    
  const vessel = await vesselReg.find();
  console.log("Actual",data)

    // Save data to the database here
    // Replace the code with your database saving logic
    
    let filterVessel = []
    vessel.map(async eachVessel => {
      data.map(async eachArray => {
        if (eachArray.MetaData.MMSI == eachVessel?.MMSI) { 
          console.log("Matched", eachArray.MetaData.MMSI, eachArray.MetaData.latitude, eachArray.MetaData.longitude)
          console.log("Matched", eachArray.Message.PositionReport.TrueHeading, eachArray.MetaData.time_utc)
          const alerts = {
            special_manoeuvre_indicator:eachArray.Message.PositionReport.SpecialManoeuvreIndicator,
            position_accuracy:eachArray.Message.PositionReport.PositionAccuracy

          }

          await vesselReg.updateOne({ _id: eachVessel._id }, { latitude: eachArray.MetaData.latitude, longitude: eachArray.MetaData.longitude})
        }
      })

    })
    console.log("Saving data to the database:",storedData);
  }

  function findRepeatedElements(array) {
    const frequencyMap = {};
    const repeatedElements = [];

    // Count the frequency of each element
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (frequencyMap[element]) {
        frequencyMap[element]++;
      } else {
        frequencyMap[element] = 1;
      }
    }

    // Collect the repeated elements
    for (const element in frequencyMap) {
      if (frequencyMap[element] > 4) {
        repeatedElements.push(element);
      }
    }

    return repeatedElements;
  }

  setInterval(() => {
    saveToDB(storedData);
    storedData = [];
  }, 3 * 60 * 1000);

  setTimeout(() => {
    const result = findRepeatedElements(storedData)
    socket.close();
    // callback(vessel)
  }, 3 * 60 * 1000);


};

module.exports = UpdateAISData;




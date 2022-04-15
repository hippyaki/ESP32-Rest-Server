# API-applications

### Base URL: https://esp32-rest-server.herokuapp.com

[![Link Validate](https://github.com/hippyaki/API-applications/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/hippyaki/API-applications/actions/workflows/main.yml)
------------------------------------------------------------------------------------------------------------------

### API Endpoints

##### 1. Request All Device Data

`GET` - `/`

Response : 
```json
{
  "device": [
    {
      "_id": "615fe811a104d86e201dd1be",
      "name": "Device 1",
      "data": 65,
      "status": "success"
    },
    {
      "_id": "615fe94ba104d86e201dd1c6",
      "name": "Device 2",
      "data": 55,
      "status": "success",
      "__v": 0
    },
    {
      "_id": "615fe99aa104d86e201dd1cb",
      "name": "Device 3",
      "data": 17,
      "status": "success",
      "__v": 0
    },
    {
      "_id": "615fea618df6a166cc602ef8",
      "name": "Device 4",
      "data": 41,
      "status": "success",
      "__v": 0
    },
    {
      "_id": "615feaaa6ea7bb50c9d7bbc9",
      "name": "Device 5",
      "data": 95,
      "status": "success",
      "__v": 0
    },
    {
      "_id": "615feb4a2b46b6bd9c6b266a",
      "name": "Device 7",
      "data": 266,
      "status": "success",
      "__v": 0
    }
  ]
}
```

#### 2. Request Device with 'id'

`GET` - ``/device/<id>``

Response: <br>
Example - `https://esp32-rest-server.herokuapp.com/device/615fe811a104d86e201dd1be/`
           

 ```json
{
  "device": [
    {
      "_id": "615fe811a104d86e201dd1be",
      "name": "Device 1",
      "data": 65,
      "status": "success"
    }
  ]
}
 ```
 https://healthconnect-server.herokuapp.com/patient/61deb153d07305dfe71fe661
 
 ```json
{
  "patient": {
    "_id": "61deb153d07305dfe71fe661",
    "Name": "Akshayan Sinha",
    "Age": 21,
    "Ambulation": false,
    "BMI": 24.7,
    "Chills": false,
    "DBP": 55,
    "DecreasedMood": false,
    "FiO2": 78,
    "GeneralizedFatigue": false,
    "HeartRate": 65,
    "HistoryFever": "Last year in 2020 during pandemic. Mild.",
    "RR": 20,
    "RecentHospitalStay": "1999-12-31T18:30:00.000Z",
    "SBP": 41,
    "SpO2": 95,
    "Temp": 37,
    "WeightGain": 5,
    "WeightLoss": 0,
    "BGroup": "O+"
  }
}
```
 
 #### 3. Request Device with 'name'

`GET` - ``/device/name/<name>``

Response: <br>
Example - `https://esp32-rest-server.herokuapp.com/device/name/Device%201`

 ```json
{
  "device": [
    {
      "_id": "615fe811a104d86e201dd1be",
      "name": "Device 1",
      "data": 65,
      "status": "success"
    }
  ]
}
 ```

#### 4. Create New Device

`POST` - `/device/new`

Body:
```json
{
    "newdevice" : 
        {
        "name" : "Device 9",
        "data" : "5",
        "status" : "success"
        }
}
```
Response:
```json
{
  "message": "Device Created"
}
```

#### 5. Update Data (IoT device) with 'id'

`PUT` - `/device/update/<id>`

Body:
```json
{
    "deviceData":{
        "data" : "65"
    }
}
```

#### 6. Delete Device with 'id'

`DELETE` - `/device/delete/<id>`

Response:
```json
{
  "message": "Device Deleted 🔪"
}
```

#### 6. Delete Device with 'name'

`DELETE` - `/device/delete/name/<name>`

Response:
```json
{
  "message": "Device Deleted 🔪"
}
```

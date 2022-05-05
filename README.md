# ESP32-REST-Server

### Base URL: `https://esp32-rest-server.herokuapp.com`

[![Link Validate](https://github.com/hippyaki/ESP32-Rest-Server/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/hippyaki/ESP32-Rest-Server/actions/workflows/main.yml)
------------------------------------------------------------------------------------------------------------------

### API Endpoints

##### 1. Request All Device Data

`GET` - `/`

Response: <br>
Example - `https://esp32-rest-server.herokuapp.com/`

```json
{
  "device": [
    {
      "_id": "6259c59093e95817659fb32e",
      "name": "Device 1",
      "data": 55.45,
      "status": false
    },
    {
      "_id": "6259c63293e95817659fb32f",
      "name": "Device 2",
      "data": 89.36,
      "status": true
    },
    {
      "_id": "6259c64e93e95817659fb330",
      "name": "Device 3",
      "data": 142.58,
      "status": false
    },
    {
      "_id": "625a71f6700eb08a3c0538b0",
      "name": "Device 4",
      "data": 55,
      "status": true
    },
    {
      "_id": "625a765051245dd4ca5daf79",
      "name": "Device 5",
      "data": 78,
      "status": true
    },
    {
      "_id": "625a79154745a1d0a19365ef",
      "name": "Device 6",
      "data": 19,
      "status": true
    }
  ]
}
```

#### 2. Request Device with 'id'

`GET` - ``/device/<id>``

Response: <br>
Example - `https://esp32-rest-server.herokuapp.com/device/6259c59093e95817659fb32e`
           

 ```json
{
  "device": {
    "_id": "6259c59093e95817659fb32e",
    "name": "Device 1",
    "data": 55.45,
    "status": false
  }
}
 ```
 
 #### 3. Request Device with 'name'

`GET` - ``/device/name/<name>``

Response: <br>
Example - `https://esp32-rest-server.herokuapp.com/device/name/Device 1`

 ```json
{
  "device": {
    "_id": "6259c59093e95817659fb32e",
    "name": "Device 1",
    "data": 55.45,
    "status": false
  }
}
 ```

#### 4. Create New Device

`POST` - `/device/new`

Body:
```json
{
    "newdevice" : 
        {
        "name" : "Device 6",
        "data" : 18.93,
        "status" : true
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
        "data" : 87.45
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

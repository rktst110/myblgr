const Apify = require('apify');
const firebase = require('firebase');
const XLSX = require('xlsx');  // Add this line to import the XLSX library

function extractTradingDates(apiObject, iframeSrc){ // this function extracts previous trading date and then save it into IndexedDB

		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var date = new Date( apiObject[1]['marketCurrentTradingDate'] )
		var dayOfMonth = String(date.getDate());
		if (dayOfMonth.length < 2) {
		  dayOfMonth = '0' + dayOfMonth;
		}
		var currentTradingDate = dayOfMonth +'-'+ months[date.getMonth()] +'-'+ date.getFullYear()
		date =new Date( apiObject[1]['marketPreviousTradingDate'] )
		var dayOfMonth = String(date.getDate());
		if (dayOfMonth.length < 2) {
		  dayOfMonth = '0' + dayOfMonth;
		}
		var previousTradingDate = dayOfMonth +'-'+ months[date.getMonth()] +'-'+ date.getFullYear()
		
		var nextTradingDate =  apiObject[1]['marketNextTradingDate']
		
		//var tradingDates={ "marketCurrentTradingDate":currentTradingDate, "marketPreviousTradingDate":previousTradingDate, "marketNextTradingDate":nextTradingDate }
		var tradingDates = { "currentTradingDate":currentTradingDate, "previousTradingDate":previousTradingDate, "nextTradingDate":nextTradingDate }
		
		var timeStamp = currentTradingDate;
		
		var id = "trading_dates";
	
		return [ tradingDates, timeStamp, id ]
		
		
	} // extractTradingDates(apiObject) function ENDS HERE

function extractFII_DII_Data(apiObject, iframeSrc) { // this function extract Most Active Future Contracts data from apiObject and then store it into localStorage
	
		var fiiDiiDataObj = {}
		var date
		for(var i=0;i<apiObject.length;i++)
		{
			var dataObj = apiObject[i]
			date = apiObject[i]['date']
			
			dataObj['buyValue'] = Number( dataObj['buyValue'] )
			dataObj['sellValue'] = Number( dataObj['sellValue'] )
			dataObj['netValue'] = Number( dataObj['netValue'] )
			
			var category = dataObj['category'].replace(/\/.*/,'').replace(/ .*/,'')
			delete dataObj['date']
			delete dataObj['category']
			
			//fiiDiiDataObj[ "date" ] = date
			fiiDiiDataObj[ category ] = dataObj		
		}
		console.log(fiiDiiDataObj)
		
		//var timeStampDate = fiiDiiDataObj['date']
		var timeStampDate = date

		var id = "FII_DII_Data"
		var pathOfDocument = id + '/' + timeStampDate+ '/' + 'Equity'
	
		return {
			"dataObj":fiiDiiDataObj,
			"timeStampDate":timeStampDate,
			"id":id,
			"pathOfDocument": pathOfDocument,
		}

	}		// extractMostActiveFutureContracts(apiObject) ENDS HERE

async function handleData(apiObject, iframeSrc, db, createdAtTime, currentSystemDate) { // this function first handles localStorages for current NSE_APIs_Data, PreviousDay_NSE_APIs_Data. and then redirect iframe's JSON object to specified function according to iframe src

		var ApiMainObject = {};
		var returnedDataArray ;
		var pathToStoreData;
		var pathOfDocument;
		var dataObj;
		
		var options = { 
		  timeZone: 'Asia/Kolkata', 
		  month: 'long',
		  year: 'numeric',
		};

	
		if ( iframeSrc.includes("api/allMarketStatus") == true ) {
			returnedDataArray =  extractTradingDates(apiObject)
			pathOfDocument = returnedDataArray[2] +'/marketStatus' ;
		}
		else if (iframeSrc.includes("https://www.nseindia.com/api/fiidiiTradeReact") == true) {	//	if current iframe's src is for stock_fut , then redirect to extractStockFuture(apiObject) function
				returnedDataArray =  extractFII_DII_Data(apiObject, iframeSrc)
				//pathOfDocument = returnedDataArray[2] + '/' +createdAtTime;
				pathOfDocument = returnedDataArray['pathOfDocument']
			}

			//April 2023/26-Apr-2023/sector_stockNames/NIFTY_BANK/22:21:16 has
			var monthYear = new Date( returnedDataArray["timeStampDate"] ).toLocaleString('en-IN', options);
			//pathToStoreData = monthYear +'/'+ returnedDataArray[1] + '/' + returnedDataArray[2] + '/' +createdAtTime;
			
			if ( iframeSrc.includes("https://www.nseindia.com/api/fiidiiTradeReact") == true ) 
			{
				pathToStoreData = monthYear +'/'+ returnedDataArray['pathOfDocument'] ;
				
				dataObj={
				"data": JSON.stringify(returnedDataArray['dataObj'])
				}
				
			}
			else
			{
				pathToStoreData = monthYear +'/'+ returnedDataArray[1] + '/' + pathOfDocument ;
				
				dataObj={
				"data": JSON.stringify(returnedDataArray[0])
				}
			}
			
			/*
			dataObj={
				"data": JSON.stringify(returnedDataArray[0])
			}
			*/
			
			console.log( JSON.stringify(returnedDataArray['dataObj']).length )
			
			//var nseDate = pathToStoreData.split(/\//)[1]
			var nseDate = returnedDataArray["timeStampDate"] 
			
			//if( Date.parse(nseDate) == Date.parse(currentSystemDate) || iframeSrc.includes("#OnlyForSectorsStocks") == true )
			{
			if ( iframeSrc.includes("https://www.nseindia.com/api/fiidiiTradeReact") == true )  
			{
				//await db.doc( pathToStoreData ).set( dataObj ); 
				//docPathForIndexObj [ pathToStoreData ] = pathOfDocument
				//await db.doc( pathToStoreData ).set( dataObj, { merge: true } );
						
			{

			
				pathToStoreData = monthYear +'/'+ "FII_DII_Data" +'/'+ "FII_DII_Data" +'/'+ "FII_DII_Data" ;
			
			
				//var fieldPath = 'totalCEPEOIData.'+createdAtTime+'_'+( returnedDataArray[1].split(' ')[1] )
				var firstNestedFieldName = returnedDataArray['timeStampDate']
				var secondNestedFieldName = 'Equity'
			
				//var fieldPath = 'totalCEPEOIData.'+createdAtTime+'_'+( returnedDataArray[1].split(' ')[1] )
				var fieldPath = firstNestedFieldName+'.'+ secondNestedFieldName
				//var fieldPath = 'totalCEPEOIData.time.test'

		
				
							
				//console.log("pathToStoreData", pathToStoreData)
				//console.log("fieldPath", fieldPath)
				//console.log("totalCEPEData", totalCEPEData)
				
				var intraday_chart_data_Ref = db.doc( pathToStoreData );


				// Try to update the existing document using the update() method
				await intraday_chart_data_Ref.update({
					[fieldPath]: returnedDataArray['dataObj']
				}).then(() => {
					console.log("Document updated successfully.");
				}).catch((error) => {
					// If the update() method fails with a "document does not exist" error,
					// create a new document using the set() method instead
					if (error.code === "not-found") {
						
							var updateObject = {
							[firstNestedFieldName]: {
							[secondNestedFieldName]: returnedDataArray['dataObj']
							}
						}
	
						intraday_chart_data_Ref.set( updateObject , { merge: true });
	   
					} else {
						throw error;
					}
				}).then(() => {
					console.log("Document created successfully.");
				}).catch((error) => {
					console.log("Error creating or updating document: ", error);
				});


			//console.log("done")
				
			}
			
			
			}
			else if (iframeSrc.includes("https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%20TOTAL%20MARKET") == false && iframeSrc.includes("#OnlyForSectorsStocks") == false )  
			{
				//await db.doc( pathToStoreData ).set( dataObj ); 
				docPathForIndexObj [ pathToStoreData ] = pathOfDocument
				await db.doc( pathToStoreData ).set( dataObj, { merge: true } );
			}
			
			}
			 
			 await getAndAddFIIFnoStatsData( db, createdAtTime, currentSystemDate, nseDate )
			 await getAndAddDeliveryData( db, createdAtTime, currentSystemDate, nseDate )
			 
		//docPathForIndexObj [ pathToStoreData ] = pathOfDocument
	}	//localStorageChecking_and_redirecting(apiObject,iframeSrc) function ENDS HERE

async function getAndAddFIIFnoStatsData( db, createdAtTime, currentSystemDate, nseDate )
{
	
	//console.log('docPathForIndexObj', docPathForIndexObj);
	try { // code that might throw an exception
	
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	 
		var ApiMainObject = {};
		var returnedDataArray ;
		var pathToStoreData;
		var pathOfDocument;
		var dataObj;
		
		var options = { 
		  timeZone: 'Asia/Kolkata', 
		  month: 'long',
		  year: 'numeric',
		};
	  
	
	  //if ( Index['delivery_data'] ==undefined )
	  {
		  //var startDate = new Date( latestDate );
		 // var startDate = new Date( nseDate );
		//var startDateForDelivery = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - 1);
		//var startDateForDelivery = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() );
		  var returnedDataObj = await getFIIFnoStatsData( nseDate )
		  
		  if (returnedDataObj !== null) {
			  //console.log(fetchedData); // Process the retrieved data here
			 await addFIIFnoStatsData( db, nseDate, returnedDataObj )
			 
			} else {
			  // Handle the error or fallback behavior here
			  //console.error('An error occurred while fetching the data');
			}

	  }
	  	
	

				} catch(error) {
  // handle the error
  console.log(error);
}

}

async function getFIIFnoStatsData( nseDate ){
    
//var fetchURL = 'https://archives.nseindia.com/content/fo/fii_stats_16-Oct-2023.xls'
var fetchURL = 'https://archives.nseindia.com/content/fo/fii_stats_'+nseDate+'.xls'
console.log("Fetching ", fetchURL);
    try {
        const response = await fetch(fetchURL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Read the response data as a buffer
        const buffer = await response.buffer();

        // Convert the buffer to an ArrayBuffer
        const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

        // Parse the ArrayBuffer as an XLSX workbook
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        const dataObject = {
            sheetData: sheetData
        };
  
  /*
        const dataset = await Apify.openDataset(); // Opens a default dataset
         // Push the data object to the dataset
          await dataset.pushData(dataObject);

    console.log('Data object stored in the dataset.');
    */
	
//converting in custom JSON object (STARTS HERE)	
    var xlsObj ={}
    xlsObj = dataObject
var xlsArray=xlsObj['sheetData']
var startingKey = Object.keys(xlsObj['sheetData'][0])[0]
var xlsDataObject ={}
for(var i=0;i<xlsArray.length;i++)
{
	var dataObj = xlsArray[i] 
	if ( dataObj [startingKey] !='' && dataObj ["_3"] !='')
	{
	
		var category = dataObj [startingKey]
		var buyContracts = Number(dataObj [""])
		var buyAmtCrores = Number(dataObj ["_1"])
		var sellContracts = Number(dataObj ["_2"])
		var sellAmtCrores = Number(dataObj ["_3"])
		var openInterestContracts = Number(dataObj ["_4"])
		var openInterestAmtCrores = Number(dataObj ["_5"])
		
		xlsDataObject [category] = {
			  buyContracts: buyContracts,
			  buyAmtCrores: buyAmtCrores,
			  sellContracts: sellContracts,
			  sellAmtCrores: sellAmtCrores,
			  openInterestContracts: openInterestContracts,
			  openInterestAmtCrores: openInterestAmtCrores
		}
		
	}
	
}


console.log(xlsDataObject)
  return xlsDataObject; // Return the fetched data
//converting in custom JSON object (ENS HERE)


        //console.log("Converted XLS data to object:", dataObject);
    } catch (error) {
        console.error('Error:', error);
		 return null; // Return null or a default value in case of an error
    }
}

async function addFIIFnoStatsData( db, latestDate, returnedDataObj )
{
	
		try {
  // code that might throw an exception
  
		var ApiMainObject = {};
		var returnedDataArray ;
		var pathToStoreData;
		var pathOfDocument;
		var dataObj;
		
		var options = { 
		  timeZone: 'Asia/Kolkata', 
		  month: 'long',
		  year: 'numeric',
		};

			//var pathOfDocument = returnedDataArray[2] + '/FnO/' +createdAtTime+ '/' +createdAtTime;
			//var pathOfDocument = "delivery_data" + '/delivery_data/' ;
			var pathOfDocument = latestDate + '/' + latestDate ;
			
			//April 2023/26-Apr-2023/sector_stockNames/NIFTY_BANK/22:21:16 has
			var monthYear = new Date( latestDate ).toLocaleString('en-IN', options);
			//pathToStoreData = monthYear +'/'+ returnedDataArray[1] + '/' + returnedDataArray[2] + '/' +createdAtTime;
			//pathToStoreData = monthYear +'/'+ latestDate + '/' + pathOfDocument ;
			
			
			/*
			pathToStoreData = monthYear +'/'+ "FnO_FII_Stats_data" + '/' + pathOfDocument ;
			dataObj={
				"data": JSON.stringify( returnedDataObj )
			}
			console.log( JSON.stringify( returnedDataObj  ).length )
			
				//docPathForIndexObj [ pathToStoreData ] = pathOfDocument
				await db.doc( pathToStoreData ).set( dataObj, { merge: true } ); 
		*/
			
			
			{
			
				//pathToStoreData = monthYear +'/'+ "FII_DII_Data" ;
				pathToStoreData = monthYear +'/'+ "FII_DII_Data" +'/'+ "FII_DII_Data" +'/'+ "FII_DII_Data" ;
			
			
				//var fieldPath = 'totalCEPEOIData.'+createdAtTime+'_'+( returnedDataArray[1].split(' ')[1] )
				var firstNestedFieldName = latestDate
				var secondNestedFieldName = 'FnO_FII_Stats'
			
				//var fieldPath = 'totalCEPEOIData.'+createdAtTime+'_'+( returnedDataArray[1].split(' ')[1] )
				var fieldPath = firstNestedFieldName+'.'+ secondNestedFieldName
				//var fieldPath = 'totalCEPEOIData.time.test'

		
				
							
				//console.log("pathToStoreData", pathToStoreData)
				//console.log("fieldPath", fieldPath)
				//console.log("totalCEPEData", totalCEPEData)
				
				var intraday_chart_data_Ref = db.doc( pathToStoreData );


				// Try to update the existing document using the update() method
				await intraday_chart_data_Ref.update({
					[fieldPath]: returnedDataObj
				}).then(() => {
					console.log("Document updated successfully.");
				}).catch((error) => {
					// If the update() method fails with a "document does not exist" error,
					// create a new document using the set() method instead
					if (error.code === "not-found") {
						
						var updateObject = {
							[firstNestedFieldName]: {
							[secondNestedFieldName]: returnedDataObj
							}
						}
						
						intraday_chart_data_Ref.set( updateObject , { merge: true });
	   
					} else {
						throw error;
					}
				}).then(() => {
					console.log("Document created successfully.");
				}).catch((error) => {
					console.log("Error creating or updating document: ", error);
				});


			//console.log("done")
				
			}
			
			
			} catch(error) {
			  // handle the error
			  console.log(error);
			}

}


async function getAndAddDeliveryData( db, createdAtTime, currentSystemDate, nseDate )
{
	
	//console.log('docPathForIndexObj', docPathForIndexObj);
	try { // code that might throw an exception
	
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	 
		var ApiMainObject = {};
		var returnedDataArray ;
		var pathToStoreData;
		var pathOfDocument;
		var dataObj;
		
		var options = { 
		  timeZone: 'Asia/Kolkata', 
		  month: 'long',
		  year: 'numeric',
		};
	  
	
	  //if ( Index['delivery_data'] ==undefined )
	  {
		  //var startDate = new Date( latestDate );
		  var startDate = new Date( nseDate );
		//var startDateForDelivery = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - 1);
		var startDateForDelivery = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() );
		  var calculatedDeliveryDataObj = await getCalculatedDeliveryData( startDateForDelivery )
		  
		  if (calculatedDeliveryDataObj !== null) {
			  //console.log(fetchedData); // Process the retrieved data here
			 await addCalculatedDeliveryData( db, nseDate, calculatedDeliveryDataObj )
			 
			} else {
			  // Handle the error or fallback behavior here
			  //console.error('An error occurred while fetching the data');
			}

	  }
	  	
	

				} catch(error) {
  // handle the error
  console.log(error);
}

}

async function getCalculatedDeliveryData( startDateForDelivery )
{

  //const startingDate = '22May2023';
  const startingDate = startDateForDelivery;
  const numPreviousDays = 1;

  try {
    //const response = await fetch(`https://script.google.com/macros/s/AKfycbwsjI4MFf03Hva57Gd-hFVh6GgxG6S3SevVjUjrXwQEU9JADo0p8X-nD_Qo3wa7Xeg1/exec?startingDate=${startingDate}&numPreviousDays=${numPreviousDays}`);
    const response = await fetch(`https://script.google.com/macros/s/AKfycbzgWx7rqaOfP3Hg41KErXJlzw1TJdh1rkB7-uLlTkEnBoeCR7pJU58FHnqRIm55OJsVDw/exec?startingDate=${startingDate}&numPreviousDays=${numPreviousDays}`);

    if (!response.ok) {
      throw new Error('Network response was not OK');
    }

    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error:', error);
    return null; // Return null or a default value in case of an error
  }
  
}

async function addCalculatedDeliveryData( db, latestDate, calculatedDeliveryDataObj )
{
	
		try {
  // code that might throw an exception
  
		var ApiMainObject = {};
		var returnedDataArray ;
		var pathToStoreData;
		var pathOfDocument;
		var dataObj;
		
		var options = { 
		  timeZone: 'Asia/Kolkata', 
		  month: 'long',
		  year: 'numeric',
		};

			//var pathOfDocument = returnedDataArray[2] + '/FnO/' +createdAtTime+ '/' +createdAtTime;
			//var pathOfDocument = "delivery_data" + '/delivery_data/' ;
			var pathOfDocument = latestDate + '/' + latestDate ;
			
			//April 2023/26-Apr-2023/sector_stockNames/NIFTY_BANK/22:21:16 has
			var monthYear = new Date( latestDate ).toLocaleString('en-IN', options);
			//pathToStoreData = monthYear +'/'+ returnedDataArray[1] + '/' + returnedDataArray[2] + '/' +createdAtTime;
			//pathToStoreData = monthYear +'/'+ latestDate + '/' + pathOfDocument ;
			pathToStoreData = monthYear +'/'+ "Delivery_Data" + '/' + pathOfDocument ;
			
			dataObj={
				"data": JSON.stringify( calculatedDeliveryDataObj )
			}
			console.log( JSON.stringify( calculatedDeliveryDataObj  ).length )
			
				//docPathForIndexObj [ pathToStoreData ] = pathOfDocument
				await db.doc( pathToStoreData ).set( dataObj, { merge: true } ); 

			
			} catch(error) {
			  // handle the error
			  console.log(error);
			}

}



function sortTimesAsc(times) {
  times.sort((a, b) => {
    // Convert time values to milliseconds since midnight
    const [aHrs, aMins, aSecs] = a.split(":").map(Number);
    const aMs = aHrs * 3600000 + aMins * 60000 + aSecs * 1000;

    const [bHrs, bMins, bSecs] = b.split(":").map(Number);
    const bMs = bHrs * 3600000 + bMins * 60000 + bSecs * 1000;

    // Compare the milliseconds values
    return aMs - bMs;
  });

  return times;
}

var equityData = {};
var docPathForIndexObj= {};
var onlyForSectorsStocksObj= {
	dates:[],
	data:{}
};


Apify.main(async () => {
	
	 	  try {
    const input = await Apify.getInput();

    const { data } = input;
    let islegacyPhantomJSTask = false;
    if (data && typeof data === 'string') {
        // It runs from legacy phantomjs crawler task finished webhook
        const legacyInput = JSON.parse(data);
        Object.assign(input, legacyInput);
        islegacyPhantomJSTask = true;
    }

    const { datasetId, apiKey, authDomain, projectId, collectionName } = input;

    if (!datasetId) {
        throw new Error('DatasetId is required on input.');
    }

    firebase.initializeApp({
        apiKey,
        authDomain,
        projectId,
    });

    // Initialize Cloud Firestore through Firebase
    const db = firebase.firestore();
    console.log(`Start importing dataset ${datasetId} to firestore.`);
    const dataset = await Apify.openDataset(datasetId, { forceCloud: true });
    const datasetInfo = await dataset.getInfo();

    //console.log('datasetInfo:', datasetInfo);
    const createdAt = new Date( datasetInfo["createdAt"] )

    var options = { 
    timeZone: 'Asia/Kolkata', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' ,
    hour12: false 
    };

	var dateOptions = {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: 'long', // Specify 'long' for full month name
  day: '2-digit',
};


    //var createdAtTime = new Date( datasetInfo["createdAt"] ).toTimeString('en-IN', options).split(' ')[0]
    var currentSystemDate = new Date( datasetInfo["createdAt"] ).toLocaleString('en-IN', dateOptions)
    var createdAtTime = new Date( datasetInfo["createdAt"] ).toLocaleString('en-IN', options).split(' ')[1]
	
	createdAtTime = createdAtTime.split(':')[0] + ':' + createdAtTime.split(':')[1]+ ':00'
	
	console.log("currentSystemDate", currentSystemDate, "createdAtTime",createdAtTime)

    // Import dataset from actor/task
    const limit = 1000;
    let counter = 0;
    for (let offset = 0; offset < datasetInfo.itemCount; offset += limit) {
        const pagination = await dataset.getData({
            simplified: islegacyPhantomJSTask,
            clean: !islegacyPhantomJSTask,
            limit,
            offset,
        });
        console.log(`Get dataset items offset: ${pagination.offset}`);
        for (const item of pagination.items[0]['pageText']) {
            var fetchedURL = item["url"];
			 var myurl = (item["url"].replace(/[^\w\s]/gi, ""));
            console.log('item:', myurl );
            console.log('createdAt:', createdAt );

            try {
				
               if( item["pageText"]!="" )
               // if( item["pageText"]=="delete" )
                {
                    //var myPath= "March2022/10Mar2023/"+myurl+"/"+createdAtTime;
                   /*var myPath = TestFunction(myurl,createdAtTime);
                    //await db.collection(collectionName).doc( myurl ).set( JSON.parse(item["pageText"]) ); // Use doc() and set() instead of add()
                    //await db.doc( myPath ).set( JSON.parse(item["pageText"]) ); // Use doc() and set() instead of add()
                    var dataObj={
                        "objectValue":(item["pageText"])
                    }
                    await db.doc( myPath ).set( dataObj ); // Use doc() and set() instead of add()
                    
                    //console.log('Added item:', item.replace(/[^\w\s]/gi, ''));
                    */

                    //await handleData( JSON.parse(item["pageText"]), fetchedURL, db, createdAtTime, currentSystemDate);
                    await handleData( item["pageText"], fetchedURL, db, createdAtTime, currentSystemDate);
					
					counter++;
                }
				
				/*
				{ // code to manually add fetched previous data of FII-DII 
					var fii_dii_data_object = {"29-Sep-2023": {"date": "29-Sep-2023", "FII": {"buyValue": 10058.35, "sellValue": 11744.05, "netValue": -1685.7 }, "DII": {"buyValue": 8788.5, "sellValue": 6037.01, "netValue": 2751.49 }}, "28-Sep-2023": {"date": "28-Sep-2023", "FII": {"buyValue": 10711.39, "sellValue": 14075.61, "netValue": -3364.22 }, "DII": {"buyValue": 15118.41, "sellValue": 12406.93, "netValue": 2711.48 }}, "27-Sep-2023": {"date": "27-Sep-2023", "FII": {"buyValue": 9575.17, "sellValue": 9929.52, "netValue": -354.35 }, "DII": {"buyValue": 8419.68, "sellValue": 8033.4, "netValue": 386.28 }}, "26-Sep-2023": {"date": "26-Sep-2023", "FII": {"buyValue": 8750.81, "sellValue": 9444.28, "netValue": -693.47 }, "DII": {"buyValue": 7502.47, "sellValue": 6787.72, "netValue": 714.75 }}, "25-Sep-2023": {"date": "25-Sep-2023", "FII": {"buyValue": 8510.65, "sellValue": 10843.68, "netValue": -2333.03 }, "DII": {"buyValue": 8621.77, "sellValue": 7042.49, "netValue": 1579.28 }}, "22-Sep-2023": {"date": "22-Sep-2023", "FII": {"buyValue": 10840.2, "sellValue": 12166.94, "netValue": -1326.74 }, "DII": {"buyValue": 7902.06, "sellValue": 7100.79, "netValue": 801.27 }}, "21-Sep-2023": {"date": "21-Sep-2023", "FII": {"buyValue": 9132.58, "sellValue": 12139.94, "netValue": -3007.36 }, "DII": {"buyValue": 7860.39, "sellValue": 6702.25, "netValue": 1158.14 }}, "20-Sep-2023": {"date": "20-Sep-2023", "FII": {"buyValue": 15769.17, "sellValue": 18879.86, "netValue": -3110.69 }, "DII": {"buyValue": 10052.34, "sellValue": 10625.36, "netValue": -573.02 }}, "18-Sep-2023": {"date": "18-Sep-2023", "FII": {"buyValue": 7520.34, "sellValue": 8756.85, "netValue": -1236.51 }, "DII": {"buyValue": 8097.08, "sellValue": 7544.53, "netValue": 552.55 }}, "15-Sep-2023": {"date": "15-Sep-2023", "FII": {"buyValue": 33124.28, "sellValue": 32959.86, "netValue": 164.42 }, "DII": {"buyValue": 12082.64, "sellValue": 10144.07, "netValue": 1938.57 }}, "14-Sep-2023": {"date": "14-Sep-2023", "FII": {"buyValue": 9870, "sellValue": 9575.31, "netValue": 294.69 }, "DII": {"buyValue": 6943.14, "sellValue": 6993.94, "netValue": -50.8 }}, "13-Sep-2023": {"date": "13-Sep-2023", "FII": {"buyValue": 10375.25, "sellValue": 12006.88, "netValue": -1631.63 }, "DII": {"buyValue": 8104.69, "sellValue": 7254.83, "netValue": 849.86 }}, "12-Sep-2023": {"date": "12-Sep-2023", "FII": {"buyValue": 13653.37, "sellValue": 14700.56, "netValue": -1047.19 }, "DII": {"buyValue": 10341, "sellValue": 10081.51, "netValue": 259.49 }}, "11-Sep-2023": {"date": "11-Sep-2023", "FII": {"buyValue": 11469.51, "sellValue": 9996.42, "netValue": 1473.09 }, "DII": {"buyValue": 8522.4, "sellValue": 8156.16, "netValue": 366.24 }}, "08-Sep-2023": {"date": "08-Sep-2023", "FII": {"buyValue": 9850.49, "sellValue": 10074.71, "netValue": -224.22 }, "DII": {"buyValue": 8324.05, "sellValue": 7173.9, "netValue": 1150.15 }}, "07-Sep-2023": {"date": "07-Sep-2023", "FII": {"buyValue": 9005.65, "sellValue": 9764.2, "netValue": -758.55 }, "DII": {"buyValue": 7203.95, "sellValue": 7175.84, "netValue": 28.11 }}, "06-Sep-2023": {"date": "06-Sep-2023", "FII": {"buyValue": 9994.21, "sellValue": 13240.07, "netValue": -3245.86 }, "DII": {"buyValue": 10202.87, "sellValue": 10450.33, "netValue": -247.46 }}, "05-Sep-2023": {"date": "05-Sep-2023", "FII": {"buyValue": 8414.44, "sellValue": 10139.55, "netValue": -1725.11 }, "DII": {"buyValue": 8580.69, "sellValue": 7502.83, "netValue": 1077.86 }}, "04-Sep-2023": {"date": "04-Sep-2023", "FII": {"buyValue": 6833.29, "sellValue": 10200.96, "netValue": -3367.67 }, "DII": {"buyValue": 10461.54, "sellValue": 7898.06, "netValue": 2563.48 }}, "01-Sep-2023": {"date": "01-Sep-2023", "FII": {"buyValue": 15219.61, "sellValue": 14731.67, "netValue": 487.94 }, "DII": {"buyValue": 10888.79, "sellValue": 8593.86, "netValue": 2294.93 }}, "31-Aug-2023": {"date": "31-Aug-2023", "FII": {"buyValue": 47666.11, "sellValue": 50639.21, "netValue": -2973.1 }, "DII": {"buyValue": 16236.73, "sellValue": 11853.97, "netValue": 4382.76 }}, "30-Aug-2023": {"date": "30-Aug-2023", "FII": {"buyValue": 10211.33, "sellValue": 10706.01, "netValue": -494.68 }, "DII": {"buyValue": 8713.38, "sellValue": 7390.14, "netValue": 1323.24 }}, "29-Aug-2023": {"date": "29-Aug-2023", "FII": {"buyValue": 10515.48, "sellValue": 10453.97, "netValue": 61.51 }, "DII": {"buyValue": 8131.87, "sellValue": 7826.78, "netValue": 305.09 }}, "28-Aug-2023": {"date": "28-Aug-2023", "FII": {"buyValue": 10235.41, "sellValue": 11628.66, "netValue": -1393.25 }, "DII": {"buyValue": 7711.28, "sellValue": 6447.27, "netValue": 1264.01 }}, "25-Aug-2023": {"date": "25-Aug-2023", "FII": {"buyValue": 10929.61, "sellValue": 15567.82, "netValue": -4638.21 }, "DII": {"buyValue": 8542.44, "sellValue": 7128.09, "netValue": 1414.35 }}, "24-Aug-2023": {"date": "24-Aug-2023", "FII": {"buyValue": 12992.74, "sellValue": 11467.87, "netValue": 1524.87 }, "DII": {"buyValue": 13050.83, "sellValue": 7254.22, "netValue": 5796.61 }}, "23-Aug-2023": {"date": "23-Aug-2023", "FII": {"buyValue": 9419.37, "sellValue": 8805.05, "netValue": 614.32 }, "DII": {"buyValue": 7228.77, "sellValue": 7103.74, "netValue": 125.03 }}, "22-Aug-2023": {"date": "22-Aug-2023", "FII": {"buyValue": 8854.08, "sellValue": 9349.25, "netValue": -495.17 }, "DII": {"buyValue": 6027.22, "sellValue": 5493.47, "netValue": 533.75 }}, "21-Aug-2023": {"date": "21-Aug-2023", "FII": {"buyValue": 8074.95, "sellValue": 9976.05, "netValue": -1901.1 }, "DII": {"buyValue": 6157.4, "sellValue": 5531.15, "netValue": 626.25 }}, "18-Aug-2023": {"date": "18-Aug-2023", "FII": {"buyValue": 12302.17, "sellValue": 12569.15, "netValue": -266.98 }, "DII": {"buyValue": 6501, "sellValue": 6161.82, "netValue": 339.18 }}, "17-Aug-2023": {"date": "17-Aug-2023", "FII": {"buyValue": 11205.13, "sellValue": 12715.99, "netValue": -1510.86 }, "DII": {"buyValue": 6293.38, "sellValue": 6607.35, "netValue": -313.97 }}, "16-Aug-2023": {"date": "16-Aug-2023", "FII": {"buyValue": 21055.98, "sellValue": 20333.22, "netValue": 722.76 }, "DII": {"buyValue": 7977.67, "sellValue": 5571.48, "netValue": 2406.19 }}, "14-Aug-2023": {"date": "14-Aug-2023", "FII": {"buyValue": 7334.69, "sellValue": 9658.92, "netValue": -2324.23 }, "DII": {"buyValue": 7640.85, "sellValue": 6179.95, "netValue": 1460.9 }}, "11-Aug-2023": {"date": "11-Aug-2023", "FII": {"buyValue": 9508.14, "sellValue": 12581.42, "netValue": -3073.28 }, "DII": {"buyValue": 8828.21, "sellValue": 8327.86, "netValue": 500.35 }}, "10-Aug-2023": {"date": "10-Aug-2023", "FII": {"buyValue": 11533.43, "sellValue": 11202.21, "netValue": 331.22 }, "DII": {"buyValue": 9153.78, "sellValue": 8450.06, "netValue": 703.72 }}, "09-Aug-2023": {"date": "09-Aug-2023", "FII": {"buyValue": 9342.47, "sellValue": 8698.36, "netValue": 644.11 }, "DII": {"buyValue": 8041.44, "sellValue": 8639.32, "netValue": -597.88 }}, "08-Aug-2023": {"date": "08-Aug-2023", "FII": {"buyValue": 10721.75, "sellValue": 11433.09, "netValue": -711.34 }, "DII": {"buyValue": 8809.11, "sellValue": 8271.8, "netValue": 537.31 }}, "07-Aug-2023": {"date": "07-Aug-2023", "FII": {"buyValue": 11709.39, "sellValue": 13602.16, "netValue": -1892.77 }, "DII": {"buyValue": 7491.4, "sellValue": 6410.6, "netValue": 1080.8 }}, "04-Aug-2023": {"date": "04-Aug-2023", "FII": {"buyValue": 8674.23, "sellValue": 9230.55, "netValue": -556.32 }, "DII": {"buyValue": 8378.65, "sellValue": 8012.04, "netValue": 366.61 }}, "03-Aug-2023": {"date": "03-Aug-2023", "FII": {"buyValue": 11379.3, "sellValue": 11696.76, "netValue": -317.46 }, "DII": {"buyValue": 9582.3, "sellValue": 7853.11, "netValue": 1729.19 }}, "02-Aug-2023": {"date": "02-Aug-2023", "FII": {"buyValue": 8266.22, "sellValue": 10144.06, "netValue": -1877.84 }, "DII": {"buyValue": 9312.5, "sellValue": 9314.73, "netValue": -2.23 }}, "01-Aug-2023": {"date": "01-Aug-2023", "FII": {"buyValue": 8655.19, "sellValue": 8748.04, "netValue": -92.85 }, "DII": {"buyValue": 8156.13, "sellValue": 7120.44, "netValue": 1035.69 }}, "31-Jul-2023": {"date": "31-Jul-2023", "FII": {"buyValue": 12087.69, "sellValue": 12788.86, "netValue": -701.17 }, "DII": {"buyValue": 9236.88, "sellValue": 6748.81, "netValue": 2488.07 }}, "28-Jul-2023": {"date": "28-Jul-2023", "FII": {"buyValue": 9267.42, "sellValue": 10291.33, "netValue": -1023.91 }, "DII": {"buyValue": 8813.04, "sellValue": 7178.67, "netValue": 1634.37 }}, "27-Jul-2023": {"date": "27-Jul-2023", "FII": {"buyValue": 11640.43, "sellValue": 15619.87, "netValue": -3979.44 }, "DII": {"buyValue": 9281.77, "sellValue": 6753.62, "netValue": 2528.15 }}, "26-Jul-2023": {"date": "26-Jul-2023", "FII": {"buyValue": 8700.87, "sellValue": 7778.03, "netValue": 922.84 }, "DII": {"buyValue": 7529.42, "sellValue": 7059.32, "netValue": 470.1 }}, "25-Jul-2023": {"date": "25-Jul-2023", "FII": {"buyValue": 10471.84, "sellValue": 9383.08, "netValue": 1088.76 }, "DII": {"buyValue": 7793.68, "sellValue": 8127.38, "netValue": -333.7 }}, "24-Jul-2023": {"date": "24-Jul-2023", "FII": {"buyValue": 9719.18, "sellValue": 9802.14, "netValue": -82.96 }, "DII": {"buyValue": 8655.89, "sellValue": 7721.02, "netValue": 934.87 }}, "21-Jul-2023": {"date": "21-Jul-2023", "FII": {"buyValue": 10020.4, "sellValue": 12019.17, "netValue": -1998.77 }, "DII": {"buyValue": 10532.48, "sellValue": 9241.75, "netValue": 1290.73 }}, "20-Jul-2023": {"date": "20-Jul-2023", "FII": {"buyValue": 11423.73, "sellValue": 8052.83, "netValue": 3370.9 }, "DII": {"buyValue": 8102.27, "sellValue": 8295.29, "netValue": -193.02 }}, "19-Jul-2023": {"date": "19-Jul-2023", "FII": {"buyValue": 8973.07, "sellValue": 7807.6, "netValue": 1165.47 }, "DII": {"buyValue": 6389.07, "sellValue": 8523.61, "netValue": -2134.54 }}, "18-Jul-2023": {"date": "18-Jul-2023", "FII": {"buyValue": 8596.02, "sellValue": 8091.36, "netValue": 504.66 }, "DII": {"buyValue": 340.31, "sellValue": 144.51, "netValue": 195.8 }}, "17-Jul-2023": {"date": "17-Jul-2023", "FII": {"buyValue": 8286.36, "sellValue": 8213.36, "netValue": 73 }, "DII": {"buyValue": 7182.87, "sellValue": 7118.53, "netValue": 64.34 }}, "14-Jul-2023": {"date": "14-Jul-2023", "FII": {"buyValue": 12486, "sellValue": 9849.57, "netValue": 2636.43 }, "DII": {"buyValue": 7333.85, "sellValue": 8106.3, "netValue": -772.45 }}, "13-Jul-2023": {"date": "13-Jul-2023", "FII": {"buyValue": 10128.06, "sellValue": 7890.13, "netValue": 2237.93 }, "DII": {"buyValue": 8229.67, "sellValue": 9426.35, "netValue": -1196.68 }}, "12-Jul-2023": {"date": "12-Jul-2023", "FII": {"buyValue": 18217.66, "sellValue": 19460.1, "netValue": -1242.44 }, "DII": {"buyValue": 15051.19, "sellValue": 14614.48, "netValue": 436.71 }}, "11-Jul-2023": {"date": "11-Jul-2023", "FII": {"buyValue": 10839.74, "sellValue": 9642.36, "netValue": 1197.38 }, "DII": {"buyValue": 9758.83, "sellValue": 9766.08, "netValue": -7.25 }}, "10-Jul-2023": {"date": "10-Jul-2023", "FII": {"buyValue": 8128.05, "sellValue": 7539.57, "netValue": 588.48 }, "DII": {"buyValue": 8074.49, "sellValue": 7786.11, "netValue": 288.38 }}, "07-Jul-2023": {"date": "07-Jul-2023", "FII": {"buyValue": 9590.27, "sellValue": 8799.87, "netValue": 790.4 }, "DII": {"buyValue": 6244.19, "sellValue": 9208.42, "netValue": -2964.23 }}, "06-Jul-2023": {"date": "06-Jul-2023", "FII": {"buyValue": 12338, "sellValue": 9696.9, "netValue": 2641.1 }, "DII": {"buyValue": 8247.1, "sellValue": 10598.8, "netValue": -2351.7 }}, "05-Jul-2023": {"date": "05-Jul-2023", "FII": {"buyValue": 8742.3, "sellValue": 7139.2, "netValue": 1603.1 }, "DII": {"buyValue": 7983.8, "sellValue": 8422.8, "netValue": -439 }}, "04-Jul-2023": {"date": "04-Jul-2023", "FII": {"buyValue": 8783.66, "sellValue": 6649.33, "netValue": 2134.33 }, "DII": {"buyValue": 7026.14, "sellValue": 7811.62, "netValue": -785.48 }}, "03-Jul-2023": {"date": "03-Jul-2023", "FII": {"buyValue": 7533.91, "sellValue": 5537.99, "netValue": 1995.92 }, "DII": {"buyValue": 7031.9, "sellValue": 7369.7, "netValue": -337.8 }}, "30-Jun-2023": {"date": "30-Jun-2023", "FII": {"buyValue": 19439.74, "sellValue": 13042.61, "netValue": 6397.13 }, "DII": {"buyValue": 10469.81, "sellValue": 9272.17, "netValue": 1197.64 }}, "28-Jun-2023": {"date": "28-Jun-2023", "FII": {"buyValue": 21017.34, "sellValue": 8667.34, "netValue": 12350 }, "DII": {"buyValue": 13978.21, "sellValue": 14999.22, "netValue": -1021.01 }}, "27-Jun-2023": {"date": "27-Jun-2023", "FII": {"buyValue": 10452.72, "sellValue": 8428.67, "netValue": 2024.05 }, "DII": {"buyValue": 6784.35, "sellValue": 8775.7, "netValue": -1991.35 }}, "26-Jun-2023": {"date": "26-Jun-2023", "FII": {"buyValue": 7896.65, "sellValue": 8306.08, "netValue": -409.43 }, "DII": {"buyValue": 5455.86, "sellValue": 5205.74, "netValue": 250.12 }}, "23-Jun-2023": {"date": "23-Jun-2023", "FII": {"buyValue": 6263.33, "sellValue": 6608.14, "netValue": -344.81 }, "DII": {"buyValue": 6694.19, "sellValue": 7378.2, "netValue": -684.01 }}, "22-Jun-2023": {"date": "22-Jun-2023", "FII": {"buyValue": 8947.66, "sellValue": 9640.94, "netValue": -693.28 }, "DII": {"buyValue": 7147.83, "sellValue": 6928.41, "netValue": 219.42 }}, "21-Jun-2023": {"date": "21-Jun-2023", "FII": {"buyValue": 13795.52, "sellValue": 9782.42, "netValue": 4013.1 }, "DII": {"buyValue": 7704.86, "sellValue": 7154.5, "netValue": 550.36 }}, "20-Jun-2023": {"date": "20-Jun-2023", "FII": {"buyValue": 11733.88, "sellValue": 13676.5, "netValue": -1942.62 }, "DII": {"buyValue": 9851.71, "sellValue": 7879.2, "netValue": 1972.51 }}, "19-Jun-2023": {"date": "19-Jun-2023", "FII": {"buyValue": 8354.9, "sellValue": 9385.8, "netValue": -1030.9 }, "DII": {"buyValue": 6412.2, "sellValue": 6777.4, "netValue": -365.2 }}, "16-Jun-2023": {"date": "16-Jun-2023", "FII": {"buyValue": 17939.03, "sellValue": 17144.25, "netValue": 794.78 }, "DII": {"buyValue": 7945.59, "sellValue": 7264.26, "netValue": 681.33 }}, "15-Jun-2023": {"date": "15-Jun-2023", "FII": {"buyValue": 12641.91, "sellValue": 9556.4, "netValue": 3085.51 }, "DII": {"buyValue": 6798.75, "sellValue": 7096.63, "netValue": -297.88 }}, "14-Jun-2023": {"date": "14-Jun-2023", "FII": {"buyValue": 10413.72, "sellValue": 8699, "netValue": 1714.72 }, "DII": {"buyValue": 6242.94, "sellValue": 6897.71, "netValue": -654.77 }}, "13-Jun-2023": {"date": "13-Jun-2023", "FII": {"buyValue": 12967.79, "sellValue": 11290.19, "netValue": 1677.6 }, "DII": {"buyValue": 6753.95, "sellValue": 6957.27, "netValue": -203.32 }}, "12-Jun-2023": {"date": "12-Jun-2023", "FII": {"buyValue": 6321.86, "sellValue": 6948.48, "netValue": -626.62 }, "DII": {"buyValue": 6663.64, "sellValue": 4869.79, "netValue": 1793.85 }}, "09-Jun-2023": {"date": "09-Jun-2023", "FII": {"buyValue": 13631.62, "sellValue": 13940.59, "netValue": -308.97 }, "DII": {"buyValue": 6234.12, "sellValue": 4988.61, "netValue": 1245.51 }}, "08-Jun-2023": {"date": "08-Jun-2023", "FII": {"buyValue": 8013.28, "sellValue": 7800.88, "netValue": 212.4 }, "DII": {"buyValue": 5461.85, "sellValue": 5866.86, "netValue": -405.01 }}, "07-Jun-2023": {"date": "07-Jun-2023", "FII": {"buyValue": 9569.91, "sellValue": 8187.34, "netValue": 1382.57 }, "DII": {"buyValue": 5931.8, "sellValue": 5539.5, "netValue": 392.3 }}, "06-Jun-2023": {"date": "06-Jun-2023", "FII": {"buyValue": 8963.44, "sellValue": 8577.73, "netValue": 385.71 }, "DII": {"buyValue": 5946.73, "sellValue": 6435.75, "netValue": -489.02 }}, "05-Jun-2023": {"date": "05-Jun-2023", "FII": {"buyValue": 7740.87, "sellValue": 8441.85, "netValue": -700.98 }, "DII": {"buyValue": 7460.68, "sellValue": 6264.7, "netValue": 1195.98 }}, "02-Jun-2023": {"date": "02-Jun-2023", "FII": {"buyValue": 10393.93, "sellValue": 11052.81, "netValue": -658.88 }, "DII": {"buyValue": 6951.54, "sellValue": 6369.69, "netValue": 581.85 }}, "01-Jun-2023": {"date": "01-Jun-2023", "FII": {"buyValue": 8751.66, "sellValue": 8822.73, "netValue": -71.07 }, "DII": {"buyValue": 5715.08, "sellValue": 5226.15, "netValue": 488.93 }}, "31-May-2023": {"date": "31-May-2023", "FII": {"buyValue": 65024.36, "sellValue": 61618.46, "netValue": 3405.9 }, "DII": {"buyValue": 11726.46, "sellValue": 14254.98, "netValue": -2528.52 }}, "30-May-2023": {"date": "30-May-2023", "FII": {"buyValue": 9789.47, "sellValue": 7703.85, "netValue": 2085.62 }, "DII": {"buyValue": 5937.03, "sellValue": 6375.96, "netValue": -438.93 }}, "29-May-2023": {"date": "29-May-2023", "FII": {"buyValue": 7767, "sellValue": 6008.84, "netValue": 1758.16 }, "DII": {"buyValue": 6217.74, "sellValue": 5364.17, "netValue": 853.57 }}, "26-May-2023": {"date": "26-May-2023", "FII": {"buyValue": 8203.32, "sellValue": 7853.17, "netValue": 350.15 }, "DII": {"buyValue": 7705.6, "sellValue": 5864.62, "netValue": 1840.98 }}, "25-May-2023": {"date": "25-May-2023", "FII": {"buyValue": 8521.07, "sellValue": 7931.97, "netValue": 589.1 }, "DII": {"buyValue": 5522.8, "sellValue": 5184.36, "netValue": 338.44 }}, "24-May-2023": {"date": "24-May-2023", "FII": {"buyValue": 8548.49, "sellValue": 7362.65, "netValue": 1185.84 }, "DII": {"buyValue": 5880.82, "sellValue": 5579.89, "netValue": 300.93 }}, "23-May-2023": {"date": "23-May-2023", "FII": {"buyValue": 7829.51, "sellValue": 7647, "netValue": 182.51 }, "DII": {"buyValue": 5543.09, "sellValue": 5145.8, "netValue": 397.29 }}, "22-May-2023": {"date": "22-May-2023", "FII": {"buyValue": 6956.61, "sellValue": 6033.72, "netValue": 922.89 }, "DII": {"buyValue": 5486.82, "sellValue": 4882.25, "netValue": 604.57 }}, "19-May-2023": {"date": "19-May-2023", "FII": {"buyValue": 7325.4, "sellValue": 7438.86, "netValue": -113.46 }, "DII": {"buyValue": 6427.8, "sellValue": 5356.45, "netValue": 1071.35 }}, "18-May-2023": {"date": "18-May-2023", "FII": {"buyValue": 7731.46, "sellValue": 6761.28, "netValue": 970.18 }, "DII": {"buyValue": 4830.85, "sellValue": 5680.81, "netValue": -849.96 }}, "17-May-2023": {"date": "17-May-2023", "FII": {"buyValue": 7478.25, "sellValue": 7328.92, "netValue": 149.33 }, "DII": {"buyValue": 6046.8, "sellValue": 6250.67, "netValue": -203.87 }}, "16-May-2023": {"date": "16-May-2023", "FII": {"buyValue": 7783.16, "sellValue": 6376.3, "netValue": 1406.86 }, "DII": {"buyValue": 6138.61, "sellValue": 7024.78, "netValue": -886.17 }}, "15-May-2023": {"date": "15-May-2023", "FII": {"buyValue": 7676.34, "sellValue": 5991.05, "netValue": 1685.29 }, "DII": {"buyValue": 5505.55, "sellValue": 5314.35, "netValue": 191.2 }}, "12-May-2023": {"date": "12-May-2023", "FII": {"buyValue": 9159.49, "sellValue": 8145.43, "netValue": 1014.06 }, "DII": {"buyValue": 5457.4, "sellValue": 6379.59, "netValue": -922.19 }}, "11-May-2023": {"date": "11-May-2023", "FII": {"buyValue": 7950.84, "sellValue": 7113.63, "netValue": 837.21 }, "DII": {"buyValue": 7026.38, "sellValue": 7226.47, "netValue": -200.09 }}, "10-May-2023": {"date": "10-May-2023", "FII": {"buyValue": 8094.74, "sellValue": 6261.61, "netValue": 1833.13 }, "DII": {"buyValue": 5061.73, "sellValue": 5851.4, "netValue": -789.67 }}, "09-May-2023": {"date": "09-May-2023", "FII": {"buyValue": 9375.35, "sellValue": 7433.16, "netValue": 1942.19 }, "DII": {"buyValue": 7148.35, "sellValue": 6743.65, "netValue": 404.7 }}, "08-May-2023": {"date": "08-May-2023", "FII": {"buyValue": 8705.37, "sellValue": 6581.61, "netValue": 2123.76 }, "DII": {"buyValue": 6252.52, "sellValue": 6007.25, "netValue": 245.27 }}, "05-May-2023": {"date": "05-May-2023", "FII": {"buyValue": 8242.95, "sellValue": 7465.27, "netValue": 777.68 }, "DII": {"buyValue": 4956.49, "sellValue": 7155.26, "netValue": -2198.77 }}, "04-May-2023": {"date": "04-May-2023", "FII": {"buyValue": 7311.04, "sellValue": 5896.31, "netValue": 1414.73 }, "DII": {"buyValue": 5611.15, "sellValue": 5169.59, "netValue": 441.56 }}, "03-May-2023": {"date": "03-May-2023", "FII": {"buyValue": 7498.83, "sellValue": 6160.83, "netValue": 1338 }, "DII": {"buyValue": 5390.76, "sellValue": 5974.75, "netValue": -583.99 }}, "02-May-2023": {"date": "02-May-2023", "FII": {"buyValue": 9972.5, "sellValue": 7975.15, "netValue": 1997.35 }, "DII": {"buyValue": 5649.54, "sellValue": 6043.59, "netValue": -394.05 }}, "28-Apr-2023": {"date": "28-Apr-2023", "FII": {"buyValue": 13577.29, "sellValue": 10272.97, "netValue": 3304.32 }, "DII": {"buyValue": 6319.21, "sellValue": 6054.94, "netValue": 264.27 }}, "27-Apr-2023": {"date": "27-Apr-2023", "FII": {"buyValue": 7139.97, "sellValue": 5487.02, "netValue": 1652.95 }, "DII": {"buyValue": 5638.01, "sellValue": 5540.94, "netValue": 97.07 }}, "26-Apr-2023": {"date": "26-Apr-2023", "FII": {"buyValue": 7813.62, "sellValue": 6556.14, "netValue": 1257.48 }, "DII": {"buyValue": 5220.23, "sellValue": 5448.11, "netValue": -227.88 }}, "25-Apr-2023": {"date": "25-Apr-2023", "FII": {"buyValue": 9244.21, "sellValue": 9651.56, "netValue": -407.35 }, "DII": {"buyValue": 6547.47, "sellValue": 5983.86, "netValue": 563.61 }}, "24-Apr-2023": {"date": "24-Apr-2023", "FII": {"buyValue": 6218.8, "sellValue": 6631.07, "netValue": -412.27 }, "DII": {"buyValue": 6138.64, "sellValue": 4961.46, "netValue": 1177.18 }}, "21-Apr-2023": {"date": "21-Apr-2023", "FII": {"buyValue": 5127.72, "sellValue": 7244.48, "netValue": -2116.76 }, "DII": {"buyValue": 5475.84, "sellValue": 3843.18, "netValue": 1632.66 }}, "20-Apr-2023": {"date": "20-Apr-2023", "FII": {"buyValue": 5773.84, "sellValue": 6943.16, "netValue": -1169.32 }, "DII": {"buyValue": 4753.35, "sellValue": 3920.63, "netValue": 832.72 }}, "19-Apr-2023": {"date": "19-Apr-2023", "FII": {"buyValue": 7981.93, "sellValue": 7995.1, "netValue": -13.17 }, "DII": {"buyValue": 5297.87, "sellValue": 5408.29, "netValue": -110.42 }}, "18-Apr-2023": {"date": "18-Apr-2023", "FII": {"buyValue": 7398.08, "sellValue": 8208.68, "netValue": -810.6 }, "DII": {"buyValue": 6490.97, "sellValue": 6089.31, "netValue": 401.66 }}, "17-Apr-2023": {"date": "17-Apr-2023", "FII": {"buyValue": 13386.64, "sellValue": 13919.84, "netValue": -533.2 }, "DII": {"buyValue": 8329.95, "sellValue": 8060.3, "netValue": 269.65 }}, "13-Apr-2023": {"date": "13-Apr-2023", "FII": {"buyValue": 8033.11, "sellValue": 7811.26, "netValue": 221.85 }, "DII": {"buyValue": 6526.46, "sellValue": 6800.14, "netValue": -273.68 }}, "12-Apr-2023": {"date": "12-Apr-2023", "FII": {"buyValue": 8459.37, "sellValue": 6551.42, "netValue": 1907.95 }, "DII": {"buyValue": 7428.04, "sellValue": 7653.26, "netValue": -225.22 }}, "11-Apr-2023": {"date": "11-Apr-2023", "FII": {"buyValue": 6931.95, "sellValue": 6589.11, "netValue": 342.84 }, "DII": {"buyValue": 7786.89, "sellValue": 8050.91, "netValue": -264.02 }}, "10-Apr-2023": {"date": "10-Apr-2023", "FII": {"buyValue": 4057.8, "sellValue": 3175.28, "netValue": 882.52 }, "DII": {"buyValue": 7060.71, "sellValue": 6709.21, "netValue": 351.5 }}, "06-Apr-2023": {"date": "06-Apr-2023", "FII": {"buyValue": 5655.59, "sellValue": 5179.78, "netValue": 475.81 }, "DII": {"buyValue": 5642.16, "sellValue": 6639.24, "netValue": -997.08 }}, "05-Apr-2023": {"date": "05-Apr-2023", "FII": {"buyValue": 7383.8, "sellValue": 6576.98, "netValue": 806.82 }, "DII": {"buyValue": 7231.94, "sellValue": 8179.15, "netValue": -947.21 }}, "03-Apr-2023": {"date": "03-Apr-2023", "FII": {"buyValue": 4856.03, "sellValue": 4534.1, "netValue": 321.93 }, "DII": {"buyValue": 5195.98, "sellValue": 5524.22, "netValue": -328.24 }}, "13-Oct-2023": {"date": "13-Oct-2023", "FII": {"buyValue": 10317.87, "sellValue": 10000.86, "netValue": 317.01 }, "DII": {"buyValue": 7660.98, "sellValue": 7763.86, "netValue": -102.88 }}, "12-Oct-2023": {"date": "12-Oct-2023", "FII": {"buyValue": 8601.4, "sellValue": 10463.97, "netValue": -1862.57 }, "DII": {"buyValue": 8706.39, "sellValue": 7174.31, "netValue": 1532.08 }}, "11-Oct-2023": {"date": "11-Oct-2023", "FII": {"buyValue": 12526.94, "sellValue": 12948.71, "netValue": -421.77 }, "DII": {"buyValue": 8369.48, "sellValue": 7337.46, "netValue": 1032.02 }}, "10-Oct-2023": {"date": "10-Oct-2023", "FII": {"buyValue": 8067.15, "sellValue": 9072.64, "netValue": -1005.49 }, "DII": {"buyValue": 8623.58, "sellValue": 6660.24, "netValue": 1963.34 }}, "09-Oct-2023": {"date": "09-Oct-2023", "FII": {"buyValue": 6847.63, "sellValue": 6074.8, "netValue": 772.83 }, "DII": {"buyValue": 399.02, "sellValue": 885.92, "netValue": -486.9 }}, "06-Oct-2023": {"date": "06-Oct-2023", "FII": {"buyValue": 6727.34, "sellValue": 6817.63, "netValue": -90.29 }, "DII": {"buyValue": 7150.57, "sellValue": 6367.32, "netValue": 783.25 }}, "05-Oct-2023": {"date": "05-Oct-2023", "FII": {"buyValue": 10304.08, "sellValue": 12168.28, "netValue": -1864.2 }, "DII": {"buyValue": 7787.18, "sellValue": 7265.77, "netValue": 521.41 }}, "04-Oct-2023": {"date": "04-Oct-2023", "FII": {"buyValue": 9848.55, "sellValue": 14272.57, "netValue": -4424.02 }, "DII": {"buyValue": 10050.08, "sellValue": 8280.59, "netValue": 1769.49 }}, "03-Oct-2023": {"date": "03-Oct-2023", "FII": {"buyValue": 9714.68, "sellValue": 11748.82, "netValue": -2034.14 }, "DII": {"buyValue": 9223.41, "sellValue": 7862.39, "netValue": 1361.02 }}}
					//for(var d=0;d<Object.keys(fii_dii_data_object).length;d++ )
					for(var d=0;d<=10;d++ )
					{
						var dataObj = {}
						dataObj = fii_dii_data_object[ Object.keys(fii_dii_data_object)[d] ]
						
						var dataArray = []
					if( dataObj['date'].includes('Apr-2023') ==false ) {
						for(var obj in dataObj )
						{
							if(obj!='date')
							{
								var tempObj ={}
								tempObj = dataObj[obj]
								tempObj['category'] = obj
								tempObj['date'] = dataObj['date']
								
								dataArray.push( tempObj )
							}
						}
						
						console.log(dataArray)
						await handleData( dataArray, "https://www.nseindia.com/api/fiidiiTradeReact", db, createdAtTime, currentSystemDate);
					}
						
						
					}
					
				}
				
				*/
				
				
				
                
            } catch (err) {
                //console.log(`Cannot import item ${JSON.stringify(item)}: ${err.message}`);
                console.log(`Cannot import item ${myurl}: ${err.message} : ${err}`);
            }
        }
    } 
	
	//await addMargedExtractedNiftyTotalMarket( db, createdAtTime, currentSystemDate )
	//await addExtractedSectorStockNamesData( db, createdAtTime, currentSystemDate )
	//await updateIndex( db, createdAtTime, currentSystemDate )
	
    console.log(`Imported ${counter} from dataset ${datasetId}.`);

    console.log('Done!');
    console.log('docPathForIndexObj', docPathForIndexObj);
    //console.log('onlyForSectorsStocksObj', onlyForSectorsStocksObj);
	
	
	
	 const datasetDrop = await dataset.drop();
	 console.log('datasetDrop', datasetDrop);
	 
	
	} catch (err) {
                //console.log(`Cannot import item ${JSON.stringify(item)}: ${err.message}`);
                console.log(`Error while running main ${err.message} : ${err}`);
            }
});
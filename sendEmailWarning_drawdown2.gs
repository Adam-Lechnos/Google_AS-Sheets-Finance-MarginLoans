function sendEmailWarningMargin2() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("2 - Summary").getRange("E10"); 
  var errorStatus = errorRange.getValue();
  var errorCheckRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("I18");
  var errorCheck = errorCheckRange.getValue();
  var errorCheckPort = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("I20").getValue();

  errorCheckTH = 1000
  errorCheckCount = 0

  // Give time for portfolio data source error to self resolve
  while (errorCheckPort && errorCheckCount < errorCheckTH){
    console.log("Port Source Error Status: "+errorCheckPort+"    Check Count:"+errorCheckCount+"/"+errorCheckTH);
    var errorCheckPort = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("I20").getValue();
    SpreadsheetApp.flush()
    errorCheckCount++
    }

  if (errorCheckCount == errorCheckTH){
    throw new Error("Portfolio data source error never self resolved (https://docs.google.com/spreadsheets/d/1w-VEbztIxeHQCyk-djNfMLML13XtZxiYi-oV4icEE0U/edit?gid=1030256512#gid=1030256512). This script will run again in 2 hours, exiting.")
  }

  // check interest_rate data import completes
  scriptFuncName = 'sendEmailWarningMargin2'
  scriptFileName = scriptFuncName+'.gs'
  checkInterestHook(scriptFileName, scriptFuncName)

  // Check remaining drawdown thresholds
  if (errorStatus<.10 && errorStatus>.01 && errorCheck === false){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Warning in Margin Loan Payment/Interest Schedule spreadsheet, "2 - Summary" tab (https://docs.google.com/spreadsheets/d/1VIMroeCLz7VhWoUNvLd8jZmn1VYBB0ANc2BPlNZN4AA/edit?gid=1783973611#gid=1783973611), Drawdown remaining has dropped below 10% !'; // Second column
    var subject = 'Portfolio Margin Call Warning - Margin Loan Payment/Interest Schedule';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}
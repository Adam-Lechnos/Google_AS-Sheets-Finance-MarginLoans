function errorCheckinterestRate() {
  // Fetch error status
  var errorStatus = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("interest_rate_curr").getRange("I2").getValue();
  errorCheckTH = 1000
  errorCheckCount = 0

    // Give time for error to self resolve
  while (errorStatus && errorCheckCount < errorCheckTH){
    console.log("Error Status: "+errorStatus+"    Check Count:"+errorCheckCount+"/"+errorCheckTH)
    SpreadsheetApp.flush()
    var errorStatus = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("interest_rate_curr").getRange("I2").getValue(); 
    errorCheckCount++
    }

  // Check error status
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Error in spreadsheet "Margin Loan Payment/Interest Schedule", "interest_rate_curr" tab (https://docs.google.com/spreadsheets/d/1VIMroeCLz7VhWoUNvLd8jZmn1VYBB0ANc2BPlNZN4AA/edit?gid=1890633914#gid=1890633914)'; // Second column
    var subject = 'Spreadsheet Error - Margin Loan Payment/Interest Schedule';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}
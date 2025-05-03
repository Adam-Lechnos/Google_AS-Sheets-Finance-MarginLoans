function checkInterestHook(fileName, scriptName) {

  // check interest_rate data import completes
  var timeOutTH = 10;
  var importCheck = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("interest_rate_curr").getRange("A2").getValue();
  
  checkCount = 1
  while (importCheck == "No Data" || importCheck == null || importCheck < 0 || !importCheck) {      
    SpreadsheetApp.flush()
    importCheck = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("interest_rate_curr").getRange("A2").getValue();
    console.log(`Run attempt ${checkCount}`)
    checkCount += 1;
    if (checkCount == timeOutTH) {
      // Fetch the email address
      var emailAddress = 'adam.lechnos@gmail.com';
      // Send Alert Email.
      var message = 'Script termination for Securities. "' + scriptName + '" Importrange not loading. Check "Margin Loan Payment/Interest Schedule", "interest_rate_curr" tab (https://docs.google.com/spreadsheets/d/1VIMroeCLz7VhWoUNvLd8jZmn1VYBB0ANc2BPlNZN4AA/edit?gid=1890633914#gid=1890633914). Check and re-run script manually.'; // Second column
      var subject = 'Spreadsheet Script Termination - "Margin Loan Payment/Interest Schedule" - ' + fileName;
      MailApp.sendEmail(emailAddress, subject, message);
      console.log("ImportRange data load timed out")
      return;
    }
  }
}
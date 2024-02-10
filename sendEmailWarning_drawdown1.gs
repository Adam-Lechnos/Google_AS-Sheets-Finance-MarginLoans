function sendEmailWarningMargin() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("E10"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus<.10 && errorStatus>.01){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Warning in Margin Loan Payment/Interest Schedule spreadsheet, "Summary" tab (https://docs.google.com/spreadsheets/d/1VIMroeCLz7VhWoUNvLd8jZmn1VYBB0ANc2BPlNZN4AA), Drawdown remaining has dropped below 10% !'; // Second column
    var subject = 'Portfolio Margin Call Warning - Margin Loan Payment/Interest Schedule';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}
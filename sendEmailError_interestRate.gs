function errorCheckinterestRate() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("interest_rate_curr").getRange("I2"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Error in spreadsheet "Margin Loan Payment/Interest Schedule", "interest_rate_curr" tab (https://docs.google.com/spreadsheets/d/1VIMroeCLz7VhWoUNvLd8jZmn1VYBB0ANc2BPlNZN4AA)'; // Second column
    var subject = 'Spreadsheet Error - Margin Loan Payment/Interest Schedule';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}
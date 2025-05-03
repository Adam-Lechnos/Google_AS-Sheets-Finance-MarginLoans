function FreezeValueEntry2SP(){

  // check interest_rate data import completes
  scriptFuncName = '2 -  Securities Purchases'
  scriptFileName = scriptFuncName+'.gs'
  checkInterestHook(scriptFileName, scriptFuncName)

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("2 - Securities Purchases");
  var range = sheet.getRange("O8:O367");
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] > 0) {
      var cell = range.offset(i, 0, 1, 1);   
      cell.copyTo(cell, {contentsOnly:true});
    }
  }
}
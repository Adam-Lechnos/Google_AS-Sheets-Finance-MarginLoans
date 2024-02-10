function FreezeValueEntry2VL(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("2 - Vehicle Loan");
  var range = sheet.getRange("O8:O367");
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] > 0) {
      var cell = range.offset(i, 0, 1, 1);   
      cell.copyTo(cell, {contentsOnly:true});
    }
  }
}
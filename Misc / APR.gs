function FreezeValueEntryMapr(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Misc");
  var range = sheet.getRange("C8:C367");
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] > 0) {
      var cell = range.offset(i, 0, 1, 1);   
      cell.copyTo(cell, {contentsOnly:true});
    }
  }
}
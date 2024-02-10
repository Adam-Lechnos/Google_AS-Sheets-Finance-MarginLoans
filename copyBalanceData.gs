function copyBalanceData() {
     var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("non-sec_balance_total");
     //var sh = ss.getActiveSheet();
     //sh.insertColumnAfter(2); 
     var range = ss.getRange("B2");
     var values = range.getValues();
     var add = ss.getRange("C2");
     add.setValue(values);
     var range = ss.getRange("B3");
     var values = range.getValues();
     var add = ss.getRange("C3");
     add.setValue(values);
}
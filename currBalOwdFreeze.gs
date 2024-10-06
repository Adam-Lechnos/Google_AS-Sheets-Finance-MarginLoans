function currBalOwdFreeze() {


  const tabs = ["Vehicle Loan", "Property Loan", "Misc", "Securities Purchases", "2 - Vehicle Loan", "2 - Property Loan", "2 - Misc", "2 - Securities Purchases"]

  
  let i = 0
  while (i < tabs.length){
    currTab = tabs[i]

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(currTab);
    var currBalanceOwed = sheet.getRange("U5").getValues()

    sheet.getRange("Q5").setValues(currBalanceOwed)

    i++
  }
  
}

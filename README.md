# Google_AS-Sheets-Finance-MarginLoans
Google Sheets automation for calculating margin loan interest, risk, and amount owed

## Google Apps Script Configuration

### Triggers

| Function | Event Source ( - t)^ | Time Based Trigger ( - nn)* | Time of Day / Hour | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| copyBalanceData | Time-driven | Day | 8pm to 9pm | Daily |
| FreezeValueEntryVLapr | Time-driven | Day | 1am to 2am | Daily |
| FreezeValueEntryPL | Time-drive | Month - 15th | 4am to 5am | Weekly |
| FreezeValueEntry2PL | Time-drive | Month - 15th | 5am to 6am | Weekly |
| FreezeValueEntry2PLapr | Time-driven | Day | 2am to 3am | Daily |
| FreezeValueEntry2VL | Time-drive | Month - 15th | 5am to 6am | Weekly |
| FreezeValueEntryM | Time-drive | Month - 15th | 4am to 5am | Weekly |
| FreezeValueEntry2Mapr | Time-drive | Day timer | 2am to 3am | Daily |
| FreezeValueEntry2SPapr | Time-drive | Day timer | 2am to 3am | Daily |
| FreezeValueEntryVL | Time-drive | Month - 15th | 4am to 5am | Daily |
| FreezeValueEntryMapr | Time-drive | Day timer | 1am to 2am | Daily |
| FreezeValueEntryPLapr | Time-drive | Day timer | 1am to 2am | Daily |
| FreezeValueEntry2SP | Time-drive | Month - 15th | 5am to 6am | Weekly |
| FreezeValueEntrySP | Time-drive | Month - 15th | 4am to 5am | Daily |
| sendEmailWarningMargin | Time-driven | Hour timer | Every 2 hours | Daily |
| sendEmailWarningMargin2 | Time-driven | Hour timer | Every 2 hours | Daily |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected* \
*\^Event type if `From spreadsheet` is selected*

<sup><sub>Spreadsheet Name: `Margin Loan Payment/Interest Schedule`</sup></sub>

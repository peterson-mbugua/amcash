{
  "exportFormatVersion": 2,
  "containerVersion": {
    "container": {
      "publicId": "GTM-XXXXXXX",
      "name": "AmCash GTM Container",
      "usageContext": [
        "WEB"
      ]
    },
    "tag": [
      {
        "name": "GA4 - Config",
        "type": "gaawe",
        "parameter": [
          {
            "key": "measurementId",
            "value": "G-XXXXXXXXXX"
          }
        ],
        "triggerId": [
          "2147479553"
        ]
      },
      {
        "name": "GA4 - View Homepage",
        "type": "gaawe",
        "parameter": [
          {
            "key": "eventName",
            "value": "view_homepage"
          },
          {
            "key": "sendEcommerceData",
            "value": "false"
          }
        ],
        "triggerId": [
          "1001"
        ]
      },
      {
        "name": "GA4 - View Services",
        "type": "gaawe",
        "parameter": [
          {
            "key": "eventName",
            "value": "view_services"
          }
        ],
        "triggerId": [
          "1002"
        ]
      },
      {
        "name": "GA4 - Loan Form Start",
        "type": "gaawe",
        "parameter": [
          {
            "key": "eventName",
            "value": "loan_form_start"
          }
        ],
        "triggerId": [
          "1003"
        ]
      },
      {
        "name": "GA4 - Loan Form Submit",
        "type": "gaawe",
        "parameter": [
          {
            "key": "eventName",
            "value": "loan_form_submit"
          }
        ],
        "triggerId": [
          "1004"
        ]
      },
      {
        "name": "GA4 - Deposit Click",
        "type": "gaawe",
        "parameter": [
          {
            "key": "eventName",
            "value": "deposit_click"
          }
        ],
        "triggerId": [
          "1005"
        ]
      },
      {
        "name": "GA4 - Withdrawal Click",
        "type": "gaawe",
        "parameter": [
          {
            "key": "eventName",
            "value": "withdrawal_click"
          }
        ],
        "triggerId": [
          "1006"
        ]
      }
    ],
    "trigger": [
      {
        "triggerId": "2147479553",
        "name": "All Pages",
        "type": "PAGEVIEW"
      },
      {
        "triggerId": "1001",
        "name": "Homepage View",
        "type": "PAGEVIEW"
      },
      {
        "triggerId": "1002",
        "name": "Services View",
        "type": "PAGEVIEW"
      },
      {
        "triggerId": "1003",
        "name": "Loan Form Start",
        "type": "CLICK"
      },
      {
        "triggerId": "1004",
        "name": "Loan Form Submit",
        "type": "FORM_SUBMISSION"
      },
      {
        "triggerId": "1005",
        "name": "Deposit Button Click",
        "type": "CLICK"
      },
      {
        "triggerId": "1006",
        "name": "Withdrawal Button Click",
        "type": "CLICK"
      }
    ]
  }
}
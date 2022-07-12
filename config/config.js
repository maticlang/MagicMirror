let config = {
  "address": "localhost",
  "port": 8080,
  "basePath": "/",
  "kioskmode": false,
  "electronOptions": {},
  "ipWhitelist": [
    "127.0.0.1",
    "::ffff:127.0.0.1",
    "::1"
  ],
  "language": "sl",
  "logLevel": [
    "INFO",
    "LOG",
    "WARN",
    "ERROR"
  ],
  "timeFormat": 24,
  "units": "metric",
  "zoom": 1,
  "customCss": "css/custom.css",
  "httpHeaders": {
    "contentSecurityPolicy": false,
    "crossOriginOpenerPolicy": false,
    "crossOriginEmbedderPolicy": false,
    "crossOriginResourcePolicy": false,
    "originAgentCluster": false
  },
  "modules": [
    {
      "module": "alert"
    },
    {
      "module": "updatenotification",
      "position": "top_bar"
    },
    {
      "module": "clock",
      "position": "top_left"
    },
    {
      "module": "calendar",
      "header": "US Holidays",
      "position": "top_left",
      "config": {
        "calendars": [
          {
            "symbol": "calendar-check",
            "url": "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
          }
        ]
      }
    },
    {
      "module": "compliments",
      "position": "lower_third",
      "config": {
        "compliments": {
          "anytime": [
            "Zdravo Matic!"
          ],
          "morning": [
            "Dobro jutro, Matic."
          ],
          "afternoon": [
            "Daj vse od sebe."
          ],
          "evening": [
            "Lahko noč, Matic."
          ]
        }
      }
    },
    {
      "module": "weather",
      "position": "top_right",
      "config": {
        "weatherProvider": "openweathermap",
        "type": "current",
        "location": "Slovenska Bistrica, Slovenia",
        "apiKey": "86dda773d6164df7618db68c5342f794"
      }
    },
    {
      "module": "weather",
      "position": "top_right",
      "header": "Weather Forecast",
      "config": {
        "weatherProvider": "openweathermap",
        "type": "forecast",
        "location": "Slovenska Bistrica, Slovenia",
        "apiKey": "86dda773d6164df7618db68c5342f794"
      }
    },
    {
      "module": "newsfeed",
      "position": "bottom_bar",
      "config": {
        "feeds": [
          {
            "title": "New York Times",
            "url": "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
          }
        ],
        "showSourceTitle": true,
        "showPublishDate": true,
        "broadcastNewsFeeds": true,
        "broadcastNewsUpdates": true
      }
    }
  ],
  "paths": {
    "modules": "modules",
    "vendor": "vendor"
  },
  "useHttps": false,
  "httpsPrivateKey": "",
  "httpsCertificate": "",
  "locale": "en-US"
};if (typeof module !== 'undefined') {module.exports = config;}
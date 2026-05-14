{
  "name": "J.A.R.V.I.S",
  "short_name": "JARVIS",
  "description": "Just A Rather Very Intelligent System — AI Companion",
  "start_url": "/JARVIS-pwa/index.html?activate=0",
  "display": "standalone",
  "display_override": ["standalone", "fullscreen"],
  "orientation": "portrait",
  "background_color": "#020810",
  "theme_color": "#020810",
  "scope": "/JARVIS-pwa/",
  "lang": "en",
  "categories": ["utilities", "productivity"],
  "icons": [
    { "src": "/JARVIS-pwa/icons/icon-72.png",   "sizes": "72x72",   "type": "image/png", "purpose": "any maskable" },
    { "src": "/JARVIS-pwa/icons/icon-96.png",   "sizes": "96x96",   "type": "image/png", "purpose": "any maskable" },
    { "src": "/JARVIS-pwa/icons/icon-128.png",  "sizes": "128x128", "type": "image/png", "purpose": "any maskable" },
    { "src": "/JARVIS-pwa/icons/icon-144.png",  "sizes": "144x144", "type": "image/png", "purpose": "any maskable" },
    { "src": "/JARVIS-pwa/icons/icon-152.png",  "sizes": "152x152", "type": "image/png", "purpose": "any maskable" },
    { "src": "/JARVIS-pwa/icons/icon-192.png",  "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/JARVIS-pwa/icons/icon-384.png",  "sizes": "384x384", "type": "image/png", "purpose": "any maskable" },
    { "src": "/JARVIS-pwa/icons/icon-512.png",  "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ],
  "shortcuts": [
    {
      "name": "Activate JARVIS",
      "short_name": "Activate",
      "description": "Open JARVIS ready to listen",
      "url": "/JARVIS-pwa/index.html?activate=1",
      "icons": [{ "src": "/JARVIS-pwa/icons/icon-96.png", "sizes": "96x96" }]
    }
  ],
  "protocol_handlers": [
    { "protocol": "web+jarvis", "url": "/JARVIS-pwa/index.html?cmd=%s" },
    { "protocol": "mailto",     "url": "/JARVIS-pwa/index.html?mailto=%s" },
    { "protocol": "sms",        "url": "/JARVIS-pwa/index.html?sms=%s" },
    { "protocol": "tel",        "url": "/JARVIS-pwa/index.html?tel=%s" }
  ],
  "file_handlers": [
    {
      "action": "/JARVIS-pwa/index.html",
      "accept": {
        "text/plain":       [".txt"],
        "text/markdown":    [".md"],
        "application/pdf":  [".pdf"],
        "image/png":        [".png"],
        "image/jpeg":       [".jpg", ".jpeg"],
        "audio/mpeg":       [".mp3"],
        "audio/wav":        [".wav"],
        "application/json": [".json"]
      },
      "icons": [{ "src": "/JARVIS-pwa/icons/icon-96.png", "sizes": "96x96" }],
      "launch_type": "single-client"
    }
  ],
  "share_target": {
    "action": "/JARVIS-pwa/index.html",
    "method": "GET",
    "params": {
      "title": "share_title",
      "text":  "share_text",
      "url":   "share_url"
    }
  },
  "background_sync": {
    "tag": "jarvis-sync"
  }
}

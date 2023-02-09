# Implement retrieve track pitch analysis for selected track

- Check if track object returned by Spotify search endpoint is the same as track object returned by track endpoint. (see sample requests at the bottom of markdown)

- Yes, they're identical! Create a type for this type of resource. Include in the type only values you're presently using. 

- Update references to Track objects as SpotifyTrack types

`/search?q=Te%20Gosto&type=track`:
```json
{
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1WkZvxuA4zCcFF9GChK6Vr"
              },
              "href": "https://api.spotify.com/v1/artists/1WkZvxuA4zCcFF9GChK6Vr",
              "id": "1WkZvxuA4zCcFF9GChK6Vr",
              "name": "Grupo Fundo De Quintal",
              "type": "artist",
              "uri": "spotify:artist:1WkZvxuA4zCcFF9GChK6Vr"
            }
          ],
          "available_markets": ["AD","AE","AG","AL","AM","AO","AR","AT","AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CD","CG","CH","CI","CL","CM","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ES","ET","FI","FJ","FM","FR","GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IN","IQ","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MN","MO","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PS","PT","PW","PY","QA","RO","RS","RW","SA","SB","SC","SE","SG","SI","SK","SL","SM","SN","SR","ST","SV","SZ","TD","TG","TH","TJ","TL","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VC","VE","VN","VU","WS","XK","ZA","ZM","ZW"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/25Y5N1aFJaScEWxl9cP1oF"
          },
          "href": "https://api.spotify.com/v1/albums/25Y5N1aFJaScEWxl9cP1oF",
          "id": "25Y5N1aFJaScEWxl9cP1oF",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735de256a1d975c8e275663546",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025de256a1d975c8e275663546",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515de256a1d975c8e275663546",
              "width": 64
            }
          ],
          "name": "Nos Pagodes da Vida",
          "release_date": "1983-01-01",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:25Y5N1aFJaScEWxl9cP1oF"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1WkZvxuA4zCcFF9GChK6Vr"
            },
            "href": "https://api.spotify.com/v1/artists/1WkZvxuA4zCcFF9GChK6Vr",
            "id": "1WkZvxuA4zCcFF9GChK6Vr",
            "name": "Grupo Fundo De Quintal",
            "type": "artist",
            "uri": "spotify:artist:1WkZvxuA4zCcFF9GChK6Vr"
          }
        ],
        "available_markets": ["AD","AE","AG","AL","AM","AO","AR","AT","AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CD","CG","CH","CI","CL","CM","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ES","ET","FI","FJ","FM","FR","GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IN","IQ","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MN","MO","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PS","PT","PW","PY","QA","RO","RS","RW","SA","SB","SC","SE","SG","SI","SK","SL","SM","SN","SR","ST","SV","SZ","TD","TG","TH","TJ","TL","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VC","VE","VN","VU","WS","XK","ZA","ZM","ZW"
        ],
        "disc_number": 1,
        "duration_ms": 197466,
        "explicit": false,
        "external_ids": {
          "isrc": "BRRGE9400485"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3TzfIww5XpGTFzLHSxS7ho"
        },
        "href": "https://api.spotify.com/v1/tracks/3TzfIww5XpGTFzLHSxS7ho",
        "id": "3TzfIww5XpGTFzLHSxS7ho",
        "is_local": false,
        "name": "Te Gosto",
        "popularity": 38,
        "preview_url": "https://p.scdn.co/mp3-preview/59f8140d25dcfaea32f6e7659b32bb552d04a78e?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3TzfIww5XpGTFzLHSxS7ho"
      }
```

`/track/3TzfIww5XpGTFzLHSxS7ho`:
```json
{
  "album": {
    "album_type": "album",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1WkZvxuA4zCcFF9GChK6Vr"
        },
        "href": "https://api.spotify.com/v1/artists/1WkZvxuA4zCcFF9GChK6Vr",
        "id": "1WkZvxuA4zCcFF9GChK6Vr",
        "name": "Grupo Fundo De Quintal",
        "type": "artist",
        "uri": "spotify:artist:1WkZvxuA4zCcFF9GChK6Vr"
      }
    ],
    "available_markets": ["AD","AE","AG","AL","AM","AO","AR","AT","AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CD","CG","CH","CI","CL","CM","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ES","ET","FI","FJ","FM","FR","GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IN","IQ","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MN","MO","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PS","PT","PW","PY","QA","RO","RS","RW","SA","SB","SC","SE","SG","SI","SK","SL","SM","SN","SR","ST","SV","SZ","TD","TG","TH","TJ","TL","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VC","VE","VN","VU","WS","XK","ZA","ZM","ZW"
    ],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/25Y5N1aFJaScEWxl9cP1oF"
    },
    "href": "https://api.spotify.com/v1/albums/25Y5N1aFJaScEWxl9cP1oF",
    "id": "25Y5N1aFJaScEWxl9cP1oF",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2735de256a1d975c8e275663546",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e025de256a1d975c8e275663546",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d000048515de256a1d975c8e275663546",
        "width": 64
      }
    ],
    "name": "Nos Pagodes da Vida",
    "release_date": "1983-01-01",
    "release_date_precision": "day",
    "total_tracks": 12,
    "type": "album",
    "uri": "spotify:album:25Y5N1aFJaScEWxl9cP1oF"
  },
  "artists": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/1WkZvxuA4zCcFF9GChK6Vr"
      },
      "href": "https://api.spotify.com/v1/artists/1WkZvxuA4zCcFF9GChK6Vr",
      "id": "1WkZvxuA4zCcFF9GChK6Vr",
      "name": "Grupo Fundo De Quintal",
      "type": "artist",
      "uri": "spotify:artist:1WkZvxuA4zCcFF9GChK6Vr"
    }
  ],
  "available_markets": ["AD","AE","AG","AL","AM","AO","AR","AT","AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CD","CG","CH","CI","CL","CM","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ES","ET","FI","FJ","FM","FR","GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IN","IQ","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MN","MO","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PS","PT","PW","PY","QA","RO","RS","RW","SA","SB","SC","SE","SG","SI","SK","SL","SM","SN","SR","ST","SV","SZ","TD","TG","TH","TJ","TL","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VC","VE","VN","VU","WS","XK","ZA","ZM","ZW"
  ],
  "disc_number": 1,
  "duration_ms": 197466,
  "explicit": false,
  "external_ids": {
    "isrc": "BRRGE9400485"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/3TzfIww5XpGTFzLHSxS7ho"
  },
  "href": "https://api.spotify.com/v1/tracks/3TzfIww5XpGTFzLHSxS7ho",
  "id": "3TzfIww5XpGTFzLHSxS7ho",
  "is_local": false,
  "name": "Te Gosto",
  "popularity": 38,
  "preview_url": "https://p.scdn.co/mp3-preview/59f8140d25dcfaea32f6e7659b32bb552d04a78e?cid=774b29d4f13844c495f206cafdad9c86",
  "track_number": 2,
  "type": "track",
  "uri": "spotify:track:3TzfIww5XpGTFzLHSxS7ho"
}
```

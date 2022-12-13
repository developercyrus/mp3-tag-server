### Notes
```bash
On 2022 Dec 08, found that some of mp3 with version version 2.4 cannot be parsed correctly. Please switch to <a href="https://github.com/developercyrus/mp3-tag-server-v2">verson 2</a>
```

### Run by docker
```bash
sudo docker run \
 --name mp3-tag-server \
 -p 3004:3004 \
 --volume /home/peter/music:/music \
 developercyrus/mp3-tag-server
```

### Run by CLi
```bash
git clone https://github.com/developercyrus/mp3-tag-server
npm install

export MUSIC=/home/peter/music
node index.js
```


### /api
```json
{
  "results": [{
      "id": 1,
      "filename": "/home/peter/music/070930.mp3",
      "tags": {
        "version": {
          "v1": {
            "major": 1,
            "minor": 1
          },
          "v2": {
            "major": 2,
            "flags": {
              "unsync": 0,
              "xheader": 0,
              "experimental": 0
            },
            "minor": 3,
            "revision": 0
          }
        },
        "album": "講道",
        "artist": "XXX",
        "title": "同心",
        "year": "2007",
        "comment": "",
        "track": 0,
        "genre": ""
      },
      "lyricshort": null
    }, {
      "id": 2,
      "filename": "/home/peter/music/070923.mp3",
      "tags": {
        "version": {
          "v1": {
            "major": 1,
            "minor": 1
          },
          "v2": {
            "major": 2,
            "flags": {
              "unsync": 0,
              "xheader": 0,
              "experimental": 0
            },
            "minor": 4,
            "revision": 0
          }
        },
        "image": {
          "type": "other",
          "mime": "image/",
          "imageType": null,
          "description": null,
          "data": {
            "type": "Buffer",
            "data": []
          }
        },
        "album": "講道",
        "composer": "太18:19-20",
        "recording-time": "2007",
        "title": "禱告",
        "artist": "XXX",
        "band": "XXX",
        "lyrics": "太18:19-20",
        "year": "2007",
        "comment": "",
        "track": 0,
        "genre": ""
      },
      "lyricshort": "太18:19-20..."
    }
  ]
}

```

### /api/:id
```json
{
  "results": [{
      "id": 1,
      "filename": "/home/peter/music/070930.mp3",
      "tags": {
        "version": {
          "v1": {
            "major": 1,
            "minor": 1
          },
          "v2": {
            "major": 2,
            "flags": {
              "unsync": 0,
              "xheader": 0,
              "experimental": 0
            },
            "minor": 3,
            "revision": 0
          }
        },
        "album": "講道",
        "artist": "XXX",
        "title": "同心",
        "year": "2007",
        "comment": "",
        "track": 0,
        "genre": ""
      },
      "lyricshort": null
    }
  ]
}

```



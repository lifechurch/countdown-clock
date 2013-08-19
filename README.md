# Description

Basic countdown timer used on www.lifechurch.tv and for live.lifechurch.tv.

# Requirements

JSON data with a unix timestamp for the time you're counting down to. Sample:

    {"next_timestamp":1330043400,"next_title":"Samson","next_description":"Emotions That Take Strong Men Down"}

"next_title" and "next_description" are completely optional.  If you choose not to use them, you can remove references to them in the sample HTML, CSS, and JS.

# Notes

1. If you want to test out this code as-is, just fire up a Python server and point your browser to ```http://localhost:8000```

        $ cd /my-project-path/
        $ python -m SimpleHTTPServer

2. The existing ```application.js``` file uses the LifeChurch instance of the Church Online Platform to pull live event data.

3. If you are a Church Online Platform church, make sure to replace ```var church_url = "lifechurch-tv.churchonline.org";``` with your church's domain.
#!/usr/bin/env python

import sys
import csv
from dateutil.parser import parse
from datetime import datetime, timedelta


formatstring = '{{"courseName": "{}", "courseNum": {}, "CRN": {}, "classTime": " {}", "finalStart": new Date({},{},{},{},{},0,0), "finalEnd": new Date({},{},{},{},{},0,0), "finalLocation": "{}", "finalRoom": "{}"}},'
formatstring2 = '{{"courseName": "{}", "courseNum": {}, "CRN": {}, "classTime": " {}", "finalStart": new Date({},{},{},{},{},0,0), "finalEnd": new Date({},{},{},{},{},0,0), "finalLocation": "{}", "finalRoom": "{}"}}'

with open(sys.argv[1], 'r') as infile:
    reader = csv.reader(infile, delimiter=',', quotechar='"')
    iterreader = iter(reader)
    next(iterreader)
    for row in iterreader:
        col1 = row[0].split(" ")
        if (col1[0] == 'CS'):
            courseName = col1[0]
            courseNum = col1[1]
            crn = col1[3]
            try:
                newCrn = int(crn)
            except ValueError:
                crn = "0"
            col1 = row[0].split(" - ")
            classTime = ""
            if (len(col1) > 2):
                classTime = col1[2]
            building = row[3]
            room = row[4]
            day = row[1].split(" ")
            finaltime = row[2].split(" - ")
            finalend = finaltime[1].split(" ")
            starthour = 0
            startmin = 0
            endhour = 0
            endmin = 0
            start = finaltime[0].split(":")
            end = finaltime[1].split(":")
            if (finalend[1] == "pm" or finalend[1] == "PM"):
                if (int(end[0]) > 2 and int(end[0]) != 12):
                    start[0] = int(start[0]) + 12
                    end[0] = int(end[0]) + 12
                elif (int(end[0]) == 1 or int(end[0]) == 2):
                    end[0] = int(end[0]) + 12
            starthour = start[0]
            startmin = start[1]
            endhour = end[0]
            endmintemp = end[1].split(" ")
            endmin = endmintemp[0]

            print(formatstring.format(courseName, courseNum, crn, classTime, 2018, 5, day[2], starthour, startmin, 2018, 5, day[2], endhour, endmin, building, room))
            #print(", ".join((courseName, courseNum, crn, classTime, building, room, str(starthour), str(startmin), str(endhour), str(endmin))))

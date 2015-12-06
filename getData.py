#!/usr/bin/env python

import sys
import csv
from dateutil.parser import parse
from datetime import datetime, timedelta


formatstring = '{"courseName": "%s", "courseNum": %d, "CRN": %d, "classTime": " %s", "finalStart": new Date(%d,%d,%d,%d,0,0,0), "finalEnd": new Date(%d,%d,%d,%d,0,0,0), "finalLocation": "%s", "finalRoom": "%s"},'

with open(sys.argv[1], 'r') as infile:
    reader = csv.reader(infile, delimiter=',', quotechar='"')
    iterreader = iter(reader)
    next(iterreader)
    for row in iterreader:
        col1 = row[0].split(" ")
        courseName = col1[0]
        courseNum = col1[1]
        crn = col1[3]
        col1 = row[0].split(" - ")
        classTime = ""
        if (len(col1) > 2):
            classTime = col1[2]
        building = row[3]
        room = row[4]
        day = row[1]
        finaltime = row[2].split(" - ")
        starttime = finaltime[0]
        endtime = finaltime[1]
        dayp = parse(day)
        endtimep = parse(endtime)
        enddatetimep = dayp
        enddatetimep = enddatetimep.replace(hour=endtimep.hour, minute=endtimep.minute)
        startdatetimep = dayp
        startdatetimep = startdatetimep.replace(hour=starttimep.hour, minute=starttimep.minute)
        print(startdatetimep)
        print(enddatetimep)
        print(", ".join((courseName, courseNum, crn, classTime, building, room, starttime, endtime)))

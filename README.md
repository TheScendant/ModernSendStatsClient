# Modern SendStats

This project is a rewrite of the client of SendStats

## Motives

I originally wrote the SendStatsClient several years ago and while it was well written for the time, it certainly could use improvement.
New libraries such as wrappers for d3 and features from React can greatly increase this project's efficiency and readability.

I abandoned the project for a while once MountainProject shut down their data api (see SendStatsServer) but I've decided that since I track
my climbing data anyway I might as well build a clean user interfact to display it. 

I plan to leverage React 18's new features and some helpful Tanstack libraries such as React Query to build a modern app.
I'll also rely on recharts to build graphs instead of handrolling them in d3.

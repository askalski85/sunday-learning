#!/usr/bin/env bash

npm install typescript

echo "Fix TypeScript complaining about missing ajax library"
npm install --save @types/jquery

echo "Manually creaded definitions need to be added manually"
echo "It might be a lot of work, but can help you if you reuse your library often"
echo "Use existing libraries as ane example"

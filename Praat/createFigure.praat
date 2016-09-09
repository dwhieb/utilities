# select the sound and text grid to create the figure from, then run this script

# set the pitch range
pitchMin = 75
pitchMax = 600

# set the number of tiers
tiers = 3

# set the width multiplier
multiplier = 5

# get the sound and text grid objects
  sound = selected ("Sound")
  textGrid = selected ("TextGrid")

# draw spectrogram
  selectObject: sound
  To Spectrogram: 0.005, 5000, 0.002, 20, "Gaussian"
  duration = Get total duration
  width = duration * multiplier
  Erase all
  Select inner viewport: 0, width, 0, 3
  Paint: 0, 0, 0, 0, 100, "yes", 45, 6, 0, "no"
  Remove

# draw pitch trace
  selectObject: sound
  To Pitch: 0, pitchMin, pitchMax
  Red
  Line width: 10
  Draw: 0, 0, pitchMin, pitchMax, "no"
  Line width: 1
  One mark right: pitchMax, "no", "yes", "no", string$(pitchMax) + "Hz"
  One mark right: pitchMin, "no", "yes", "no", string$(pitchMin) + "Hz"
  Remove

# draw textGrid
  18
  if tiers = 4
    height = 6.0
  elsif tiers = 3
    height = 5.25
  elsif tiers = 2
    height = 4.5
  endif
  selectObject: textGrid
  Select inner viewport: 0, width, 0, height
  Black
  Line width: 1
  Draw: 0, 0, "yes", "yes", "yes"

plusObject: sound



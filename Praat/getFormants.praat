form Which tier is your segments tier?
  positive segmentsTier 1
endform

# Prompt user for audio file and save to variable
audioFile$ = chooseReadFile$: "Select the audio file to process."

# Prompt user for text grid and save to variable
textGrid$ = chooseReadFile$: "Select the text grid that goes with this audio file."

if audioFile$ <> "" and textGrid$ <> ""

  audio = Read from file: audioFile$
  textGrid = Read from file: textGrid$

  writeFileLine: "formants.txt", "Interval  Segment Word  IU"

  selectObject: textGrid

  n = Get number of intervals: segmentsTier

  for i from 1 to n

    if
      
    else
    endif

  endfor

endif

"""
Created on Tue Apr  9 16:13:40 2019
@author: oren
Selects 2 coders for each essay and ratifies scores to a final document

Need to adjust directory then read file at start and write file at the end
"""

import pandas as pd
import numpy as np

#read in data, remove example row, drop unused columns
data = pd.read_csv('Luz class trial.csv')
data = data[1:]
data = data.drop(columns = ['Coding Initials','Unnamed: 11','Unnamed: 12','Unnamed: 13','Unnamed: 14','Unnamed: 15','Unnamed: 16','Unnamed: 17','Unnamed: 18','Unnamed: 19','Unnamed: 20','Unnamed: 21','Unnamed: 22','Unnamed: 23','Unnamed: 24','Unnamed: 25','Unnamed: 26','Notes'])

#Getting sample of 2 raters randomly from the 3 raters we have
dd=data.groupby(['Essay Number']).apply(lambda x :x.iloc[np.random.choice(range(0, len(x)), size = 2, replace = False)])
data = data.set_index('Essay Number')
dd = dd.set_index('Essay Number')
dd[['Position Code','Claim Code','Evidence Code','Reasoning Code', 'Addressing the Opposition','Organization','Science Content','Social Studies Content']] = dd[['Position Code','Claim Code','Evidence Code','Reasoning Code', 'Addressing the Opposition','Organization','Science Content','Social Studies Content']].apply(pd.to_numeric)

#Getting Max and Min for the two raters
dd2 = []
dd2 = dd.groupby('Essay Number').agg({'Position Code': ['max','min'],
                                        'Claim Code': ['max', 'min'],
                                        'Evidence Code': ['max', 'min'],
                                        'Reasoning Code': ['max', 'min'],
                                        'Addressing the Opposition': ['max', 'min'],
                                        'Organization': ['max', 'min'],
                                        'Science Content': ['max', 'min'],
                                        'Social Studies Content': ['max', 'min']})

#removes Multiindex
dd2.columns = ["_".join(x) for x in dd2.columns.ravel()]

#tagging essays needing a 3rd coder

dd2['Position 3rd'] = np.where((dd2['Position Code_max'] >= 1) & (dd2['Position Code_min'] == 0), 'True',\
   np.where((dd2['Position Code_max'] - dd2['Position Code_min'] > 1), 'True', 'False'))

dd2['Claim 3rd'] = np.where((dd2['Claim Code_max'] >= 1) & (dd2['Claim Code_min'] == 0), 'True',\
   np.where((dd2['Claim Code_max'] - dd2['Claim Code_min'] > 1), 'True', 'False'))

dd2['Evidence 3rd'] = np.where((dd2['Evidence Code_max'] >= 1) & (dd2['Evidence Code_min'] == 0), 'True',\
   np.where((dd2['Evidence Code_max'] - dd2['Evidence Code_min'] > 1), 'True', 'False'))

dd2['Reasoning 3rd'] = np.where((dd2['Reasoning Code_max'] >= 1) & (dd2['Reasoning Code_min'] == 0), 'True',\
   np.where((dd2['Reasoning Code_max'] - dd2['Reasoning Code_min'] > 1), 'True', 'False'))

dd2['Opposition 3rd'] = np.where((dd2['Addressing the Opposition_max'] >= 1) & (dd2['Addressing the Opposition_min'] == 0), 'True',\
   np.where((dd2['Addressing the Opposition_max'] - dd2['Addressing the Opposition_min'] > 1), 'True', 'False'))

dd2['Organization 3rd'] = np.where((dd2['Organization_max'] >= 1) & (dd2['Organization_min'] == 0), 'True',\
   np.where((dd2['Organization_max'] - dd2['Organization_min'] > 1), 'True', 'False'))

dd2['Science 3rd'] = np.where((dd2['Science Content_max'] >= 1) & (dd2['Science Content_min'] == 0), 'True',\
   np.where((dd2['Science Content_max'] - dd2['Science Content_min'] > 1), 'True', 'False'))

dd2['Social Studies 3rd'] = np.where((dd2['Social Studies Content_max'] >= 1) & (dd2['Social Studies Content_min'] == 0), 'True',\
   np.where((dd2['Social Studies Content_max'] - dd2['Social Studies Content_min'] > 1), 'True', 'False'))

#Aggregating final codes
Final_Score = pd.DataFrame(index=dd2.index)
mean_2score = dd.groupby('Essay Number').mean()
mode_3score = data.groupby('Essay Number').apply(pd.DataFrame.mode)

#below code dealt with equal modes by droping second one
mode_3score = mode_3score.reset_index().drop_duplicates('Essay Number')


Final_Score['Position'] = np.where(dd2['Position 3rd'] == 'False', mean_2score['Position Code'], mode_3score['Position Code'])
Final_Score['Claim'] = np.where(dd2['Claim 3rd'] == 'False', mean_2score['Claim Code'], mode_3score['Claim Code'])
Final_Score['Evidence'] = np.where(dd2['Evidence 3rd'] == 'False', mean_2score['Evidence Code'], mode_3score['Evidence Code'])
Final_Score['Reasoning'] = np.where(dd2['Reasoning 3rd'] == 'False', mean_2score['Reasoning Code'], mode_3score['Reasoning Code'])
Final_Score['Opposition'] = np.where(dd2['Opposition 3rd'] == 'False', mean_2score['Addressing the Opposition'], mode_3score['Addressing the Opposition'])
Final_Score['Organization'] = np.where(dd2['Organization 3rd'] == 'False', mean_2score['Organization'], mode_3score['Organization'])
Final_Score['Science'] = np.where(dd2['Science 3rd'] == 'False', mean_2score['Science Content'], mode_3score['Science Content'])
Final_Score['Social Studies'] = np.where(dd2['Social Studies 3rd'] == 'False', mean_2score['Social Studies Content'], mode_3score['Social Studies Content'])

Final_Score.to_csv('Luz_Class_Essay_Final')

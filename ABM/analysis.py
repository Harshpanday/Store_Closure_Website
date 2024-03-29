import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import warnings
#from data import household
import os
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
os.chdir(str(BASE_DIR)+"/ABM/")
warnings.filterwarnings("ignore")

#a=[0,0,0,0]
df = pd.read_csv("data.csv")
df = df.drop(df.columns[[0]], axis=1) #DROPPING THE UNNAMED COLUMN
#df = df.drop(df.columns[[0]], 1)
#df.loc[0] = a
df_old = pd.read_csv("data_old.csv")
df_old = df_old.drop(df_old.columns[[0]], axis=1)
#df_old = df_old.drop(df_old.columns[[0]], 1)
#df_old.loc[0]=a

household_orignal = pd.read_csv("homedata.csv")
n_erhc_orignal=0
n_erlc_orignal=0
n_lrhc_orignal=0
n_lrlc_orignal=0
for i in range(len(household_orignal)):
    if household_orignal.loc[i,'category']=="ERHC":
        n_erhc_orignal+=1
    elif household_orignal.loc[i,'category']=="ERLC":
        n_erlc_orignal+=1
    elif household_orignal.loc[i,'category']=="LRHC":
        n_lrhc_orignal+=1
    elif household_orignal.loc[i,'category']=="LRLC":
        n_lrlc_orignal+=1



erhc_sum_new=[]
erhc_sum_count_new=0
for i in range(len(df)):
    erhc_sum_count_new+=df["ERHC_FA"][i]
    erhc_sum_new.append(erhc_sum_count_new)

erhc_sum_old=[]
erhc_sum_count_old=0
for i in range(len(df_old)):
    erhc_sum_count_old+=df_old["ERHC_FA"][i]
    erhc_sum_old.append(erhc_sum_count_old)


erlc_sum_new=[]
erlc_sum_count_new=0
for i in range(len(df)):
    erlc_sum_count_new+=df["ERLC_FA"][i]
    erlc_sum_new.append(erlc_sum_count_new)

erlc_sum_old=[]
erlc_sum_count_old=0
for i in range(len(df_old)):
    erlc_sum_count_old+=df_old["ERLC_FA"][i]
    erlc_sum_old.append(erlc_sum_count_old)


lrhc_sum_new=[]
lrhc_sum_count_new=0
for i in range(len(df)):
    lrhc_sum_count_new+=df["LRHC_FA"][i]
    lrhc_sum_new.append(lrhc_sum_count_new)

lrhc_sum_old=[]
lrhc_sum_count_old=0
for i in range(len(df_old)):
    lrhc_sum_count_old+=df_old["LRHC_FA"][i]
    lrhc_sum_old.append(lrhc_sum_count_old)


lrlc_sum_new=[]
lrlc_sum_count_new=0
for i in range(len(df)):
    lrlc_sum_count_new+=df["LRLC_FA"][i]
    lrlc_sum_new.append(lrlc_sum_count_new)

lrlc_sum_old=[]
lrlc_sum_count_old=0
for i in range(len(df_old)):
    lrlc_sum_count_old+=df_old["LRLC_FA"][i]
    lrlc_sum_old.append(lrlc_sum_count_old)

new=[round(erhc_sum_new[len(erhc_sum_new)-1],0),round(erlc_sum_new[len(erlc_sum_new)-1],0),round(lrhc_sum_new[len(lrhc_sum_new)-1],0),round(lrlc_sum_new[len(lrlc_sum_new)-1],0)]
old=[round(erhc_sum_old[len(erhc_sum_old)-1],0),round(erlc_sum_old[len(erlc_sum_old)-1],0),round(lrhc_sum_old[len(lrhc_sum_old)-1],0),round(lrlc_sum_old[len(lrlc_sum_old)-1],0)]

labels = ['ERHC',"ERLC","LRHC","LRLC"]


y1 = new
y2 = old
x = np.arange(len(labels))
width = 0.35

fig, ax = plt.subplots()

rects1 = ax.bar(x-width/2,y1 ,width,color="orange",label="new")
rects2 = ax.bar(x+width/2,y2, width,color="blue",label="orignal")

ax.set_title('Changes after modification')
ax.set_xticks(x, labels)
#ax.plot([], [], ' ', label="Extra label on the legend")
ax.legend()

ax.bar_label(rects1, padding=3)
ax.bar_label(rects2, padding=3)
fig.tight_layout()
plt.savefig("figures/overallcomparison.png")
plt.close()




df["steps"] = range(1,len(df)+1)
df_old["steps"] = range(1,len(df_old)+1)

plt.title("ERHC")
plt.xticks(df["steps"])
plt.plot(df["steps"],erhc_sum_new,label="ERHC After Modification")
plt.plot(df_old["steps"],erhc_sum_old,label="ERHC Before Modification")
plt.legend()
plt.savefig("figures/ERHC.png")
plt.close()

plt.title("ERLC")
plt.xticks(df["steps"])
plt.plot(df["steps"],erlc_sum_new,label="ERLC After Modification")
plt.plot(df_old["steps"],erlc_sum_old,label="ERLC Before Modification")
plt.legend()
plt.savefig("figures/ERLC.png")
plt.close()

plt.title("LRHC")
plt.xticks(df["steps"])
plt.plot(df["steps"],lrhc_sum_new,label="LRHC After Modification")
plt.plot(df_old["steps"],lrhc_sum_old,label="LRHC Before Modification")
plt.legend()
plt.savefig("figures/LRHC.png")
plt.close()

plt.title("LRLC")
plt.xticks(df["steps"])
plt.plot(df["steps"],lrlc_sum_new,label="LRLC After Modification")
plt.plot(df_old["steps"],lrlc_sum_old,label="LRLC Before Modification")
plt.legend()
plt.savefig("figures/LRLC.png")
plt.close()
#df.loc[len(df)-1].T.plot.bar()
from random import random #importing numbers from the random function
total=0 #setting in a variable to zero so that the total can start at zero
for i in range(10000): # for all the numbers in the range of 10,000
  wins=0 # keeps track of the winner in each election
  if random(1,100) <= 87: #87 is the chance of winning in that region 
    wins=wins+1
  if random(1,100) <= 65:
    wins=wins+1
  if random(1,100) <= 17: 
    wins=wins+1
  if wins>=2: #if wins is greater than or equal to 2 then it adds it to the total variable 
    total+=1
winning= (total/(float(10000)) # takes the total and rounds it
print "Your chance in winning is %" (chance)

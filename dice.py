from random import randint
rolls = {2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0}

for i in range(500):
    abc = randint(1,6)+randint(1,6)
    rolls[abc] +=1
for z in rolls:
   print float (rolls[z]/500)

from gopigo import *
import time
import math

set_speed(100)

def move_forward(feet):
  mm = 304.8 * feet
  steps = mm/11.344
  enc_tgt(1,1,steps)
  time.sleep(.1)
  fwd()
  time.sleep(4*feet)

def turn_right():
  enc_tgt(1,0,15)
  time.sleep(.1)
  right()
  time.sleep(2)

def turn_left():
  enc_tgt(0,1,15)
  time.sleep(.1)
  left()
  time.sleep(2)
servo(0)
if us_dis(15) < 30:
  servo(180)
  if us_dist(15) < 30:
  

servo(90)
while 1 == 1:
  while us_dist(15) > 15:
    fwd()
  stop()
  time.sleep(1)
  servo(0)
  time.sleep(2)
  if us_dist(15) > 10:
    turn_left()
  stop()
  time.sleep(1)
  servo(180)
  time.sleep(2)
  if us_dist(15) >10:
    turn_right()
  stop()
  time.sleep(1)
  servo (0)
  time.sleep(2)
  

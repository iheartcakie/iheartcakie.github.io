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
servo(0)= left
servo(180)= right
if us_dis(15) < 30:
  move_forward()

servo(90)
while 1 = 1:
  while us_dis(15) > 15:
  fwd()
  stop()
  servo(0)
else servo
  

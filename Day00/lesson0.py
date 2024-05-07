from turtle import *

#step 1: draw square
color("purple")

width(7)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(70)
left(90)
color("yellow")

forward(120)
right(90)
forward(70)
right(90)
forward(120)

penup()
goto(200, 200)
pendown()

color("red")

begin_fill()

right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(60, 140)
pendown()

color("blue")

begin_fill()

right(60)
forward(50)
right(90)
forward(50)

right(90)
forward(50)
right(90)
forward(50)

end_fill()

penup()
goto(140, 140)
pendown()

begin_fill()

left(90)
forward(50)
left(90)
forward(50)

left(90)
forward(50)
left(90)
forward(50)

end_fill()

exitonclick()
